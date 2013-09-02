/* Author:
  Alexandre Martins
*/

// CSS
//  $("#title").spanify("3", "titlenumbers");
//  $(".titlenumbers").css('color', al3xandr3.color1);
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



/* 
  Wordcloud
*/

// http://jsfiddle.net/shaydoc/rxcHA/
var al3xandr3 = al3xandr3 || {};

al3xandr3.get_quotes_count = function () {
  if (typeof $ === "undefined") {
    throw "missing jQuery";
  }
  var text = $('blockquote').text();

  text_clean = text.replace(/[€!,?.":;\-\#\(\)\&\/]/g,' ').split(" ");

  var res =
    _.chain(text_clean)
    // http://norm.al/2009/04/14/list-of-english-stop-words/
    .without('can\'t','like','', '1','2','10','bit','ly','com','http','i','a', 'about', 'above', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also','although','always','am','among', 'amongst', 'amoungst', 'amount',  'an', 'and', 'another', 'any','anyhow','anyone','anything','anyway', 'anywhere', 'are', 'around', 'as',  'at', 'back','be','became', 'because','become','becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom','but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven','else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own','part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the')
    .groupBy( function(word) { return word; } )
    .sortBy( function(word) { return word.length; } )
    .reject( function(word) { return (word.length < 3 ); } )
    .reduce( function(counts, word) {
      counts.push({text: word[0], size: word.length});
      return counts;
    }, [])
    .value();

  return res;
};

// requires:
// <script src="../lib/d3/d3.js"></script>
// <script src="../d3.layout.cloud.js"></script>
al3xandr3.wordcloud = function(placement, words) {
  var fill = d3.scale.category20();

  d3.layout.cloud().size([400, 400]) // [300, 300]
      .words(words)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return (d.size*d.size) + 12; })
      .on("end", draw)
      .start();

  function draw(words) {
    d3.select(placement).append("svg")
        .attr("width", 400) // 300
        .attr("height", 440) // 300
      .append("g")
        .attr("transform", "translate(200,220)") // translate(150,150)
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });

    var anima = function () {
          d3.select(this).transition()
          .duration(500)
          .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + (d.rotate+15) + ")"; })
          .style("font-size", function(d) { return (d.size-3) + "px"; })
        .transition()
          .delay(500)
          .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
          .style("font-size", function(d) { return d.size + "px"; });
    };

    var text = d3.select(placement).selectAll("text");
    text.on("mouseover", anima);

  }
};
// al3xandr3.wordcloud("#quote_cloud", al3xandr3.get_quotes_count());


/* 
  Animated Title
*/
al3xandr3.title = function () {
  var fill = d3.scale.category20();
  d3.select("#title").append("svg")
      .attr("width", 350)
      .attr("height", 65)
    .append("g")
    .selectAll("text")
      .data(['A', 'L', '3', 'X', 'A', 'N', 'D', 'R','3'])
    .enter().append("text")
      .attr("text-anchor", "top")
      .attr("transform", function(d, i) {
          return "translate(" + [i*33, 60] + ")rotate(" + 0 + ")";
      })
      .style("opacity", 0.8)
      .style("font-size", function(d) { return "54px"; })
      .attr("vertical-align", "middle")
      .text(function(d) { return d; });

  d3.select("#title").selectAll("text").transition()
      .duration(10000)
      .delay(function(d, i) { return i * 10; })
    //.style("fill", function(d, i) { return fill(i); })
    //.attr("transform", function(d, i) { return "translate(" + [i*35, 60] + ")rotate(" +  (~~(Math.random() * 2) * 90) + ")"; });

};


/* 
  On Document Ready
*/

$(function () {

  // animated title
   al3xandr3.title();
  // link click  
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

  // wordcloud animation
  if (location.pathname === "/pages/quotes.html") {
    al3xandr3.wordcloud("#quote_cloud", al3xandr3.get_quotes_count());
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
  }
*/

});