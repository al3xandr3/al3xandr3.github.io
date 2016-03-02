---
layout: post
title: Data Dashboard in Practice
category: data
tags:
  - data
intro: "Guidelines and tips for building Data Dashboards"
---

<link rel="stylesheet" href="/css/cv.css" type="text/css" media="screen, projection" />

## Motivation

Approach dashboard building in a structured way, so that building new dashboards is just following a recipe and it can thus scale up well.

## Unpivot Structure

At its base its the idea of unpivoting a several columns table into a 3 fixed columns table for any metric.

The Idea

Transform: 

| date | users | clicks | money | ranking |
|:--|:--|:--|:--|:--|
| 1   |  50   | 100    | 12EUR |       1 |

into: 

| date | metric  | metric_value  |            
|:--|:--|:--|
| 1   | users   | 50            | 
| 1   | clicks  | 100           |  
| 1   | money   | 12EUR         |    
| 1   | ranking | 1             |


This approach forces a fixed column structure and thus it becomes consistent to manipulate and easy to add new metrics.

To add interaction use for example Excel slicer on the metric, and plot the metric_value by date.

We end up with a report interface that shows many views in a compact way. For example 1 chart and 1 table + slicers to switch between dimensions, can show a lot of data in a small space.

Also this approach makes it easier to add dimensions into a report without having to change the report format considerably.

In reality we might want to add more columns as extra useful dimensions, like country, type, etc...

But once you keep using this structure as a base, there's whole lot of methods developed for one report that you can then reuse for others.


## De-duplication Problem

When including several breakdowns like country, be aware that some metrics can't be summed up to get total, for example users in country. Imagine that same user has been in 2 countries in the same month, that in total sum would show up 2 times, inflating the number artificially.

To avoid the de-duplication problem, calculate the de-duped number upfront (in SQL) and include it in the data extract before going into dashboards. 

Example:

Imagine in same month I've traveled between Estonia and Portugal, then data extract should look like:

|date | metric| metric_value | country |
|:--|:--|:--|:--|:--|:--|
| month1 | users | 1 | Portugal |
| month1 | users | 1 | Estonia |
| month1 | users | 1 | All |




## Data Querying (SQL)

- Use WITH statements on the sql query, to create more reusable and cleaner queries. Makes it easier to see (and understand) the sections to replace to get a new data point. Query can be structured like: "With filter1 as (…) and filter2 as (…) select …"
- Is better to run a separate sql for each dimension and join it afterwards. Instead of trying to do 1 massive sql query that collects everything but is hard to add/remove things. ( often is not possible to do that massive query on 1 go)
- Do an union of each query used, to join all the data at the end, each query should output the same columns.
- Crystallize queries into stored procedures of database UDF when the report is in final version, otherwise adds a big overhead into the development process.





## The Date Dimension

Pull in an external table with all the date calculation needed and join on the day for example (or some attribute that makes sense).
No need to keep rebuilding data functions for each data set, just need to make sure can join the data on some attribute.

For example a calculated date dimension: http://www.ipcdesigns.com/dim_date/




## Doing the Unpivoting

In Excel: PowerQuery -> Unpivot

In Python: pandas.melt




## MoM calculations

“Month on Month Growth” in power pivot DAX language:


	Last Month:=CALCULATE(SUM(‘MYDATA’[metric_value]))

	Prev. Month:=CALCULATE(SUM('‘MYDATA’[metric_value]),DATEADD('‘MYDATA’[Month],-1,MONTH))

	MoM Change:=IF([Prev. Month],(CALCULATE(SUM('‘MYDATA’[metric_value]))-[Prev. Month])/[Prev. Month],BLANK())





## Assorted Tips

- ETL often getting in the way: If ETL is slow and often fails, just run it with a day delay, that is depend on yesterday's ETL, not today's one. Almost always that will be done.
- Visualizations, Charts Axis Order: if for some reason the tool doing the visualizations does not support order, then add numeration into the metrics names. That will force it the right order.


