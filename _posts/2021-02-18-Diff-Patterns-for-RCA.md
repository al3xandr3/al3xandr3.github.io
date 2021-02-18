---
layout: post
title: Diff Patterns for RCA
category: data
tags:
  - data
intro: "Diff Patterns function python function in the T library"
---

<br>

Diff Patterns automates root cause analysis (RCA) discovery.

It looks through all the combinations of values and surfaces the patterns most often associated with failure (or for a given value).

Leverages the Apriori algorithm for frequent item set mining and association rule learning. But then uses a non-traditional way to prioritizing the patterns found using precision, recall and the F-measure.

Included now into the T library: [https://github.com/al3xandr3/T](https://github.com/al3xandr3/T)


## Basic Usage

Let us assume we have a collection of errors happening in a system, and we collect the data: 

```python
t2 = pd.DataFrame({'user':['k','k','j','k','t','k','j','j'] \
                 , 'period':['before', 'before', 'before', 'before', 'before', 'after','after','after'] \
                 , 'cohort':['control','control','control','control','control','control','control','control'] \
                 , 'isLabel':['success','failure','failure','failure','failure','success','success','failure']         
        })
```

|	user	|period	|cohort|	isLabel|
|-------|--------|---------|--|--|
|k	|before	|control |	success |
|k	|before	|control |	failure|
|j	|before	|control |	failure|
|k	|before	|control	| failure|
|t	|before	|control	| failure|
|k	|after	|control	| success|
|j	|after	|control	| success|
|j	|after	|control	| failure|

And we want to identify what patterns are often associated with failure. This process helps us do RCA i.e help pin point the conditions where failures happen (bugs).

We run 

```python
Dataset = t2
Column  = "isLabel"
ClassificationA = "failure"
ClassificationB = "success"

# Other filtering parameters
output = t.diff_patterns(Dataset, Column, ClassificationA, ClassificationB)
```

And get: 


| Pattern                                              |   TP |   FN |   FP |   TN |   precision |   recall |   accuracy |       f1 |      f05 |       f2 |
:|:---------------------------------------|-----:|-----:|-----:|-----:|------------:|---------:|-----------:|---------:|---------:|---------:|
| {'period:before'}                             |    4 |    1 |    1 |    2 |    0.8      |      0.8 |      0.75  | 0.8      | 0.8      | 0.8      |
| {'period:before', 'cohort:control'}           |    4 |    1 |    1 |    2 |    0.8      |      0.8 |      0.75  | 0.8      | 0.8      | 0.8      |
| {'cohort:control'}                            |    5 |    0 |    3 |    0 |    0.63    |      1   |      0.63 | 0.77 | 0.68 | 0.89 |
| {'user:j'}                                    |    2 |    3 |    1 |    2 |    0.67 |      0.4 |      0.5   | 0.5      | 0.59 | 0.4 |
| {'user:j', 'cohort:control'}                  |    2 |    3 |    1 |    2 |    0.67 |      0.4 |      0.5   | 0.5      | 0.59 | 0.4 |
| {'user:k', 'period:before'}                   |    2 |    3 |    1 |    2 |    0.67 |      0.4 |      0.5   | 0.5      | 0.59 | 0.4 |
| {'user:k', 'period:before', 'cohort:control'} |    2 |    3 |    1 |    2 |    0.67 |      0.4 |      0.5   | 0.5      | 0.59 | 0.43 |
| {'user:k'}                                    |    2 |    3 |    2 |    1 |    0.5      |      0.4 |      0.38 | 0.44 | 0.48  | 0.43 |
| {'user:k', 'cohort:control'}                  |    2 |    3 |    2 |    1 |    0.5      |      0.4 |      0.375 | 0.4 | 0.48  | 0.43 |


Telling us the the "period:before" is the pattern most associated with failures on this data.

F1, F0.5 and F2 are f-measures that help prioritize the patterns

### Reference

Diff Patterns has a different origin (i.e. developed separately), but interestingly enough is very very similar to Minesweeper at Facebook: [https://engineering.fb.com/2021/02/09/developer-tools/minesweeper/](https://engineering.fb.com/2021/02/09/developer-tools/minesweeper/)

<br>
<br>
