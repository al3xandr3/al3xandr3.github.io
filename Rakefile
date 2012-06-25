
require 'rake'

desc 'Default: Server'
task :default => :server

desc "server"
task :server do

  # twitter cloud  
  #out = []
  #File.open("./pages/quotes.md").each_line do |l|
  # out << l.gsub("\n", "").gsub("<p property='dcterms:description'>", "") if l =~ /^<p property='dcterms:description'>/
  #end
  #fl = File.open("./quotes_temp.txt", "w+")
  #fl.write(out)
  #fl.close
  #system "R CMD BATCH quotes_cloud.r"

  system "ruby tags.rb"
  system "ruby cloud.rb"
  system "jekyll --server"
end

# rake ci msg="message"
desc "commit"
task :ci do
  message = ENV['msg'] || "update"
  system "git commit -a -m \"#{message}\""
  system "git push"
end
