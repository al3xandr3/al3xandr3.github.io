---
title: "Thoughts on validating model accuracy"
tags:
  - data
---
## The MIBE principles

A set of 4 different viewpoints to use when validating a model, use as many as possible, ideally all of them. The quality and usefulness of the model is often directly correlated to the process of validation.

### Internal

Where the quality of the model is evaluated by looking internal measures, e.g.:
- In clustering, how separated or overlapping the clusters are
- How many features were used and what is the importance of each in determining the clusters?

### External

Where we compare to an existing "ground truth" classification.

This is typical of supervised learning, where we have upfront what we know for certain is the ground truth so we can compare how accurate is our model versus the labeled data we have.

But can also be done for unsupervised learning 

### Manual Evaluation
"manual" evaluation by a human expert.
Use common sense do the results make sense, for example in a clustering exercise, do the clusters make intuitive sense, past experience, or they are a complete mess and scramble ? 
i.e. can we clearly find things that can't happen by manual inspecting ?

### Business Application

By evaluating the utility of the model in its intended application.
- Does it solve the original intended use? 
- Can its current form be used ? - sometimes in this step it makes sense to think and design the interface to the end users, consider simplification of the output into a yes or no, etc..
- Is it scalable to compute? for the frequency required for its use?
- etc..
