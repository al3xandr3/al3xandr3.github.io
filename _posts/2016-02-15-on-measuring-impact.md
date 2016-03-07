---
layout: post
title: Impact Evaluation
category: data
tags:
  - data
intro: "Impact Evaluation"
---


## Impact Evaluation

Impact evaluation is structured to answer the question: "how would outcomes such as the participants well-being have changed if the intervention had not been undertaken?" This involves counter-factual analysis, that is, “a comparison between what actually happened and what would have happened in the absence of the intervention.”

A secondary question that normally comes imediatly after is "why?". What behaviours did we change that explain the observed impact of the intervention?

The key challenge in impact evaluation is that the counter factual cannot be directly observed and must be approximated with reference to a comparison group. There are a range of accepted approaches to determining an appropriate comparison group for counter-factual analysis, using either:
 - Prospective (ex ante), selection of treatment vs control
 - Retrospective (ex post) evaluation design. 

5 things that can contaminate measure impact: Confounding, Selection bias, Spillover, Contamination, Impact heterogeneity.

(ante) Randomized field experiments are the strongest research designs for assessing program impact. This particular research design is said to generally be the design of choice when it is feasible as it allows for a fair and accurate estimate of the program's actual effects



### Non-experimental design

Non-experimental designs are the weakest evaluation design, because to show a causal relationship between intervention and outcomes convincingly, the evaluation must demonstrate that any likely alternate explanations for the outcomes are irrelevant.

However, there remain applications to which this design is relevant, for example;
- Experimental evaluation takes time.
- Experimentation might not be possible.

#### On product launch 

*How we then quantify the final real impact ?*

I general we can look at the top level KPIs and see if trends change to have an idea if it really changed things or not. 

But in order to quantify it somewhat, an approach is to compare the time period before and after deployment and see what is the difference.

The caveat with this approach is that there can be other external confounding factors influencing it, like seasonality holidays, weekend vs week days, other deployments happening at the same time, etc... So this approach has to be carefully planned for and in general: try find ways to exclude out as many potentiality influencing external variables as possible.

When results show a small difference we are less confident about the results, because the external influences could be biasing somewhat it to either direction.


#### Methods

- Quasi-experimental (non-random) methods can be used to construct controls when it is not possible to obtain treatment and comparison groups through experimental design. With constructed controls, individuals to whom the intervention is applied (the treatment group) are matched with an “equivalent” group from which the intervention is withheld and the average value of the outcome indicator for the target population is compared with the average of that for the constructed control.

- Another nonrandom method of obtaining control involves reflexive comparisons when participants who receive the intervention are compared to themselves before and after receiving the intervention. -> Beware of selection bias.





## Estimation methods

- Comparison of means, An estimation method to be used with experimental design.

- Multi-variate regression analysis, An estimation method to be used with non-experimental design

- Instrumental variable method, An estimation method to be used with non-experimental design, Instrumental variable method is used in statistical analysis to control for selection bias due to unobservables. The “instrumental variables” are first used to predict program participation; then one sees how the outcome indicator varies with the predicted values. Often, one can use geographic variation in program availability and program characteristics as instruments especially when endogenous program placement seems to be a source of bias. The researcher may attempt to estimate the causal effect of smoking on health from observational data by using the tax rate for tobacco products as an instrument for smoking. The tax rate for tobacco products is a reasonable choice for an instrument because the researcher assumes that it can only be correlated with health through its effect on smoking: https://en.wikipedia.org/wiki/Instrumental_variable https://www.quora.com/What-are-some-examples-of-really-clever-instrumental-variables-approaches-in-econometrics

- Double difference or difference-in-differences methods, an estimation method to be used with both experimental and non-experimental design



# References

- https://en.m.wikipedia.org/wiki/Impact_evaluation
- http://web.worldbank.org/WBSITE/EXTERNAL/TOPICS/EXTPOVERTY/EXTISPMA/0,,contentMDK:20188244~menuPK:384339~pagePK:148956~piPK:216618~theSitePK:384329,00.html
- https://en.m.wikipedia.org/wiki/Economic_impact_analysis
- https://en.wikipedia.org/wiki/Instrumental_variable
