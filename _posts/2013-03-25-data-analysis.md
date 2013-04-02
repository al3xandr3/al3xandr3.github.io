---
layout: post
title: Data Analysis
category: cheatsheet
tags:
  - statistics
  - data
intro: "Data Analysis Guidelines"
---


### Why Analysis?

> 1. Improve something 
  - eg: a process, a strategy in a company, government, health
  - skills: domain knowledge: digital marketing, business processes

> 2. By changing the (current) way things are done
  - eg: Do Y instead of X. Test Y instead of X
  - skills: AB testing

> 3.  Because of an insight / revelation
  - eg: From our Analysis we found that Y is better than X
  - skills: Ask good questions, be curious, distill what is important

> 4. (An Insight) That was presented in a clear way
  - skills: visualization, communication, rhetoric, human behavior
  
> 5. (An Insight) That was analysed in a correct way
  - skills: statistics, probabilities, counting, estimating, correlation, regression, modeling, etc...

> 6. (An Insight) That had data available
  - skills: SQL, scripting, google analytics, databases, etc...

Data Analysis is the science behind change.


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
  - hide the unhelpfull data, think from final viewer pov. Remove the None's / empty's values...
  - the end audience don't care the amount of work, only if it addresses well or not their questions - no point of putting everything you found on the output.
  - simple correct english
  - simple graphs
  - put it into perspective/compare with similar/total
  - callout: trends, outliers, counter-intuitive facts

- *After*
  - Is the output answering the original question properly? Is it really contributing to something ?
  - What have we learned?
  - Have an opinion / recomendation - having an opinion means the numbers are understood well enought, and you can see what should be next steps.
  - Beware of short term data view, zoom out to get whole picture, example: a week worth of data might not be telling the whole story.
  - Work out ways to validate/test numbers - often different points of view on same data ofter reveals gaps
  - Predict whats going to happen - from deep understanding

---

### Metrics in an Organization(or on any application)

1. Learn the context and ecosystem: activities exist, what products, what are the end goals: usage, money, user count, downloads, etc..
2. Who are the stakeholders, that can act on recomendations, and their understanding on stats.
3. Define the metrics framework and the KPIs
4. Data step 1: Build a daily/weekly report. What happened. With drilldown levels: level.1: sales change. level.2: what products changed more. level.3: what countries sales changed more, etc... (Level.1 some say should be up to 3 KPIs)
 - The data backend systems are secondary and the tool to display it also. Excel is excelent to create an agile dashboard.
 - This exercise might also reveal gaps with data insfrastructure.
5. Data step 2: Actionable insights(recomendations) for each stakeholder. Guidance, and this will vary by stakeholder role.
6. AB testing / Optimize
7. Prediction Models

Choosing KPIs: Actionable, that put some pressure on something, and the pressure pushes things in right direction. Bit like economic changing action.

--- 

### Machine learning

Is all about creating a model of some observed function. Usefull to have programs automating a process and for predicting(guessing).

Example simple: by noticing that from email history the spam emails almost always have the keywords "buy this", is possible to infer that the next email with "buy this" is likelly spam also. (An average is a model, simple and naive)

Example complex: by recording all the details in how a person drives a car given the road ahead, a model can "learn" to drive a car in the same way.

Tipically is also said that all models are wrong but try to get the closer as possible (minimize least square errors).

Andre Ng machine learning classes are excelent.

