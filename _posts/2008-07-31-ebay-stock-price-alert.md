--- 
layout: post
title: ebay Stock price Alert
category: code
tags:
  - automation
  - ruby
intro: "Waiting for a stock price to rise to a certain value to sell it? or waiting for the price to drop to a certain value to buy it? But don't want to be checking it every day? Here's a little automation that raises alerts to email inbox."
---

Waiting for a stock price to rise to a certain value to sell it? or waiting for the price to drop to a certain value to buy it? But don't want to be checking it every day? Here's a little automation that raises alerts to email inbox.

This script will send you an email when stock price is outside the defined thresholds.

Set your own thresholds changing the "low" & "high" values.
Set your preferred stock symbol changing "EBAY" to "GOOGLE" for example. Is easeally extendable to support several stock symbols. I can post a second script if there's enough demand.

To set it up running every day, use windows Task Scheduler or CRON for linux and mac machines.


## Code:

Requires the ruby mailfactory gem, "gem install mailfactory".

	 require 'net/http'
	 require 'net/smtp'
	 require 'mailfactory'

	 def get_stock_quote(symbol)

	    host = "finance.google.com"
	    link = "/finance?q="+ symbol.upcase

	    begin

	      # Create a new HTTP connection
	      httpCon = Net::HTTP.new( host, 80 )

	      # Perform a HEAD request
	      resp = httpCon.get( link, nil )

	      value = (resp.body.scan /class="pr"[^>]*([^<]*)/).flatten.to_s.gsub(">", "").to_f

	      print " current #{symbol} stock price is " + value.to_s + " (from finance.google.com)\n"
	      return value
	    end

	 end


	 def send_stock_alert(subject="Ebay Stock Alert", message="Value Alert")

	    begin
	      mail = MailFactory.new()
	      mail.to = 'myself@gmail.com'
	      mail.from = "ebaystock@alerts.com"
	      mail.subject = subject
	      mail.html = message

	      Net::SMTP.start('yourmailserver') do |smtp|
	        smtp.send_message(mail.to_s(), mail.from, mail.to )
	      end

	    rescue StandardError => e
	      puts "Error sending mail"
	      raise e
	    end

	 end