---
layout: post
title: Data in a Business
category: data
tags:
  - data
intro: "The data analyst role inside a business."
---

## The Essential Questions

### What is the business about?

Understand What is its core mission, what value it offers to users.

Also, who are the competition, how are they doing, and how is this business better than the competition ?


### What data is required?

Define the necessary infrastructure to allow measure the business:

- Choosing and defining the metrics that allow to measure the business (the KPIs).
- Create / Define the frameworks and standards, for:
   - Measuring (telemetry guidelines): What are the events we need capture? and how? Document it.
   - Collecting and processing data: What aggregations need to be done? Document it.
   - Testing hypotheses of the impact of new activities (AB testing, pre/post launch analysis)
   - Standard data definitions and methods (Churn, Survival, ARPU, Stickiness)
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
- Advocate that we should be working on the right things, aka the activities that potentially contribute the most to the set goals. And avoid wasting resources on the activities that don't contribute as much. 
  - Guide teams on creating the hypothesis of the ROI for each planned activity (guessing the ROI of an hypothesis is a hard thing, but it should leverage the learnings from the previous activities).
- To be able to fairly and scientifically evaluate the activities, there's the need to be a constant data advocate and educate business on measuring and being data driven. For example argue that every activity should include an AB test.




### Did the activity help? 

On each activity answer: did it (the activity) help achieve the business goals? And by how much?

Is a quantification exercise.

- Here often the activity owners ask from the analytics team data the results:
  - The resulting analysis should be tackled in a structured and consistent way, across every activity (as defined in the "What data is required?"), this will allow to compare activities directly.
  - Activity owners might not be asking for the right metrics that best measure the business impact. So advocate instead for the right metrics to use.
  - Naturally, activity owners are highly biased about their activity success and might not acknowledge bad results. But data analysis ethics require the truth.
- "And by how much?", is essentially the contribution of the individual activity towards the end goal, often hard to measure, but key even if just an estimation.
- When activity is not helping (towards the goal) then data analysts are responsible to raise it with adequate communication, to allow for timely course correction.



### What did we learn?

Once we have the numbers on by how much did the activity help, create an opinion of what worked what didn't and why? and create hypothesis for the next activities.

- When activity is unsuccessful ask why, was the problem in the hypothesis or in the execution?
- Build and curate the history of what worked and what didn't as it helps crystallize the mental model for ROI estimations of new activities in future.
- Communicate the learning to rest of business organization, so that all organization becomes smarter.
  - Communicate using best practices: tell stories instead of dumping numbers, be straight to the point (see minto pyramid).




### What new activities we can create from data ?

Use data analysis for:

- Product Usage; Understand and make a mental model of how users are using the product, learn insight into this, it feedbacks into where next to invest.
- Optimization; Example, are there specific usage characteristics that churning users have that we could be targeting to avoid them from churning?
- New opportunities; are there specific cohorts / markets that we are not targeting today, but the data is telling are high value?








## KPIs

### Choosing

The KPI's depend on 2 main factors:

- The type of business, product, market. (example: e-commerce KPIs are different than SaaS KPIs)
- The phase (or the goal) the company is in right now. (example: startups goals are different than a mature company ones)

Metrics should cover the customer life-cycle stages, look at how a user interacts with the product/service, from finding the product all the way to buying something (depending on type of business) and create a funnel that looks at each of the stages, typically: acquisition > activation > retention (and churn) > revenue.  

Reference: Lean Analytics


### Setting Goals

- Financially: They need to be able to support financially the endeavor
- Find what are the typical values for the business with similar biz model. To know whether under or over-performing. For example, might turn out that the biz current the churn rate is perfectly normal and more importantly, we probably aren't going to be able to move the needle even when investing heavily on it, better invest resources elsewhere.
- Also depend on the current company phase, where goals in a startup company are different from mature company.

Reference: Lean Analytics








## On Measuring Impact

### What to measure ?

1. Does it work? And how well ? (Quality and Latency)

  - % usage attempts with error
  - Speed/quality of usage

2. Is the feature being used ? (Usage Volumes)

  - Volumes of clicks, pageViews, sessions, etc...

3. How many people are using it ?

  - Unique users using it

4. How are people affected? Has it changed behaviors ?

  - Whats the behavior change in retention / engagement / acquisition?

5. Is it helping the business goals?

   - What the overall business Impact ?


4 and 5 are the most important, and also the hardest from the data analysis side, these are the ones who let us tell:

 - Whether the activity was successful and by how much (5).
 - And why, what is it doing, what behaviors is changing, that is resulting in success (4).

Also note, very important, when new activities are being planned they should clearly state its hypothesis on "what user behavior is it changing" so that it will result in KPI impact.

### How to measure ?

#### Hypothesis Experiment (AB test)

To measure impact of an hypothesis a solution is to use an Experiment (A/B test).

Once the A/B test is showing positive impact, the hypothesis is then deployed fully.

#### Full Launch 

*How we then quantify the final real impact ?*

I general we can look at the top level KPIs and see if trends change to have an idea if it really changed things or not. 

But in order to quantify it somewhat, an approach is to compare the time period before and after deployment and see what is the difference.

The caveat with this approach is that there can be other external confounding factors influencing it, like seasonality holidays, weekend vs week days, other deployments happening at the same time, etc... So this approach has to be carefully planned for and in general: try find ways to exclude out as many potentiality influencing external variables as possible.

When results show a small difference we are less confident about the results, because the external influences could be biasing somewhat it to either direction.






## Publishing Numbers Publicly

When publishing numbers publicly, publish also the definitions of the metrics, otherwise is hard to tell what they truly represent. And impossible to compare to the metrics of other companies.

In the finance world this is solved, for example, revenue, profit have very precise definitions. And every company reports them in same way.

