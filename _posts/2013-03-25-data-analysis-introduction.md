---
layout: post
title: Data Analysis Introduction
category: data
tags:
  - statistics
  - data
intro: "Data Analysis Introduction"
---

## Why, whats the point?

**1. End Goal: Improve something**

In business: increase revenue, customer loyalty, reduce costs, increase user count, avoid fraud.
In government: increase business creation, reduce tax invasion, identify terrorism beforehand.
Health: avoid diseases, prolong lifespan, increase general well being.

skills: domain knowledge(digital marketing, business internals), ask big scope questions to distill what is important: what is the purpose of this? What happens if we don't have it?

**2. By doing something new / different**

e.g. Do Y instead of X see if improves against measures (KPIs)

skills: 1st need to know the current baseline: Dashboard (for KPIs monitoring), 2nd use AB testing to optimize.

**3. Because of an insight / revelation**

e.g. We found that Y is more likely better than X. 

skills: Be curious, play around, make observations, question a lot, distill what is important, common sense, this can contribute to metrics(KPIs to monitor) but should be more focused on the ideas for change.

**4. (An Insight) That was presented in a clear way**
  
skills: visualization, communication, rhetoric, human behavior
  
**5. (An Insight) That was analyzed in a correct way**

skills: statistics, probabilities, counting, estimating, correlation, regression, modeling, etc...

**6. (An Insight) That had adequate data available**

skills: SQL, programming, google analytics, databases, etc...

Particularly in big organizations, that have many moving parts (variables) it can be very hard / impossible to predict the impact of a change. Very often the organization current status is a result of random lucky / unlucky events (and often external) at the right / wrong time. Typically the process of change(improvement) is a sequence of trial and errors until a change works out. So, instead of choosing changes "blindly", data analysis can help with narrowing down the search space of potential choices and in focusing efforts in the right direction.


## How ?

> "What is the truth?" is an excellent rule of thumb to guide the data analysis practice.


### Data Analysis top level typical tasks

- Revealing the facts, knowledge not known before.
- Optimization, once you know the facts you try to optimize them, AB testing. (the hypothesis are domain specific).
- Monitoring, keep observing the updated performance and optimization results.
- Estimating / Predicting Future, by observing the past.
- Defining whats important to keep an eye on, the KPIs. (this is domain specific).
- Telling a Story, communicating the findings and recommendations.


### Typical flow of an Analysis piece

1. Collecting data: requires a mix of technical and analytical: by knowing comprehensively the technical details of how tool works, designing a instrumentation solution to allow useful analysis.
3. Finding Insights: Look into the data, explore, identify trends, find the  most interesting actionable bits.
2. Telling a good story: Automated recurrent (daily/weekly) documents showing the KPI's. Requires analysis up front to figure out what are the KPI's to put on dashboard, and to pick the most actionable metrics.

The output of this work is a report. That either:

- Is used to monitor performance and is used baseline for changes. - typically a recurring report.

- Reveals new information that can be used to define strategies and future changes.

### In an Organization

Most often the data analysis work takes places in specific context within an organization.
That requires a couple of specific initiatives to best make it work:

1. Learn the domain and ecosystem: activities exist, what products, what are the end goals:   usage, money, user count, downloads, etc...

2. Who are the stakeholders, that can act on recommendations, and their understanding on   stats.

3. Define the metrics framework and the KPIs. What indicators are important to keep an eye   on.

3.1. Be curious with the data, ask good questions, explore ideas, correlations.

4. Data 1st step: Build a daily / weekly report, with what happened. With drill-down levels:   level.1: sales change. level.2: what products changed the most. level.3: what countries sales   changed more, etc... (Level.1 some say should be up to 3 KPIs mac). (this exercise might also   reveal gaps with data infrastructure)

5. Data 2nd step: Actionable insights(recommendations) for each stakeholder. Guidance, and   this will vary by stakeholder role.

5.1. AB testing / Optimize - test changes and see how impact bottom line KPIs.

5.2. Prediction Models can help see where we headed.
  


















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

Time series, is a bi-variable (2 variables) representation with a couple added properties.

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
















## Modeling

A representation of an existing behavior. Never perfect, but an attempt to be close.
Can then be used to predict future behavior.
Also to be used for optimization.

### Statistical distributions

a distribution is a way to summarize a dataset.


## Disciplines

### Web Analytics

A tool for Improving a web site activities by doing better “Informed” decisions.

> Aha, this is what's happening with my site, right, I will then do something differently (or this actually confirms what I'm doing is already good).

> What if I do this? What will happen to my sales ? To my site engagement?

#### Used on

- Digital Marketing - ROI from marketing online campaigns.
- Understanding User Engagement – How many users, is site growing, do users keep coming back (a proxy for user loyalty).
- Front End Optimization – Finding the ideal layout, messaging, page flow, conversion buttons. (A/B testing)
- “Informed” Change – I need/want to change the site, what's going to be the impact ? 
- eCommerce - Optimize the online payment flow, find where users are getting stuck (keep an eye on mobile users), how to improve it further to increase conversions.

#### Digital Marketing

- Tracking mail marketing flow: email -> page -> conversion funnel. Identify if maybe a step is specially bad at converting and go optimize that. e.g. Maybe that week a particular page in the conversion funnel was broken and the mail campaign didn't convert as well as expected.

#### Understand the Audience

Who uses my product? And how?
Use the audience data into next iterations of my product, to target it better:

- Where do users drop off from my site? Is it a broken link? Bad messaging? Non working form ?
- Do I need to support old browsers ?
- What browsers should my QA process test on ?
- What screen size should I develop my app for ?
- Is the interest growing over time ? (traffic volume)
- How are users reaching the site? brand search? are they looking for something specific? are the search traffic trends changing over time? should the site adapt to reflect the users searches?
- etc...

#### eCommerce

Money is the #1 of any business, the web pages that support this process are central to it, and should get a good amount of attention.

Couple of idea to explore:
- Look into the visitor days-to-purchase metric change when changing prices, probably it grows bigger.
- If days-to-purchase are very big then means, users could be better informed up front. Make site better and measure again.

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

Markov chains explained: http://techeffigy.wordpress.com/2014/06/30/markov-chains-explained/

Other ML techniques: https://scottlocklin.wordpress.com/2014/07/22/neglected-machine-learning-ideas/
