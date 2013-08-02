
require 'rake'

# Ctrl-C
#Signal.trap('INT') { abort("\n") }

desc 'Default: Server'
task :default => :server


#desc "quotes"
#task :quotes do
#
#	require 'nokogiri'
#	doc = Nokogiri::HTML(open("./pages/quotes.md"))
#	out = ""
#	out += "date, content"
#	doc.css('blockquote').each do |q|
#		out += "\n" + q.attr('data-day') + "," + q.content.gsub(",", ' ').gsub("\n", '')
#	end
#  File.open("./quotes.csv", "w+") {|f| f.write(out) }
#
#  # run code
#	system "R CMD BATCH quotes_cloud.r"
#  
#end

desc "server"
task :server do
	#Rake::Task["quotes"].execute
  system "ruby tags.rb"
  system "ruby cloud.rb"
  system "start http://localhost:4000/"
  system "jekyll serve --watch"
end

# rake ci msg="message"
desc "commit"
task :ci do
  message = ENV['msg'] || "update"
  system "git commit -a -m \"#{message}\""
  system "git push"
end
