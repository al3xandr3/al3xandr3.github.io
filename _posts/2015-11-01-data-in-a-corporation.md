---
layout: post
title: Data in a Corporation
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
   - Measuring (telemetry guidelines)
   - Collecting and processing data
   - Testing hypotheses (AB testing)
   - Re-usable Analyzing data techniques (Churn, Survival, ARPU, Stickiness)
- Reporting Infrastructure.


### How is the business doing?

 Answer this, By understanding the top-level reality of the business. This is very tied to the previous step, but also involves:

- Know what are the business goals. Be part of the discussion on defining the business goals if needed. These are key, this is how we evaluate the business health, each business activity and even each individual contribution.
- Setting up, analyzing, digesting and sharing frequently the top metrics.






## Accompanying the business on its day-to-day activities

Once is clear what is the business about, how is it doing and where it should be going there's the need to accompany the business on its daily activities.

### What should the business be doing?

And equally important, what it should not be doing. Includes:

- Guide teams on creating the hypothesis of the ROI for each planned activity. Guessing the ROI of an hypothesis is a hard thing, but it should leverage the learnings from the previous activities.
- Argue that we should working on the right things, aka the activities that potentially contribute the most to the set goals. And avoid wasting resources on the activities that don't contribute as much.
   - Understand if incentives are pointing towards right direction or not. If not, then there's a conflict, that needs to be resolved.
- To be able to fairly and scientifically evaluate the activities, there's the need to be a constant data advocate and educate business on measuring and being data driven. For example argue that every activity should include an AB test.



### Did the activity help?

On each activity answer: did it (the activity) help towards the goal? And by how much?

- Here often the activity owners ask from the analytics team data reports:
  - Tackle requests in a structured and consistent way, that is the same way for every activity as defined in "What data is required?", this will allow compare activities directly.
  - Activity owners might not be asking for the right metrics. Looking at the wrong metrics does not help anyone, so try educate instead on what metrics we should be looking at and why.
  - Naturally, activity owners are highly biased about their activity success and might not acknowledge bad results. Be aware of this.
- "And by how much?", is essentially the contribution of the individual activity towards the end goal, often hard to measure, but key even if just an estimation.
- When activity is not helping (towards the goal) then data analysts are responsible to raise it with adequate communication, to allow for timely course correction.



### What did we learn?

Once we have the numbers on by how much did the activity help, create an opinion of what worked what didn't and why? and create hypothesis for the next activities.

- When activity is unsuccessful was the problem in the hypothesis or in the execution?
- Build and curate a history on what worked and what didn't as it helps crystallize the mental model for ROI estimations of new activities.
- Communicate the learning to rest of business organization, so that all organization becomes smarter.


### What new activities we can create from data ?

Data analysis can reveal new insights that can then lead to hypothesis for new activities.

- Are there specific cohorts / markets that we are not targeting today, but that the data is telling are high value?
- Are there specific usage characteristics that churning users have that we could be targeting to avoid them from churning?
- Famous example: buying specific items, could reveal, with a certain probability that you are pregnant and thus we could be suggesting more items that are typically bought by pregnant woman.




## Data Science Techniques

Here are a collection of data science techniques that can came in handy:

- For day-to-day better data insights
- For estimations
- To generate new activities

Techniques:

- Back-of-envelope calculations (an estimation technique): the art of guess estimating can be very useful to quickly run numbers on what is going to happen, or impact, etc... 
- Classification: Is this a high value user or not? Create a classification, so that we enrich the data set with a new useful property to analyze the rest of the data with.
- Regression: (as an estimation technique) what results are we getting in 3 months if this trend continues? When are we getting to result XYZ?
- Similarity matching: Find what characteristics users that churned have, find the similar users from your user-base, hypothesize that they are at risk of churning, and do activities to help churning.
- Clustering: what characteristics have our most engaged user base has? How we can incentive the rest of user-base in same direction?
- Profiling: aka behavior description, if a high value user is deviating his behavior, maybe we could reach out to him.
- Link prediction: recommendations, friend of a friend.
- AB testing, how to scientifically (accurately) test an hypothesis ?






## Publishing numbers publicly

When publishing numbers publicly, publish also the definitions of the metrics, otherwise is hard to tell what they truly represent. And impossible to compare to the metrics of other companies.

In the finance world this is solved, for example, revenue, profit have very precise definitions. And every company reports them in same way.
