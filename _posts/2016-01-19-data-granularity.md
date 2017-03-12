---
layout: post
title: Data Granularity
category: data
tags:
  - data
  - idea
intro: "Data Granularity"
---
## Weekly vs Daily Aggregations

Consider the problem of having data at the user level (but also applies to sessions) and having to choose between doing an aggregation at weekly or daily.

Which one to pick, should they be the same ?

Lets consider 2 cases:   

**Case 1**

Data

*   day 1: user A (converted), user B ( not convert)  

*   day 2: user A (converted), user C (not converted)   

Calculating Aggregations_:_

**_Weekly:_ **A user  (converted) / A,B,C users ( visited) = 33%

**_Daily:_** lets not do the average of average, so we sum up individual days, like so:

*   day 1: 1 (converted), 2 (visited)  

*   day 2: 1 (converted), 2 (visited)

Thus we get total: 2 (converted) / 4 (visited) = 50%

**Case 2**

Data

*   day 1: user A (converted), user B (not convert)  

*   day 2: user A (not converted), user C (converted)  

Calculating Aggregations:

**_Weekly:_ **A,C users  (converted) / A,B,C users ( visited) = 66%

**_Daily:_** lets not do the average of average, so we sum up individual days:

*   day 1: 1 (converted), 2 (visited)  

*   day 2: 1 (converted), 2 (visited)

Thus we get total: 2 (converted) / 4 (visited) = 50%

See that in both cases the Daily aggregation is different from the Weekly aggregation. 

**Which one to use ?**

It depends on what the conversion rate is about. 

_<u>Weekly</u> _(or in general a longer time frame) is for applications where we expect the user to visit many times but only convert after a few visits. Like visiting a store many times inquiring about a product, or being exposed to a marketing campaign through different channels until finally being convinced into doing a buy.

An important property of weekly view is that it forgets several successes from same user, it counts only as 1\. Can happen that user fails several times, succeeds once and counts as success.

_<u>Daily</u> _( or shorter time periods ) is for applications where we evaluate starting a process and successfully finishing it in one go, that is, evaluating the success or fail of an attempt, for example doing an application login attempt, or filling in a form.