--- 
layout: post
title: Stock Price Alert
category: code
tags:
  - automation
  - ruby
intro: "Waiting for a stock price to rise to a certain value to sell it? or waiting for the price to drop to a certain value to buy it? But don't want to be checking it every day? Here's a little automation that raises alerts to email inbox."
---

Waiting for a stock price to rise to a certain value to sell it? or waiting for the price to drop to a certain value to buy it? But don't want to be checking it every day? Here's a little automation that sends an alert to email inbox.

This script will send you an email when stock price is outside the defined thresholds.

To set it up running every day, use windows Task Scheduler or CRON for linux and mac machines.

> tip: on windows set the filename to .rbw (means window mode script), so that no console appears when the scheduled task runs. Beware that if there is an error you wont see it also.

## Code:

	class Stock
	  require 'net/http'
	    def self.fetch(*symbols)
	        Hash[*(symbols.collect { |symbol| 
	        	[symbol, Hash[*(Net::HTTP.get('download.finance.yahoo.com','/d?f=nl1&s='+symbol).chop.split(',').unshift("Name").insert(2,"Price"))]];
	        }.flatten)];
	    end
	end
	# puts Stock::fetch("MSFT").inspect 

	class Mail
	  require 'time'
	  require 'net/smtp'
	  def self.send(mail)
	    msg = "Subject: #{mail[:subject]}\n\n#{mail[:body]}"
	    smtp = Net::SMTP.new 'smtp.gmail.com', 587
	    smtp.enable_starttls
	    smtp.start('gmail.com', mail[:from], mail[:password], :login) do
	      smtp.send_message(msg, mail[:from], mail[:to])
	    end
	  end
	end

	stock = Stock::fetch("MSFT")["MSFT"]["Price"].to_f
	Mail::send({from:     "batatas123@gmail.com", 
	            to:       "batatas123@gmail.com", 
	            password: "*********", 
	            subject:  "MSFT stock",
	            body:     stock}) if stock <= 26 or stock > 28
