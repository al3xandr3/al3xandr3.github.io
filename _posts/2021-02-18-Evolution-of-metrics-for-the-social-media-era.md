---
layout: post
title: Evolution of metrics for the social media era
category: data
tags:
  - data
intro: "Evolution of metrics for the social media era"
---

<br>

Money returns is ultimately the equalizing metric but in the era of social media products the social capital i.e. the number of users has become a central metric.


### MAU

Introducing monthly active users, MAU has its origins on web page visits/impressions and makes sense in a world where money is about showing an advertisement, the more page views you have the more advertisements you show. MAU is a reflection of the health of the product, but is not an indicator of the future, MAU is a lagging not a leading metric. A user is counter as MAU if he opens the product a few seconds a month. This is not a strong way to measure the usage of a product.


### Engagement

This is where Engagement metrics comes in, engagement shows how deep and habitual is the usage of a product. An engagement metric can be defined in many ways, for e.g:

- How many days a week the user is active on the product
- How many actions done per user in the product. Or doing a minimum of x amount of actions per day/week.
- It can count/measure for example the usage of the product's value proposition. But beware of this one, as sometimes users find new ways of using the product that still provide value to them and they keep coming back, i.e. Indicating a product pivot.

For defining an engagement metric that is in fact a leading (instead of lagging indicator) there is a good solution, a data science exercise that finds what (engaging)actions in the past most correlate to long term retention. Altho beware that it should not be a purely a data science exercise because what happens next is that everyone in the organization will focus on moving this metric and so take into account: 
- How easy is to calculate on a daily basis with existing tools
- How easy is to understand by everybody in the organization (tipically a model outputs a collection of factors that best predicts retention: 3 actions of X, 2 actions of Y and 7 actions of Z, this makes it a complicated metric outside of an automated environment)
- How easy is to influence with product changes (sensitivity)

 A better way would be just 1 direction, like 5 clicks over a week. These are limitations on acting on it and making it work for an organization.


### Fully automated metrics, a thought experiment

Eventually competition will make sure that we find the most efficient way for everything, including measuring organizations and its metrics.
And i believe some of the limitations imposed on defining a north star metric are because of its requirements of human interpretation and actionability (as pointed out above).

Imagine there was not the human limitation on it and we could create a formula based purely on a data science exercise that would optimize for the goal of maximizing a company goal, e.g. = 0.3*New Users + 0.3*Engagement + 0.1*Profit + etc..
Engagement section of the formula would be defined as a collections of actions to best explain Retention in the long term. i.e. This formula could be as complicated as required for squeezing out the max returns.

This metric would be automatically re-calculated / re-adjusted over time depending on the needs of the company. A company with a low number of users needs to focus more on New users. A company that just had a huge influx of users, will have then to focus on retention to keep them, etc... And this might be the same company over the years.

Potentially the exact formula that defines the goal, could even be hidden, this would effectively serve as guardrails against being gamed, somewhat like the google searches algol.

As i mention in: https://al3xandr3.github.io/ab-testing-future.html, many of the product optimizations could then be done in an automated way, so imagine:

1. An algorithm automatically changes the product 
2. Runs AB tests / experimentation on it. 
3. Chooses the best product changes against the automated company metric (as defined above). 
4. Of the best product changes, look into improving them further, by going back back to step 1. (the cycle repeats)

This could be a system that evolves and matures a product at a speed that we haven't experienced yet. a.k.a natural evolution in high speed for the digital world.

<br>
<br>
