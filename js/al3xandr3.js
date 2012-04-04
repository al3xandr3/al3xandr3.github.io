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

al3xandr3.color1 = "#008BBF";
al3xandr3.color2 = "#008BBF";
al3xandr3.color3 = "#E7E7E7";

//On Document Ready
$(function () {

  // CSS
  //  $("#title").spanify("3", "titlenumbers");
  //  $(".titlenumbers").css('color', al3xandr3.color1);
  $('pre').addClass("prettyprint");
  prettyPrint();

  //hide discuss ugly link
  $(".dsq-brlink").hide();
  $(".dsq-item-trackback").hide();

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
