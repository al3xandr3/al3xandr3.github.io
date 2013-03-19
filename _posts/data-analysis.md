---
layout: post
title: Analysis
category: cheatsheet
tags:
  - statistics
  - data
intro: "analysis"
---

### Types Data Analysis Questions (Breakdown)

- Descriptive: Describe a set of data ex: census

- Exploratory: Find relationships you didn't know about. Find relationships in variables(covariation) ex: see what areas of brain lights for given a certain activity.
 
- Inferential: Use a small sample of data to say something about a bigger population. ex: air polution vs life expectancy

- Predictive: To use the data on some objects to predict values for another object. ex: outcame of the elections, figure out who is patterns given on purchase patterns

- Causal: To find out what happens to one variable when you make another variable change. ex: medical drug testing

- Mechanistic: understand the exact changes in variables that lead to changes in other variables for individual objects. ex: how pavement tiles interact.

### An Analysis Task

- *Before*
  - What is the Macro of the activity? ex: a payment flow
    - What is the goal of this analysis how it relates to the Macro?
    ex: how users pay
  - Understand how the tracking and data is collected: beware of data bias, data collected in duplicated, sessions, unique visits, etc...
    - if is page flow, sometimed usefull to visually layout the screenshots and how tracking and page sequence happens.
  - Define and agree with stakeholders what is the output & shoutout the constrains/limitation/impediments.

Macro - Indentifying the Macro purpose of the data collected is key. What environment where data is from, how it was collected, if its from a web page, what does the page does, whats it purpose? etc...

- *During*
  - Final output short and simple as possible, 
  - clear clear clear(include screenshots if needed), 
  - target an audience without any knowledge of the matter
  - report not everyting, just the conclusion. optimal, just 1 chart/diagram or 1 table. Can have different levels of drilldown
  - hide the unhelpfull data, think from final viewer pov. Remove the None's, etc...
  - the end audience don't care the amount of work, only if it addresses well or not their questions - no point of putting everything you found on the output.
  - simple correct english
  - simple gaphs
  - put it into perspective/compare with similar/total
  - callout: trends, outliers, counter-intuitive facts

- *After*
  - Is the output answering the original question properly? Is it really contributing to something ?
  - What have we learned?
  - Have an opinion / recomendation - having an opinion means the numbers are understood well enought, and you can see what should be next steps.
  - Beware of short term data view, zoom out to get whole picture, example: a week worth of data might not be telling the whole story.
  - Work out ways to validate/test numbers - often different points of view on same data ofter reveals gaps
  - Predict whats going to happen - from deep understanding

### Reporting & Charting

- Inference Analysis is great to find what explains the major changes. Visual drilldown, of what variables most contributed to the top level change.

- Top Impact - quantifies what final impact(revenue for example) had a change in percent, ex:
 A, change: -10%, impact: 5$
 B, change: -2%, impact: 1k$
So B is actually more important althought that is not evident from the change.
Then order by order of importance

- Relative change chart, to see the relative change over time of a specific metric.

### Machine learning

Is all about creating a model of some observed function. Usefull to have programs automating a process and for predicting.

Ex, simple: by your email history of classifying mails with "buy this" as spam, i can guess that the next one "buy this" is also spam (An average is model, simple and naive)
Ex, complex: by recording the way you drive your car given the road ahead, i can learn and also drive a car in same way.

Tipically is also said that all models are wrong but try to get the closer as possible (the elast means squeare error)

Andre Ng machine learning classes are excelent.

### Metrics in an Organization

1. Learn the context and ecosystem: what products, activities exist, what is important money, users, downloads, etc..
2. Who are the stakeholders, that can act on insight, and their understanding on stats.
3. Data step 1: Build a daily/weekly report. What happened. With drilldown levels: lvl.1: sales change. lvl.2: what product changed. lvl.3: specific country change, etc...
Lvl.1 some say should be up to 3 KPIs
 - The data backend systems are secondary and the tool to display it also. Excel is excelent to cretae an agile dashboard.
 - This exercise might also reveal gaps with data insfrastructure/
4. Data step X: Actionable insights for each stakeholder. Guidance, and this might vary by stakeholder.
5. AB testing
5. Prediction

Choosing KPIs: Actionable, that put some pressure on something, and the pressure pushes things in right direction. Bit like economic changing action.

---

### Job of an analyst

1) Always ask, “In what ways can we challenge what we are doing?” or “How can I break this process”? No gain comes from doing things the exact same way you have been doing them.

2) Read, grow, look beyond your group. Know that you have never found the right answer, and the search is more impor­tant than the actual answer.

3) Define success up front. This is not just the goals your boss sets for you, but more importantly what it is that will define a successful program?

4) Make sure you are not measuring the outcome, but your influence on the outcome.

5) Seek out those that will challenge everything you believe. You do not need to agree, but only talking to like minded people is the fastest way to become the observed with Dunning Kruger.

6) Assume that if you have not found a way to break a process in the last year or two, that you are not trying hard enough

7) Challenge everyone to take an idea to the next level. The first thing we come up with is comfortable. The next is growth.

8) Know that you will get an outcome from any action, so measuring just that does not tell you anything about the value you bring

9) If the words “I don’t know” are the end of the conversation for you, then you can be sure you are the sufferer of this bias.

10) Most importantly, change all the rules, and challenge all the rules, not to be difficult, but because you only get better by making others around you better.


One of the most famous psychological studies in the last few years is the Dunning-Kruger Effect. Its best description is:

The Dunning–Kruger effect is a cognitive bias in which unskilled people make poor decisions and reach erroneous conclusions, but their incompetence denies them the metacognitive ability to recognize their mistakes. The unskilled therefore suffer from illusory superiority, rating their ability as above average, much higher than it actually is, while the highly skilled underrate their own abilities, suffering from illusory inferiority. To put simply, when you don’t know what you don’t know, you have no ability to differentiate what is right or wrong.

Reference: http://blogs.adobe.com/digitalmarketing/personalization/conversion-optimization/why-we-do-what-we-do-dunning-kruger-effect/

---

### Analysis tecniques
- Correlation
- Histograms
- Regression / trends
- Distributions
- Monte carlo (tecniques on how to count things, how to find probabilities of anything)
- Sample size guidelines
- AB testing - sample size, t-test
- How to check 2 different sets of numbers average is really statistically different 

---

### Excel
  - Name table as a variable: select an excel table and give it a name, easier to use in other sheets
  - Take advantage of hidding columns/rows to clean up the final results: Possible to hide tabs, minimize columns, hide columns.
  - Useful function to read up on if you don't know them: Index, Match, Sumif, Sumifs, Iferror, Vlookup, Hlookup, Offset, Correl , Forecast, Confidence.norm , Norm.inv, Subtotal, Camera.

---

### Articles:
  - The Top Keywords We Published In 2012: http://techcrunch.com/2012/12/24/techcrunch-crunched-exposing-the-latest-tech-trends/
  - check if is random event from data: 
  http://www.empiricalzeal.com/2012/12/24/are-mass-shootings-really-random-events-a-look-at-the-us-numbers/
  - Four Assumptions Of Multiple Regression That Researchers Should Always Test: http://pareonline.net/getvn.asp?v=8&n=2
  - Stats: https://www.quantcast.com/skype.com
  - http://www.ashmaurya.com/2010/06/pivot-before-productmarket-fit-optimize-after/
  - http://www.ashmaurya.com/2010/07/3-rules-to-actionable-metrics/
  - http://news.ycombinator.com/item?id=5198187 - importance of excel discussion
  - http://www.kaushik.net/avinash/calculate-return-on-analytics-investment/