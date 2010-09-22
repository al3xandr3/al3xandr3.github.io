/*global jQuery, _gaq $*/
/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, white: true, widget: true, undef: true, indent: 2*/

(function ($) {
  $.fn.spanifyText = function () {   
    return this.each(function () {
      var $this = $(this), //holds a reference to the current element
          new_txt = "";
      
      //iterates over each character of the text of the element
      $.each($this.text(), function (key, value) {
        new_txt += "<span>" + value + "</span>";
      });

      $this.html(new_txt);
    });
  };
}(jQuery));

var AL3XANDR3 = {};

AL3XANDR3.colorHeader = function (color) {
  $("#header-title").spanifyText().children().filter(function (index) {
    return $(this).text() === '3';    
  }).css('color', color);
};

AL3XANDR3.colorSidebar = function  (color) {
  $("#sidebar h3 a").spanifyText();
  $.each($("#sidebar h3 a"), function (k, v) {
    $(v).children().filter(':nth(2)').css('color', color);
  });
};

AL3XANDR3.themeColor1 = "#F1DF27";
AL3XANDR3.themeColor2 = "#F7D116";
AL3XANDR3.themeColor3 = "#E38E24";

//On Document Ready
$(function () {


  $('#about-lnk').click(function (ev) {
    ev.preventDefault();
    $("<div id='about-dialog' class='jqmWindow'></div>").insertAfter('#header');
    $('#about-dialog').jqm({
      onShow: function (hash) { 
        hash.w.css({"background-color": '#F9F9F4'}).fadeIn('2000'); 
      }, 
      onHide: function  (hash) { 
        hash.w.fadeOut('2000', function () { 
          hash.o.remove(); 
        });
      }
    });
    $.get('/pages/al3xandr3.html', function (data) {
      var content = $(data).find('div#about').html();
      $('#about-dialog').html("<a href='#' class='jqmClose'>Close</a><hr>");
      $('#about-dialog').append(content);
      $('#about-dialog').jqmShow();
      if (typeof _gaq !== 'undefined') {
        _gaq.push(['_trackEvent', 'About', 'Open']); 
      }
    });
  });

  //Color Title Numbers
  AL3XANDR3.colorHeader(AL3XANDR3.themeColor3);
  //AL3XANDR3.colorSidebar(AL3XANDR3.themeColor3);

  //center images in posts
  $("#post p img").parent().css("text-align", "center");

 // [jump] to top
  $('.jump').click(function () {
    $('html, body').animate({scrollTop: 0}, 'slow');
  }); 

  // toggle [about]
  //$("#search").hide();
  $('#searchlnk').toggle(
      function () {
        $("#search").show(function () {
          $('#search-input').focus();
        });
      },
      function () { 
        $("#search").hide("slow");
      }
    );

});