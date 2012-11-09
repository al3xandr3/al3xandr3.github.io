--- 
layout: post
title: Data Processing Utils
category: data
tags:
  - data
intro: "reference of small utils that help in data processing / filtering / spliting / etc"
---

Reference of Data Processing Utils

## filter

Exclude lines from **file.csv** that contain a "." and output the result into **file2.csv**

  	$ cat file.csv | grep -v '\.' > file2.csv

Usefull if you need to filter a big text file (that text editors arent able to handle).
	

## split

Split **file.csv** in files of size **1000** lines each

  	$ split -l 1000 file.csv

Usefull if you need to open a file in excel that is bigger that excel allows. Split it into multiple files.


Unix like tools can be found on windows for example in: 

*[more to be added]*
