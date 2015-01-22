---
layout: post
title: Data Visualization and Presentation techniques
category: statistics
tags:
  - statistics
  - data
intro: "Techniques for telling Stories with Data."
---

Visualization and presentation techniques to better communicate the meaning of the results.

Is about Telling Stories with Data.

Summarizing / compacting data into a easy digestible format.

## Dashboards & Reports Goal

To be really actionable they need to have:

1. Data
1. Insights - Whats the interpretation / insight from the data
1. Recommendations for Action. - What to do next
1.  Business Impact. - What happens if we-don't-act / we-act

They should tie to the outcomes of the business. (Increase revenue, Increase customer loyalty, Reduce costs, Increase user count, etc...)


### Reference:

- http://www.kaushik.net/avinash/digital-dashboards-strategic-tactical-best-practices-tips-examples/#comment-682950






## Reports

The report should be optimized for the problem at hand and updated if needed during the project to highlight problems and new findings as the project develops (agile). There is no single report view that is ideal for every kind of data analysis challenge.

- Minimum possible to "report" the situation, remove what not absolutely needed.
- 1st thing to show in left, top corner is the key info, normally a table with summary: metric (or KPI), last Day, prev. Day, %Change, Trend. Others if needed.
	- then on the right of that, or bellow, or in other tabs should be possible to do further drill-down and go into further details.
- Red, green (and) yellow typically translate into good/bad/so-so, avoid using them to represent information that is neither. Go instead of neutral, like gray.
	- Do use red green, when presenting results, like day change and month change, color red is lower, color green if higher.
- Diagrams:
 - top to bottom (like flow chart).
 - use rectangular arrows instead of direct arrows.
 - be consistent, same color and same shapes for the same purpose, don't mix, consistency helps with message.
- Rates, calculated values, total values, etc... should be colored (and shaped) differently.

> Reports Data Validation: Whenever an average value is presented and analyzed, it should have a confidence measure (standard deviation for example, also confirm for normality)

#### Report Inspection View

> Start with 1. Summary top view then allow for 2. Drill-Down view

Often the important is the final rate of something, but when that rate drops massively then it requires investigation to understand why.
So in parallel of the view (chart, table) of the total rate is probably good idea to also have a view of several points that participate on that total flow, the inspection view. When the Inspection view is setup then is very quick to quickly inspect what points changed that have influenced the final rate. In web analytics the inspection view is for example a view of the flow of pages that lead to a conversion, and having every point of that flow measured in a report view.

### Recurring vs Ad-Hoc Reports

Recurring reports are fully automated, no need to touch them, the automation part is often tricky and imposes many limitation on the final report (visualizations, extra calculations, etc...). Recurring reports are often simpler than Ad-hoc ones.
Ad-hoc are a one time only, involve quite a bit of manual data calculations, but are the most flexible.

A somewhat useful mixed solution is to do ad-hoc reports that are almost fully automated. Ex: just copy paste a table of data into one excel sheet and all rest of report updates by itself. 




## An Ad-Hoc Analysis Task Checklist

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



## How to Lie with statistics

And, more importantly, how to identify we're being lied to, with statistics

- A too precise average statistic is suspicious, normally, there's some decimal points.
- Average can be a mean, a mode or a median
- Testing, guarantee an adequate sample size. To lie just use small sample size and try many times, eventually one group will show a good result. 
- Charts without axis labels and numbering are meaningless. 

- Common sense is required while reading numbers, nevertheless. But is better assume reader wont really know.

- Average of rates is not same as rates of averages, avoid the 1st.

*Reference*

- Book: how to lie with statistics
- http://mathwithbaddrawings.com/2013/12/02/headlines-from-a-mathematically-literate-world/







## Odds Notation

> The "1 in every 45" is an intuitive way to display a ratio. (Odds notation)

Odds can sometimes be more intuitive to understand that raw percentages.
Even when using % might be good to also show the odds notation value next to it.

Notation "A:B" describes how much A we get for every B.
example: "1:4" means 1 in 4.

Odds are more intuitive than percentages:

- 1 in 2  = 50%  (= 1/2 * 100)
- 1 in 3  = 33%
- 1 in 4  = 25%
- 1 in 5  = 20%
- 1 in 6  = 16.66%
- 1 in 7  = 14%
- 1 in 8  = 12.5%
- 1 in 9  = 11.11%
- 1 in 10 = 10%
etc...

