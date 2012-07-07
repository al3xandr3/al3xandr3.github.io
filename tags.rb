require 'rubygems'
require 'jekyll'
include Jekyll::Filters

puts "generating tags..."  

options = Jekyll.configuration({'source' => "./"})
site = Jekyll::Site.new(options)
site.read_posts('')
site.tags.each do |tag, posts|
  html = ''
  html << <<-HTML
---
layout: page
title: Tag "#{tag}"
---

HTML
  
  html << '<div id="category-list"><ul class="posts">'
  posts.each do |post|
    post_data = post.to_liquid   
    html << <<-HTML

        <li>
          <a href="#{post.url}">#{post_data['title']}</a>
          <span id="post-date" class="alt">#{ post.date.strftime('%d %b %Y') }</span>
       </li>
      HTML
  end
  html << '</div></ul>'

  if tag == 'R'
    html << '<br/>If you\'r into R,  <a href="http://www.r-bloggers.com/" class="alt">R-bloggers</a> is a good source of R news'
  end

  File.open("./tags/#{tag}.html", 'w+') do |file|
    file.puts html
  end
end
puts 'Done.'
