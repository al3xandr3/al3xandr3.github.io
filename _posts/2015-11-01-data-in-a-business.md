---
layout: post
title: Data in a Business
category: data
tags:
  - data
intro: "The data analyst role inside a business."
---

## Baseline


### What is the business about?

Understand What is its core mission, what value it offers to users.

Also, who are the competition, how are they doing, and how is this business better than the competition ?


### What data is required?

Define the necessary infrastructure to allow measure the business:

- Choosing and defining the metrics that allow to measure the business (the KPIs).
- Create / Define the frameworks and standards, for:
   - Measuring (telemetry guidelines): What are the events we need capture? and how ? How to document it ? 
   - Collecting and processing data: What aggregations need to be done? How to document it ?
   - Testing hypotheses (AB testing)
   - Re-usable data techniques and methods (Churn, Survival, ARPU, Stickiness)
- Reporting Infrastructure.


### How is the business doing?

 Answer this, By understanding the top-level reality of the business. This is very tied to the previous step, but also involves:

- Know what are the business goals. Be part of the discussion on defining the business goals if needed. These are key, this is how we evaluate the business health, each business activity and even each individual contribution.
- Setting up, analyzing, digesting and sharing frequently the top metrics.






## Accompanying the business on its day-to-day activities

Once is clear what is the business about, how is it doing and where it should be going there's the need to accompany the business on its daily activities.


### What should the business be doing?

And equally important, what it should not be doing. Includes:

- Understand what drives the current KPIs volumes? How can we get more of that ? What opportunities are we missing? What kind of activities do not drive KPIs further? 
- Advocate that we should working on the right things, aka the activities that potentially contribute the most to the set goals. And avoid wasting resources on the activities that don't contribute as much. 
  - Guide teams on creating the hypothesis of the ROI for each planned activity. Guessing the ROI of an hypothesis is a hard thing, but it should leverage the learnings from the previous activities.
- To be able to fairly and scientifically evaluate the activities, there's the need to be a constant data advocate and educate business on measuring and being data driven. For example argue that every activity should include an AB test.




### Did the activity help? 

On each activity answer: did it (the activity) help achieve the business goals? And by how much?

Is a quantification exercise.

- Here often the activity owners ask from the analytics team data reports:
  - Tackle requests in a structured and consistent way, that is the same way for every activity as defined in "What data is required?", this will allow compare activities directly.
  - Activity owners might not be asking for the right metrics that best measure the business impact. So advocate instead on what metrics they should be looking at. There might still exist some metrics that are useful for the particular activity, so show how to query them and hand it over to activity owners.
  - Naturally, activity owners are highly biased about their activity success and might not acknowledge bad results. But data analysis ethics require the truth.
- "And by how much?", is essentially the contribution of the individual activity towards the end goal, often hard to measure, but key even if just an estimation.
- When activity is not helping (towards the goal) then data analysts are responsible to raise it with adequate communication, to allow for timely course correction.



### What did we learn?

Once we have the numbers on by how much did the activity help, create an opinion of what worked what didn't and why? and create hypothesis for the next activities.

- When activity is unsuccessful was the problem in the hypothesis or in the execution?
- Build and curate the history on what worked and what didn't as it helps crystallize the mental model for ROI estimations of new activities.
- Communicate the learning to rest of business organization, so that all organization becomes smarter.
  - Communicate using best practices: tell stories instead of dumping numbers, be straight to the point (see minto pyramid).




### What new activities we can create from data ?

Data analysis can reveal new insights that can then lead to hypothesis creation for new activities.

- Are there specific cohorts / markets that we are not targeting today, but that the data is telling are high value?
- Are there specific usage characteristics that churning users have that we could be targeting to avoid them from churning?





## On Measuring Impact

To measure impact of an hypothesis a solution is to use an Experiment (A/B test).

Once the A/B test is showing positive impact, the hypothesis is then deployed fully.

*How we then quantify the final real impact ?*

I general we can look at the top level KPIs and see if trends change to have an idea if it really changed things or not. 

But in order to quantify it somewhat, an approach is to compare the time period before and after deployment and see what is the difference.

The _big_ caveat with this approach is that there can be other external confounding factors influencing it, like seasonality holidays, weekend vs week days, other deployments happening at the same time, etc...

So this approach has to be carefully planned for and in general: try find ways to exclude out as many potentiality influencing external variables as possible.

When results show a small difference we are less confident about the results, because the external influences could be biasing somewhat it to either direction.

A small difference is more easily influenced by external variables than a big difference can be(influenced). Big differences can also be influenced but we can normally tell a big external influencing factor anyway (like a country holiday) and we can then try use analytical methods to try exclude/include the biased/unbiased cohorts.

So we can only really tell when we observe a big difference and we know we are excluding the big external influencing factors.




## Publishing Numbers Publicly

When publishing numbers publicly, publish also the definitions of the metrics, otherwise is hard to tell what they truly represent. And impossible to compare to the metrics of other companies.

In the finance world this is solved, for example, revenue, profit have very precise definitions. And every company reports them in same way.
