---

title: Lump sum versus dollar-cost average investing
category: data
tags:
  - data
excerpt: "Lump sum versus dollar-cost average investing"
---

<br>

As the market fluctuates, the moment you invest is important. Investing all the savings at the wrong time could result in big losses.

An alternative approach is to spread out the investment over time, so sometimes the investment is done at a high value, while some other times at a low value, but overtime it averages out, this approach is called dollar-cost averaging investing (DCA).
DCA also has the nice property of the investor not having to worry about selecting the right time for investing.

Investing all the money at once (the lump sum aproach) and early, has time on its side, the earlier the investment the longer it has to grow, leveraging the compounding effect.

So what is best, invest all the money as earlier as possible or  instead invest in smaller quantities spread overtime?

## Method 

A simulation can show what would happen for each strategy.

These simulations do not include the trading costs and the tax on gains.

The full code used in these simulations is linked at the end.


## Starting point

Lets say we have 1000 to invest and we are planing to invest on the S&P 500 index.

From Feb 2018 to Feb 2020

![SP500_trend](https://drive.google.com/uc?id=1Rg42Ggk0Lg9zbwX9SPfhvLtC3Zh15JGq)

Notes:
- This time period excludes major economic crisis
-  S&P 500 is an index containing 500 big company stocks and thus has different properties/behaviours than other types of indexes or individual stocks migth have.
- Even for the S&P 500 index this period of time is unique and there is no guarantee that in future investments will behave in same way, but i will use the assumption that outside of a major economic crisis the S&P has in general this behaviour.



## Case 1  - What happens when investing all the money right away?

Investing all the money on the first day possible yelds the following gains (logic is implemented in the simulations in the script):

- Total: 1,204.6  (i.e. a 204.6 profit)
- Return on Investment (ROI): 20.5%
- Internal Rate of Return (IRR*): 10.2%

> *IRR:  IRR has some nice properties that makes it worth looking at, in particular it normalizes the return to a yearly return and takes into account the date that each sum was invested for calculating the return, see references.

Maybe we got lucky on the day we invested? Lets simulate another day.

## Case 2 - What happens if we pick a random date to invest everything?

Pick a random date within this period and invest everything. Simulate doing this multiple times and calculate the average.

- Total: 1,134.4 with a 95% confidence interval of [1121.6, 1147.7]
- ROI: 13.4%
- IRR: 16.5% with a 95% confidence interval of [15.1, 17.9]

IRR is calculated from the date of the first investment until the final return, so IRR can show very promissing results even by looking at a short window and then extrapolating that for a yearly return..

Of course, the later we invest, the less time we allow for the investment to grow, so returns might not be as high as investing early lets compare with investing early next.

## Case 3 - What happens if we pick a random date to invest everything within the first 60 days ?

Pick a random date within the first 60 days and invest everything. Simulate doing this multiple times and check the average.

- Total: 1,200.7 with a 95% confidence interval between [1195.9, 1205.4]
- ROI: 20.1%
- IRR: 10.3% with a 95% confidence interval of [10, 10.6]

## Case 4 - How about early DCA investing?

When investing a value of 50 every 7 days, starting right away, we get:

- Total: 1,183.8
- ROI: 18.3%
- IRR: 10%

## Case 5 - How about late DCA investing?

When investing a value of 50 every 7 days, but doing it later (first 140 days without investing).

- Total: 1,056.6
- ROI: 5.7%
- IRR: 21%

Earlier investing yelded higher ROI.

## Case 6 - How about early DCA investing using a different volume and frequency?

When investing a value of 100 every 28 days, starting right away, we get:

- Total: 1,177.5
- ROI: 17.7% 
- IRR: 11%

## Case 7 - Random DCA investing, within the first 60 days

A random quantity up to 50 on a random day within the first 60 days of this period until the money runs out. Simulated multiple times.

We get: 

- Total: 1,198 with a 95% confidence interval between [1197.5 , 1198.9]
- ROI: 19.8%
- IRR: 10.36% with a 95% confidence interval between [10.3%, 10.4%]


## Takeaways

- Best total returns on #1, #3 and #7
- Shows that investing early resulted in better total gains (note this is for this particular index and for this time period)
- Results are slightly better for lump sum investing (#1), but note that lump sum investing is time sensitive, while DCA is not and it yeld nearly the same returns (#7).
- Changing the volume and period of DCA didn't change considerably the gains, more important was to do it earlier. (but would be worth to investigate this further).
- Winner? As long as investment is early, this is not showing a big difference between approaches.
- Maybe worth trying a smarter variation of DCA that takes into account the market direction and adjusts investment volume and frequency accordingly.

<br>

## Code

- [DCA simulations](https://github.com/al3xandr3/Data-Science-ipynb/blob/master/FI/Dollar%20cost%20averaging.py)
- T library, that includes the backtesting function: [https://github.com/al3xandr3/T ](https://github.com/al3xandr3/T )


## Reference

- Internal Rate of Return:  https://www.investopedia.com/terms/i/irr.asp
- https://www.asimplemodel.com/reference/41/excel-=xirr-vs-=irr/

<br>