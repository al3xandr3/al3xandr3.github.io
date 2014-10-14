--- 
layout: post
title: Data Processing Techniques
category: data
tags:
  - data
  - statistics
intro: "Reference of techniques that help in data processing, filtering, splitting, etc"
---

Reference of data processing techniques.

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

## show the first (and last) lines of a big file

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

## (ruby) Script - For each line in file Do (something)

Using ruby, gets flexible to do a lot:

    File.open(ARGV[0], 'r').each_line do |line| 
      puts line.split(",")[0].gsub('"', '')
    end


## regular expressions 

Some might not always exactly as they are depending on tool

^\n - lines starting with newline = empty lines

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

## Excel: pivot table count distinct

Insert a column and in Cell C2 paste this formula:

    =IF(SUMPRODUCT(($A$2:$A2=A2)*($B$2:$B2=B2))>1,0,1)

Reference: http://stackoverflow.com/questions/11876238/simple-pivot-table-to-count-unique-values

## Excel: Finding the last filled row, for a given column

Useful for automating excel reports, imagine keep adding rows to an existing table to add in more data, often a report need to calculate a value considering all exiting rows.

A way to do this, for column B:

    =MAX((B1:B1000<>"")*(ROW(B1:B1000)))

Looks at rows 1 up to 1000 and finds the last filled value.
Does an array calculation, from 1 to 1000. Calculates a vector of true or false (whether is empty or not) and then multiplies with another vector that contains the row numbers obtaining a vector with the row numbers of the filled values. Then gets the Max out of that.

Enter this formula and then do: Shift + Ctrl + Enter
This last command is required because this is an array calculation, instead of a call calculation (the most common).

## Excel: value of a cell given a text coordinate

    =INDIRECT("E"&C7)

Returns the value in cell EX, where x is a value inside cell C7.
Useful when calculating dynamic ranges, for automatic updating reports.

## Excel: sum the last 30 rows for a given column (dynamically, when data is added to bottom)
    
1. Find the Index of the last row not empty:

    =MAX((B1:B1000<>"")*(ROW(B1:B1000)))

place in cell Q2 (for calculation bellow)

2. For column B, sum last 30

    =SUM(INDIRECT("N"&(Q2-30)&":N"&Q2))

## Excel: Using dynamic ranges for charts/ pivot tables, etc..

Great for automating Excel Reports.

See here: http://www.analyticsvidhya.com/blog/2014/09/automate-excel-models-reporting-dynamic-range/

- Create named dynamic ranges. ex:

        =INDIRECT("Steps!$D$12:$D$"&INDIRECT("Steps!$C$8"))

- Reference them in charts for example. (use to list them to use F3)


## Excel: Pivot Tables

Renaming a field in pivot table is not allowed "PivotTable field name already exists": add a space at start (or end).
 ex: "Sum of MyField" -> " MyField"

Pivot Table field has a "(blank)" or some other thing you don't want in final report: 
 1. rename it to a space (" ")
 2. order the column so that spaces appear at end of start
 
## Excel: Better number formatting

Format a number to have thousands (K) and Millions as (M). 7.6M instead of 7,592,712. works also for thousands (K)

    [>=1000000] $#,##0.0,,"M";[<1000000] $#,##0.0,"K";General





## Download a site

      wget -m -p -E -k -K -np http://www.somesite.com/

- "-m" mirror site.
- "-E" put .html on unrecognized fiels.
- "-k" convert the links in the document to make them suitable for local viewing.
- "-K" When converting a file, back up the original version with a ‘.orig’ suffix.
- "-np" Do not ever ascend to the parent directory when retrieving recursively.

## References:

- command line Unix like tools in windows can be found for example in: [Git for Windows shell](http://msysgit.github.com/) (bundles minGW)
- [Top 10 Unix Command Line Utilities 2012](http://blog.coldflake.com/posts/2012-12-30-Top-10-Unix-Command-Line-Utilities-2012.html)
- http://datavu.blogspot.com/2014/08/useful-unix-commands-for-exploring-data.html
