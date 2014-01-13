---
layout: post
title: Programming
category: code
tags:
  - programming
intro: "Programming Best Practices"
---

### Precepts of Programming

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
  - http://www.infoq.com/presentations/Design-Composition-Performance - Rich Hickey

### Apps

- Make things runnable on command line as standalone bin, easier to integrate with other apps later on.
- Event better make it accessable from a url endpoint (a service), as an api, as a standalone, json seems to be the norm these days, but data format have changed overtime, and will probably continue changing. CSV is a good fit to data analysis + tools support + easy to work with.
- GUIs are not composable. But they can be extendable with plug-ins. And they are easier to use (compared to command line), and the current standard for applications


### Functional Programming

- Functions as values, that can be passed to arguments of other function. Functions as 1st class citizens.
- Avoid shared state. Avoid variables outside of functions.
- Design functions that take other functions as argument, makes them much more generic and useful in the long term.
- Iterate with map and reduce and fold, avoid iteration where state changes.

Underscore.js and its migrations to different languages seem to be a standard for having the functional programming building blocks as a library to any programming language.

#### References

- Writting documentation: http://jacobian.org/writing/great-documentation/what-to-write/
- How Software Companies Die (half joking): http://www.cs.cmu.edu/~chuck/jokepg/joke_19970213_01.txt
- State of affairs 2014: https://www.tbray.org/ongoing/When/201x/2014/01/01/Software-in-2014



## Programming languages

Biased and Opinionated list.

> Programming languages are tools, choose best tool for the job at hand.

> Coders that love coding just for coding enjoyment are very passionate and picky about language (the majority ?), the ones who's goal is just about final product will be more tolerant to choose the best language (tool) for the job.

By Function: 
- Creativity, for something new, to put little limitations on creativity of the language, the most crazy things: *Clojure*
- Prototype, play around, do EDA, try out API's, parse text, quick plot, quick everything: *Python*
- Machine learning, most advanced, most accurate methods catalog, run a one only method: R
- User Interface: Javascript + HTML

### C/C++
- Function: Fastest language, for serious systems, the traditional, safe and hard way.
- Examples: Operating Systems.
- Opinion: Old languages, although C++ tries hard to keep up.
C is small and nice, but very low level, is close to the machine architecture (which is limiting, because you'll have to mix and fit computer architecture to the solution of your problem, they should be abstracted and be different problems)
C++ big, complex, a natural growth of C, also the most used language, because is fast, and it was maybe the 1st modern language. Is so complex that who uses it has hard time taking critics on it, because of investment already made.

### R
- Function: The most complete and free collection of statistical methods and libraries.
- Opinion: Excellent for data analysis exploration, but very clunky programming language, probably result of many years of bolting on features (im guessing even by different people), instead of a clean designed planning.

### Javascript
- Function: User Interface, because of HTML, because of internet. The best platform for sharing and distributing creative visualizations / presentations.
- Examples: Web, D3.
- Opinion: Love/hate with this one, love the powerful constructs that trump abilities of  big languages like Java. But inconsistent, and with many holes, that requires some overhead to avoid shooting yourself in the foot. 
Think it had the luck to be in the right place at the right time, with just the right amount of interesting features to make developers stick with it. Been growing a lot recently, has one of the most distributed language interpreter in history ? (the browser) 
Is cross platform, better solution, than developing platform dependent things.

### Ruby
- Function: small scripts to solve a particular local problem, often a better replacement to shell scripts, great prototyping, and rails for better web pages.
- Opinion: Simple but powerful, does not get on the way.
Perfect scripting and prototyping language, for small scale. Great to text processing, gluing different systems / apps together.
Downside, smaller lib ecosystem than python (that fits in about the same target audience).
Meta-programming facilities allows for creativity.

### Python
- Function: great for prototyping, keeps covering more and more fields over time, does everything now ? Taking over R soon for EDA ? 
- Opinion: Ruby's older brother, more users, bigger ecosystem, more libraries, does more things, but not as pretty as ruby (I might be biased). Excellent scripting languages, good for fast developing, people find ways to fit it into every style and to cover more and more ground with the things it can do.

### Java
- Function: Build big scalable systems by big enterprise teams.
- Opinion: Designed to be safe, to scale a lot, designed to be dumbed down (so that is safe), so has grown a lot, maybe top 3 biggest language in use? 
Known to drive people slightly crazy, has a huge overhead of configurations, setup, libraries dependencies, files, etc…
Very portable.
Very scalable.

### Clojure
- Function: The gate to the JVM libraries. (Scalable systems, processing large volumes of data, production / online systems, databases, queues)
- Example: Cascalog Hadoop, Mahout.
- Opinion: Allows for creativity, the basic syntax is super simple, so allows and incentives creativity in abstraction and composition, like a clean slate.
Incentivizes functional programming, no state (or very little in reality).

### Julia
- Function: Appears to be best designed language for data crunching. (the new Fortran). Python was adapted, Java was adapted, Julia was designed for data crunching.
- Opinion: not mature yet (in 2013). Hard to compete with python, if all libs needed already exist in python.

Reference: 
- http://blog.redowlanalytics.com/post/67465127385/tools-for-the-data-science-craftsman

### Haskell
- Function: General Purpuse, Expanding programmers skill and know how about programming. Expand the programming field research boundaries.
- Opinion: from the math world, thus clean and cirurgical, born in academic grounds, viewed as a very noble and a holy grail of a language. The functional language.

reference: http://www.haskell.org/haskellwiki/Haskell_in_industry