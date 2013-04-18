---
layout: post
title: Data Analysis
category: cheatsheet
tags:
  - statistics
  - data
intro: "Data Analysis Guidelines"
---

## Why Analysis?

**1. End Goal: Improve something* - [Domain]**

e.g. a business process, a strategy in a company, government, health

skills: domain knowledge: digital marketing, company processes


**2. By changing the (current) way things are done - [Action]**

e.g. Do Y instead of X. Test Y instead of X

skills: AB testing


**3. Because of an insight / revelation - [Find Insights]**

e.g. We found that Y is better than X. 

skills: Ability to ask good questions(Why you have a site?), be curious, distill what is important, common sense, define metrics and KPIs


**4. (An Insight) That was presented in a clear way - [Presentation]**
  
skills: visualization, communication, rhetoric, human behavior

  
**5. (An Insight) That was analysed in a correct way - [Analysis]**

skills: statistics, probabilities, counting, estimating, correlation, regression, modeling, etc...


**6. (An Insight) That had adequate data available - [Data]**

skills: SQL, programming, google analytics, databases, etc...

Improve something* - Particularly in big systems and organizations, that have many moving parts(variables) it can be very hard / impossible to predict the impact of a change. Very often the organization current status is a result of lucky or unlucky (external random) events mixed with internal changes at the right or wrong time. Typically the process of change(improvement) is a sequence of trial and errors until something works out. So, instead of choosing changes "blindly", data analysis can help with narrowing down the search space of (potentially useful) changes and in pointing the focus in the right direction.


---

## [Find Insights]

Useful metrics examples:

- Price of digital media entertainment per hour - http://gigaom.com/2013/02/10/cost-per-hour-a-new-metric-for-paid-content/
- Food price per kg - because package size varies, the price per kilogram is a clear way to compare prices across foods and packages sizes.


## [Presentation]

- The "1 in every 45" is an intuitive way to display a ratio.
- Sugarcoating and eye candy can make the good great, but it won't help a poor insight.
- Graphics and presentation should have a hierarchy to be quickly understood. 
  - Start with 1. Summary top view then allow for 2. Drill-Down view
- Is said that a bar and line charts can cover almost anything needed to be visualized, it has less impact as a visually stunning infographic, but with about the same representation value and quicker to get done.

Tools: Excel, R(ggplot2), D3.js


## [Analysis]

 - Whenever an average value is presented and analysed, it should have a confidence measure (standard deviation for example, also confirm for normality)

 - Prefer conclusions from relative percentages, instead from absolute numbers. e.g. in a funnel traffic analysis, the absolute values of a drop-off step are going up, is tempting to infer immediate that drop-off is going up, but is not mandatory true. It could be because the overall input of traffic is also increasing and the drop-off rate is actually constant. Calculate relative percentage = drop-off / total.

 - Histogram, to see the distribution of the data. - check if normal distributed

 - Correlation, to find relations between variables

 - Regression, to model the data, typically over simplifies, but often is good enough.

## [Data]

 - The central data structure is the table structure: databases, spreadsheets, csv, R's data.frame, etc...

--- 

## An Analysis Task

- **Before**
  - What is the Macro of the activity? ex: a payment flow
    - What is the goal of this analysis how it relates to the Macro?
    ex: how users pay
  - Understand how the tracking and data is collected: beware of data bias, data collected in duplicated, sessions, unique visits, etc...
    - If is page flow, sometimes useful to visually layout the screen-shots and how tracking and page sequence happens.
  - Define and agree with stakeholders what is the output & communicate the constrains / limitation / impediments.

Macro - Identifying the Macro purpose of the data collected is key. What environment where data is from, how it was collected, if its from a web page, what does the page does, whats it purpose? etc...

- **During**
  - Final output short and simple as possible, 
  - Clear clear clear(include screen-shots if needed), 
  - Target an audience without any knowledge of the matter
  - Report not everything, just the conclusion. optimal, just 1 chart / diagram or 1 table. Can have different levels of drill-down
  - Hide the unhelpful data, think from final viewer pov. Remove the None's / empty's values...
  - The end audience don't care the amount of work, only if it addresses well or not their questions - no point of putting everything you found on the output.
  - Simple correct English
  - Simple graphs
  - Put it into perspective / compare with similar / total
  - Point out: trends, outliers, counter-intuitive facts

- **After**
  - Is the output answering the original question properly? Is it really contributing to something ?
  - What have we learned?
  - Have an opinion / recommendation - having an opinion means the numbers are understood well enough, and you can see what should be next steps.
  - Beware of short term data view, zoom out to get whole picture, example: a week worth of data might not be telling the whole story.
  - Work out ways to validate / test numbers - often different points of view on same data ofter reveals gaps
  - Predict whats going to happen - from deep understanding

---

## Metrics in an Organization

1. Learn the domain and ecosystem: activities exist, what products, what are the end goals: usage, money, user count, downloads, etc..
2. Who are the stakeholders, that can act on recommendations, and their understanding on stats.
3. Define the metrics framework and the KPIs
4. Data step 1: Build a daily / weekly report, what happened. With drill-down levels: level.1: sales change. level.2: what products changed the most. level.3: what countries sales changed more, etc... (Level.1 some say should be up to 3 KPIs)
 - The data back-end systems are secondary and the tool to display it also. Excel is a great tool to create an agile dashboard.
 - This exercise might also reveal gaps with data infrastructure.
5. Data step 2: Actionable insights(recommendations) for each stakeholder. Guidance, and this will vary by stakeholder role.
6. AB testing / Optimize
7. Prediction Models

Choosing KPIs: Actionable, that put some pressure on something, and the pressure pushes things in right direction. Bit like economic changing action.

--- 

## Web Analytics [Domain]

  - WA = Web Analytics

  - WA is a measuring tool and central for the Digital Marketing.

  - Quote: "WA is a thermometer for the health of your website" - As in monitoring site health

  - Digital Marketing and engagement: When a user leaves in the middle of the payment flow, then WA can help try understanding the exact step they got stuck on and the problem they encountered. Send them an email after helping out, clarifying, reminding to try again, help them to convert.

  - Performance Marketing - optimize ROI of web experience over the long term. Rather than trying to go after awards or idealized theories of good design, it advocates performance-driven design. Seeks to identity the ideal mix of creativity and data that drives long-term business benefits.

  - Tracking mail marketing flow: email -> page -> conversion funnel. Identify if maybe a step is specially bad at converting and go optimize that. e.g. Maybe that week a particular page in the conversion funnel was broken and the mail campaign didn't convert as well as expected.

  - How are users reaching the site? brand search? are they looking for something specific? are the search traffic trends changing over time? should the site adapt to reflect the users searches?

---

## Machine learning

Is about creating a model of an observed function. Useful to have programs automating a process and for predicting(guessing).

Example simple: by noticing that from email history the spam emails almost always have the keywords "buy this", is possible to infer that the next email with "buy this" is likely spam also. (An average is a model, simple and naive)

Example complex: by recording all the details in how a person drives a car given the road ahead, a model can "learn" to drive a car in the same way.

> Is also said that all models are wrong but try to get the closer as possible (minimize least square errors).

Andre Ng machine learning classes are excellent.

Latest trend, big on the start of 2013 is probabilistic programming, also called model-based machine learning: http://probabilistic-programming.org/wiki/Home
Nice video explaining: http://radar.oreilly.com/2013/04/probabilistic-programming.html

