--- 
layout: post
title: Lem-E-Tweakit and Logic programming
categories:
  - SQL
intro: "<img src='http://al3xandr3.github.com/img/tweakit.png' alt='http://al3xandr3.github.com/img/tweakit.png' />While watching the SICP lectures  8a &amp; 8b, one thing that i realized is that this logic programming they mention seems to be very similar to kind of things we use SQL for, just better&hellip; a lot more flexible."
---

![http://al3xandr3.github.com/img/tweakit.png][1] While watching the SICP
lectures 8a & 8b, one thing that i realized is that this logic programming
they mention seems to be very similar to kind of things we use SQL for, just
better... ie. a lot more flexible.

**So why we do use SQL after all?**

After a bit of googling found this good article: [http://search.cpan.org/dist
/AI-Prolog/lib/AI/Prolog/Article.pod][2] one of the references says:

"...So if Prolog(read AI) and SQL(DB) are so similar, Why is one so successful
commercially and the other deemed a complete failure in terms of
scalability?..."

Relational Databases implement powerful techniques to improve performance:

  - Indexing
  - Hashing
  - Reordering goals to reduce backtracking

Where as Prolog based systems have very few such techniques.

**What is SQL missing?**

One of the most powerful features of Prolog is recursion.

SQL does not have recursion built into it. This is a severe Handicap. However
there is a way to overcome this problem by invoking multiple SQL queries from
a host language like C Or Java. SQL3 has begun supporting recursion.

   [1]: http://al3xandr3.github.com/img/tweakit.png
   [2]: http://search.cpan.org/dist/AI-Prolog/lib/AI/Prolog/Article.pod

