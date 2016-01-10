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
What goes on behind the scenes? We use (0) a variety of tools to normalize data and then (1) cluster results depending on whether people are power or passive users. We then (2) build multiple statistical models concentrated on the area's most likely to drive growth or retention, which generally uncover our best user’s patterns and behaviors. When we (3) find attributes that pop (and sometimes its hard to say if certain sets of behaviors are causal or just correlated), we (4) run multiple tests with four or five permutations to determine the most effective program. By stacking a bunch of these programs on top of each other, we can propel growth for Kik.
</blockquote>


I liked a lot this quote, specially because seems to me is really almost a recipe on how to apply data science methods to a business in a very practical and useful way, breaking it down with my own view:


### 0. Normalizing 

Normalizing is often a needed step before applying a data method. Is important to be aware of it and know when and how to use it.


### 1. Create classifications 

Create classifications (a classification task) that augments the existing data with new dimensions, allowing to look at data in a new useful way and also, that are needed to build a statistical model. For example classify what users are the highly active ones vs low active ones, and then this can then be used as the outcome variable of a model, that models high active users.


### 2. Model

Given the business goal (growth, user activity, retention, revenue, etc...) create statistical models that reveal what features / behaviors strongly correlate to the business goals. This essentially answers the question: "What is driving the business goals right now?" -> Maybe we should do more of that.


### 3. Hypothesis

This step goes hand-in-hand with step 2): once we have a model showing what features / are driving the most the current business goal (strong correlations), then create an Hypothesis of a new activity that leverages that feature to drive further the business goals.

(By impacting a certain user behavior change)

### 4. Experiment

Because correlation does not (always) imply causation we then need to run Experiments (A/B tests) that measure the impact of the hypothesis created in 3). Accelerate the testing by using multivariate A/B tests, where in a single experiment multiple features get tested at the same time.


There are other ways to apply data science methods in a business, specially with creating a new product based on a data applications / method / finding. But process above is fairly solid and i it see became a standard.

 

 

## Data Science Techniques and Applications


###  Back-of-envelope calculations (an estimation technique)

The art of guess estimating can be very useful to quickly run numbers on what is going to happen, or impact, etc... 


## Simulations

Simulate what happens as time goes by, calculate what happens in the extremes, so we can then tell what happens in middle.
Put yourself in the shoes of other and simulate their experience at a fast pace.


### Classification

Create a classification, so that we enrich the data set with new useful features to analyze the rest of the data with.
Also to use as modeling parameters.

This could include classifying for example: user behaviors, user value, etc...



### Regression


#### Regression as an estimation / prediction technique

What results are we getting in 3 months if this trend continues? When are we getting to result XYZ?


#### Regression as a causal modeling technique (aka correlation finder)

Regression can be used in explaining how one or many (using multivariate regression) factors affect an outcome of interest.

For example, what contributes more to a movie final revenue is it the movie budget size or the viewers rating? Likely both things influence it... For example a movie with a very low budget can't compete with a huge budget movie in general, but a big budget movie can also end up not being liked by viewers. So which of those 2 variables contribute the most to the final movie revenue ?

Here we can build a regression model that exactly quantifies how much these contribute to the revenue, given a set of historical data.







### Clustering and Similarity matching

Find what characteristics users that churned have (a churn model), then look for similar users cohorts from your user base that have similar characteristics and thus potentially at the risk of churning, create hypotheses on activities to help reduce churning.







### Experiments aka Cause-and-Effect testing aka A/B testing

This is the industry standard approach on how to test whether an hypothesis that we believe is really true.

Because correlation does not (always) imply causation, this is the way to test an hypothesis created from an observed data correlation. (output from a previous data science method).

This also, for example, the approach that the medical community uses to tests whether a new medication is effective or not. And is a fairly common solid scientific method.

The setup of an experiment is to compare 2 groups where the variable we want to test is different for each group, while keeping all the other variables (possible confounding factors) the exact same. (see also https://en.wikipedia.org/wiki/Ceteris_paribus)

We essentially need 4 data points, these 2 metrics for each group:
 - Test group size (at the start of experiment)
 - Success group size (at the end of experiment)

We need to assure the experiment runs for enough amount of time so that we can be sure of the results (statistical significance). Apply a proportion test for example (https://www.khanacademy.org/math/probability/statistics-inferential/hypothesis-testing/v/large-sample-proportion-hypothesis-testing).

