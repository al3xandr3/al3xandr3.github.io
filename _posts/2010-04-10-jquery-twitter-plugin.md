--- 
layout: post
title: jQuery Twitter 'mini' plugin
categories: 
  - javascript
intro: "Here's a little jQuery plugin for displaying a twitter feed into a web page."
---

Here's a little jQuery plugin for displaying a twitter feed into a web page.

The goal was to put my latest 'tweets' on my blog, and also learn jQuery.

Ended up making a 'mini' jQuery plugin that can easily be added into any web
page.

## Demo:

For the code:

    
    $(function() {
      $('#tw').click(function() {
        $('#tw').twitter({'user':'al3xandr3','count':1});
      });
    });
    
<script type="text/javascript">
$(function() {
  $('#tw').click(function() {
    $('#tw').twitter({'user':'al3xandr3','count':1});
  });
});
</script>
<p id="tw"><strong>click me</strong></p>

## How It Works

It makes an Ajax request to twitter that returns json data of the feed. That
data is then read and injected into the selected html element(s).

See in:

    
    $.ajax({
      url: "http://twitter.com/status/user_timeline/" + settings.user + 
           ".json?count="+ settings.count +"&callback=?",
      dataType: 'json',
      success: function (data) {
        $this.html(""); //clean previous html
        
        $.each(data, function (i, item) {
          
          //text
          $this.append("<p id=" + item.id + ">" + 
                       replaceURLWithHTMLLinks(item.text) + 
                       "</p>");
    
          //date
          if (typeof prettyDate(item.created_at) !== "undefined") {       
            $("<div><a style='font-size: 80%;' href='http://twitter.com/" +
              settings.user + "/status/" + item.id + "' target='_blank'>" +
              prettyDate(item.created_at) + "</a></div>").appendTo("#" + item.id);
          }
        });}
    });
    

jQuery is a very nice designed lib, simple and powerfull. Some say [its just
like a functional programming Monad][1].

Full source code is available from github: [http://github.com/al3xandr3
/jquery-twitter-plugin][2]

   [1]: http://importantshock.wordpress.com/2009/01/18/jquery-is-a-monad/
   [2]: http://github.com/al3xandr3/jquery-twitter-plugin

