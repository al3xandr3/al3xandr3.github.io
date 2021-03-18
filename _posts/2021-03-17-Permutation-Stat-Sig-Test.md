---
layout: post
title: Statistical Significance test using Permutation
category: data
tags:
  - data
  - montecarlo
intro: "Statistical Significance test using Permutation"
---

<br>

Here's a method that I enjoy a lot for significance testing, it is based of the monte carlo sampling family of methods.

It allows to check if the difference between 2 datasets summarized with a custom metric are significantly different or in fact belong to the same distribution.

This gets used a lot in my line of work, for example to check if the results of an AB test are significantly different.
Or if in January results are significantly diferent than the ones from February for example.

There's several ways to approach this test, and some of them are limited by the shape of the data if normal versus other, with known information about the distributions versus not known, same size of data sets versus different sizes, etc. Also vast majority of times it focuses on the mean, with a few minority focusing on the median.

This approach and one of the reasons that i like it, is that we can use custom function, mean, median, or any other formula and does not need to know the shape of the distribution.

Just give it the custom function, the 2 data sets and spits out if there is a stat sig difference.

Included now into the T library: [https://github.com/al3xandr3/T](https://github.com/al3xandr3/T)

## Basic Usage


```python
# Generic permutation test, using a custom function
hyp = t.hypothesis_perm_diff([2,3,1,2,3,1], [1,2,3,4,5], np.median, int(1e4))
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
