---
layout: post
title: Data Analysis
category: data
tags:
  - statistics
  - data
intro: "Data Analysis Guidelines"
---


## Why, whats the point?

**1. End Goal: Improve something**

e.g. a business process, a strategy in a company, government, health

skills: domain knowledge(digital marketing, company processes), ask big scope questions to distill what is important (what is the purpose of this? What happens if we don't have it?)

**2. By doing something new / different**

e.g. Do Y instead of X see if improves against measures (KPIs)

skills: 1st need to know the current baseline: Dashboard (for KPIs monitoring), 2nd use AB testing to optimize.

**3. Because of an insight / revelation**

e.g. We found that Y is more likely better than X. 

skills: Be curious, play around, make observations, question a lot, distill what is important, common sense, this can contribute to metrics(KPIs to monitor) but should be more focused on the ideas for change.

**4. (An Insight) That was presented in a clear way**
  
skills: visualization, communication, rhetoric, human behavior
  
**5. (An Insight) That was analysed in a correct way**

skills: statistics, probabilities, counting, estimating, correlation, regression, modeling, etc...

**6. (An Insight) That had adequate data available**

skills: SQL, programming, google analytics, databases, etc...

Particularly in big organizations, that have many moving parts (variables) it can be very hard / impossible to predict the impact of a change. Very often the organization current status is a result of random lucky / unlucky events (and often external) at the right / wrong time. Typically the process of change(improvement) is a sequence of trial and errors until a change works out. So, instead of choosing changes "blindly", data analysis can help with narrowing down the search space of potential choices and in focusing efforts in the right direction.


> "What is the truth?" is an excelent rule of thumb to guide the data analysis practice.







## How?

### Tasks

In practice the data analyst tasks are:

- Revealing the facts, insights not known before.
- Optimization, once you know the facts you try to optimize them, AB testing. (the hypothesis are domain specific).
- Monitoring, keep observing the updated performance and optimization results.
- Estimating / Predicting Future, by observing the past.
- Defining whats important to keep an eye on, the KPIs. (this is domain specific).
- Telling a Story, communicating the findings and recommendations.

### The Process
 
What are you trying to do ? What is the goal, once that is clear, then:

Baseline - where you are now?

- what KPI’s are important to look at given the goal? Learn the domain, ask the big scope questions: what is the purpose of this? Why this exists? What do i need to look at to know the end goal is improving?
- Do I have this data ? Need to add more instrumentation ?
- Setup reports / dashboards

Formulate hypothesis on what to change to get to the goal

- play with the data, to came up with theories and hypothesis to test, try correlations, plot, visualize, from different angles, maybe use also external data if possible

Test (A/B test)

- do a change and see its impact on the KPI’s.
- output a story, communicate, put in slides if needed, the results

Iterate

- Go back to Baseline and start again.  We using the right KPI’s ? (often the 1st ones are not great)
- more hypothesis, more tests (once in a while might find something worthwhile … )


### The Data Analysis Stack

Data Stack: Collecting data, Finding Insights and then Telling a good story around it.

1. Collecting data: requires a mix of technical and analytical: by knowing comprehensively the technical details of how tool works, designing a instrumentation solution to allow useful analysis.
3. Finding Insights: Look into the data, explore, identify trends, find the  most interesting actionable bits.
2. Telling a good story: Automated recurrent (daily/weekly) documents showing the KPI's. Requires analysis up front to figure out what are the KPI's to put on dashboard, and to pick the most actionable metrics.

The output of this work is a report. That either:

- Is used to monitor performance and is used baseline for changes. - typically a recurring report.

- Reveals new information that can be used to define strategies and future changes.

### In an Organization

1. Learn the domain and ecosystem: activities exist, what products, what are the end goals: usage, money, user count, downloads, etc...

2. Who are the stakeholders, that can act on recommendations, and their understanding on stats.

3. Define the metrics framework and the KPIs. What indicators are important to keep an eye on.

3.1. Be curious with the data, ask good questions, explore ideas, correlations.

4. Data 1st step: Build a daily / weekly report, with what happened. With drill-down levels: level.1: sales change. level.2: what products changed the most. level.3: what countries sales changed more, etc... (Level.1 some say should be up to 3 KPIs mac). (this exercise might also reveal gaps with data infrastructure)

5. Data 2nd step: Actionable insights(recommendations) for each stakeholder. Guidance, and this will vary by stakeholder role.

5.1. AB testing / Optimize - test changes and see how impact bottom line KPIs.

5.2. Prediction Models can help see where we headed.








## Data Infrastructure

Whanever data is generated by some system is then has to be stored. The way that is stored also has implications on the way it will be extracted / queried later on.
Data infrastructure deals with the optimizations of these problems.

The industry standard for data representation is a table, either csv, relational database table. Recent formats also include key->value (JSON, hadoop).

### Instrumentation

Tracking Instrumentation should be on the API's not on the Interface! - for simpler maintenance
So that when building the front end the API's are used and will already include tracking instrumentation.

### Data Repository

Traditionally there's 2 types:
- Operational repository, live / production databases, data is raw (not optimal for analysis), and require high availability so not recommended for analysis experimenting.
- Analytical repository, to be used by data analysts.

Nowadays, is being more common (maybe because of growing importance of data) dedicated data infrastructures that include: collection, repository and query. That is, the instrumentation sends data directly into them and their whole purpose is to be the infrastructure for data analysis.

### Big Data

Google, for their search engine, as a need to be able to handle massive data, created a tool, based on distributed file system that run parallel MapReduce jobs, the big thing is being able to run query's in parallel. 
Hadoop is the outside-of-google copy of this.

More recently google created a 2nd tool called dremmel, that is faster and better for data analysis EDA. Supports SQL, like a relational database.
This is the BigQuery, can be used as service online.










## EDA - Exploratory Data Analysis

a.k.a Looking for insights

### Rules of Thumb

> Data Validation:
Having 2 (or multiple) sources of data allows to calibrate if 1 data is looking good.

> Data Validation:
Mixing data from 2 different tracking systems is typically a no no. They will very likely be slightly different in absolute volume. A better way to compare is to check instead if trends are consistent.

> Data Validation:
To confirm an observation, re-run analysis from a different angle (in a different way) to see if they consistently match. (and try many angles, the more angles the higher the confidence). A form of data QA.

> Getting to data:
When having a problem to get the data, maybe there's a different way to get to the same data? what is the closest data proxy to it ? although not perfect, but a useful / workable approximation. Don't give up right away, there is often a way.

> Getting Meaning:
Is not the totals that matter the most, is instead the relative power they have. Prefer trends instead of absolute numbers. An absolute number is only meaningful when put in context (in a valid compassion).

### Data Quality

### Understanding a measured value (1 variable)

 - Histogram, to see the distribution of the data. - check if normal distributed

 - Regression, to model the data, typically over simplifies, but often is good enough.


### Try out correlations

A way to find insights is to look for correlations
Plot 2 variables against each other and see if any patterns appears, use a scatter plot.
To see the pattern you often need to smooth the noise into a line that shows the pattern
Smoothing (line) is about getting the right balance between smoothness and accuracy.
Loess is a topical method (confirm a good fit from the residuals)
Other tools for revealing patterns in plots:
- Logarithmic scale, shows power laws, for data with many orders of magnitude
- banking, turns humans recognize more easily curve slopes, when they are at a 45 degree angle

Linear regression is best to find formula for prediction. It really only works when the process generating the data really is a linear function: we have a set of inputs and we measure a set of outputs.
It only works if data can be described in a straight line.
Does quite a few assumptions and it produces a summary / aggregation only.

#### Multivariate Linear regression

Apply multiple linear regression to a set with many variables to find what variables influence the most the output.
Then use standard confidence intervals calculation to check if that relation has enought confidence.


### Time Series

Time series, is a bivariable (2 variables) representation with a couple added properties.

Components of time series: trend, seasonality, noise, other ( missing values, outliers, etc...)

> Data Validation:  
Is the data fair for the whole time period is representing ? Or for example some definitions changed in the meanwhile, i.e. the rules of the game that generated data changed and could be biasing it?
In practice is hard to make it work for many years in a row because of constant rules changes.
 

> Data Validation:
Data by Week: Comparing data by week, might be fairer than by day, because of weekly cycles, so removes daily bias.

A time series tasks is typically about: 

- description: past, trend, seasonality, changes in behavior 
- prediction: future, forecasting
- control: present, monitoring over time

Smoothing is a way to eliminate noise. 
Running averages: weighted average is better than non-weighted. Use Gaussian weight functions.
Exponential smoothing is even better, and allows forecasting (moving average do not). Use holts-winters method.

Beware of aggregated functions over non adjusted time periods. For example sum of sales in February is lower 10%. And business days, some months include 5 weekends, sum of sales on that month will look lower.

Correlation function, good for revealing how much memory is in data, and to reveal periodicity.
(Wonder if i could build a periodic automatic indicator from a time series chart.)

Interesting enough, most machinery developed for DSP matches the same applications as time series operations. Signal is the time series, filters are operators like, smoothing, differentiating.
And convolution: combining 2 sequences to yield a third one. Applying smoothing function to a chart is like convolution, augmenting a chart with a smoothed line, to produce a 3rd aggregated signal.

### Back of the envelope estimations

When there is a hypothesis, about the data find back of envelope estimations to prove it, or to estimate is about right.
Ex, When observing that Feb sales are lower and raising the idea (hypothesis) that is that is probably because of a shorter month.
Calculate how big should be the drop, with 3 less days?  3 days is about 10% of 30, so sales drop should match 10% , to fortify the theory, and more important to not fail it.

### Reference
http://www.gregreda.com/2014/03/23/principles-of-good-data-analysis/







## Telling Stories with Data

summarizing / compacting data into a easy digestible format.

### Presentation

> Tip:
Sugarcoating and eye candy can make the good great, but it won't help a 
poor insight.

> Tip:
Is said that a bar and line charts can cover almost anything needed to be visualized, it has less impact as a visually stunning infographic, but with about the same representation value and quicker to get done.

> Tip:
Viz aesthetics: chart standout the important elements, lighten in color, the less important ones.

> Tools:
Excel, R (ggplot2), D3.js

### KPI's

Examples

- Price of digital media entertainment per hour - http://gigaom.com/2013/02/10/cost-per-hour-a-new-metric-for-paid-content/

- Food price per kg - because package size varies, the price per kilogram is a clear way to compare prices across foods and packages sizes.

### Reports

> Tip:
The "1 in every 45" is an intuitive way to display a ratio. (Odds notation)

> Tip:
Prefer conclusions from relative percentages, instead from absolute numbers. e.g. in a funnel traffic analysis, the absolute values of a drop-off step are going up, is tempting to infer immediate that drop-off is going up, but is not mandatory true. It could be because the overall input of traffic is also increasing and the drop-off rate is actually constant. Calculate relative percentage = drop-off / total.

> Data Validation:
Whenever an average value is presented and analysed, it should have a confidence measure (standard deviation for example, also confirm for normality)

#### Recurring vs Ad-Hoc reports

Recurring reports are fully automated, no need to touch them, the automation part is often tricky and imposes many limitation on the final report (visualizations, extra calculations, etc…). Recurring reports are often simpler than Ad-hoc ones.
Ad-hoc's are a one time only, involve quite a bit of manual data calculations, but are the most flexible.

A somewhat useful mixed solution is to do ad-hoc reports that are almost fully automated. Ex: just copy paste a table of data into one excel sheet and all rest of report updates by itself. 

#### Dashboards

reference: http://tomgermeau.com/2013/12/behind-the-scenes-of-a-dashboard-design/

#### The Inspection View

> Tip:
Start with 1. Summary top view then allow for 2. Drill-Down view

Often the important is the final rate of something, but when that rate drops massively then it requires investigation to understand why.
So in parallel of the view (chart, table) of the total rate is probably good idea to also have a view of several points that participate on that total flow, the inspection view. When the Inspection view is setup then is very quick to quickly inspect what points changed that have influenced the final rate. In web analytics the inspection view is for example a view of the flow of pages that lead to a conversion, and having every point of that flow measured in a report view.

#### Maps

Maps are great tools, for a stats covering the whole world

### An Ad-Hoc Analysis Task Checklist

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
  - Hide the unhelpful data, think from final viewer pov. Remove the None's / empty values...
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


### How to Lie with statistics

- A too precise average statistic is suspicious, normally, there's some decimal points.
- Average can be a mean, a mode or a median
- Testing, guarantee an adequate sample size. To lie just use small sample size and try many times, eventually one group will show a good result. 
- Charts without axis labels and numbering are meaningless. 

- Common sense is required while reading numbers, nevertheless. But is better assume reader wont really know.

- Average of rates is not same as rates of averages, avoid the 1st.

*Reference*
- Book: how to lie with statistics
- http://mathwithbaddrawings.com/2013/12/02/headlines-from-a-mathematically-literate-world/



## Modeling

A representation of an existing behaviour. Never perfect, but an atempt to be close.
Can then be used to perdict future behaviour.
Also to be used for optimization.

### Statistical distributions

a distribution is a way to summarize a dataset.

### Simulations

This is a great way to test out models / hyphothesis / behaviour by generating random and (on purpose) biased data to test, evaluate formulas, algorithms, theories.
And this is something that computers are great at, and that a few years ago was not possible to do.

This also allows for optimization, plot the convergence over time, see if possible to make the algol converge faster, plot the simulation progression over time.




## Optimization

### AB testing

- A/B testing: comparing version A vs version B.
- A/A test technique: comparing a test against itself, expect that values match. Should be made several times to get the distribution chart. - A bit like the simulations idea.

reference: sample sizes http://camdp.com/blogs/number-samples-needed-b-test

### Intelligent Agents Model

Amazingly, Optimization, AB & Multivariate Testing, Behavioral Targeting, Attribution, Predictive Analytics, … can all be recast as components of a simple, yet powerful framework borrowed from the field of Artificial Intelligence, the intelligent agent.

#### basics

The goals are what the agent wants to achieve, what it is striving to do.

When the agent achieves a goal, it gets a reward based on the value of the goal. 

Given that the agent has a set of goals and allowable actions, the agent’s task is to learn what actions to take given its observations of the environment – so what it ‘sees’, ‘hears’, ‘feels’, etc...  Assuming the agent is trying to maximize the total value of its goals over time, then it needs to select the action that maximizes this value, based on its observations.

So how does the agent determine how to act based on what it observes? The agent accomplishes this by taking the following basic steps:

1. Observe the environment to determine its current situation. You can think of this as data collection.

2. Refer to its internal model of the environment to select an action from the collection of allowable actions.

3. Take an action.

4. Observe of the environment again to determine its new situation. So, another round of data collection.

5. Evaluate the ‘goodness’ of its new situation – did it reach a goal, if not, does it seem closer or further away from reaching a goal then before it took the past action.

6. Update its internal model on how taking that action ‘moved’ it in the environment and if it helped it get or get closer to a goal. This is the learning step.

By repeating this process, the agent’s internal model of how the environment responses to each action continuously improves and better approximates each actions actual impact.

Reference: http://conductrics.com/intelligent-agents-ab-testing-user-targeting-and-predictive-analytics/




## Tools

> Tool is just the means to an end choose the best tool for the job at hand.

Excel - excelent prototyping tool, analysis, EDA, almost all can be done with it ? (Data Smart book)

Python - Automate things into production / products

R - Run the most starte of the art, gold standard algorithms







## Disciplines

### Web Analytics

A tool for Improving a web site activities by doing better “Informed” decisions.

> Aha, this is what's happening with my site, right, I will then do something differently (or this actually confirms what I'm doing is already good).

