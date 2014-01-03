---
layout: post
title: Product and Application Design
category: other
tags:
  - product
  - application
  - startup
intro: "How to Create a new software product"
---

## Product

### #1 Give something back to users 

Computers are made to make people's live easier, do something that makes life easier/better for end user.

Dogfood: It should solve my problem, very important that me the inventor need it also and i must be an intensive user.

Reference:
- http://paulgraham.com/startupideas.html


## Application Design

### Always consider the end user point of view

How would my main target audience use it use it? Does the UI makes sense and is obvious, could things be simplified further.

### Easy and simple to use

Must be easy and get out of the way, user does not need to know internal technology details.

Good example google search box, the most useful and simple (to use) application ever ?

- If app has many commands make them search-able (example: lightTable or sublime_text find command). Use  search box instead of endless nested menus, so that users only need to have a vague idea how it was named, don't make them learn endless nested menus or shortcuts.

## Program Architecture

- Backend is an independent program exposed as a service (by an API endpoint), an application is then built by using several independent services (principle of composability). Follows Server <-> client model. (example: SuperCollider, end users can use whatever language they favor to communicate in a very simple protocol to the server)
- Do simple API's (REST like?)
- The services are built independently and their implementation details are hidden (each doing 1 thing well).
- This allows to replace backends while keeping same api interfaces.
- Allows to re-use the api services for different applications, on different UI interfaces for example, and to be re-used by others.

- Interface is in javascript so that can run both on cloud, desktop and mobile devices.

## References
- [Jeff Bezos (Amazon) 25 quotes](http://www.fool.com/investing/general/2013/09/09/the-25-smartest-things-jeff-bezos-has-ever-said.aspx)