### Convert percentages to Odds notation

1. Start with 40%

2. get the decimal version (x/100): 0.4

3. 1/x (how many times does that fit in 1): 1/0.4 = 2.5

4. Odd: 1:2.5

5. (optional) round up number: 2:5 (multiply both by same value, this case 2x)















## Convert Odds to percentages:

1. 2:5

2. 2/5 = 0.4

3. 0.4*100 = 40%

## Reference

- "Odds require less computation (than percentages)": http://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/
- Reference: http://lifehacker.com/practical-math-shortcuts-for-everyday-life-1495337792




## Put it into perspective, add context

Lets say some process had a significant speed improvement, measure in milliseconds, for example the speed of a web page loading, sometimes just giving out the number might no be ideal, because is hard for an audience to fully grasp its significance, milliseconds are small and many people don't often manipulate them. 
(And to be fair this is equally useful technique for analysts also, to be sink in the change size.)

Is often useful to put it into perspective.

For example: "The speed improvement was in the same order as having Husein Bolt going instead at speed of a cheetah"

Caveat: Be sure to make valid enough comparisons. Some things are just not the same.


## On Rates

> Prefer conclusions from relative percentages, instead from absolute numbers. e.g. in a funnel traffic analysis, the absolute values of a drop-off step are going up, is tempting to infer immediate that drop-off is going up, but is not mandatory true. It could be because the overall input of traffic is also increasing and the drop-off rate is actually constant. Calculate relative percentage = drop-off / total.

Rates are excellent to use in general, as a relative measure (instead of absolute) to measure progression over time, use for comparison to other rates, etc...

But they could sometimes miss to give the whole view, example:
lets say we looking at a web site login success rate, imagine that login success rate drops massively overnight, although nothing has changed on the login itself, what happened ?

Typically we might have a situation where a new predominant link somewhere has started to send loads more traffic, that might not all be that interested in login, and even be there my misunderstanding. Thus the input traffic will grow massively but the number of logins might not grow at same volume, as users realize they are in wrong place and leave.

So in this case the rate alone, will hint that login is performing much worse, while the actual net effect is positive.

A way around this is to include with the rate the input volumes, especially if they are trended.

So we can say we login rate dropped, but this is because of a massive influx of unqualified traffic hitting the login page.













## Charts

> Sugarcoating and eye candy can make the good great, but it won't help a 
poor insight.

> Is said that a bar and line charts can cover almost anything needed to be visualized, it has less impact as a visually stunning info-graphic, but with about the same representation value and quicker to get done.

> Viz aesthetics: chart standout the important elements, lighten in color, the less important ones.

### Histogram

Shows the distribution of the data, what are the most (and least) frequent values

https://www.youtube.com/watch?v=asEuFvWGJDs

Prepared Excel: [histogram.xlsm](https://drive.google.com/file/d/0B3ypY27pPCJyQTMtZzJRc0U2OHc/view?usp=sharing)


### Boxplot

Good for
- Check if distribution is symmetrical around the average.
- Inspect data for Outliers.

https://www.youtube.com/watch?v=DNpvSg2X0xQ
https://www.youtube.com/watch?v=ZFbPnwKwVWk

Prepared Excel: [boxplot.xlsm](https://drive.google.com/file/d/0B3ypY27pPCJydnNqaU1KUVNIVkU/view?usp=sharing)

Boxplot also is very useful when comparing 2 data sets directly:

Here is an excel with 2 box plot side by side: [boxplot2.xlsm](https://drive.google.com/file/d/0B3ypY27pPCJySlllN05ZNFJuZFk/view?usp=sharing)


### Treemap

Good to compare the size of a collection of items in 1 picture, easy understand their size, good to put it into perspective.

Can build nice looking ones at http://infogr.am/


### Streamgraph

Good to see volume change over time.
Combines Area and stacked Area charts together for the best of both worlds.

http://www.nytimes.com/interactive/2008/02/23/movies/20080223_REVENUE_GRAPHIC.html?_r=0

To build them:

- http://research.microsoft.com/en-us/projects/msrdatavis/streamgraph.aspx
- d3.js: http://bl.ocks.org/WillTurman/4631136


### Maps

Maps are great tools, for a stats covering the whole world


### Reference

- http://www.kaushik.net/avinash/data-visualization-inspiration-analysis-insights-action-faster/
