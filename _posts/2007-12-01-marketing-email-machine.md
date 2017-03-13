---
layout: post
title: Marketing Email machine
category: project
tags:
  - project
  - ruby
  - jruby
  - clojure
intro: "Marketing Email machine"
---

## Marketing Email machine

A framework that automates the process of aggregating data from a database, extracting it, outputting results into csv files and sending them over by sftp. 

Very feature rich:
- Task list queue
- Full logging
- Email reports
- Sql templating
- Sftp support
- Extract volume validation
- Unit testing
- And with a strong convention over configuration theme (ruby like)

In Aug 2009 i did a somewhat similar 2nd version of the daily extract, but this time using clojure, with added features: web front end for task queue manipulation, statistics on extracted volumes and sqlite for storing the task list queue and statistics over time.

https://github.com/al3xandr3/daily-extract
