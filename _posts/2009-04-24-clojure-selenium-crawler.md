--- 
layout: post
title: Clojure and Selenium
categories: 
  - automation
  - clojure
  - webcrawler
intro: "I needed a kind of crawler to go around a list of pages, invoke some javascript(tests) and collect the output."
---

I needed a kind of crawler to go around a list of pages, invoke some javascript(tests) and collect the output.

Curl or a regular http lib’s don’t do the trick because i need to run javascript on each requested page. For that i can use Selenium, Selenium is a great framework to perform web testing, that uses directly a browser and thus we can run Javascript.

Selenium can be scripted from Java which matches very well with my wish to learn Clojure :)

## Solution

What i implemented is not really a crawler in the sense that it does not go around automatically following all the links it finds, it actually gets the list of links to check from the site sitemap.xml. But is not that hard to use this as a base for a crawler.

As some sitemaps.xml are huge, i added also a little pick-a-sample function that randomly selects only a subset from all the sitemap.

## Code

Im on the process of learning Clojure, so probably a lot of things could be improved.

For Selenium, we need first to start the server, then the client, and then use the client to browse the pages. As is not very elegant to have a start server and“start client on the top of the script and a“stop client and stop server call at the end of the script, i've wrapped those around a macro (one of the major strengths of Lisp like languages).

The whole thing goes like this:

process-sitemap receives a sitemap, transforms it into a map(with xml-to-zip), collects the url links in it, then picks a sample from them(with pick-a-sample) and calls check-pages with them.

check-pages gets a list of urls. It starts by using the macro, obtains a-browser from it, then iterates over the list of urls, calling check-a-page on each url(a-url). Note that at this point the standard output is redirected to a file, so i can log the results from check-a-page.

check-a-page gets a-browser and a-url, so you can guess what it will do :)It opens that url in the browser, calls the javascript, and prints to standard output the return of the js call.

Hope google does not mind to use their site as an example. But do not run this on Google site, its just an example, use it on your own site!

For this to run you will need to have in your classpath a bunch of jar libs, this is how my lib folder looks like:


    lib/
      clojure-contrib.jar
      clojure.jar
      jline-0.9.94.jar
      selenium-java-client-driver.jar
      selenium-server.jar


I called this app“/coverager/

Code: 

    ;;file: coverager.clj
    (ns coverager
      (:import (com.thoughtworks.selenium DefaultSelenium)
        (org.openqa.selenium.server SeleniumServer)
          java.util.Date
          (java.io FileWriter)
          (java.text SimpleDateFormat))
      (:use clojure.contrib.zip-filter.xml)
      (:require [clojure.zip :as zip]
                [clojure.xml :as xml]))
    
    (defmacro with-selenium
      [browser & body]
      `(let [server# (new SeleniumServer)]
        (.start server#)
        (let [~browser 
             (new DefaultSelenium "localhost", 4444, "*firefox", "http://www.google.com/")]
          (.start ~browser)
          (.setTimeout ~browser "100000")
          ~@body
          (.stop ~browser))
          (.stop server#)))
    
    (def *js-eval* "this.browserbot.getCurrentWindow().document.title;")											
    (defn check-a-page [a-browser a-url] 
      (try 
      (.open a-browser a-url)
        (Thread/sleep 3000) ; make a little timeout, to avoid overloading server
        (println (str a-url "," (.getEval a-browser *js-eval*)))
        (catch Exception e 
        (println (str a-url "," e)))))
    
    (defn check-pages [url-list]
      (with-selenium browser
        (binding [*out* (FileWriter. 
             (str "output/log_" (.format (SimpleDateFormat. "yyyy-MM-dd") (Date.)) ".csv"))]
          (doseq [a-url url-list]
            (check-a-page browser a-url)))))
    
    (defn xml-to-zip [url]
      "read xml url into a tree"
      (zip/xml-zip (xml/parse url)))
    
    (defn pick-a-sample [a-percentage a-list]
      "picks a subset (a-)percentage of the total"
        (filter #(if (> (rand) (- 1 (/ a-percentage 100))) %) a-list))
    
    (defn process-sitemap [sitemap-url]
      (let [u-list (xml-> (xml-to-zip sitemap-url) :url :loc text)]
        (check-pages (pick-a-sample 1 u-list))))
    
    (def *sitemap* "http://www.google.com/sitemap.xml")
    
    ;use: (process-sitemap *sitemap*)


And of course tests for it:


    ;;file: coverager_test.clj
    (ns coverager_test
      (:use clojure.contrib.test-is)
      (:use coverager)
      (:use clojure.contrib.zip-filter.xml)
      (:require [clojure.zip :as zip]
                [clojure.xml :as xml]))
    
    (deftest browse-page
      (with-selenium abrowser  
        (.open abrowser "http://www.google.com/a/")
        (is (.startsWith (.getTitle abrowser) "Google Apps"))))
    
    (def abit "<?xml version='1.0' encoding='UTF-8'?>
    <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
     <url>
      <loc>http://www.google.com/</loc>
      <lastmod>2009-04-03</lastmod>
      <priority>0.5000</priority>
     </url>
     <url>
      <loc>http://www.google.com/a</loc>
      <lastmod>2009-04-03</lastmod>
      <priority>0.5000</priority>
     </url>
    </urlset>
    ")
    
    (deftest xml-process
      (let [res (xml-to-zip (org.xml.sax.InputSource. (java.io.StringReader. abit)))]
        (let [lis (xml-> res :url :loc text)]
          (is (= (first lis) "http://www.google.com/"))
          (is (= (last lis) "http://www.google.com/a")))))
    
    (deftest on-picking-sample
      (let [the-sample (pick-a-sample 10 '(0 1 2 3 4 5 6 7 8 9))]
        ;not completely garanteed will take only 1, 
        ;it should, on most cases but more important is
        ;to picking up randomly a small subset from list
        ;so less than 3 items is reasonable test
    	(is (< (count the-sample) 3))))
    
    (defn run-them []
      (run-tests 'coverager_test))

## Take away

Clojure is great! Its my opinion that on the Lisp family of languages the code is more elegant and visually cleaner than the C family.

I don't care much for working directly with the Java language, but working on the JVM with other languages like JRuby, Clojure, and harnessing all the vast amount of Java libs and infrastructure out there is a MAJOR advantage.

I suspect i will be spending more time with Clojure in future :)
