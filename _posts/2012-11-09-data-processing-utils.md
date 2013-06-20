--- 
layout: post
title: Data Processing Utils
category: cheatsheet
tags:
  - data
  - statistics
intro: "Reference of small utils that help in data processing, filtering, splitting, etc"
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

## count lines

		$ cat file.txt | wc -l

## show the first(and last) lines of a big file

Show the 1st 5 lines in file.txt

		$ head -5 file.txt

Show the last 5 lines of a file

		$ tail -5 file.txt

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

## (ruby)Script - For each line in file Do

Using ruby, gets flexible to do a lot:

	File.open(ARGV[0], 'r').each_line do |line| 
	  puts line.split(",")[0].gsub('"', '')
	end


## Excel: confidence interval and trend 

Code(on cell D93, D94, D95, D96):

	=AVERAGE(D3:D92)
	=CONFIDENCE(0.05, STDEV(D3:D92), COUNT(D3:D92)) / D93
	=SLOPE(D3:D92, ROW(D3:D92))/D93
	=TEXT(D93,"0,0")&" [error ±"&TEXT(D94,"0.00%")&"] [trend: "&TEXT(D95,"0.00%")&"]"

  - D3:D92 is the column of numbers we want to apply the calculations to.
  - confidence interval for a 95% accuracy.

Output:

	801,763  // average
	1.74%    // 95% confidence error (±)
	-0.27%   // trend direction(per day, when each row is a day's data)
	801,763 [error ±1.74%] [trend: -0.27%] // everything


## Excel: time hh:mm to minutes(or hours)

To minutes(there's 1440 minutes(24 hours) in a day, excel keeps time fraction between 0 and 1), so for minutes:

	=1440*mod(A1,1)

- If you are working with time from a single cell only, be a bit careful. A hh:mm format will indicate only the fractional part of the DATE stored in the cell. That is, 0.24 an 1.24 and 18,000.24 will all display the same. To make sure you are getting only the fractional part (if that is what you want) use mod.
- Can also get the hour by doing: =24*mod(A1,1)

Output:

	| before   | after  |
	| 01:47:41 | 107.68 |


## Convert text file encoding

Many text editors support doing this, but when the file is too big use instead the command line.

In windows powershell(from utf-8 to ascii)

	gc -en utf8 in.txt | Out-File -en ascii out.txt 

- reference(for *nix machine also): [best-way-to-convert-text-files-between-character-sets @stackoverflow](http://stackoverflow.com/questions/64860/best-way-to-convert-text-files-between-character-sets)


### Excel: pivot table count distinct

Insert a column and in Cell C2 paste this formula:

	=IF(SUMPRODUCT(($A$2:$A2=A2)*($B$2:$B2=B2))>1,0,1)

Reference: http://stackoverflow.com/questions/11876238/simple-pivot-table-to-count-unique-values

### References:

- command line Unix like tools in windows can be found for example in: [Git for Windows shell](http://msysgit.github.com/) (bundles minGW)
- [Top 10 Unix Command Line Utilities 2012](http://blog.coldflake.com/posts/2012-12-30-Top-10-Unix-Command-Line-Utilities-2012.html)