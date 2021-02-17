---
layout: post
title: Precision, Recall and the Fbeta-measure
category: data
tags:
  - data
intro: "Precision, Recall and the Fbeta-measure"
---

Intuition of model evaluation measures: Precision, Recall and the Fbeta-measure.

## Precision

Precision is a metric that calculates the percentage of correct predictions for the positive class.

Precision helps when the costs of false positives are high
false positive is when you predict yes, but is actually a no.

If we have a model that has very low precision, then many patients will be told that they have covid, and that will include some misdiagnoses and loads of extra stress and tests are at stake.
Gods are saying that a sacrifice will help with the crops, are we really sure? this is a costly mistake to make.
Prefer to only commit when super sure.

Hunting Intuition

Let’s consider the situation where you’re hunting for deer but there are elks also. You see something resembling deer and you shoot at it. Precision is the ratio of deer you’ve catched agains the number of total kills (elk + deer). It measures how "precise" was your hunting from the total catches. It does not take into account the total population of deer.


## Recall

Recall calculates the percentage of correct predictions for the positive class out of all positive predictions that could be made.

Recall helps when the cost of false negatives is high.
A False negative is when you predict no, but is actually yes.

A False negative is when you decide to ignore the sound of a twig breaking in a dark forest, and you get eaten by a bear.
Humans have high recall rates regarding survival
Prefer to be wrong more often but always check.

Hunting Intuition (continued)

Let’s now consider you first lure them by deer calls and you shoot anything that responds. Recall is the ratio of deers that "responded" to that call, against the total population of deer. Response sounds almost like recall, and is measured against the total population that could’ve replied to the lure. It does not take into account the percentage of elk that responded.



##  Fbeta-measure

The F-measure is calculated as the harmonic mean of precision and recall, giving each the same weighting. It allows a model to be evaluated taking both the precision and recall into account using a single score, which is helpful when describing the performance of the model and in comparing models.

The Fbeta-measure is a generalization of the F-measure that adds a configuration parameter called beta. A default beta value is 1.0, which is the same as the F-measure. A smaller beta value, such as 0.5, gives more weight to precision and less to recall, whereas a larger beta value, such as 2.0, gives less weight to precision and more weight to recall in the calculation of the score.


## Confusion Matrix


|                           |  Prediction: Positive | Prediction: Negative  |
|-------|--------|---------|
| Actual: Positive  | True Positive (TP)     | False Negative (FN)   |
| Actual: Negative | False Positive (FP)    | True Negative (TN)    |



Precision = TruePositives / (TruePositives + FalsePositives)

Recall = TruePositives / (TruePositives + FalseNegatives)

Total = TruePositives + FalseNegatives + FalsePositives + True Negative

Accuracy = (TruePositives + True Negative) / Total

Fbeta = ((1 + beta^2) * Precision * Recall) / (beta^2 * Precision + Recall)

F1, means beta=1

F1 = ((1 + 1^2) * Precision * Recall) / (1^2 * Precision + Recall)

F1 = (2 * Precision * Recall) / (Precision + Recall)

F0.5, means beta=0.5 

F0.5 = ((1 + 0.5^2) * Precision * Recall) / (0.5^2 * Precision + Recall)

F0.5 = (1.25 * Precision * Recall) / (0.25 * Precision + Recall)

F2 = ((1 + 2^2) * Precision * Recall) / (2^2 * Precision + Recall)

F2 = (5 * Precision * Recall) / (4 * Precision + Recall)


## As a mental model

Confusion Matrix, Precision, Recall, Accuracy, F-measure, can be considered as a tool to evaluate how good is a method in being correct (or accurate) and as a measure to compare models. 

As long as we can map and represent our problem into a confusion matrix, saying how many predicted true false, and out of those how many were actually true or false, then we can build the F-measure.