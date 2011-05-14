/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, white: true, widget: true, undef: true, indent: 2, nomen: false*/
/*global jQuery, _gaq $*/

(function ($) {
  $.fn.spanify = function (str, aclass) {
    var regex = new RegExp(str, "gi");    
    return this.each(function () {
        this.innerHTML = this.innerHTML
            .replace(regex, function (matched) { 
              return "<span class=\"" + aclass + "\">" + matched + "</span>"; 
            });
      });
  };
}(jQuery));

var al3xandr3 = {};

al3xandr3.color1 = "#F4F4F4";
al3xandr3.color2 = "#819B4D";
al3xandr3.color3 = "#E7E7E7";
al3xandr3.color4 = "#E42217";
//al3xandr3.back = "#F4F4F4";


//On Document Ready
$(function () {

  //////CSS

  $("body").css({
    "background": "url('/img/background2.png') repeat scroll 0 0 " + 
      al3xandr3.color1,
    "color": "#333333"
  });

  $("a").hover(function () {
    $(this).css('background-color', al3xandr3.color3);
  }, function () {
    $(this).css('background-color', al3xandr3.color1);
  }).css({
    "color": "#333",
    "text-decoration": "none",
    "border-bottom": "1px solid " + al3xandr3.color3
  });

  $("#title").css({
    "float": "left", 
    "font-size": "460%",
    "letter-spacing": "-.08em",
    "border-bottom": "0px solid"
  }).spanify("3", "titlenumbers");
  $(".titlenumbers").addClass("alt").css('color', al3xandr3.color4);

  $("#subtitle").css({
    "float": "left", 
    "font-size": "160%",
    "color": "#999999",
    "margin-top": "2em",
    "margin-left": "0.4em",
    "letter-spacing": "-.04em"
  });
  
  $("ul#menu, #post-list ul").css({
    "list-style": "none outside none" 
//  "padding-top": "1.5em"
  });

  $("#menu").css({
    "padding-top": "3.1em"
  });

  $("#menu li").css({
    "float": "left", 
    "margin": "0em 0.5em"
  }).addClass("alt");
 
  $("#menu li a").css({
    "color": "#333",
    "text-decoration": "none",
    "border-bottom": "0px solid ",
    "font-size": "165%"
  }).spanify("[or]", "lnkletters");
  
  $(".lnkletters").css('color', al3xandr3.color4);

  $("#content").css({
    "font-family": "Verdana"
  });
  
  $("#cloud #tag").css({
    "color": "#666666"
  });
  
  $("#cloud a").css({
    "border-bottom": "none"
  });

  $("#post-list li").css({   
    "margin-bottom": "2em"
  });

  $("#post-list li .post-details").css({   
    "margin-top": "1em",
    "margin-left": "1em",
    "margin-bottom": "1em",
    "margin-right": "-1em"
  });

//  $("#post-list li .post-details .post-summary").css({   
//    "font-size": "140%",
//    "padding-bottom": "0.3em"
//  }).addClass("alt");

  $("#post-list li .post-details .post-summary").css({
    "font-size": "107%",
    "color": "#666666",
    "line-height": "1.7em",
    "padding-bottom": "0.3em"
  });

  $(".post-date, .post-cat").css({
    "color": "#666666"
  });

  $(".post-date").css({
    "font-size": "95%"
  });

  $("#post").css({
    "font-size": "107%",
    "line-height": "1.7em"
  });

  $("#post-details").css({
    "float": "right"
  });

  $("#page p").css({
    "line-height": "1.7em"
  });

  $("#category-list").css({
    "font-size": "107%"
  });

  $("#footer").css({
    "font-size": "110%"
  }).addClass("alt");
 
  $("#sidebar").css({
    "color": "#666666",
    //"border-left": "1px solid #DDDDDD",
    "margin-left": "20px",
    "padding-left": "15px"
  });

  $("td").removeClass("left");

  $("#paginator_current")
    .addClass("alt")
    .css('color', al3xandr3.color4)
    .css("font-size", "180%");

  $("#tosep")
    .css('color', '#DDDDDD');
  ///////////////

  //Search
  $('#search').toggle(
      function () {
        $("#searchbox").show(function () {
          $('#search-input').focus();
        });
      },
      function () { 
        $("#searchbox").hide("slow");
      }
    );

  //About
  $('#about').click(function (ev) {
    ev.preventDefault();
    $("<div id='aboutbox' class='jqmWindow'></div>").insertAfter('#header');
    $('#aboutbox').jqm({
      onShow: function (hash) { 
        hash.w.css({"background-color": al3xandr3.color1}).fadeIn('2000'); 
      }, 
      onHide: function  (hash) { 
        hash.w.fadeOut('2000', function () { 
          hash.o.remove(); 
        });
      }
    });
    $.get('/pages/al3xandr3.html', function (data) {
      var content = $(data).find('div#about').html();
      $('#aboutbox').html("<a href='#' style='float: right;' class='jqmClose'>Close</a>");
      $('#aboutbox').append(content);
      $('#aboutbox').jqmShow();
      if (typeof _gaq !== 'undefined') {
        _gaq.push(['_trackEvent', 'About', 'Open']); 
      }
    });    
  });
  
 // Jump to Top
  $('.jump').click(function () {
    $('html, body').animate({scrollTop: 0}, 'slow');
  }); 

  /* for images in localhost */
  if (location.host === "localhost:4000") {
    $("img").attr('src', function () {
      return this.src.replace("al3xandr3.github.com", "localhost:4000");
    });
  }
 
  /* for links in localhost */
  if (location.host === "localhost:4000") {
    $("a").attr('href', function () {
      return this.href.replace("al3xandr3.github.com", "localhost:4000");
    });
  }
});
