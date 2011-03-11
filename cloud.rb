require 'rubygems'
require 'jekyll'
include Jekyll::Filters  

puts "Generating tag cloud..."

options = Jekyll.configuration({'source' => "/my/al3xandr3.github.com/"})
site = Jekyll::Site.new(options)
site.read_posts('')

html = "<h3 id=\"title-tags\">tags</h3>"
html << "<div id=\"tags\">"

site.categories.sort.each do |category, posts|
  s = posts.count
  font_size = 10 + (s*1.5);
  html << "<a href=\"/tags/#{category}.html\" id=\"tag\" title=\"Postings tagged #{category}\" style=\"font-size: #{font_size}px; line-height:#{font_size}px\">#{category}</a> "
end

html << "</div>"
File.open('/my/al3xandr3.github.com/_includes/tags.html', 'w+') do |file|
  file.puts html
end

puts 'Done.'
