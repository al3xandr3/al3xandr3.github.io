--- 
layout: post
title: Data Quality Control
category: data
tags:
  - data
intro: "Data Quality Control"
---



## Data Quality Control

Let’s say you’ve finished up a report and are about to share it, how to check that the numbers and statements there are solid ?

> The problematic bits are the unknown unknowns – the ones we don’t know we don’t know.

[Donald Rumsfeld](http://t.umblr.com/redirect?z=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDonald_Rumsfeld&t=OTIwOGE4MWI4ZGEzOTkyNzAyZjBiNjQ1ZDVlNzQ2OWY3MTE4NzY4ZCxCVGZxVnJDbA%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F110334442085%2Fdata-quality-control-lets-say-youve-finished-up&m=1 "Donald Rumsfeld") statement about the conclusions of a report.

Maybe you had wrong assumption on what the data means to start with.

Maybe the way the data is stored means it has duplication you didn’t know about.

Maybe the way the data is represented in a database has changed and you haven’t been notified.

Maybe the current data instrumentation / collection has bugs.

Etc… etc…

**It is a requirement**

There needs to be an amount of work typically put into the data verification, that can even be time consuming and that ends up not being presented, so apparently has little incentive to be done, but is absolutely necessary for a data analysis professional, to minimize the risk of sharing wrong conclusions.

Here is a list of ideas for validating that the data is indeed correct, often you won’t have all these possibilities but hopefully some you will be done able to do:

**Data Collection**

*   Understand the process that generates the data, the technical details involved.  How data is captured, is there some unreliability ?  

*   Talk to the people that generated the data
*   Before publishing data, confirm with the people that generated the data, that the source data was correctly interpreted.

*   Sampled data? Is sampling by session, by hits, by user, etc…  

*   How the data is translated between systems - could there be a translation mismatch?  

*   Are there aggregations? is there some data lost that happens with daily aggregations? what happens to duplication? Pose questions to understand data: Do we count multiple times per day, or this is de-duplicated etc…  

*   Verify in live environment to confirm assumptions on telemetry

**Look for References**

*   Look for same data from other data sources: what other sources are there that contain same or an approximation of the data (unlikely to match exactly but in the same order of magnitude at least). Sometimes other orgs / products are in similar situation / environment, what numbers do they have ?
*   If the report has been done in past, compare against that, is this in line with the numbers compared to last year’s report for example.
*   Parallel implementation of instrumentation (multiple tracking systems). Absolute numbers likely differ between tracking systems, but trends have to be the same.

**Understand Data**

*   Calculate sensible higher and lower bounds, see if it fits. - 100M hits on my blog, nah, there’s must be a bug in the report.
*   Meaning of the data: The more all-around know how of the meaning of what the data means, the better when checking for sense. - 100 Zillion in profit, nah, report can’t be right.
*   Segment, segment, segment, top level averages can be deceiving, segmenting, zoom’s in on details, look at very similar metrics and see how they compare. Segmentation can reveal what exactly is influencing numbers.
*   Use (correlation) logic like: If we see data in point A with a spike then we should see also a spike in point B. - Loads of mobile sales, really ? This means we should then also have loads of mobile users, lets check if that is indeed true.
*   Play with data. For example, calculate rate between metrics, like A is 10x times bigger than metric B, and 100x times bigger than C, really ? Is that possible, should we inform the org this needs to be looked at? Nah, that can’t be right, etc…
*   Extract strong statements from data (also called insights, but useful here also) This means that X or Y, we need to tell to the wider audience, is that really true.
*   Look into the fluctuations of the metrics.  e.g: Why has this metric changed in this day? etc… This can help confirm theories.  

**Multiple Reviews**

*   Avoid doing it all in 1 go, review next day before sending out.  

*   Have someone else have a look at it (peer review), better if the person is aware of the context or area and has experience about previous existing numbers.
*   Release it in phases: first to a smaller group of people, as the first round, and if nothing comes of that, share it then more widely (like a typical product Dogfood / Beta)

**Leverage Math methods**

Leverage the traditional statistics: get aware of the statistic tools available and make use of them when it makes sense:

*   Hypothesis testing help make sure the difference seen in an AB test is significant and not due to chance.   

*   Average vs median - averages can lie  

*   Boxplots - check for outliers  

*   Correlations -  see if different variables change at the same time.  

*   Confidence intervals  

*   Statistical confidence  

*   Regression models as predictors  

*   etc…  
