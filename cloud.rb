require 'rubygems'
require 'jekyll'
include Jekyll::Filters  

puts "generating cloud..."

options = Jekyll.configuration({'source' => "./"})
site = Jekyll::Site.new(options)
site.read_posts('')

html = ""

site.tags.sort.each do |tag, posts|
  s = posts.count
  font_size = 15 + (s*1.2);
  html << " &nbsp;&nbsp;<a href=\"/tags/#{tag}.html\" title=\"Posts tagged #{tag}\" style=\"font-size: #{font_size}px; line-height:#{font_size}px\">#{tag}</a>"
end

File.open('./_includes/cloud.html', 'w+') do |file|
  file.puts html
end

puts 'Done.'
