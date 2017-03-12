---
layout: layout
title: "Data Posts"
hero: http://lh3.googleusercontent.com/-8VfQ9VnnICA/U-nCNseScgI/AAAAAAAAG08/YyGPXPsrta4/w931-h508-no/beach.jpg
---
<section class="content">
  <ul class="listing">
    {% for post in site.posts %}
    {% if post.category = "data" %}
    <li>
      <span>{{ post.date | date: "%B %e, %Y" }}</span> <a href="{{ post.url }}" title="{{ post.intro}} - {{ post.content.size | divided_by:1000}}k word count">{{ post.title }}</a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</section>
