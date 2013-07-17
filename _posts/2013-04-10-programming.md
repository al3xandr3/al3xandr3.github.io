---
layout: post
title: Programming
category: cheatsheet
tags:
  - programming
intro: "Programming Best Practices"
---

### Precepts

  - State is the root of all evil, avoid global variables, and shared state.
  - Go for pure functions with well defined interfaces (for the same input always same output). Create building blocks using pure functions, that are composable and reusable, also makes for better testing.
  - Analyse and Design up front, ideally away from computer, figure out what is needed and how to tackle it, trade-offs between tools and approaches, don't start coding right away - Hammock driven development
  - Constructs vs Artifacts - its not about how pretty and short the programming language is (the constructs), but more about how well it solves the problem, maintenance, scalability (the artifacts). Different task will focus / prioritize different artifacts. - See Simple-Made-Easy talk.
  - Write tests, because they can often be a life saver! Well crafted tests. But beware that test are not ultimate warranty that all code is bug free.
  - Bugs are per line of code. Code as little as possible, but make clean and clear code.
  - Practice to recognize complexity and how to avoid it and simplify it. Break a complex thing into many simple / independent composable parts. It is easier to work with simple - See Simple-Made-Easy talk.

Reference:

  - http://www.infoq.com/presentations/Simple-Made-Easy - define simplicity, recognize complexity, tackling problems only scales when handling with simplicity. Tools to simplify and avoid complexity in coding.
  - http://www.youtube.com/watch?v=f84n5oFoZBc - Hammock Driven Development - Rich Hickey
  - https://github.com/thomasdavis/best-practices

### Apps
  - Make things runnable on command line as standalone bin, easier to integrate with other apps later on.
  - Make it accessable from a url endpoint, as api (close enough) as a standalone, json seems to be the norm these days, but data format have changed overtime, and will probably continue changing. CSV is a good fit to data analysis + tools support + easy to work with.
  - GUIs are not composable. But they can be extendable with plug-ins. And they are easier to use (compared to command line), and the current standard for applications


### Functional Programming
- Functions as values, that can be passed to arguments of other function. Functions as 1st class citizens.
- Avoid shared state. Avoid variables outside of functions.
- Design functions that take other functions as argument, makes them much more generic and useful in the long term.
- Iterate with map and reduce and fold, avoid iteration where state changes.


#### References

- Writting documentation: http://jacobian.org/writing/great-documentation/what-to-write/