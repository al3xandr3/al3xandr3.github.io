--- 
layout: post
title: Photo organizer
category: code
tags:
  - automation
  - ruby
  - python
intro: "Script to organize pictures into folders by the day they were taken"
---

Place this script file in a folder full of pictures, run it, and it will organize
the pictures into folders by the day they were taken. 

## Ruby Version:

Run:

    $ ruby picsort.rb

Code:

    # filename: picsort.rb
    #!/usr/bin/env ruby

    require 'fileutils'
    require 'exifr'
    
    def picDate(file)
      begin 
        ex = EXIFR::TIFF.new(file) || EXIFR::JPEG.new(file)
        (ex.date_time).strftime "%Y%m%d" if ex.exif?
      rescue
        File.mtime(file).strftime "%Y%m%d"
      end
    end
    
    def isPic?(file)
      [".JPG",".JPEG",".PNG",".AVI",".WAV",".NEF",".MOV",".TIFF"]
        .include? File.extname(file).upcase
    end
    
    print "Creating dirs"
    Dir.foreach(".") do |f|
      dt = picDate f 
      Dir.mkdir dt and print '.' if isPic? f unless File.directory? dt
    end
    
    print "\nMoving pics"
    Dir.foreach(".") do |f| 
      FileUtils.mv(f, picDate(f)+'/'+f) and print '.' if isPic? f
    end
    puts
    

## Python Version:

Run:

    $ python picsort.py

Code:

    # filename: picsort.py
    from PIL import Image
    from PIL.ExifTags import TAGS
    import os
    import time
    from datetime import datetime

    def get_exif(path):
        ret = {}
        i = Image.open(path)
        info = i._getexif()
        for tag, value in info.items():
            decoded = TAGS.get(tag, tag)
            ret[decoded] = value
        return ret

    def picDate (path):
        res = ""
        try:
            res = datetime.strptime(get_exif(path)['DateTimeOriginal'], "%Y:%m:%d %H:%M:%S")
        except:
            res = ""
        return res

    def isPic (path):
        file, ext = os.path.splitext(path)
        return (ext.upper() in [".JPG",".JPEG",".PNG",".NEF",".TIFF"])

    import glob
    for file in glob.glob('*'):
        if isPic(file):
            if picDate(file) != "":
                dir = picDate(file).strftime("%Y-%m-%d")
                if not(os.path.exists(dir)):
                    os.mkdir(picDate(file).strftime("%Y-%m-%d"))
                os.rename(file, dir + '/' + file)

