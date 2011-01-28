/*global jQuery, _gaq $*/
/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, white: true, widget: true, undef: true, indent: 2*/

var al3xandr3 = {};

al3xandr3.color1 = "#FFFFFF";
al3xandr3.color2 = "#A66553";
al3xandr3.color3 = "#E7E7E7";
al3xandr3.color4 = "#819B4D";

//On Document Ready
$(function () {

  //////CSS
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
    "font-size": "330%",
    "border-bottom": "0px solid"
  }).addClass("alt");
  
  $("ul").css({
    "list-style": "none outside none", 
    "padding-top": "1.5em"
  });
 
  $("#menu li").css({
    "float": "left", 
    "margin": "0 0.3em",
    "font-size": "150%"
  }).addClass("alt");

  $("#menu li a").css({
    "color": "#333",
    "text-decoration": "none",
    "border-bottom": "0px solid "
  });

  $("#content").css({
    "font-family": "Geneva"
  });

  $("#post-list li #post-summary").css({   
    "font-size": "120%",
    "margin": "0.6em"
  }).addClass("alt");

  $("#post").css({
    "font-size": "107%"
  });

  $("#footer").css({
    "font-size": "110%"
  }).addClass("alt");
  
  $("td").removeClass("left");
 
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
