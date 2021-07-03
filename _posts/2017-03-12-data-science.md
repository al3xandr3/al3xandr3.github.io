---
layout: single
title: "Data Science Posts"
hero: https://drive.google.com/uc?id=1y_3zhQQfCgBLKHwjwsImerQLxgbMhrht
hide: true
---
<section class="content">
  <ul class="listing"> 
    {% for post in site.posts %}
    {% if post.tags contains 'data' %}
    <li>
      <a href="{{ post.url }}" title="{{ post.intro}} - {{ post.content.size | divided_by: 1000}}k word count">{{ post.title }}</a>
     <span>{{ post.date | date: "%e %b, %Y" }}</span>
      <span><i>({{ post.tags | join: ', '}})&nbsp;&nbsp;&nbsp;&nbsp;</i></span>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</section>

