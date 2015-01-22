---
layout: post
title: Data Analysis Process
category: data
tags:
  - data
  - arguments
intro: "The Data Analysis (Structured) Process"
---

## Structured Data Analysis: CoNVO

CoNVO is a structured way to tackle data analysis problems.
Uses a few steps to decompose the problem, structure the analysis, sketch out a solution and envision how is going to be acted upon.
Is essentially looking first at the big picture and then rationally walk towards a solution to the problem.

A written down CoNVO is done before start implementing a data analysis solution.

### Context

> Context is the defining frame, that is apart from the particular problem we are interested in solving.

- Who are the people / organizations involved? 
- What they do?
- Their purpose/goal?
- Who are the decision makers ?

Example:

This department in a large company handles marketing for a shoe manufacturer with a large online presence. The department’s end goal is to convince new customers to try its shoes and to convince existing customers to return again. The final decision maker is the VP of Marketing.




### Need

> What are the specific needs that could be fixed by intelligently using data? These needs should be presented in terms that are meaningful to the organization.

These are not well defined needs:

- We need a weekly dashboard.
- We need a daily report.

Well defined needs are instead:

- Our customers leave our website too quickly, often after only reading one article. We don’t understand who they are, where they are from, or when they leave.
- We want to decide between two competing vendors. Which is better for us?
- Is this email campaign effective at raising revenue?

This step is about identifying the problem: 

- What is the problem / motivation? 
- The organization is not able to ...
- How can the organization do ...


Hints:

- Often the brief from the organization describing the need is somewhat biased and not complete.
- Requires detailed understanding of the processes used.
- What does the intuition tells us ?
  - Talk to experts
  - Do quick data exploration
- This needs to be very clear, as is the basis for next steps.




### Vision

> The vision is a glimpse of what it will look like to meet the need with data. It consists of a mockup of the argument we’re going to make, that tackles the need.

- Argument: Create an argument (a claim), that solves the need:
  - By knowing ... will help solve the problem because ...
- Vision: Define the Vision that solves it. 
  - example: A regular report with the KPIs
- Mockup: Create a Visual mockup (if makes sense of the solution)


Hints:

- Try find the simplest solution possible to address the need.
- Look at a catalog of existing solution for similar problems. (Maybe keep and curate a catalog of known solutions).
- Create a visual mockup of what will look like. - Paper, powerpoint, excel are all good tools for this.
- Often requires a few iterations of re-defining the vision:
 - Do quick data explorations to get better intuition.
 - Have a Kitchen Sink interrogation (can open up new ideas).
 - Do we have all the data we need ?
 - Go into details, often limitations will force update the vision.
 - Can be useful to work backwards from the solution to find what is needed.
 - Simulate end user interaction with the mockup solution, see if it works.

#### KPI's

> Beware of the KPI rabbit hole: KPIs are incentives, and is fairly impossible to predict fully all effects of an incentive up front. Thus too narrow focus, especially on single KPIs can easily become counter-productive. => Use multiple KPIs, don't forget common sense.

Examples:

- Price of digital media entertainment per hour - http://gigaom.com/2013/02/10/cost-per-hour-a-new-metric-for-paid-content/
- Food price per kg - because package size varies, the price per kilogram is a clear way to compare prices across foods and packages sizes.



### Outcome

> How the work will actually make it back to the rest of the
organization and what will happen once is there. How will it be used?

- How will the organization act on it ?
- Once the organization acts on it, how we check it has been successful ? - plan a follow up study.
- Who will handle its maintenance?
- Who needs to be trained on it ? - Both on how to understand how to interpret it, and how to maintain it.



## Implementing CoNVO

After the written down CoNVO, we then go into applying the sketched out vision:

- Define timeline for each task, don't let a particular one go on forever. Beware of rabbit holes. Do a Gantt chart, for example.
- The implementation should all be focused on the argument (and mockup) defined. Should be about trying to find evidence to support the argument claim.
  - Go collect the data, summarize it and confirm it supports the argument claim.
  - On each step, wrote down the summary of the findings, is a way to clear up the result in the head and to layout next steps, often realizations come from this practice. Also good to avoid forgetting all the context, next time we need to look at it.
- Include Validations steps:
  - Be sure to check the assumptions.
  - After each step, validate is correct (like QE)
  - Check frequently with stakeholders that it is meeting their needs.
  - *pre-Mortem exercise*: In contrast to the post-Mortem where you try figure out what went wrong after something went wrong, the pre-Mortem is a preventive simulation. Start the thought process as: Image the project went bad, what are the most likely causes of where it went bad, what are the weakest links, that should be strengthen up?
- Communicate message in a polished way. Eye candy and selling presentation skills matters for the final output. Note, this is a whole separate phase from previous EDA (Exploratory data analysis), the EDA phase has the purpose of showing what things to focus one, most of exploration end up nowhere and are throwed away, this phase focus on best way of communicating things the EDA found.

## Reference 

- Thinking with Data, Max Shron: http://vimeo.com/98768831. And http://blog.mortardata.com/post/91270402361/max-shron-thinking-with-data-talk
