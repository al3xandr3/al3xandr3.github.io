---
layout: post
title: Data Analysis Techniques
category: data
tags:
  - statistics
  - data
intro: "Data Analysis Techniques And Tools"
---

Techniques to transform and interpret data in a useful way.

## Quantify Impact

### I want to
Understand how big is a change.
(i.e.  calculate the relative change)

### How
Lets say a bank raised a rate from 3% to 5%, difference is 2% but is ambiguous to say "the rate was increased by 2%". It looks like a very small increase, from a +2 increase from an original of 3.

- Absolute change was 2% but 

- Relative change (5 - 3) / 3 = 0.66(6), so rate was increased by 66%.

Relative calculation general formula:  (new - reference) / reference



### I want to 
Understand how much is one number bigger than other

You looking at a table of numbers, and comparing 2 numbers, wondering by how much one is bigger than the other ?

- Starting with:
22 out of 4236

- approximate to a rounder number
20 out of 4000
(some precision is lost but depending on application that is often ok)

- take out same number of 0's from each (dividing by 10)
2 out of 400

- divide to get the smaller number to 1, try divide by prime numbers under 10: 2, 3, 5 or 7
(in this case 2)
1 out of 200




## Data Quality: confidence interval

### I want to
Give out some certainty on the average number i am giving out, by adding a range to where is this number is expected to fall into, most of the time.

### How
When estimating a parameter like a mean from random samples, confidence interval helps quantify uncertainty, giving an interval in which we can expect the value to be most of the time.

