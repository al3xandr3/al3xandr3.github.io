require 'rubygems'
require 'jekyll'
include Jekyll::Filters  

puts "generating cloud..."

options = Jekyll.configuration({'source' => "/my/proj/al3xandr3.github.com/"})
site = Jekyll::Site.new(options)
site.read_posts('')

html = ""

site.categories.sort.each do |category, posts|
  s = posts.count
  font_size = 10 + (s*1.2);
  html << "<a property=\"dc:subject\" href=\"/tags/#{category}.html\" id=\"tag\" title=\"Postings tagged #{category}\" style=\"font-size: #{font_size}px; line-height:#{font_size}px\">#{category}</a> "
end

File.open('/my/proj/al3xandr3.github.com/_includes/cloud.html', 'w+') do |file|
  file.puts html
end

puts 'Done.'
