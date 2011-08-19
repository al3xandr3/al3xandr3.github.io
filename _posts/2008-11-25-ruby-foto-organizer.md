--- 
layout: post
title: Little 'ruby' photo organizer
categories: 
- ruby
- photo
- automations
intro: "\n\
  Place this script in a folder full of pictures, run it, and it will organize the pictures into folders by the day they were taken.\n"
---

Place this script in a folder full of pictures, run it, and it will organize
the pictures into folders by the day they were taken.

    
    $ ruby photo_organizer.rb
    

## Code:

    
    #photo_organizer.rb
    require 'fileutils'
    
    def fileShortDate(fich)    
      dt = File.mtime(fich)
      dt.strftime("%Y%m%d")
    end
    
    def isImagem(fich)
        File.extname(fich).upcase == ".JPG" or File.extname(fich).upcase == ".PNG" or 
        File.extname(fich).upcase == ".AVI" or File.extname(fich).upcase == ".WAV"
    end
    
    print "Creating dirs "
    Dir.foreach(".") { |x|  Dir.mkdir(fileShortDate(x)) and print(".") if (isImagem(x)) unless File.directory?(fileShortDate(x)) }
    
    print "\nCopying pics "
    Dir.foreach(".") { |x| FileUtils.mv(x, fileShortDate(x)+'/'+x) and print(".") if (isImagem(x)) }
    

