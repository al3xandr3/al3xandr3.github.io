---
layout: post
title: Trading Backtesting function
category: data
tags:
  - data
intro: "Trading Backtesting python function in the T library"
---

<br>

Backtesting is the process of applying a trading strategy or analytical method to historical data to see how accurately the strategy or method would have predicted actual results.

Included now into the T library: [https://github.com/al3xandr3/T](https://github.com/al3xandr3/T)

## Basic Usage

Lets use the S&P500 index as the stock to invest in

    >>> sp500 = t.get_quotes_close(['^GSPC'], date_from = '2018-06-14')
    >>> sp500 = sp500.reset_index()


Lets say we have 1000 to invest

    >>> capital = 1000


What are the gain/losses if we had invested 1000 in S&P in 2018-06-14 ?

    >>> bulk1 = pd.DataFrame()
    >>> bulk1["date"] = sp500["date"]
    >>> bulk1["order_size"] = 0
    >>> bulk1.loc[t.where(bulk1, "date", datetime.strptime('2018-06-14', '%Y-%m-%d'), op.eq).index[0], "order_size"] = 1000
    >>> out1 = t.backtest_strategy(sp500, bulk1, capital)
    >>> out1["transactions"]

<font size="2" face="Courier New" >
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>date</th>
      <th>^GSPC</th>
      <th>order_size</th>
      <th>pct_change</th>
      <th>invested_start_day</th>
      <th>invested_end_day</th>
      <th>account_cash_start_day</th>
      <th>account_cash_end_day</th>
      <th>net_worth</th>
      <th>nb</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2018-06-14</td>
      <td>2782.489990</td>
      <td>1000</td>
      <td>NaN</td>
      <td>0.000000</td>
      <td>1000.000000</td>
      <td>1000</td>
      <td>0</td>
      <td>1000.000000</td>
      <td></td>
    </tr>
    <tr>
      <th>1</th>
      <td>2018-06-15</td>
      <td>2779.659912</td>
      <td>0</td>
      <td>-0.001017</td>
      <td>998.982897</td>
      <td>998.982897</td>
      <td>0</td>
      <td>0</td>
      <td>998.982897</td>
      <td></td>
    </tr>
    <tr>
      <th>2</th>
      <td>2018-06-18</td>
      <td>2773.750000</td>
      <td>0</td>
      <td>-0.002126</td>
      <td>996.858932</td>
      <td>996.858932</td>
      <td>0</td>
      <td>0</td>
      <td>996.858932</td>
      <td></td>
    </tr>
    <tr>
      <th>3</th>
      <td>2018-06-19</td>
      <td>2762.590088</td>
      <td>0</td>
      <td>-0.004023</td>
      <td>992.848167</td>
      <td>992.848167</td>
      <td>0</td>
      <td>0</td>
      <td>992.848167</td>
      <td></td>
    </tr>
    <tr>
      <th>4</th>
      <td>2018-06-20</td>
      <td>2767.320068</td>
      <td>0</td>
      <td>0.001712</td>
      <td>994.548077</td>
      <td>994.548077</td>
      <td>0</td>
      <td>0</td>
      <td>994.548077</td>
      <td></td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>495</th>
      <td>2020-06-03</td>
      <td>3122.870117</td>
      <td>0</td>
      <td>0.013649</td>
      <td>1122.329327</td>
      <td>1122.329327</td>
      <td>0</td>
      <td>0</td>
      <td>1122.329327</td>
      <td></td>
    </tr>
    <tr>
      <th>496</th>
      <td>2020-06-04</td>
      <td>3112.350098</td>
      <td>0</td>
      <td>-0.003369</td>
      <td>1118.548533</td>
      <td>1118.548533</td>
      <td>0</td>
      <td>0</td>
      <td>1118.548533</td>
      <td></td>
    </tr>
    <tr>
      <th>497</th>
      <td>2020-06-05</td>
      <td>3193.929932</td>
      <td>0</td>
      <td>0.026212</td>
      <td>1147.867537</td>
      <td>1147.867537</td>
      <td>0</td>
      <td>0</td>
      <td>1147.867537</td>
      <td></td>
    </tr>
    <tr>
      <th>498</th>
      <td>2020-06-08</td>
      <td>3232.389893</td>
      <td>0</td>
      <td>0.012042</td>
      <td>1161.689675</td>
      <td>1161.689675</td>
      <td>0</td>
      <td>0</td>
      <td>1161.689675</td>
      <td></td>
    </tr>
    <tr>
      <th>499</th>
      <td>2020-06-09</td>
      <td>3207.179932</td>
      <td>0</td>
      <td>-0.007799</td>
      <td>1152.629459</td>
      <td>1152.629459</td>
      <td>0</td>
      <td>0</td>
      <td>1152.629459</td>
      <td></td>
    </tr>
  </tbody>
</table>
</font>

<br>
<br>

And the overall percent gain/loss

    >>> out1["lift"]

    0.153

about 15% gain, i.e. +152 gain from the original 1000 investment.


<br>
<br>

## Project updates hosted in github: [https://github.com/al3xandr3/T ](https://github.com/al3xandr3/T )

<br>