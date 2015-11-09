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
   - Analyzing data techniques (Churn, Survival, ARPU, Stickiness)
- Reporting Infrastructure.



### How is the business doing?

 Answer this, By understanding the top-level reality of the business. This is very tied to the previous step, but also involves:

- Know what are the business goals. Be part of the discussion on defining the business goals if needed. These are key, this is how we evaluate the business health, each business activity and even each individual contribution.
- Setting up, analyzing, digesting and sharing frequently the top metrics.






## Accompanying the business on its day-to-day activities

Once is clear what is the business about, how is it doing and where it should be going (the goals) then there's the need to accompany the business on its daily activities:

### What should the business be doing?

And equally important, what it should not be doing. Includes:

- Guide teams on creating the hypothesis of the ROI for each planned activity. Its a hard thing to do, also it should leverage the learning from the previous activities.
- Argue that we should working on the right things, aka the activities that potentially contribute the most to the set goals. And avoid wasting resources on the activities that don't contribute as much.
   - Understand if incentives are pointing towards right direction or not. If not, then there's a conflict, that needs to be resolved.
- Be a data advocate and educate on measuring and being data driven, communicate the frameworks defined in "What data setup is required?" to help the organization be data smarter, for example how to run an AB test to evaluate the activity hypothesis.



### Did the activity help?

On each activity answer: did it (the activity) help towards the goal? And by how much?

- When activity is not helping (towards the goal) then data analysts are responsible to raise it with adequate communication, to allow for timely course correction.
- "And by how much?", is essentially the contribution of the individual activity towards the end goal, often hard to measure, but key.


### What did we learn?

Once we have the numbers on by how much did the activity help, create an opinion of what worked what didn't and why? and create hypothesis for the next activities.

- When activity is unsuccessful was the problem in the Hypothesis or in the Execution?
- Build and curate a history on what worked and what didn't as it helps crystallize opinion and it feedbacks into new activities.
- Communicate the learning to rest of business organization, so that all organization becomes smarter.


### New activities from data insights

Data analysis can reveal new insights that can then lead to hypothesis for new activities.

- Are there specific cohorts / markets that we are not targeting today, but that the data is telling are high value?
- Are there specific usage characteristics that churning users have that we could be targeting to avoid them from churning?
- Famous example: buying specific items, could reveal, with a certain probability that you are pregnant and thus we could be suggesting more items that are typically bought by pregnant woman.




## Data Science Techniques

Here are a collection of Data Science Techniques that can be used for more sophisticated data analysis:

 - For day-to-day improved insights.
 - For estimation the evolution of the business given its history.
 - Generate new activities.

Techniques:

- Back-of-envelope calculations: the art of guess estimating can be very useful to quickly run numbers on what is going to happen, or impact, etc... 
- Classification: Is this a high value user or not? Create a classification, so that we enrich the data set with a new useful property for analyzing the rest of the data with.
- Regression: what results are we getting in 3 months if this trend continues? When are we getting to result XYZ?
- Similarity matching: Find what characteristics users that churned have, find the similar users from your user-base, hypothesize that they are at risk of churning, and do activities to help churning.
- Clustering: what characteristics have our most engaged user base has? How we can incentive the rest of user-base in same direction?
- Profiling: aka behavior description, if a high value user is deviating his behavior, maybe we could reach out to him.
- Link prediction: recommendations, friend of a friend.
- AB testing, how to scientifically (accurately) test an hypothesis ?



## Tackling Data requests

Questions to ask, when a data request comes in:

- What is the request?
- Is it worth ad-hoc analysis resources? What is the hypothesis on yearly goals impact?
- Tackling the request: 
  - 1. Is it measured properly? ( where is the documentation? )
  - 2. Is this an Ad-hoc analysis or recurring dashboard?
- For when is it needed ? is there a hard deadline, like launch date ?





## Publishing numbers publicly

When publishing numbers publicly, publish also the definitions of the metrics, otherwise is hard to tell what they truly represent. And impossible to compare to the metrics of other companies.

In the finance world this is solved, for example, revenue, profit have very precise definitions. And every company reports them in same way.
