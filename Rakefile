
require 'rake'

desc 'Default: Server'
task :default => :server

desc "server"
task :server do
	system "jekyll --server"
end

desc "commit"
task :ci do
	system "ruby tags.rb"
	system "ruby cloud.rb"
	message = ENV['msg'] || "update"
	system "git commit -a -m '#{message}'"
	system "git push"
end
