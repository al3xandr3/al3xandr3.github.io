
require 'rake'

desc 'Default: Server'
task :default => :server

desc "server"
task :server do
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
