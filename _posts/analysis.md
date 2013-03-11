---
layout: post
title: Analysis
category: cheatsheet
tags:
  - statistics
  - data
intro: "analysis"
---

Getting handle on project:
- 1 Create a main KPI dashboard. 
- 2 Slow down the daily running, do long term.

Machine learning is great to find the formula given the examples, - its all that is to it. That how it "learns"

### types of Data Analysis Questions
- Descriptive: Describe a set of data ex: census

- Exploratory: Find relationships you didn't know about. Find relationships in variables(covariation) ex: see what areas of brain lights for given a certain activity.
 
- Inferential: Use a small sample of data to say something about a bigger population. ex: air polution vs life expectancy

- Predictive: To use the data on some objects to predict values for another object. ex: outcame of the elections, figure out who is patterns given on purchase patterns

- Causal: To find out what happens to one variable when you make another variable change. ex: medical drrug testing

- Mechanistic: understand the exact changes in variables that lead to changes in other variables for individual objects. ex: how pavement tiles interact.

## CheatSheet - Excel
  - Index(key, Match(row), Match(header) to find the what key you need from another table
  - table as variable, select an excel table and give it a name, easier to use in other sheets
  - put the keys you need next to the final table and then do hide column

## CheatSheet - Analysis Ad-Hoc Task

Macro - Indentifying the Macro purpose of the data collected is key. What environment where data is from, how it was collected, if its from a web page, what does the page does, whats it purpose? etc...
1 short sentence

- Before
  - What is the Macro of the activity? 
    ex: new digital camera campaign, using different marketing channels
  - What is the goal of this analysis how it relates to the Macro?
    ex: how the channels performed, which one worked better?
  - Define clearly what is the output & Call out the constrains/limitation/impediments & agree with stakeholders on the output.
- During:
  - Final output short and simple as possible, not everyting, just the conclusion. optimal, just 1 chart/diagram or 1 table.
  - simple correct english
  - simple gaphs
  - put it into perspective/compare with similar/total
  - make standout: trends, outliers, counter-intuitive facts
- After:
  - Is the analysis method addressing the question well? excluding the non controlables variables/bias and a look at exactly the point/space that has been affected
  - Beware of short term data view, zoom out to get whole picture, often a week view is not telling the whole story.
  - What have we learned?
  - Give a recomendation, suggest next steps.
  - tecniques to validate/test numbers

# Precepts of Analysis
  optimizes efficiency and processes
  framework: Goal, Levers, Data, Model
  highlighting useful information
  suggesting conclusions
  supporting decision making
  forecasting
  Ask good questions - curiosity can lead into new findings. Why you have a site, what the site is for, web analytics can give some hints on that.

# Analysis tecniques
- correlation
- histograms
- regression / trends
- distributions
- monte carlo (tecniques on how to count things, how to find probabilities of anything)
- sample size guidelines
- ab testing - sample size, t-test
- are 2 sets really different?

---

## data driven improving / progress / evolution
 http://www.ashmaurya.com/2010/07/3-rules-to-actionable-metrics/
  - define goal
  - choose KPIs
  - measure (collect data, dashboards)
  - analyse (correlate, report)
  - (ab)test (what sample size...)

--- 

# Excel dashboards - make templates
  - Useful function to read up on if you don't know them
    Index
    Match
    Sumif
    Sumifs
    Iferror
    Vlookup
    Hlookup
    Offset
    Correl 
    Forecast
    Confidence.norm 
    Norm.inv
    Subtotal
    Camera

# Articles:
  - The Top Keywords We Published In 2012: http://techcrunch.com/2012/12/24/techcrunch-crunched-exposing-the-latest-tech-trends/
  - check if is random event from data: 
  http://www.empiricalzeal.com/2012/12/24/are-mass-shootings-really-random-events-a-look-at-the-us-numbers/
  - Four Assumptions Of Multiple Regression That Researchers Should Always Test: http://pareonline.net/getvn.asp?v=8&n=2
  - Stats: https://www.quantcast.com/skype.com
  - http://www.ashmaurya.com/2010/06/pivot-before-productmarket-fit-optimize-after/
  - http://www.ashmaurya.com/2010/07/3-rules-to-actionable-metrics/
  - http://news.ycombinator.com/item?id=5198187 - importance of excel discussion

# Reporting Charts

- Inference Analysis is great to find what explains the major changes

- Top Impact - quantifies what final impact(revenue for example) had a change in percent, ex:
 A, change: -10%, impact: 5$
 B, change: -2%, impact: 1k$
So B is actually more important althought that is not evident from the change.
Then order by order of importance

- Relative Change chart, to see the relative change over time of a specific metric

# Metrics in an organization

1. Learn the context and ecosystem: what products, activities exist, what is important money vs users vs... 
2. Who are the stakeholders, that can act on insight, and their understanding on stats.
3. Data step 1: Build a daily/weekly report. What happened. Level 1: sales change. Level 2: what product changed. Level 3: specific country change ?
 - the data background here in secondary not primary, and the tool to display it also. Just tools most important is end result. Excel is excelent to cretae an agile dashboard.
 - this might also reveal gaps with data insfrastructure
2. Data step X: Actionable insights for each stakeholder. Guidance, and this might vary by stakeholder.

