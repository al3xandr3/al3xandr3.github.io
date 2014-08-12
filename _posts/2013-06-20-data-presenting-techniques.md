---
layout: post
title: Data Presenting techniques
category: statistics
tags:
  - statistics
  - data
intro: "And giving meaning to numbers"
---

Techniques used to better communicate the meaning of a result number.

## Odds Notation

Odds can sometimes be more intuitive to understand that raw percentages.
Even when using % might be good to also show the odds notation value next to it.

Notation "A:B" describes how much A we get for every B.
example: "1:4" means 1 in 4.

Odds are more intuitive than percentages:

- 1 in 2  = 50%  (= 1/2 * 100)
- 1 in 3  = 33%
- 1 in 4  = 25%
- 1 in 5  = 20%
- 1 in 6  = 16.66%
- 1 in 7  = 14%
- 1 in 8  = 12.5%
- 1 in 9  = 11.11%
- 1 in 10 = 10%
etc...

### Convert percentages to Odds notation

1. Start with 40%

2. get the decimal version (x/100): 0.4

3. 1/x (how many times does that fit in 1): 1/0.4 = 2.5

4. Odd: 1:2.5

5. (optional) round up number: 2:5 (multiply both by same value, this case 2x)

## Convert Odds to percentages:

1. 2:5

2. 2/5 = 0.4

3. 0.4*100 = 40%

## Reference

- "Odds require less computation (than percentages)": http://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/
- Reference: http://lifehacker.com/practical-math-shortcuts-for-everyday-life-1495337792




## Put it into perspective

Lets say some process had a significant speed improvement, measure in milliseconds, for example the speed of a web page loading, sometimes just giving out the number might no be ideal, because is hard for an audience to fully grasp its significance, milliseconds are small and many people don't often manipulate them. 
(And to be fair this is equally useful technique for analysts also, to be sink in the change size.)

Is often useful to put it into perspective.

For example: "The speed improvement was in the same order as having Husain Bolt going instead at speed of a cheeta"

Caveat: Be sure to make valid enough comparisons. Some things are just not the same.
