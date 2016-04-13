---
layout: post
title: Testing an Hypothesis
category: data
tags:
  - data
intro: "Testing an Hypothesis"
---

A collection of notes on running AB tests in practice.


## A/B testing and data quality mechanisms

A big part of that is a test of statistical significance.
But there are a few other useful mechanisms that also can be used.
For example the A/A tests.


### When should an A/A test be used?

- Do an A/A test first in order to test your split testing framework. If the difference between the two is statistically significant at the decided level, then your framework is broken.
- Do an A/A/B or A/A/B/B test and throw out the result if the two A treatments or the two B treatments show different results that are statistically significant at the decided level.
- Do many A/A tests (say 100) and if more tests than expected show statistically significant differences, then your framework is broken/statistical significance is useless.

Reference: http://blog.analytics-toolkit.com/2014/aa-aab-aabb-tests-cro



### Example: A/A/B Traffic split

Imagine you are planing a test where there is a new version to try out, by far the most common test, and you decide that is a safe bet to use 1% to the new experience and later on increase its volume as we are more confident.

When we intent to increase the 1% to 5%, and we have started with a setup at 1% vs 99%, increasing (1% to 5%) will force change the overall mix to 5% and 95%. This is changing volume of 2 groups at the same time…
Ideally we want to change less variables as possible in the testing to be sure results are influenced only by the variable we in fact intended to test.
Thus a better strategy is to start with 1% / 10% / 89%, because then we have room to grow from the 1% to 5% without eating away from control group (the 10%), we can use volume from 89% that is not being tested.
Going to something like 5/10/85, see the control group (10) stays unchanged guaranteeing volume hasn't changed.



### Evaluate if the sample is a good representation of the population

Make sure the sampled cohort is a good representation of the whole population and not a biased one.

This is sometimes a subtle fault in tests, (often) hard to tell because there is no comparison to validate it against.
If possible a way to validate the sampling mechanism is to run it first against a known population, check if sample mechanism is indeed working as expected and then run it against an unknown population. (a simulation of sorts, but sometimes not possible).

For example: Lets say we can only run the test on a particular country, so first evaluate whether, that country is a fair representative of the rest of the world:
1. Look up the numbers for all the world.
2. Run an experiment, where you validate whether the country you are targeting has the same results as all the world.

If  we get same results we know we can run a fair experiment on that country, that we can then use to extrapolate results for all the world.

### How long to run a test for ?

Power is a measure of how well you can distinguish the difference you are detecting from no difference at all. So running an underpowered test is the equivalent of not being able to make strong declarations of whether your variations are actually winning or losing.

 When your test has a low conversion rate for a given sample size, it means that there is not yet enough evidence to conclude that the effect you're seeing is due to a real difference between the baseline and variation instead of due to chance: in statistical terms, your test is underpowered.

References:

- <https://help.optimizely.com/hc/en-us/articles/200133789> 
- <https://help.optimizely.com/hc/en-us/articles/200133789-How-long-to-run-a-test> 



## How to check results are trustworthy ?

Statistical significance answers the question, “How likely is it that my test results will say I have a winner when I actually don’t?” Generally we talk about this as 95% statistical significance. A different way to say the same thing is that we will accept a 5% false positive rate, where the result is not real (100% - 5% = 95%).


Reference: <https://help.optimizely.com/hc/en-us/articles/200133789>













## On Experiment Data Granularity

On an ab test, essential required data points are:
- startA
- successA 
- startB
- successB
- Granularity

But then we have the option to look at data by different granularity:

1. Event level
2. Session (or visit) level
3. Users (or visitor) level

User can go to start many times (like in web pages), and every time an event is recorded.
From those we will calculate test success like: successA / startA 


### Which Granularity is best ?

Events:
The sum of events alone will be biased because user can go to start many times, and every time we count successA + 1, thus lowers the attempt success rate, but in reality is the same attempt still.
So, no good...

But between session vs user level ?

Depends on the test:
User: when we are ok to allow user longer period to complete the flow ? like a week of being exposed to it that eventually succeeds.
- ex: marketing promotion that reaches user from different channels, continuously for a week, maybe all contribute a little in nudging the user towards a sale.

Session: When we want measure a success or fail for only an attempt, then best use session. Like each time you try we measure succeed or fail. 
- ex: Attempting to do a login

In Practice:
I've been finding that most often session level is needed.
When only user available for an experiment where session is desirable, then group data by a small time granularity, saying for example users had 1 day to attempt it.






## Experimentation Caveats

Experimentation wont do magic, it helps improving in the direction you set it to. But it won’t reveal itself new directions. Plan up front what will be the learning if the test is successful.

Not all experiments will result in a success. And it can happen that the business KPIs improvements are not very big. But not all is lost:
- On the unsuccessful experiments try understand why, and keep it as a learning for the future tests.
- For example, a 3% increase in a business KPI ends up translating into several Million users, so is not necessarily small win.
- The bigger the business, maybe the less the opportunity for improvement, and thus the smaller the potential returns of the experiments.
- Bigger returns likely only to happen in more radical tests. Ex: changing color of button has less potential return, than changing the whole user flow.

Some experiments might have as hypothesis that impact is only visible in long term. So run the experiment, turn it off, look at the affected cohort users after 3/6 months.


References:

- <http://www.unofficialgoogledatascience.com/2016/01/variance-and-significance-in-large.html> 
- <https://www.optimizely.com/statistics/>
- <http://blog.sumall.com/journal/optimizely-got-me-fired.html>
- <https://medium.com/managing-digital-products/start-here-statistics-for-a-b-testing-5f5c7e02ce1e#.wwa0kkc1s>