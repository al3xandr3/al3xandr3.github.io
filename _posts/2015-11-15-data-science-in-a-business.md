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
What goes on behind the scenes? We use (1) a variety of tools to normalize data and then (2) cluster results depending on whether people are power or passive users. We then (3) build multiple statistical models concentrated on the area's most likely to drive growth or retention, which generally uncover our best user’s patterns and behaviors. When we (4) find attributes that pop (and sometimes its hard to say if certain sets of behaviors are causal or just correlated), we (5) run multiple tests with four or five permutations to determine the most effective program. By stacking a bunch of these programs on top of each other, we can propel growth for Kik.
</blockquote>


I liked a lot this quote, specially because seems to me is really almost a recipe on how to apply data science methods to a business in a very practical and useful way, breaking it down with my own view:



### 1. Normalizing 

Normalizing is often a needed step before applying a data method. Is important to be aware of it and know when and how to use it.




### 2. Create classifications 

Create classifications (a classification task) that augments the existing data with new dimensions, allowing to look at data in a new useful way and also, that are needed to build a statistical model. For example classify what users are the highly active ones vs low active ones, and then this can then be used as the outcome variable of a model, that models high active users.



### 3. Model

Given the business goal (growth, user activity, retention, revenue, etc...) create statistical models that reveal what features / behaviors strongly correlate to the business goals. This essentially answers the question: "What is driving the business goals right now?" -> Maybe we should do more of that.



### 4. Hypothesis

This step goes hand-in-hand with step 2): once we have a model showing what features / are driving the most the current business goal (strong correlations), then create an Hypothesis of a new activity that leverages that feature to drive further the business goals.

(By impacting a certain user behavior change)



### 5. Experiment

Because correlation does not (always) imply causation we then need to run Experiments (A/B tests) that measure the impact of the hypothesis created in 3). Accelerate the testing by using multivariate A/B tests, where in a single experiment multiple features get tested at the same time.


There are other ways to apply data science methods in a business, specially with creating a new product based on a data applications / method / finding. But process above is fairly solid and i it see became a standard.

