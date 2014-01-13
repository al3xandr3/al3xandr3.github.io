---
layout: post
title: Giving meaning to numbers
category: statistics
tags:
  - statistics
  - data
intro: "And Back-of-the-Envelope estimations"
---

## Odds Notation

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

## Convert percentages to Odds notation

1. Start with 40%

2. get the decimal version (x/100): 0.4

3. 1/x (how many times does that fit in 1): 1/0.4 = 2.5

4. Odd: 1:2.5

5. (optional) round up number: 2:5 (multiply both by same value, this case 2x)

## Convert Odds to percentages:

1. 2:5

2. 2/5 = 0.4

3. 0.4*100 = 40%


## Quick Estimation - how much one number is bigger than other

You looking at a table of numbers, and comparing 2 numbers, wondering by how much one is bigger than the other ?

- Starting with:
22 out of 4236

- aproximate to a rounder number
20 out of 4000
(some data is lost here, beware, how precise you need to be)

- take out 0's from each (dividing by 10)
2 out of 400

- devide again to get the smaller number to 1, try devide by prime numbers under 10: 2, 3, 5 or 7
(in this case 2)
1 out of 200

## Reference

- "Odds require less computation (than percentages)": http://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/
- Reference: http://lifehacker.com/practical-math-shortcuts-for-everyday-life-1495337792

