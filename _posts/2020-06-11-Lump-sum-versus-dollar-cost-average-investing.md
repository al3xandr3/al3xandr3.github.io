---
layout: post
title: Lump sum versus dollar-cost average investing
category: data
tags:
  - data
intro: "Lump sum versus dollar-cost average investing"
---

<br>

As the market fluctuates, the moment you invest is important. Investing all the saving at the wrong time could result in big losses.

An alternative approach is to spread out the investment over time, so sometimes the investment is done at a high value, while some other times at a low value, but overtime it averages out, this approach is called dollar-cost averaging investing (DCA).
DCA also has the nice property of the investor not having to worry about selecting the right time for investing.

Investing all the money at once (the lump sum aproach) and as early as possible has time on its side, the earlier you invest the more time you are allowing money to grow as an investment (compounding effect).

So what is best, invest all the money as earlier as possible or  instead invest in smaller quantities spread overtime?

## Method 

A simulation can show what would happen for each strategy.

Simulation does not include the trading costs and the tax on gains.

The full code used in simulations is linked at the end.


## Starting point

Lets say we have 1000 to invest and we are planing to invest on the S&P 500 index.

From Feb 2018 to Feb 2020

![SP500_trend](https://drive.google.com/uc?id=1Rg42Ggk0Lg9zbwX9SPfhvLtC3Zh15JGq)

Notes:
- This time period excludes major economic crisis
-  S&P 500 is an index containing 500 big company stocks and thus has different properties/behaviours than other types of indexes or individual stocks migth have.
- Even for the S&P 500 index this period of time is unique and there is no guarantee that in future it will behave in same way, but i will use the assumption that outside of a major economic crisis the S&P has in general this behaviour.



## Case 1  - What happens when investing all the money right away?

Investing all the money on the first day possible yelds the following gains (logic implemented in the simulations in the script):

- Gain: 20.5%
- Total: 1204.6  (i.e. a 204.6 profit)

Maybe we got lucky on the day we invested? Lets simulate another day.

## Case 2 - What happens if we pick a random date to invest everything?

Pick a random date within this period and invest everything. Simulate doing this 100 times and calculate the average.

- Gain: 13.6%
- Total: 1136 with a '95% confidence interval between [1122.9, 1150.9]

It varies depending on the date we choose, but naturally a date later should be worse, so what if we use only earlier dates?

## Case 3 - What happens if we pick a random date to invest everything *within the first 60 days* ?

Pick a random date within the first 60 days and invest everything. Simulate doing this 100 times and check the average.

 - Gain: 19.4%
- Total: 1194.1 with a 95% confidence interval between [1189.5, 1199.1]

Much better.


## Case 4 - How about early ADC investing?

When investing a value of 50 every 7 days, starting right away, we get:

- Gain: 18.4%
- Total: 1183.8


## Case 5 - How about late ADC investing?

When investing a value of 50 every 7 days, but doing it later (first 140 days without investing).

- Gain: 5.7%
- Total: 1056.6

We again that earlier investing worked better.

## Case 6 - How about early ADC investing using a different volume and frequency?

When investing a value of 100 every 28 days, starting right away, we get:

- Gain: 17.7% 
- Total: 1177.5


## Case 7 - Random ADC investing, within the first 60 days

A random quantity up to 50 on a random day within the first 60 days of this period until the money runs out.
Simulated 100 times.

We get: 

- Gain: 19.8%
- Total: 1198,  with a 95% confidence interval between[1197.3 , 1198.7]


## Takeaways

- Best results on 1, 3 and 7
- Shows that investing early resulted in better gains (note for this index and for this time period).
- There's a slight advantage for lump sum investing (case 1, but note that is very time sensitive and the early ADC yeld nearly sam returns. 
- Changing the volume and period of ADC didn't change considerably the gains, more important was to do it earlier. (but would be worth to investigate this further)


<br>
<br>

## Code

- [DCA simulations](https://github.com/al3xandr3/Data-Science-ipynb/blob/master/FI/Dollar%20cost%20averaging.py)
- T library, that includes the backtesting function: [https://github.com/al3xandr3/T ](https://github.com/al3xandr3/T )

<br>