--- 
layout: post
title: A/B test with Clickstream data
category: data
tags:
  - data
  - ab-testing
intro: "A/B test with Clickstream data"
---


## [A/B test with Clickstream data](http://journeyman-data-analyst.tumblr.com/post/121919955346/ab-test-with-clickstream-data)

<div class="body-text">

On an ab test, essential required data points are:

*   startA  

*   successA   

*   startB  

*   successB  

## Granularity

But then we have the option to look at data by different granularity:

1.  Event level  

2.  Session (or visit) level  

3.  Users (or visitor) level  

User can go to start many times (like in web pages), and every time an event is recorded.

From those we will calculate test success like: successA / startA  

## Which Granularity is best ?

**Events:**

The sum of events alone will be biased because user can go to start many times, and every time we count successA + 1, thus lowers the attempt success rate, but in reality is the same attempt still.

So, no good…

## But between session vs user level ?

Depends on the test:

**User:** when we are ok to allow user longer period to complete the flow ? like a week of being exposed to it that eventually succeeds.

- ex: marketing promotion that reaches user from different channels, continuously for a week, maybe all contribute a little in nudging the user towards a sale.  

**Session:** When we want measure a success or fail for only an attempt, then best use session. Like each time you try we measure succeed or fail. 

- ex: Attempting to do a login

Practicalities:

*   I’ve been finding that most often session level is needed.  

*   When only **user** available for an experiment where **session** is desirable, then group data by a small time granularity, saying for example users had 1 day to attempt it.

