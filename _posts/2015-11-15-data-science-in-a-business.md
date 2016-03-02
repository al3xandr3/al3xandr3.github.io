---
layout: post
title: Data Science in a Business
category: data
tags:
  - data
intro: "Data Science in a Business"
---

## Data Science Recipe

A quote from http://blog.kik.com/insights-from-kik-team-bot-at-app-annies-decode-2015

<blockquote>
What goes on behind the scenes? We use (1) a variety of tools to normalize data and then (2) cluster results depending on whether people are power or passive users. We then (3) build multiple statistical models concentrated on the area's most likely to drive growth or retention, which generally uncover our best user's patterns and behaviors. When we (4) find attributes that pop (and sometimes its hard to say if certain sets of behaviors are causal or just correlated), we (5) run multiple tests with four or five permutations to determine the most effective program. By stacking a bunch of these programs on top of each other, we can propel growth for Kik.
</blockquote>

I like this quote, because this in essence a recipe on how to apply data science methods to a business in a very practical way.



### 1. Normalizing 

(Statistical) Normalizing is about adjusting different measures, or even different data sources into a common alignment that is then fair to compare and join together.

For example: Normalization of ratings means adjusting values measured on different scales to a notionally common scale, often prior to averaging.



### 2. Create classifications 

Given the business goals, identify the users that are already ideal cases versus the ones who are not, for example if the company goal is to have highly engaged active users, identify the power users versus the rest.

Augment the existing user data with that "classification" information, this will create the goals to create statistical models on.

As time goes by and as the first classifications and learnings are collected, that then feeds back into the next set of classifications to create. So over time, the classifications will tend to be more sophisticated and closer to real user behaviors.



### 3. Model

Modeling is about finding a formula that given a set of input variables it will then output a classification.

An example, power users (classification) are the users who clicks a particular button > 25 times (input variable) on workdays (input variable).

So modeling essentially scans all data* and finds that ideal users are the ones who often do XYZ (indicating a strong correlation). This modeling process is applied to the classifications created before.

*Sometimes the data that best correlates to the classifications might not be available, this requires either new telemetry, or joining in new data sets.

The purpose of creating a model is to reveal what behaviors are associated to the ideal users and that essentially tackles the question: "What is driving the business goals right now?" 




### 4. Hypothesis

Once we know what is driving the Biz goals, we then tackle "Where are the opportunities for growth?":

- What can we change/introduce in product that will drive that further?
- How can we get the non-power users, to became power users?
- or Turns out the users are actually using us in a different way we were imagining. Maybe we need change product strategy (pivot the biz).

This step looks into the learnings and outputs a collection of "what if we do *this* next?"




### 5. Experiment

Because correlation does not (always) imply causation we then need to run Experiments (A/B tests) that measure the impact of the hypothesis created before. Accelerate the testing by using multivariate A/B tests, where in a single experiment multiple features get tested at the same time.

