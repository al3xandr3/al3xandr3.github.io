--- 
layout: post
title: Homemade Auto-Updater
categories: 
  - automation
  - emacs
intro: "Here's a script that i use frequently to update an application to the last version. It automates the process of downloading and installing the app."
---


Here's a script that i use frequently to update an application to the last
version. It automates the process of downloading and installing the app.

### Aquamacs

Every day there's a new release of Aquamacs, its called the nightly build,
made from the latest developed code. And is always available from the same
url.

So the script does the following: creates temporary folder for it, downloads
the latest version, unpacks it, requests to close Aquamacs if running(so it
can replace it), creates a backup version AquamacsOld.app (in case the new
ones has troubles i can use the previous), copies the files to the
applications folder and cleans up the temporary downloaded files.

    
    #!/bin/bash
    mkdir /tmp/emacsdownload && cd /tmp/emacsdownload
    curl http://braeburn.aquamacs.org/~dr/Aquamacs/24/Aquamacs-nightly.tar.bz2 --silent -o /tmp/emacsdownload/aquamacs.tar.bz2
    tar xjf /tmp/emacsdownload/aquamacs.tar.bz2
    RUN=`ps -ef | grep Aquamacs | grep -v grep`
    if [ -n "$RUN" ]; then
      x=`/usr/bin/osascript <<EOT
        tell application "Finder"
          activate
          set myReply to button returned of (display dialog "Please close Aquamacs to update" default button 2 buttons {"No", "Ok"})
        end tell
    EOT`
      if [[ $x = "No" ]]; then exit; fi
    fi
    rm -rf /Applications/AquamacsOld.app
    mv -f /Applications/Aquamacs.app /Applications/AquamacsOld.app
    cp -R /tmp/emacsdownload/Aquamacs.app /Applications
    rm -rf /tmp/emacsdownload
    

### Chromium

For Chromium on each build the download url changes, so we have to add extra
logic for this, first it figures out the latest version and then uses that
information for the download url, the rest is similar to the Aquamacs script.

    
    #!/bin/bash
    CHROMEDIR="http://build.chromium.org/f/chromium/snapshots/Mac/"
    mkdir /tmp/chromedownload && cd /tmp/chromedownload
    curl $CHROMEDIR/LATEST -o /tmp/chromedownload/LATEST --silent && LATEST=`cat /tmp/chromedownload/LATEST`
    curl $CHROMEDIR/$LATEST/chrome-mac.zip --silent -o /tmp/chromedownload/chrome-mac.zip
    unzip -qq /tmp/chromedownload/chrome-mac.zip
    RUN=`ps -ef | grep Chromium | grep -v grep`
    if [ -n "$RUN" ]; then
      x=`/usr/bin/osascript <<EOT
        tell application "Finder"
          activate
          set myReply to button returned of (display dialog "Please close Chromium to update" default button 2 buttons {"No", "Ok"})
        end tell
    EOT`
      if [[ $x = "No" ]]; then exit; fi
    fi
    rm -rf /Applications/Chromium.app
    cp -R /tmp/chromedownload/chrome-mac/Chromium.app /Applications
    rm -rf /tmp/chromedownload
    

### Automate it

To automate we can add it into a cron job like so:

    
    01      11      *       *       *       update-chromium
    

That runs every day at 11h01

