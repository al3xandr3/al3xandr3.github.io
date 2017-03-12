---
layout: layout
title: "Data Posts"
hero: http://lh3.googleusercontent.com/-8VfQ9VnnICA/U-nCNseScgI/AAAAAAAAG08/YyGPXPsrta4/w931-h508-no/beach.jpg
hide: true
---
<section class="content">
  <ul class="listing">
    {% for post in site.posts %}
    {% if post.tags contains 'data' %}
    <li>
            <span>{{ post.date | date: "%e %b, %Y" }}</span>
      <span><i>({{ post.tags | join: ', '}})&nbsp;&nbsp;&nbsp;&nbsp;</i></span>
      <a href="{{ post.url }}" title="{{ post.intro}} - {{ post.content.size | divided_by:1000}}k word count">{{ post.title }}</a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</section>
