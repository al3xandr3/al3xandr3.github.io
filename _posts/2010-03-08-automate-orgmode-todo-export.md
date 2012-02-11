--- 
layout: post
title: Automating todo tasks reports with org-mode
categories: 
  - automation
  - ruby
  - emacs
intro: "Here's the geek automation of the week, its for helping creating reports from my TODO tasks list when using the amazing emacs org-mode(<a href=\"http://orgmode.org/\">see here whats orgmode all about</a>)."
---

Here's the geek automation of the week, its for helping creating reports from
my TODO tasks list when using the amazing emacs org-mode([see here whats
orgmode all about][1]).

## (simplified) Work Flow

 1. I get a request, add it into my todo list queue, marking it as a TODO item. 
 2. Work, work, work, guided by the todo listed tasks, balancing priority and effort and (..add your own reason here..). 
 3. When finished, mark an item DONE. 
 4. Generate a report every week with the done tasks. 

## Generating the Report

(I use this setup on Mac, with some adaptations should also on Linux and
Windows)

Every week i then generate a report of the DONE Tasks, by running:

    
    # file: get-work-done.sh 
    # run: sh get-work-done.sh
    
    # Uses emacs to extract the DONE items from work.org, generating a work-done.csv
    /Applications/Aquamacs.app/Contents/MacOS/Aquamacs -batch -l ~/.emacs -eval '(org-batch-agenda-csv "+TODO=\"DONE\"" org-agenda-files (quote ("/.../work.org")))' > work-done.csv
    
    # Applies desired report formatting to the exported work-done.csv, generating work.csv
    ruby format-report.rb work-done.csv
    
    # Clean up the originally exported file
    rm work-done.csv
    
    # Opens the final file in the default .csv handler, typically Excel.
    open work.csv
    

See the comments "#" to understand what it does in each step.

Then I use the format-report.rb that apply's the final formatting to the
report, for example: add my own header, add/remove columns, Dates, change
names, calculate values, etc, etc… see example:

    
    # file: format-report.rb
    
    flines = File.open(ARGV[0]).readlines
    
    column_map = { 
      "from_name1"  => "to_name1", 
      "from_name2"  => "to_name2",  
    }
    
    File.open( "work.csv","w+") do |fl|  
      fl.puts "header1,header2,header3,header4"
      flines.each do |l|
        a = l.split(",")
    
        # Time, mapping-defined-in-column_map, original-column-2
        fl.puts Time.now.strftime("%m/%d/%Y") + "," + 
                (column_map[a[1]] || a[1]) + "," + a[2] "," + a[3]
      end
    end
    

And voila, i run this and an excel(my default .csv app) sheet opens up with
the report of the week.

   [1]: http://orgmode.org/

