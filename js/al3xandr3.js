/*global jQuery, $*/
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
  $(".header-title").spanifyText().children().filter(function (index) {
    return $(this).text() === '3';    
  }).css('color', color);
};

AL3XANDR3.colorFooter = function  (color) {
  $(".footer-link").spanifyText();
  $.each($(".footer-link"), function (k, v) {
    $(v).children().filter(':first').css('color', color);
  });
};

AL3XANDR3.themeColor1 = "#F1DF27";
AL3XANDR3.themeColor2 = "#F7D116";
AL3XANDR3.themeColor3 = "#E38E24";

//On Document Ready
$(function () {

  //Color Title Numbers
  AL3XANDR3.colorHeader(AL3XANDR3.themeColor3);
  AL3XANDR3.colorFooter(AL3XANDR3.themeColor3);

  //center images in posts
  $("#post p img").parent().css("text-align", "center");

});