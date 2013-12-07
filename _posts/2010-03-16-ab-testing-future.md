--- 
layout: post
title: AB testing tools in the Future
category: data
tags:
  - data
  - abtesting
  - idea
intro: "A view on AB testing tools of the future"
---

A view on AB testing tools of the future.

## How it works:

 1. You plugin the AB testing tool to your application and say: optimize page A, on the measurable goal X (for example downloads). 
 2. The tool by itself: creates new UI variation -> tests it -> analyses results -> makes it default -> creates new UI variation -> tests it -> etc... This goes ad eternum... Much like natural evolution, keeps experimenting/mutating, until it finds the UI that works best for the defined goals. 

## Details:

 * **New UI variations** do not need(shouldn't even) be 100% random, they should use smarter techniques like: genetic(and other search/optimization) algorithms + tried out design heuristics + branding guidelines(avoid color A, use font B, etc..) + (sampled)user filtering + some amount of randomness + etc.. 

 * **Knowledge Base**: Build a Database with the test results, that collects knowledge of what worked and what didn't (for a given context). Just as Pandora collects user input for building its recomendation system, this accumulated knowledge would serve as input for the task of generating the new UI variations. _Note:_ The amount of data is key; the bigger the amount of test results, the closer to all possible variations thus the closer to all the best optimizations. With a large amount of test and tried out results quicky we would get the perfect UI rules. 

 * **Page Flow**: Tool should optimize not only the page itself, but also navigation along pages, customizing content depending on the flow For example, forward the user to a different page, depending on the keyword used in a search engine when arriving at the website. 

 * **Personalized UI**: What works for user A might not work for B. A 16 years old likes different things than a 50 years old. Even for a unique user, his tastes changes over over time: winter vs summer, week vs weekend, working hours vs non-working hours etc... So the perfect interface might need to be changing over time(? Don't assume, experiment and see if it works...). 
