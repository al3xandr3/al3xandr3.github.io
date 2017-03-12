--- 
layout: post
title: The Average of Averages is a No No
category: data
tags:
  - data
  - statistics
intro: "The Average of Averages is a No No"
---


## The Average of Averages is a No No

This is an easy bug to make when analyzing data, consider the following data:

*   day 1:   100 visits, 50 conversions, 50% success rate   

*   day 2:   200 visits, 50 conversions, 25% success rate   

*   day 3: 1000 visits, 50 conversions,  5% success rate   

*   day 4:      10 visits, 2 conversions   , 5% success rate

**Calculation of aggregations:**

At first you might be tempted to just do average of the success rates above:

Average of averages: (50 + 25 + 5 + 5) / 4 = **21.3%**

But lets calculate instead an average on totals: 1310 visits / 152 conversions = **8.6%**

Very different values, which one looks a more fair view on reality ?  

Well, considering that most people visited on day 3, and day 3 had a 5% conversion rate, 8.6% is a more credible total conversion rate.

An average looses information, its a summary forgetting the details in them, thus in example above, it can’t be used again for a new average that considers each of the days with equal weight. In case above, day 3 has more weight for the total conversion, than the other days, so an average of the total sum is more appropriate.

When day by day volume is similar, you might not end up seeing a significant difference between those 2 methods, but <u>as general rule don’t use the average of averages, otherwise might end up missing information and calculating a wrong view of reality</u>.