> What if I do this? What will happen to my sales ? To my site engagement?

#### Used on

- Digital Marketing - ROI from marketing online campaigns (original use ?)
- Understanding User Engagement – how many users, what's happening overtime. Are users - getting stuck in payment flow ? What step of the payment flow.
- Front End Optimization – finding the ideal layout, messaging, ideal page flow, conversion - buttons. (A/B testing)
- “Informed” Change – I want to change my site, what's the impact ? 

#### Digital Marketing

- Tracking mail marketing flow: email -> page -> conversion funnel. Identify if maybe a step is specially bad at converting and go optimize that. e.g. Maybe that week a particular page in the conversion funnel was broken and the mail campaign didn't convert as well as expected.

#### Understand the Audience

Who uses my product? And how?
Use the audience data into next iterations of my product, to target it better:

- Why have site in 30 languages if most of the interest is from US anyway?
- Where do users drop off from my site? Is it a broken link? Bad messaging? Non working form ?
- Do I need to support old browsers ?
- What browsers should my QA process test on ?
- What screen size can I develop my app for ?
- Is the interest growing over time ? (traffic volume)
- How are users reaching the site? brand search? are they looking for something specific? are the search traffic trends changing over time? should the site adapt to reflect the users searches?
- Etc …

#### Optimization - Data Driven Change

