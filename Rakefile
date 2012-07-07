
require 'rake'

desc 'Default: Server'
task :default => :server

desc "server"
task :server do

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
