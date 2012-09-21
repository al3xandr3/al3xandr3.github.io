--- 
layout: post
title: Confluence automation
category: code
tags:
  - ruby
  - automation
intro: "Script to automate updating content of a confluence wiki, both page content and page attachments"
---

Here's a script that i use to automate updating an Confluence wiki content. Posting it here in case is usefull for someone else. I developed it on Windows7 and with ruby 1.9.3.

Can be used as a standalone, like so:

    # for content:
    $ ruby confluence.rb post "{html}<h1>Hello Confluence</h1>{html}" "page" "space" "username" "password" "confluence.my.com"

    # for attachments:
    $ ruby confluence.rb attach file.pdf "application/pdf" "page" "space" "username" "password" "confluence.my.com"


Or as a ruby lib, like so:

    require 'confluence'
    
    # for content:
    Confluence.post "{html}<h1>Hello Confluence</h1>{html}", "page", "space", "user", "pass", "confluence.my.com"

    # for attachments:
    Confluence.attach "report.pdf", "application/pdf", "page", "space", "user", "pass", "confluence.my.com"

## Code 

    module Confluence
      require 'xmlrpc/client'
      extend self
    
      # Confluence.post "{html}<h1>Hello Confluence</h1>{html}", "page", "space", "user", "pass", "confluence.my.com"
      def post content, page, space, user, pass, server
        confluence = XMLRPC::Client.new2("https://#{user}:#{pass}@#{server}/rpc/xmlrpc")
        # disable certificate check    
        confluence.instance_variable_get(:@http).instance_variable_set(:@verify_mode, OpenSSL::SSL::VERIFY_NONE)
        # shortcut
        confluence = confluence.proxy("confluence2") # confluence1 with older
    
        pa = confluence.getPage("", space, page)
        pa["content"] = content
        confluence.storePage("", pa)
      end
    
      # Confluence.attach "report.pdf", "application/pdf", "page", "space", "user", "pass", "confluence.my.com"
      def attach file, type, page, space, user, pass, server
        server = XMLRPC::Client.new2("https://#{user}:#{pass}@#{server}/rpc/xmlrpc")
        # disable certificate check    
        server.instance_variable_get(:@http).instance_variable_set(:@verify_mode, OpenSSL::SSL::VERIFY_NONE)
        # shortcut
        confluence = server.proxy("confluence2") # confluence1 with older
    
        token = confluence.login(user, pass)
        pa = confluence.getPage(token, space, page)
    
        attachment = {}
        attachment['fileName'] = file
        attachment['contentType'] = type
    
        # Read updated local copy of the document
        data = ""   # data array does not work, init as string instead
        f = File.open(file, "rb")  # don't forget the 'b' for binary
        f.read.each_byte {|byte| data << byte }
        f.close

        confluence.addAttachment(token, pa['id'], attachment, XMLRPC::Base64.new(data))
      end 
    end
    
    
    if __FILE__ == $0
      if ARGV[0] == "post"
        if ARGV.size != 7
          puts '$ ruby confluence.rb post "{html}<h1>Hello Confluence</h1>{html}" "page" "space" "username" "password" "confluence.my.com"'
        else
          Confluence.post ARGV[1], ARGV[2], ARGV[3], ARGV[4], ARGV[5], ARGV[6]
        end
      end
    
      if ARGV[0] == "attach"
        if ARGV.size != 8
          puts '$ ruby confluence.rb attach file.pdf "application/pdf" "page" "space" "username" "password" "confluence.my.com"'
        else
          Confluence.attach ARGV[1], ARGV[2], ARGV[3], ARGV[4], ARGV[5], ARGV[6], ARGV[7]
        end
      end    
    end
    

It might change/evolve over time, check it out in [my github ruby repo](https://github.com/al3xandr3/ruby).
