--- 
layout: post
title: Javascript Bookmark Scripts
category: code
tags:
  - javascript
intro: "Create and share little javascript scripts that augment/improve the pages you look at."
---

I often use scripts that inject javascript and modify current page im looking at, mostly for inspecting/debug reasons, for example the [WhatFont](http://chengyinliu.com/whatfont.html), that reveals what fonts the page is using.
These scripts can be triggered from a browser bookmark, so that they run with just a click(very convenient).

## Pretty.js

Here's an example. This script finds programming code placed on a web page and makes it pretty, using the google pretiffy syntax highlight javascript lib.

	// A. Add as browser bookmark:
	// javascript:(function(){var d=document,s=d.createElement('scr'+'ipt'),b=d.body,l=d.location;s.setAttribute('src','https://raw.github.com/gist/4213877/pretty.js');b.appendChild(s)})();

	// B. Loads javascript
	// note that callback function needs be before calling loadJS(or inline)
	// loadJS("http://code.jquery.com/jquery-latest.js", function() { $('my_element').hide(); });
	var loadJS = function (url, callback) {
	  var head = document.getElementsByTagName("head")[0];
	  var script = document.createElement("script");
	  script.src = url;

	  // Attach handlers for all browsers
	  var done = false;
	  script.onload = script.onreadystatechange = function() {
	    if( !done && ( !this.readyState             || 
	                    this.readyState == "loaded" || 
	                    this.readyState == "complete")) {
	      done = true;

	      // Continue your code
	      callback();

	      // Handle memory leak in IE
	      script.onload = script.onreadystatechange = null;
	      head.removeChild( script );
	    }
	  };

	  head.appendChild(script);
	}

	// C. main function to run after js files are loaded
	var run = function () {
	  // include pretiffy.css
	  $('head').append('<link rel="stylesheet" href="http://al3xandr3.github.com/css/prettify.css" type="text/css" />');
	  // find all elements with pre (typically where code is)
	  $('pre').addClass("prettyprint");
	  // make pretty !!
	  prettyPrint();
	}

	// D. jquery and take it from there
	loadJS('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function () {
	  //when finished loading jquery load prettify.js, then run
	  loadJS('http://al3xandr3.github.com/js/libs/prettify.js', run);
	});

How it works:

1. The browser bookmark code(in A.) loads the pretty.js a (github)gist hosted script.
2. The pretty.js script itselfs loads external jquery.js and prettify.js libs(in D. by using B.)
3. When external libs are fully loaded it runs a bit of code that for every pre html tag(tipically where code exists) makes it pretty(syntax highlighted). (in C.)

Pretty.js is hosted here: [https://gist.github.com/4213877](https://gist.github.com/4213877)

### Notes:
- A. The code to be used in the URL field of the browser bookmark. Note that depending on the url you use from gist, you can choose to share a [versioned version](https://raw.github.com/gist/4213877/4c14223a09c85f9cb7c7c8a9da60453db25a7372/pretty.js) or the [lastest one](https://raw.github.com/gist/4213877/pretty.js).
- B. Is a generic function to load external javascripts, it waits until the external script is fully loaded and then runs a function(called *run* in this case). See how is used in D.(loads 2 external js files in sequence and then calls run).
- C. Is the function to run when external scripts are loaded on page.

I have also put toguether a javascript growl type alerts as a gist, to be used in bookmarks like these: [see here](https://gist.github.com/3736933)

I imagine this is a very common pattern for this type of script, so feel free to use, re-use, modify.

Kudos for the **github:gist** service! (it even includes versioning !!)


## Note
- Here's is a nice collection of ready made bookmarklets: [https://github.com/yaph/bookmarklets](https://github.com/yaph/bookmarklets)
