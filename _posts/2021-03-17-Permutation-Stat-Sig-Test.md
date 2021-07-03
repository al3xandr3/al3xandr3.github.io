---
title: Statistical Significance test using Permutation
category: data
tags:
  - data
  - montecarlo
excerpt: "Statistical Significance test using Permutation"
---

<br>

Here's a method that I enjoy a lot for significance testing, it is based of the monte carlo sampling family of methods.

It allows to check if the difference between 2 datasets summarized with a custom metric are significantly different or in fact belong to the same distribution.

This gets used a lot by data scientists, for example to check if the results of an AB test are significantly different.
Or if the January results are significantly diferent than the ones from February for example.

There's several existing methods to do this type of test, but they require careful selection depending on the shape of the data, sample equivalency between data sets, large data vs small, previously known information, whether for mean or for median, etc.

This approach, and one of the reasons that i like it, is that we can use custom function, mean, median, or any other formula and does not have any other special requirements.

Just give it the custom function, the 2 data sets and spits out whether there is a stat sig difference.

Included now into the T library: [https://github.com/al3xandr3/T](https://github.com/al3xandr3/T)

## Basic Usage


```python
# Generic permutation test, using a custom function
t.hypothesis_perm_diff([2,3,1,2,3,1], [1,2,3,4,5], np.median, int(1e4))
```
      {'Observed Difference': -1.0,
      'func(sample1)': 2.0,
      'func(sample2)': 3.0,
      'p-value': 0.4461,
      'decision': 'No significant difference'}



### Reference

- https://www.inferentialthinking.com/chapters/12/1/AB_Testing#Permutation-Test
- https://www.linkedin.com/pulse/20140603072945-29806983-net-promoter-score-nps-confidence-interval-of-nps
- https://towardsdatascience.com/bootstrapping-vs-permutation-testing-a30237795970

<br>
<br>
