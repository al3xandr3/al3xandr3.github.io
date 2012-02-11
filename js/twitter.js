/*global jQuery, $*/
/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, white: true, widget: true, undef: true, indent: 2*/

(function ($) {
  $.fn.twitter = function (options, callback) {
    
    var settings = $.extend({user: "al3xandr3", count: 2}, options),
        tw_data = "",
        elems = this, //to be available inside the displayData func
    
    // source: http://stackoverflow.com/questions/37684/replace-url-with-html-links-javascript
    // added the twitter users @thing 
    replaceURLWithHTMLLinks = function (text) {
      var lnks = /(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig,
          usrs = /\B@([_a-z0-9]+)/ig;

      return text.replace(lnks, "<a href='$1' target='_blank'>$1</a>").replace(usrs, 
                               "@<a href='http://twitter.com/$1' target='_blank'>$1</a>");
    },
    
    // source: http://ejohn.org/blog/javascript-pretty-date/
    // slightly modified, so errors are likelly my fault
    // Data format expected: "Thu Apr 29 15:21:27 +0000 2010"
    prettyDate = function (twt_time) {
      var time_split = (twt_time && twt_time.split(" ")) || "",
          time_value = time_split[1] + " " + time_split[2] + ", " + 
                       time_split[5] + " " + time_split[3],
          date = new Date(time_value),
          //takes off local timezone
          diff = (((new Date()).getTime() - date.getTime()) / 1000) - (new Date().getTimezoneOffset() * -1 * 60),  
          day_diff = Math.floor(diff / 86400);
      
      if (isNaN(day_diff) || day_diff < 0)
      {
        return;
      } 
      
      return day_diff === 0 && (
        diff < 60 && "just now" ||
          diff < 120 && "1 minute ago" ||
          diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
          diff < 7200 && "1 hour ago" ||
          diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||     
        day_diff === 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.floor(day_diff / 7) + " weeks ago" ||
        day_diff < 365 && Math.floor(day_diff / 31) + " months ago" || 
        Math.floor(day_diff / 365) + " years ago";
    },
    
    getTimeline = function (user, count, callback) {
      // requests the twitter data;
      $.ajax({
        url: "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + user + 
          "&count=" + count + "&callback=?" + "&include_rts=true",
        dataType: 'json',
        success: function (data) {  
          callback(data, count); 
        }
      });
    },

    // Appends the twitter status data to each of the selected html elements
    displayData = function (dta, count) {

      /* For when i exclude RT from dta and still want to see settings.count */
      if (dta.length < settings.count && count < 15) {
        return getTimeline(settings.user, count += 1, displayData);
      }
      
      //iterates over each selected html elems
      elems.each(function () {
        var $this = $(this); //holds a reference to the current element
        
        $this.html(""); //clean previous html of current element
  
        //iterates each of the recieved twitter status
        $.each(dta, function (i, item) {
    
          //text
          $this.append("<p id=" + item.id + ">" + 
                         replaceURLWithHTMLLinks(item.text) + 
                       "</p>");
          
          //date
          if (typeof prettyDate(item.created_at) !== "undefined") {       
            $("<div><a style='font-size: 80%;' href='http://twitter.com/" +
              settings.user + "/status/" + item.id_str + "' target='_blank'>" +
              prettyDate(item.created_at) + "</a></div>").appendTo("#" + item.id);
          }
        }); 
      });

      // Invoke the callback giving as argument the processed 
      // and final html element we are working on
      if (typeof callback === "function") {
        callback(elems);
      }
    }; 
      
    getTimeline(settings.user, settings.count, displayData);
    
    return this;
  };
}(jQuery));

/*
// How to use:
// When you have for example: <div id='twitter'></div>, then:
$(function() {
  
  $('#twitter').twitter({'user': 'al3xandr3', 'count': 3});
  
  // from version 2.0:
  // allows a callback to be called when everything is 
  // processed and ready to display
  $('#twitter').twitter({'user': 'al3xandr3', 'count': 3}, function (el) { 
    el.hide().show('slow');
  });
});
*/
// Depends on: 
// <script type="text/javascript" src="http://code.jquery.com/jquery-latest.pack.js"></script>
