require 'rubygems'
require 'jekyll'
include Jekyll::Filters

puts "Generating tags..."  

options = Jekyll.configuration({'source' => "/my/al3xandr3.github.com/"})
site = Jekyll::Site.new(options)
site.read_posts('')
site.categories.sort.each do |category, posts|
  html = ''
  html << <<-HTML
---
layout: default
title: Posts on "#{category}"
---
    <h1 id="#{category}">Posts on "#{category}"</h1>
HTML
  
  html << '<ul class="posts">'
  posts.each do |post|
    post_data = post.to_liquid   
    html << <<-HTML
        <li><a href="#{post.url}">#{post_data['title']}</a></li>
      HTML
  end
  html << '</ul>'
  
  File.open("/my/al3xandr3.github.com/tags/#{category}.html", 'w+') do |file|
    file.puts html
  end
end
puts 'Done.'
