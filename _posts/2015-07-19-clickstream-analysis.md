--- 
layout: post
title: Clickstream Analysis
category: data
tags:
  - data
  - clistream
intro: "Clickstream Analysis"
---


## Clickstream Analysis

## What is it ?

There is a well-established model on UI usage tracking and it’s been used well over 10 years on websites - clickstream analysis.  

Clickstream is one kind of data tracking, where we have a sequence (a stream) of clicks from a user, typically resulting from a navigation in a UI interface.

Few examples from Wikipedia of typical use: Clickstream analysis is useful for web activity analysis, software testing, market research, and for analyzing employee productivity.

Google Analytics is an example of a clickstream data tracking and analysis tool.

## What’s it useful for ?

A very common use is to do funnel analysis, where we see how far a user navigated far down a payment flow (for example). With the funnel we can see the drop of users in each step, see what are the most problematic steps, and then try improve them (with A/B tests for example).

## How is the clickstream tracking made ?

Capture the following data:

*   event_id (uint) - Event identification. Unique key identifying interaction point in UI.
*   event_value (text) - Optional value about event. Should be used as little as possible, as this data is not easily analyzable.
*   last_event_id (uint) - Previous event identification or 0 if no last event (new session). It help to build user paths.
*   time_from_prev (uint) - Seconds from last event. 0 when no last event (new session). It helps to build user path and group activities into logical sessions. Sessions could be build from here.
*   session ID - If a session can be already be sent from client side then better and can simplify work on building them.
*   unique user ID - to track same user across all events.
*   Country - typically just user IP, that is later translated into country
*   UI version - to allow separate between different UI  

*   Local user time - to allow analyse what time of day most usage happens.
*   etc.. - Depending on the goal other useful attributes might make sense to add

## **Querying it **

Once the data is captured there is the need to perform some useful transformations. 

_**Sessions**_

For example, to build a funnel is needed to group data by session. This is needed because in UIs users can go back and forward and see many times the same screen/event. Imagine in a funnel a user tried many times and fails to enter password, If we sum up all events, the password submit it will be higher than login start - does not make sense in a funnel. 

A better way is to count only once per visit, so we can say user started login and tried submit password, if we then include all users, then we get full view of UI behaviours.

_**Visitor**_

Same as for sessions above.

Very often the sql needed for this uses Windowing features (like the “PARTITION OVER”) see references on building sql to create these views:  

*   [http://www.vertica.com/2011/10/05/being-green-with-data-exhaust/](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vertica.com%2F2011%2F10%2F05%2Fbeing-green-with-data-exhaust%2F&t=M2Q5ODEwYjAzZThjZGM0OTZmOGZiODY1NjEzMDRkNTI5YzZjNTJhOCxNeDdSRTgyWg%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F116436924815%2Fclickstream-analysiswhat-is-it-there-is-a&m=1)  

*   [http://www.postgresql.org/docs/9.1/static/tutorial-window.html](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.postgresql.org%2Fdocs%2F9.1%2Fstatic%2Ftutorial-window.html&t=MzVmZDU0NzUyMWIyYjVhMzJhMjEyNWZmMDA4ZTcxZGZlMGQzNDdlYixNeDdSRTgyWg%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F116436924815%2Fclickstream-analysiswhat-is-it-there-is-a&m=1)  

*   [http://www.quora.com/How-can-clickstream-data-be-stored-for-interactive-funnel-analysis](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.quora.com%2FHow-can-clickstream-data-be-stored-for-interactive-funnel-analysis&t=NWEwZWU1MGZlODhjMjJiMTBkMjRiYjgyODhiYjQwZTM2OGZlZjIxNSxNeDdSRTgyWg%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F116436924815%2Fclickstream-analysiswhat-is-it-there-is-a&m=1)  

*   [http://snowplowanalytics.com/analytics/event-dictionaries-and-data-models/data-modeling.html](http://t.umblr.com/redirect?z=http%3A%2F%2Fsnowplowanalytics.com%2Fanalytics%2Fevent-dictionaries-and-data-models%2Fdata-modeling.html&t=MGZlZjQ2OWQ0NDAwMmQxMzRhN2RlOTc2ZDlmNjk1OGZkOTAzNzY5MyxNeDdSRTgyWg%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F116436924815%2Fclickstream-analysiswhat-is-it-there-is-a&m=1)

## Data Analysis Considerations

Having “clickstream” data at the level of session and user level is very important.

They are like dimensions to the event facts, and allow to view event volume by visit or visitor level, thus we can de-duplicate repeated events of the same user (or visit) that is a requirement when building a funnel view for example.

But also allows to segment unusual events:  

*   To see testing machines doing events a thousand times   

*   Allow to see fraudulent events repenting a thousand times

Thousands of events by a testing machine can bias the averages in a report, so the de-duplication (and segmentation) enabled by user and visit level data will allow to see more real (truth) user behavior.  
