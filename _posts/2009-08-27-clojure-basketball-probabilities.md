--- 
layout: post
title: Probability simulation of basketball throws
category: statistics
tags:
  - montecarlo
  - statistics
  - clojure
intro: "A probability simulation from the book Resampling: The New Statistics, using Clojure and Incanter"
---

A little probability simulation from the book _Resampling: The New
Statistics_, using Clojure and Incanter.

_Example 7-3:_ What is the probability that a basketball player will score
three or more baskets in five shots from a spot 30 feet from the basket, if on
the average she succeeds with 25 percent of her shots from that spot?

Three or More Successful Basketball Shots in Five Attempts, that is, a Two-
Outcome Sampling with Unequally-Likely Outcomes, with Replacement, Binomial
Experiment.

Lets start with the Resampling book code solution, and then implement it using
clojure and incanter.

    
    REPEAT 100000
      GENERATE 5 1,4 a
      COUNT a =1 b 
      SCORE b z
    END
    COUNT z >= 3 k
    DIVIDE k 100000 kk
    PRINT kk
    

Now onto the clojure solution.

## Starting simple, 1 throw

Before going for the full thing I tried out first a simulation of just 1 throw
and visualized it.

It simulates 100 thousand times a basketball throw with the probabilities
described above.

The category-count function is a helper function to count :miss and :hit's but
its not absolutely needed.

    
    (use '(incanter core stats charts io))
    
    (defn category-count
      [aseq]
      "counts the category's from a given sequence, ex:
       $ (category-count '(:hit :hit :miss)) => {:miss 1, :hit 2}"
      (into {} (let [dis (distinct aseq)]
      (for [item dis]
          {item (count (filter #(= item %) aseq))}))))
    
    (def one-throw
      (for [_ (range 100000)]  
        ; does not matter if replacement is true or false
        (sample [:hit :miss :miss :miss] :size 1 :replacement false)))
    
    (def throws-count (category-count one-throw))
    (view (bar-chart (keys throws-count) (vals throws-count)))
    

![http://al3xandr3.github.com/img/basketball-1throw.png][1]

Results make sense, its an 1/4 (25%) of probabilities of making the basket, so
simulations seems to be working correctly.

## With 5 Throws

Same logic, its the sample method from Incanter doing all the magic of picking
randomly if each throw is a :miss or a :hit. Then test if number of hits is >=
3, identify it as an :ok and finally see the percentage of all :ok's from the
total simulation.

    
    (defn five-throws
      []
      (category-count 
        (for [_ (range 100000)]  
          (let [smp (sample [:hit :miss :miss :miss] :size 5 :replacement true)
                catg (category-count smp)
                hits (:hit catg)]
            (if (and (not (nil? hits)) (>= hits 3))
              :ok
              :nok)))))
    
    (double (/ (:ok (five-throws)) 100000))
    

Result is 0.10283, so there's only a ~10% chance of that basketball player
making 3 or more baskets in a 5 throws sequence.

   [1]: http://al3xandr3.github.com/img/basketball-1throw.png
