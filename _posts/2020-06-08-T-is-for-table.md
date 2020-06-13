---
layout: post
title: T is for Table
category: data
tags:
  - data
intro: "Python table manipulation library"
---

<br>

![tookie](https://drive.google.com/uc?id=1Izd0GONLY-G-gHa_1SPr2ujVmrFg9UYX)

<br>

T extends Pandas Dataframes with a collection of table manipulation methods as well as statistical, machine learning, financial and EDA methods. 

For example it integrates Bootstrap ReSampling statistical methods (a.k.a [Hacker Statistics](https://speakerdeck.com/jakevdp/statistics-for-hackers))


## Basic Usage

Create a plain data frame 

```python
>>> df = pd.DataFrame( {
    'user':['k','j','k','t','k','j']
    ,'period':['pre', 'pre', 'pre', 'pre', 'post','post'] 
    , 'kpi':[13,12,2,12,43,34]
    })
```

<font size="2" face="Courier New" >
<table border="1">
<thead>
<tr>
<th align="center"><strong> </strong></th>
<th align="center"><strong>user</strong></th>
<th align="center"><strong>period</strong></th>
<th align="center"><strong>kpi</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">0</td>
<td align="center">k</td>
<td align="center">pre</td>
<td align="center">13</td>
</tr>
<tr>
<td align="center">1</td>
<td align="center">j</td>
<td align="center">pre</td>
<td align="center">12</td>
</tr>
<tr>
<td align="center">2</td>
<td align="center">k</td>
<td align="center">pre</td>
<td align="center">2</td>
</tr>
<tr>
<td align="center">3</td>
<td align="center">t</td>
<td align="center">pre</td>
<td align="center">12</td>
</tr>
<tr>
<td align="center">4</td>
<td align="center">k</td>
<td align="center">post</td>
<td align="center">43</td>
</tr>
<tr>
<td align="center">5</td>
<td align="center">j</td>
<td align="center">post</td>
<td align="center">34</td>
</tr>
</tbody>
</table>
</font>
<br>

Filter the rows that have the value "post" and from that select the columns "user" and "kpi"

```python
>>> t.select( t.where(df, "period", "post"), "user", "kpi")
```

Note that alternativelly we can also use the Pandas pipe operator to chain functions, with the same result
I've renamed "pipe" to "p" when the T library is included:

```python
(df
  .p(t.where, "period", "post")
  .p(t.select, "user", "kpi"))
```

<font size="2" face="Courier New" >
<table border="1">
<thead>
<tr>
<th align="center"><strong>.</strong></th>
<th align="center"><strong>user</strong></th>
<th align="center"><strong>kpi</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">0</td>
<td align="center">k</td>
<td align="center">43</td>
</tr>
<tr>
<td align="center">1</td>
<td align="center">j</td>
<td align="center">34</td>
</tr>
</tbody>
</table>
</font>
<br>

Calculate the mean's confidence interval. It includes plotting it.

```python
>>> t.ci_mean(pd.DataFrame (np.random.normal(size=(37,2)), columns=['A', 'B']), 'A')
```
    {'mean': -0.33, '95% conf int of mean': array([-0.64, -0.03])}

![ci_mean](https://raw.githubusercontent.com/al3xandr3/T/master/docs/ci_mean.png)


## More Examples

[https://github.com/al3xandr3/Data-Science-ipynb/blob/master/t%20is%20for%20table%20version2.ipynb](https://github.com/al3xandr3/Data-Science-ipynb/blob/master/t%20is%20for%20table%20version2.ipynb)



## Run Tests

    > cd "C:\path\my\projects\t"
    > pytest


<br>
<br>

## Project updates hosted in github:  [https://github.com/al3xandr3/T ](https://github.com/al3xandr3/T )

<br>