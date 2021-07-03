---
title: "Supervised and Unsupervised ML interplay"
tags:
  - data
---

## Better Accuracy in Supervised

Start with the Unsupervised approach to find better distinctions within your data, creating labels, then use the Supervised approach to train for each label.Has good changes of creating good accuracy.

Lets say we start with 2 types: A's and B's we want to predict.

Data is: AA A AA A A B BBB B BBB

And we are only aware of A's and B's

Applying the unsupervised approach will point out, that you actually have 2 different types of A's and 2 different types of B's !

If we then run supervised on 4 distinct types (A, AA, B, BB), instead of the original 2, we will (probably) get better model accuracy. 


## Validate quality of an unsupervised model

Use unsupervised to create user clusters, then assign the label to each row, in this case to each user, it can be a numeric label, like cluster 1, cluster 2, etc... 

We can then run supervised approach to predict labels. From this supervised approach we can inspect what features are the most important in predicting the original cluster labels.

This might reveal insights on how the unsupervised clustering worked, what are the weight of each features.

Also useful to validate the health of the clusters found. If clusters only used 1 feature to classify the labels, means we could have a biased model