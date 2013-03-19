---
layout: post
title: Coding
category: cheatsheet
tags:
  - code
intro: "Coding Precepts"
---

Make things independent / decoupled for better testing, reuse.

### Functional Programming
Borrow as much as possible from Functional Programming Ideas:

- Imutable, avoid global variables, and shared state.
- Organize code as functions that don't change state, same input always creates same output
- The functions interface are key, for good composability and reusability

### Apps
 - make things runnable on command line as standalone bin, easier to integrate with other apps later on.
 - make it accessable from a url endpoint, (close enought) as a standalone, json seems to be the norm these days, but has changed overtime. CSV is great