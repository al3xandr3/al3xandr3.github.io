---
layout: page
title: Code
intro: "al3xandr3's Code"
---

### R Utils

collection of my R util scripts.

[code](https://github.com/al3xandr3/r) - _January 2012_ - Tools: R

* * *

### Ruby Utils

collection of my ruby util scripts.

[code](https://github.com/al3xandr3/ruby) - _January 2012_ - Tools: ruby

* * *

### Dashboard Builder

A framework for building up interactive html dashboards in ruby. Contains
implementation of both simple & multivariate regression for visualizing
trends, supports fetching email attachments/content as data sources, allows
for posting the end result onto a confluence wiki page.

[code][1] - [web][2] - _June 2011_ - Tools: ruby, javascript, html

* * *

### Linear & Logistic Regression

A collection of exercises from the OpenClassRoom machine learning classes.
Serve as a reference in implementing linear and logistic regression with some
added debugging features in R.

 * linear regression: [web][3]
 * multivariate linear regression: [web][5]
 * logistic regression and Newton's method: [web][7]
 * regularized linear regression: [web][9]
 * regularized logistic regression: [web][11]

_March 2011_ - Tools: R

* * *

### cov3 - Custom Web Crawler

A clojure, selenium based web crawler with a couple of variations that i found
useful. Cov3 crawls pages with the intention of executing
(javascript)tests/validations on each of the pages it opens. The original idea
of a web crawler is that given an initial page it keeps on following all links
it finds in the same domain until all pages are visited. I added a couple of
variations: Given a sitemap.xml it randomly samples part of it(useful for big
sitemaps) and follows those urls executing some test. And another option is a
csv file, with the urls and tests to execute on each.

[code][13] - [web][14] - _May 2010_ - Tools: clojure, selenium

* * *

### jQuery Twitter 'mini' plugin

A jQuery plugin to display a twitter feed on a web page(blog for example). The
twitter api feed, i found, has an annoying particularity of not always
returning the requested number of tweets, so i added a feature that until it
gets the right amount of messages it keeps on fetching. Thats useful when you
want to fill a web page space with exactly 3 messages. Also included a "time
ago" date calculations based of john resig [code][15], with an added local
timezone shift.

[code][16] - [web][17] - _April 2010_ - Tools: javascript, jquery

* * *

### The Daily Extract

Scripts that automate the process of aggregating data in a database,
extracting it, outputting results into csv files and sending them over by
sftp. Very feature rich: task list queue, full logging, email reports, sql
templating, sftp support, extract volume validation, unit testing. And with a
strong convention over configuration theme.

In Aug 2009 i did a somewhat similar 2nd version of the daily extract, but
this time using clojure, with added features: web front end for task queue
manipulation, statistics on extracted volumes and sqlite for storing the task
list queue and statistics over time.

[code][18] - _2007&2009_ - Tools: ruby, jruby, clojure

   [1]: https://github.com/al3xandr3/Dashboard
   [2]: http://al3xandr3.github.com/2011/05/24/dashboards.html
   [3]: http://al3xandr3.github.com/2011/02/24/ml-ex2-linear-regression.html
   [4]: https://github.com/al3xandr3/al3xandr3.github.com/blob/master/_org/posts/ml2.r
   [5]: http://al3xandr3.github.com/2011/03/08/ml-ex3.html
   [6]: https://github.com/al3xandr3/al3xandr3.github.com/blob/master/_org/posts/ml3.r
   [7]: http://al3xandr3.github.com/2011/03/16/ml-ex4.html
   [8]: https://github.com/al3xandr3/al3xandr3.github.com/blob/master/_org/posts/ml4.r
   [9]: http://al3xandr3.github.com/2011/03/18/ml-ex51.html
   [10]: https://github.com/al3xandr3/al3xandr3.github.com/blob/master/_org/posts/ml5lin.r
   [11]: http://al3xandr3.github.com/2011/03/20/ml-ex52.html
   [12]: https://github.com/al3xandr3/al3xandr3.github.com/blob/master/_org/posts/ml5log.r
   [13]: https://github.com/al3xandr3/cov3
   [14]: http://al3xandr3.github.com/2010/05/22/clojure-selenium2-crawler-cov3.html
   [15]: http://ejohn.org/blog/javascript-pretty-date/
   [16]: https://github.com/al3xandr3/jquery-twitter-plugin
   [17]: http://al3xandr3.github.com/2010/04/10/jquery-twitter-plugin.html
   [18]: https://github.com/al3xandr3/daily-extract