- Is introducing a new page with FAQ on a product result in improving sales ?
- Is providing an alternative FB login on the login page, translating into more new users ?
- Having a trusted logo on the credit card capture page improving sales ?
- What is a better messaging for the site to use ?
- Bigger Buttons ? Color of buttons, placement of the buttons, etc…



### Machine learning

A program that learns (creates a model) from the existing data, useful for:
 - Predicting (guessing / inferring) future from the past
 - Automating things - a program that learns is then able to do new things without being explicitly programmed.

 Contributes a lot for the modeling section.

Example simple: by noticing that from email history the spam emails almost always have the keywords "buy this", is possible to infer that the next email with "buy this" is likely spam also and computer can automatically filter them. 

Example complex: by recording all the details in how a person drives a car given the road ahead, a model can "learn" to drive a car in the same way.

> An average is a model, simple but naive and fails with outliers.

> A regression line is like an average for 2 dimensions, also a model.

> Is also said that all models are wrong but try to get the closer as possible (e.g.minimizing the least square errors).

Andre Ng machine learning classes are excellent.

Latest big trend, on the start of 2013 is probabilistic programming, also called model-based machine learning: http://probabilistic-programming.org/wiki/Home

Nice video explaining: http://radar.oreilly.com/2013/04/probabilistic-programming.html


## Examples

### How to test a change has caused impacted ?
Best is to have it as an AB test, so can compare side by side (excluding potencial other factors), and run a hypothesis test, for improved confidence.