Prepared Excel: [confidence_interval.xlsx](https://drive.google.com/file/d/0B3ypY27pPCJySjUyclgzX3RqM1k/edit?usp=sharing)

Python:

	def confidence_interval (s):
	    from scipy import stats
	    import scipy as sp
	    import numpy as np
	    import math
	    n, min_max, mean, var, skew, kurt = stats.describe(np.array(s))
	    std=math.sqrt(var)
	    
	    #The location (loc) keyword specifies the mean.
	    #The scale (scale) keyword specifies the standard deviation.
	    # We will assume a normal distribution
	    R = stats.norm.interval(0.975,loc=mean,scale=std/math.sqrt(len(s)))
	    return R




## Data Quality: hypothesis testing

### I want to
Make sure the results i got are statistically significant (and not due to chance).

### How

#### Test of Proportion

For comparing percentages metrics like Conversion Rate, Click-through Rate etc, use a proportion test.

**Finding Sample Size**

To find what sample size is needed for a test, use:

In R stats:

To go from a 1.5% to a 2.5%, thus a 1% increase rate, at a 5% significance level and 80% power of test:

	> power.prop.test(p1=0.015, p2=0.025, sig.level=0.05, power=0.8)
	 
	 Two-sample comparison of proportions power calculation 
	 
	          n = 3075.582
	         p1 = 0.015
	         p2 = 0.025
	  sig.level = 0.05
	      power = 0.8
	alternative = two.sided
 
We need at least 3076 samples in each group.

In Python:

To go from a 1.5% to a 2.5%, thus a 1% increase rate, at a 5% significance level and 80% power of test:

	> import statsmodels.stats.api as sms
	> es = sms.proportion_effectsize(0.015, 0.025)
	> sms.NormalIndPower().solve_power(es, power=0.8, alpha=0.05, ratio=1)

We need at least 3029 samples in each group.
(not sure why they not exactly same as in R, might use slightly different calculation approximations)

**Test if statistically significant**

Chi-Squared Test

In R:

For example, to test two campaigns each with a 1000 displays, 32 and 54 conversions:

	> prop.test(c(32, 54), c(1000,1000))
	 
	    2-sample test for equality of proportions with continuity correction
	 
	data:  c(32, 54) out of c(1000, 1000)
	X-squared = 5.3583, df = 1, p-value = 0.02062
	alternative hypothesis: two.sided
	95 percent confidence interval:
	 -0.040754721 -0.003245279
	sample estimates:
	prop 1 prop 2 
	 0.032  0.054 

The p-value is less than 0.05, so we can reject the hypothesis that conversion rates are equal and assume the second group has a higher rate.

Prepared Excel: [hypothesis_testing_proportion.xlsx](https://drive.google.com/file/d/0B3ypY27pPCJyaGxqc1lLVTkxa1k/edit?usp=sharing)

Prepared Excel: [hypothesis testing proportion_Chi-squared.xlsx](https://drive.google.com/file/d/0B3ypY27pPCJyREY2cUNWS25PSGc/edit?usp=sharing)


Reference:

- Comparing Population Proportions 1 - https://www.youtube.com/watch?v=a1Ye5RcWOqg
- Comparing Population Proportions 2 - https://www.youtube.com/watch?v=MNbat1lrJW4
- Hypothesis Test Comparing Population Proportions (part 3) - https://www.youtube.com/watch?v=dvSa_tx04hw



#### Test of Means

Comparing non-fractional values that follow a normal distribution (e.g. Average Order Value, Time Spent on Page etc.) is done with a Two-sample unpaired t-test.

Welch Two Sample t-test
Two-Sample T-Test 

**Find Sample size**

In R:

The recommended values for h are: 0.2 for small effects, 0.5 for medium and 0.8 for big effects.
Sample call for computing the test sample size for a campaign with an estimated medium effect and 10000 customers in the control group:

	> pwr.t2n.test(n1=10000, d=0.5, sig.level=0.05, power=0.90)
	 
	 t test power calculation 
	 
	         n1 = 10000
	         n2 = 42.21519
	          d = 0.5
	  sig.level = 0.05
	      power = 0.9
	alternative = two.sided

Only around 43 customers are needed in the test group.

**Test for significance**

In R:

	> t.test(group1, group2)
	 
	    Welch Two Sample t-test
	 
	data:  group1 and group2
	t = -1.5631, df = 99.423, p-value = 0.1212
	alternative hypothesis: true difference in means is not equal to 0
	95 percent confidence interval:
	 -7.0219603  0.8334419
	sample estimates:
	mean of x mean of y 
	 125.0789  128.1731 

Our p-value is greater than 5% so we cannot reject the hypothesis that the values are different. More tests or a larger sample size may be necessary.

Reference:

- http://www.marketingdistillery.com/2014/08/03/ab-tests-in-marketing-sample-size-and-significance-using-r/
- http://www.evanmiller.org/ab-testing/t-test.html







## Data Quality: Get an idea on the dispersion of the data

### I want to
Get an idea on the dispersion of the data, what values are more common, what values are outliers.

### Histogram

Shows the distribution of the data, what are the most (and least) frequent values

https://www.youtube.com/watch?v=asEuFvWGJDs

Prepared Excel: [histogram.xlsx](https://drive.google.com/file/d/0B3ypY27pPCJyRWFBbEFPRk11TEE/edit?usp=sharing)

### Boxplot

### I want to

- Check if distribution is symmetrical around the average.
- Inspect data for Outliers.

https://www.youtube.com/watch?v=DNpvSg2X0xQ

https://www.youtube.com/watch?v=ZFbPnwKwVWk

Prepared Excel: [boxplot.xlsx](https://drive.google.com/file/d/0B3ypY27pPCJyM1JtVlh0Tnp6UWs/edit?usp=sharing)

Boxplot also is very useful when comparing 2 data sets directly:

Here is an excel with 2 box plot side by side: [boxplot2.xlsx](https://drive.google.com/file/d/0B3ypY27pPCJyRk83bDFHUUljRXM/edit?usp=sharing)




### Simulations

### I want to

Simulate the behavior, this can be useful for: 

- Generate random data
- Try to guess what should it look like.
- Predict the future (based on the historical observations)

Sometimes in paper is enough. Paper is costly (especially in time) to run many simulations. To get for example the distribution of the solutions. 
For more than a few executions, use a computer (Excel, Python, Ruby, R, etc...).

Example:

- Given the history of values, what is the expected value in a week?
- Given the history of values, in how many days is expected to reach a certain value ?
- Trying to figure out whether the data im looking is being generated by sampling on visitors or being generated by sampling on visits, do a simulation on paper on what are the expected volumes sizes for each, see which one is closer.

Python Code: [simulate.py](http://github.com/al3xandr3/python/blob/master/simulate.py)






## I want to

Find impacting features in a specific goal.

Lets say i am looking at a web site new user registration flow, and i want to find areas that can be improved, for example i might find that users in mobile devices in Portugal are having a hard time to register and that consequently might lead to the finding that a page in that flow is incorrectly translated.

For then we need to break down the data by the dimensions available and look at them combined, to find strong signals.

This is also useful to pin down performance problems or even outliers.

### How to

- Decide on the main goal to use, for example, the registration rate (completed registration / started registration)
- Create (probably multiple) break downs by all the variables available to you (Country, Operating System, Device, Browser, Entry Page, Channel, referrer domain, etc...)

*When doing breakdowns*
- Keep in mind the context of the data, what dimensions make sense to look into and which ones it does not, start there.
- Discard dimensions - Find if there's enough volume in that dimension to be worth pursuing or not.
- Discard dimensions values lower than a significant volume (rows of a dimension, keep only the top 100, or 1k, etc...), not worth the investment of fix for Antarctic where there's only 1 person getting stuck in the registration. For example a column in Excel named Worth looking at? =IF(AND(G41>100, H41< 40%), TRUE, FALSE) - that is enough volume and bad performing, then label with True.
- Play around with the breakdowns, try combining in different orders, find generalizations, example mobile vs non-mobile users, instead of looking at operating systems list (in case they are significant enough). Find the simplest breakdown possible to find strong signal, look to simplify. End up with a couple of high level dimensions, containing only a few values (mobile vs non-mobile and natural vs paid search, for example).
- Choose dimensions and the way to analyze them on the way they can be acted upon, example android failing to register will mean a fix in the android dedicated web flow. For a bad performing referrer domain maybe makes more sense to pick up only the very successful ones and try to incentive those more, the bad performing ones, nothing much can be fixed there. - varies a lot on situation.




## Tools

> Choose best tool for the job

Excel is the notepad for data, great for a quick look, quick chart, prototype, final UI for a ad-hoc analysis, mostly used for EDA phase. Handles well small dashboards and reports, and some data manipulation, but from a certain size/complexity starts getting too time consuming and better to move on to next tool.

Python, is great on data ETL, data automation, handles building a data product with increasing complexity and size (as opposed to Excel) but also not too bad for EDA, especially with IPython.
Fully automated dashboard that creates and html report, sends email to people, runs in a server by itself, with very low maintenance.
Allows reproducible data analysis.
Might miss all the absolute latest most complex machine learning algorithms.

R is the most complete statistical and machine learning algorithm collection available (?). Better for running algorithms that do a specific thing, not to good to build complex automations and logic on top (compared to python).
