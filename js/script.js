/* Author:
  Alexandre Martins
*/

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

//On Document Ready
$(function () {

  // CSS
  //  $("#title").spanify("3", "titlenumbers");
  //  $(".titlenumbers").css('color', al3xandr3.color1);
  

  $('#title').click(function(){ document.location="/";} );

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


  /*
  // Cheat Sheets
  if (location.pathname.indexOf('/cs/') !== -1) {

   $("h3").each(function( index ) {
     
    var elearr = $(this).nextUntil('h3');
    //elearr.push(this);
    var paragraph = $(this).add(elearr);

     if (index%2 === 0) {
        paragraph.wrapAll('<div class="item"></div>');
     } else {
        paragraph.wrapAll('</div><div class="item marg">');
     }
  });
   */

  }



});
