---
layout: post
title: Data Tracking and Collection
category: data
tags:
  - data
intro: "A description of the collection of methods used to track and collect data for analysis"
---

## Motivation

To understand what is going on with a product/organization/strategy we need to measure and quantify the critical points of its structure. 
Often there are several data points generating data, that need to be reconciled, cleaned up, and aggregated into a consumable format.

Therefore, each organization will have the need to:

- Identify its critical points to measure. (KPIs)
- Put in place the telemetry that can measure and capture data.
- Reconcile and aggregate all the data points into a consumable format.

Once the data from several sources is in a consumable format, analysts can then start querying the data and revealing insights of the reality that better inform the organization future strategies/actions.

## Data repositories

**What is common in all organizations by default**

- A production database that contains data about the users and their transactions with the product - Optimized for high availability and speed of end user facing systems, and thus not optimized for analysis work, even risky to be open for analysis, as one mistake could end up impacting users.
- Most applications (eg. web servers) generate a record logs when they are in use. - these were made for keeping a record of the application execution, they exist in production environments and are not easily / directly consumable by analysts.


**Data Analysis repositories**

Then for the purposes of doing analysis this production systems data is then collected, cleaned and aggregated into a separate data repository optimized for analysis work, that can generate reports automatically, navigate data more easily, i.e simplified and aggregated data that is more easily consumable.


### Dedicated Analytics Telemetry & Collection

Increasingly more common is to have also a dedicated telemetry and collection system that are placed explicitly in the "critical" points we need and that captures the exact data we define.
This allows for more specific data measuring, and makes available data that does not exist from default systems (or is too cumbersome to use). 

It requires somewhat more effort from the organization: add the telemetry to product (into the critical points), have extra mechanisms and support to handle telemetry and data collection systems.


**Dedicated vs default, what to choose ?**

What is required depends on the data needs. Default sources, are typically always there, and make sense when are in easy reach and consumable format, but when data is needed that does not exist in default systems, then the dedicated way is required.

UI Click-stream data is "the" typical dataset that requires dedicated telemetry system.


## Data structures

The industry standard for data representation is a table, in .csv or very often a relational database table. Recent formats also include key->value paradigm (JSON, Hadoop).
For consumable data, the relational table format seems to still persist as the most successful one (hint: Hive on top of Hadoop).


## Realtime vs non-Realtime

Looking into collected data often branches into 2 different needs:

- Realtime: used for monitoring systems, used to identify as early as possible if a server or a service is having problems that could be impacting end users. - mostly fairly raw data "health" signals.
- non-Realtime: Where analysis go look for insights to input into product strategic decisions. - Often using more complex data aggregations.


## Telemetry principles

Some care should go into adding Telemetry.

- In general an ideal approach to telemetry is to instrument the APIs that get re-used widely across the organization, instead of each of the end products individually. - Realistically, might often be needed very product specific details, that require "manual" telemetry.
- Telemetry APIs should be simple and obvious to use: Telemetry is a secondary priority compared to the main product development, often done in a hurry, more complexity means higher probabilities of things going wrong.
- The data captured in telemetry needs to be properly planned and validated given the required KPIs - you don't want to find yourself realizing after 2 months of live data that in fact we don't capture all data we need to meet the requirements.
    - Telemetry should be defined as very simple, design for simplicity, capture the obvious things in a simple way - for any requirement/ KPI should only need 1 filter to surface later. Complex, big, tricky filters, will more often introduce data unreliabilities.
    - Write down a telemetry specification requirements. Map the telemetry to the reality very clearly, i.e. include screenshots of the tracking placements, include diagram of sequence of actions/user-flow and the exact tracking values placed on them. This will help later on with analysis work, and at same time make it very clear for developers.
   - Setup a report in QA phase to make sure the telemetry will capture requirements.
   - The Telemetry Spec should be handed over to developer QA team for validations also.


## Data collection types and caveats

### Logs

**Caveats** 

- Bots will influence traffic captured in logs. Bots typically don't run javascript so javascript telemetry does not suffer from this problem
- Caching will also influence logs. Cached content is served back to user without hitting the web server, thus never reaching logs. Javascript telemetry helps is always executed even with cached content.

**Tools**

- https://www.youtube.com/watch?v=Kqs7UcCJquM - elastic search, Kabana, logstach
- http://docs.fluentd.org/articles/free-alternative-to-splunk-by-fluentd
- https://wikitech.wikimedia.org/wiki/Analytics/Cluster/Logging_Solutions_Recommendation
- http://codeascraft.com/2011/02/15/measure-anything-measure-everything/
- http://www.fluentd.org/blog/unified-logging-layer


### URL get/post (includes Javascript telemetry)

Here i include Javascript and other telemetries mechanisms that work by doing a post/get request to a url with data as parameters.
A very common one is javascript in web analytics.

**Caveats** 

- Can be blocked by adblockers, firewalls, 1st vs 3rd (up to 20% loss?) party cookie browser policy, http requests are not guaranteed delivery: all these will make it that some requests are lost with javascript tracking.

**Tools**

- Google Analytics








## Big Data

Google, for their search engine, as a need to be able to handle massive data, created a tool, based on distributed file system that run parallel MapReduce jobs. 
Hadoop is the outside-of-google same approach of that technology.

More recently Google created a 2nd tool called dremmel, that is faster and better for data analysis EDA. Supports SQL natively.
It also exists as an online service from Google, called the BigQuery.






