--- 
layout: post
title: Data Processing Utils
category: data
tags:
  - data
intro: "reference of small utils that help in data processing / filtering / spliting / etc"
---

Reference of data processing little hacks / utils / tools

## filter

Exclude lines from **file.csv** that contain a "." and output the result into **file2.csv**

  	$ cat file.csv | grep -v '\.' > file2.csv

Usefull if you need to filter a big text file (that text editors arent able to handle).
	

## split

Split **file.csv** in files of size **1000** lines each

  	$ split -l 1000 file.csv

Usefull if you need to open a file in excel that is bigger that excel allows. Split it into multiple files.

## R <-> Excel via clipboard

Especially made to interact with Excel(adapt for other apps), inside R do:
	
	### Column
	# read from clipboard a column of strings into array x
	x = readClipboard()

	# read from console input a column of numbers into array x
	x = scan()

	# send clipboard a column of strings in x
	writeClipboard( as.character(x) )


	### Table
	# read from clipboard into table x
	x = read.DIF(file='clipboard', header=TRUE, transpose=TRUE)

	# write table x to clipboard
	write.table(x, "clipboard", sep="\t", row.names=FALSE, col.names=TRUE)

- reference: [johndcook r_excel_clipboard](http://www.johndcook.com/r_excel_clipboard.html)

## For each line, manipulate

Using ruby, gets flexible to do a lot:

	File.open(ARGV[0], 'r').each_line do |line| 
	  puts line.split(",")[0].gsub('"', '')
	end


### Notes:

- command line Unix like tools in windows can be found for example in: [Git for Windows shell](http://msysgit.github.com/) (bundles minGW)


