--- 
layout: post
title: How to download videolectures.net videos with VLC
categories: 
  - automation
intro: "<a href=\"http://videolectures.net/\">videolectures.net</a> has very good content but, no good way to download the videos(at least as of now)."
---

[videolectures.net][1] has very good content but, no good way to download the
videos(at least as of now).

And oftentimes you want to watch them offline, so here's a way to dowload them
if you have VLC video player installed.

This of course works for all videos that are streamed from an mms:// address
and not only the videolectures ones.

Btw, found same idea, but using mplayer instead, from [bradfordcross here][2].

## How to

Find the mms:// address for the video(from the web page source) and do:

    
    $ /Applications/VLC.app/Contents/MacOS/VLC -I rc mms://velblod2.ijs.si:80/2009/pascal2/mlss09uk_cambridge/mackay_it/mlss09uk_mackay_it_01.wmv --sout ~/Desktop/information-theory.avi
    

If you are not on a Mac, then you need to update the paths.

## Make a bash script from it

Its annoying to write all of the above every time you want to download a
video, so is worth to make a bash script from it.

Create a new file, with content:

    
    # getvideo.sh 
    /Applications/VLC.app/Contents/MacOS/VLC -I rc $1 --sout ~/Desktop/$2.avi vlc://quit;
    

Note that i added the _vlc://quit;_ at the end, this will make it the script
exit when finished.

Make it executable and reachable from everywhere:

    
    $ chmod 711 getvideo.sh 
    $ ln -s getvideo.sh /usr/bin/getvideo
    

And use like so:

    
    $ getvideo mms://velblod2.ijs.si:80/2009/pascal2/mlss09uk_cambridge/mackay_it/mlss09uk_mackay_it_01.wmv information-theory
    

   [1]: http://videolectures.net/
   [2]: http://measuringmeasures.blogspot.com/2009/12/downloading-from-videolecturesnet.html

