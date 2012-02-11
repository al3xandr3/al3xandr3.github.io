--- 
layout: post
title: Little 'ruby' photo organizer
categories: 
  - automation
  - ruby
intro: "Place this script in a folder full of pictures, run it, and it will <strong>organize the pictures</strong> into folders by the day they were taken."
---

Place this script in a folder full of pictures, run it, and it will organize
the pictures into folders by the day they were taken.

    
    $ ruby photo_organizer.rb
    

## Code:

    
    # filename: photo_organizer.rb
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
      Dir.mkdir d and print '.' if isPic? f unless File.directory? dt
    end
    
    print "\nMoving pics"
    Dir.foreach(".") do |f| 
      FileUtils.mv(f, picDate(f)+'/'+f) and print '.' if isPic? f
    end
    puts
    

