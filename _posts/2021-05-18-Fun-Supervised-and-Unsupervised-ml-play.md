---

title: Supervised and Unsupervised ML interplay
category: data
tags:
  - data
  - supervised
  - unsupervised
  - ml
intro: "Supervised and Unsupervised ML interplay"
---

<br>

1. Use unsupervised to find better distinctions within your data then Supervised to train for each type. It probably creates better accuracy.
Lets say we start with 2 types: A's and B's we want to predict.
Data is: AA A AA A A B BBB B BBB
Unsupervised will point out, hey you actually have 2 different types of A's and 2 different types of B's
If we then run supervised on 4 distinct types (A, AA, B, BB), instead of 2, we will (probably) get better model accuracy. 

1. Use unsupervised to find user types, apply the cluster label to each row (user in this case). Then run supervised algols to predict labels. This supervised model will reveal what features are the most important in predicting the original cluster labels. (an insight)


<br>
<br>
