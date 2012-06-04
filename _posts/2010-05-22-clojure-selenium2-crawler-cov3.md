--- 
layout: post
title: Clojure and Selenium part ii - cov3
categories: 
  - automation
  - clojure
  - webcrawler
intro: "Have been playing around with selenium and clojure for a while, and now that selenium 2 is in beta ended up making a little web crawler library called cov3."
---


Have been playing around with selenium and clojure for a while, and now that
selenium 2 is in beta ended up making a little web crawler library called
cov3.

![http://al3xandr3.github.com/img/crawler.png][1]

It has 3 flavors of crawling:

  * the usual crawler, give him a url, and keeps on going until he visits all of the linked pages (that point to same domain). 
  * a sitemap crawler, give him a sitemap.xml and visits the urls he finds in the sitemap. 
  * a step crawler, give him a csv file with the list of urls(steps) to visit. 

On each page the crawler visits it executes a bit of javascript code that we
can define as a validation. These validations are usefull to test your site in
an automated way, say for example, you want to check:

 * if all pages contain meta tags 
 * if all pages contain a title 
 * if you have web analytics tracking in all pages 
 * find out what links are broken 
 * test your own javascript in an automated way in all pages. 
 * etc.. 

Also allows to use, for the crawling, either Firefox, Internet Explorer(when
on windows), Chrome or HtmlUnit(a GUI-Less browser).

## Usage

    
    (require '[cov3 :as cov3])
    
    ;; then (:ff is short for firefox, use :hu for HtmlUnit, 
    ;; :ch for Chrome, and :ie for Internet Explorer)
    (cov3/crawl :ff "http://al3xandr3.github.com/" '("document.title"))
    
    ;; or (10 is the sample size to pick from sitemap.xml)
    (cov3/sitemap-crawl :ff "http://al3xandr3.github.com/sitemap.xml" "" "" 10 '("document.title"))
    
    ;; or (assuming you have a csv file with the steps to take, see more on documentation)
    ;; for example the line: http://al3xandr3.github.com/,"document.title",,
    (cov3/step-crawl :ff "data/steps.csv")
    

Is available from github: [http://github.com/al3xandr3/cov3][2]

   [1]: http://al3xandr3.github.com/img/crawler.png
   [2]: http://github.com/al3xandr3/cov3

