---
title: "Supervised and Unsupervised ML interplay"
tags:
  - data
---

## Better Accuracy in Supervised & Dimensionality reduction

Start with the Unsupervised approach to find better distinctions within your data, creating labels, then use the Supervised approach to train for each label.Has good changes of creating good accuracy.

Lets say we start with 2 types: A's and B's we want to predict.

Data is: AA A AA A A B BBB B BBB

And we are only aware of A's and B's

Applying the unsupervised approach will point out, that you actually have 2 different types of A's and 2 different types of B's !

If we then run supervised on 4 distinct types (A, AA, B, BB), instead of the original 2, we will (probably) get better model accuracy. 

## Validate quality of an unsupervised model

Use unsupervised to create user clusters, then assign the label to each row, in this case to each user, it can be a numeric label, like cluster 1, cluster 2, etc... 

Then use Supervised learning on predict the clusters, using cross-validation 

If the clusters are of high quality, the classification model will be able to predict them with high accuracy. At the same time, the models should use a variety of features to ensure that the clusters are not too simplistic. Overall, check the following attributes:
- Distinctivness of clusters by cross-validated F1 score
- Informativness of clusters by SHAP feature importances


This reveals insights on quality of the unsupervised clustering and what are the weight of each features.

It also can help find the distinctive features between clusters, and explanations on what best distinguishes them.
