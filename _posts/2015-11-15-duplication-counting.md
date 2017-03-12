--- 
layout: post
title: Duplication (a.k.a. overcounting) in Segmented data
category: data
tags:
  - data
intro: "Duplication (a.k.a. overcounting) in Segmented data"
---

##  Duplication (a.k.a. overcounting) in Segmented data

Typical request analysis: we want to see the data of users, using unique users to avoid duplication by version, country, OS, browser version, day of the week, etc… etc…

Ok, now that we have all that data and we can see all the breakdowns, lets also add a summary, so just sum up all that segmented data into totals…

> No! Stop right there !  
> What’s the problem ?

Well, a “group by” by browser for example will count unique users on each version of the browser, let’s say that the browser got updated last week to a newer version. This means we end up counting the same user 2 times, once for each browser version. And the same can happens for all the other group by segmentation, if a user moves country, if OS is updated, etc…  

**Example with time periods**

A very common example of this happens with time periods:  
a. Get unique users for 7 days and sum them up  
Is not the same as:  
b. the weekly unique users

Because if the same user logins every day in a. we count him 7 times, while in b. we count him 1 time.

**Strategy to avoid duplication**

If you need to have both views, segmented and de-duplicated views, then:

*   Do a specific query that extracts de-duplicated data from each of the requested points. Essentially removing all “group-by” (Group by are the main culprits that lead to this error). Common examples: unique users totals, or start of conversion flow or end of conversion flow, etc…  

*   Do a separate query that gets the segmented view, but use this only for segmented view and don’t sum this data up.  
