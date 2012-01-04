require 'rubygems'
require 'jekyll'
include Jekyll::Filters

puts "generating tags..."  

options = Jekyll.configuration({'source' => "/my/proj/al3xandr3.github.com/"})
site = Jekyll::Site.new(options)
site.read_posts('')
site.categories.sort.each do |category, posts|
  html = ''
  html << <<-HTML
---
layout: page
title: Posts on "#{category}"
---
    <h1 id="#{category}">Posts on "#{category}"</h1>
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

  if category == 'r'
    html << '<br/><a href="http://www.r-bloggers.com/" class="alt" style="font-size: 110%; ">If you\'r into R, a good source of R related news is R-bloggers</a>'
  end

  File.open("/my/proj/al3xandr3.github.com/tags/#{category}.html", 'w+') do |file|
    file.puts html
  end
end
puts 'Done.'
