---
layout: post
title: User Lifecycle Analytics Framework
category: data
tags:
  - data
intro: "User Lifecycle Analytics Framework"
---

The "User Lifecycle Analytics Framework" is a structured way to look at a metrics of a business to help understand its current status, measure evolution, find opportunities, etc... 

Different business might need somewhat different frameworks, but an important realization is that having a framework is useful, gives structure, reveals measures to look at and insights that ultimately help the business.

A business will naturally go through different stages and will have different needs depending on the stage that is in. For example, a business might not have enough users, and thus needs to invest on acquisition, or instead it has enough users but the revenue is not realized yet. 

So in general the Business might need over time to shift focus and zoom in on a specific topic at a time, while never loosing attention on the business as a whole.

This framework is about the user lifecycle, it considers that within a business the user has a specific lifetime and different phases of maturity, from first discovering the product, to becoming an active user, to using it consistently, to potentially influencing others to join in, etc... all the way to stop using it.

Each business has natural specific user lifecycle strengths and might even want to target on specific strengths.




## Acquisition


## Activation


## Retention and Stickiness


## Growth

Virality 

Net Promoter Score - tool that can be used to gauge the loyalty of a firm's customer relationships. It serves as an alternative to traditional customer satisfaction research


## Churn

Churn is a measure of when customers leave, of when users stop using the product or service.
A business wants to keep its customers, so it wants to minimize churn.
Churns is all about "customer retention".


### A look into a business churn

 - Churn defined: it might vary with business

 - What is the current churn ? -> funnel of churn at different points in user life cycle.

 - Is current churn acceptable or really worrying ?
	- Churn over time   		
	- Competitors churn
	- Breakdown by country, platforms, etc...
	 
  - How and Why users Churn? -> Deep dive Compare non-churning users to churning users
      - Number of platforms used
      - Do 1st day events have impact in churn (short/medium/long term)?
      - Does regular product feature usage (or lack of) have impact in churn?
      - Just before churning (and comparing to a previous time), is there a:
        - Change in usage frequency?
   		- Last features used before churning?
      - What time of year are top churners from and hypothesis and why ?
      - What period in the business life were the top churners from and why ?
      - Can we predict a user is churning soon, given his recent usage?
      - etc... all kind of breakdowns we could think of...

   - (From the How and Why users Churn? insights) Suggestion on the opportunities for the business to invest on.

Similar structure can be used for other topics, like acquisition, retention, etc...

### Avoiding Churn

Understanding why users churn can be useful, it can open opportunities for saving users from churning.
A Churn prediction model would tell us userA has 95% probability of churning next week.
We could then reach out to the user with an incentive (email, an offer, a survey) to try avoid the churn.

### Acceptable Churn 

We often want to have the churn as small as possible, but do take into account of what is the common churn for this type of application, from competitors for example, because it might be the effort of reducing churn from a certain point onwards requires an effort that could bring better returns if applied else where.

In an extreme example: the money invested in reducing churn from 3% to 1%, if applied in a new feature of the product, might return more users than the gain of extra users saved from churn. 


## Revenue


## Quality & Performance


## Business *Scorecard*

Once the frameworks and its definitions and metrics are agreed upon, we can build a scorecard that includes all of the framework's metrics so we can have a view of the business end-to-end.

A funnel or an approximation of it is commonly used approach.

This can be generated as a recurring report for: Week on Week, Month on Month, Year on year, etc...

Besides the framework metrics, we need include also the defined top level business goals metrics, they might have been defined outside of the user life-cycle model context.



### Measuring activity impact

This scorecard can also be used for another application, which is measuring impact of a product change: 
- Run an AB test
- Apply scorecard to users affected by the new change and compare to the scorecard of the users not affected by change.
- See whether the product change has had a successful impact in overall business.

The scorecard applied in this way, should be answering 2 questions:
- Does the change impacts to business goals? (the top level business goals)
- Why? What user behaviors are we changing that contributes to that? -> we can see by looking at what part of the scorecard (user life-cycle) changed the most.


## Metrics: Active Users

A fairly standard metric (industry standard) is the user activity in the application (in-app activity), for example:

- DAU, daily active* user
- WAU, weekly active user
- MAU, monthly active user

*Activity is defined by user explicit interactions with the application. For example, open the application, browsing application content, using application features, etc... similar definition to a web user session.
Note that notifications that reach the user but are not interacted with, should not trigger an AU signal.

The AU metric in the User life cycle:

- Acquisition (installs/DAU, registrations/DAU, trials/DAU): is a measure of new users, how much of the DAU is from registration, or from installs, or from trials...
- Retention (or Survival), if after installation user still active in application, for Day1, Day2, Day3, etc... Week1, W2, W3, etc... Month1, Month2, etc...
- Engagement (DAU/MAU), DAU divided by MAU, ex: 50% means that for 15 days in a month (30 days) the user was active.
- Growth (or Virality): K-Factor, = Viral_Installs / Total_Installs, or = Viral_AU / Total_AU
- Revenue: Average Revenue per DAU

Other metrics:
- There will be other application specific metrics to use. These are dependent on application type.
- Meaning of different metric trends: ex: MAU is growing but DAU is flat, what it means? that there's loads of churn, many users using the application, but they don't stay, so they don't accrue to DAU.

Reference: 
http://www.slideshare.net/agarimella/social-gaming-metrics