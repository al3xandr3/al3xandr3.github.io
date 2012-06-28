---
layout: page
title: Twitter Quotes 
intro: "Quotes from Twitter"
---

<div id="cloud"></div>

<script type="text/javascript" src="http://mbostock.github.com/d3/d3.js"></script>
<script type="text/javascript" src="https://raw.github.com/jasondavies/d3-cloud/master/d3.layout.cloud.js"></script>
<script type="text/javascript" src="http://coffeescript.org/extras/coffee-script.js"></script>

<script type="text/coffeescript">
word_counter =

  _ignore: /^(i|im|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|dont|didn't|won't|wouldn't|shan't|shouldn't|can't|cant|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall|just|[0-9]+)$/

  _punctuation: /[!'"&()*+,-\.\/:;<=>?\[\\\]^`\{|\}~]+/g

  _separators: /[\s\u3031-\u3035\u309b\u309c\u30a0\u30fc\uff70]+/g

  _discard: /^(@|https?:)/

  count: (text)->
    text = text.replace(/&\w+;/g, " ")
    text = text.replace(/#/g, " ")
    
    words = {}
    for word in text.toLowerCase().split(word_counter._separators)
      word = word.replace(word_counter._punctuation, '')
      if word is "" or word_counter._ignore.test(word) or word_counter._discard.test(word)
        #console.log "ignoring #{word}"
      else
        try
          words[word] = (words[word]+1 or 0)
        catch error
          console.log word + " " + error
    return words

window.word_counter = word_counter

# get all text
text = ""
$('blockquote').each ->
    text += $(this).text().toLowerCase()

# counts the words
words = word_counter.count(text)

# select words that appear more than once
data = []
for word, count of words
  data.push( {text: word, size: count*10 } ) if count > 1

# viz
fill = d3.scale.category20b();

draw = (words)->
  d3.select("#cloud")
    .append("svg")
      .attr("width", 600)
      .attr("height", 400)
    .append("g")
      .attr("transform", "translate(260,200)")
    .selectAll("text")
      .data(words)

    .enter().append("text")
      .style("font-size", (d)-> d.size + "px" )
      .attr("text-anchor", "middle")
      .attr("transform", (d)-> "translate(" + [d.x+10, d.y+10] + ")rotate(" + d.rotate + ")")
      .text( (d)-> d.text )
      .style("fill", (d)-> fill(d.text.toLowerCase()) )

d3.layout.cloud().size([600, 400])
  .words(data)
  .rotate( -> 0 )
  .font("Impact")
  .fontSize( (d)-> d.size )
  .on("end", draw)
  .start();
</script>

### 2012

<blockquote about="{{page.url}}#2012-06-28" property="dcterms:date" datatype="xsd:date" content="2012-06-28">
<p property='dcterms:description'>our brains adapt to what we expose them to. Culture, habits over long periods of time physically change the brain - worth being selective
</p></blockquote>

<blockquote about="{{page.url}}#2012-06-27" property="dcterms:date" datatype="xsd:date" content="2012-06-27">
<p property='dcterms:description'>is node.js the new rails? aka "the" platform for agile web dev. javascript has advantage, most widespread language interpreter(ever)? - the browser
</p></blockquote>

<blockquote about="{{page.url}}#2012-05-28" property="dcterms:date" datatype="xsd:date" content="2012-05-28">
<p property='dcterms:description'>you can't manage what you can't measure
</p></blockquote>

<blockquote about="{{page.url}}#2012-04-03" property="dcterms:date" datatype="xsd:date" content="2012-04-03">
<p property='dcterms:description'>lifespan of technologies is getting shorter and shorter. To master anything takes time(10y?) => We condemned to be forever newbies?
</p></blockquote>

<blockquote about="{{page.url}}#2012-02-15" property="dcterms:date" datatype="xsd:date" content="2012-02-15">
<p property='dcterms:description'><a href='http://www.youtube.com/watch?v=n77BfxnVlyc'>12 nature design ideas video</a> - humankind is as graceful as a hippo dancing ballet when it comes to building sustainable stuff
</p></blockquote>

<blockquote about="{{page.url}}#2012-02-13" property="dcterms:date" datatype="xsd:date" content="2012-02-13">
<p property='dcterms:description'>being an ace isnt just be able to solve every problem you are given, equaly important is to know which problems are not worth tackling
</p></blockquote>

<blockquote about="{{page.url}}#2012-02-13" property="dcterms:date" datatype="xsd:date" content="2012-02-13">
<p property='dcterms:description'>if stuff seems obvious and people around you keep missing it, then likelly you lack imagination (& fail to see the other possibilities)
</p></blockquote>

<blockquote about="{{page.url}}#2012-01-23" property="dcterms:date" datatype="xsd:date" content="2012-01-23">
<p property='dcterms:description'>evolution says that the ones best fit end up doing better and more widespread, so if you find yourself being very unique and different, beware
</p></blockquote>

<blockquote about="{{page.url}}#2012-01-13" property="dcterms:date" datatype="xsd:date" content="2012-01-13">
<p property='dcterms:description'>my js api's lately get 2 arguments: object & optional function. A object for flexible variables, function for arbitrary execution. It hardly deprecates
</p></blockquote>

<blockquote about="{{page.url}}#2012-01-11" property="dcterms:date" datatype="xsd:date" content="2012-01-11">
<p property='dcterms:description'>RDFa augments web pages as standalone data repositories that #semanticweb can understand, doubling as normal web pages, imagine web scraping done right
</p></blockquote>

<blockquote about="{{page.url}}#2012-01-10" property="dcterms:date" datatype="xsd:date" content="2012-01-10">
<p property='dcterms:description'>Sharing data, in an agreed upon format, is an incentive for re-use and disincentive for wasteful duplication. #semanticweb
</p></blockquote>

<blockquote about="{{page.url}}#2012-01-05" property="dcterms:date" datatype="xsd:date" content="2012-01-05">
<p property='dcterms:description'>tagged up my blog with rdfa, im now officially linked to the #semanticweb, the homepage semantics: <a href="http://www.sparql.org/sparql?query=select+%3Fsubject+%3Fpredicate+%3Fobject+%0D%0AFROM+%3Chttp%3A%2F%2Fwww.w3.org%2F2007%2F08%2FpyRdfa%2Fextract%3Furi%3Dhttp%3A%2F%2Fal3xandr3.github.com%3E%0D%0Awhere+%7B+%3Fsubject+%3Fpredicate+%3Fobject+.+%7D%0D%0A&amp;default-graph-uri=&amp;stylesheet=%2Fxml-to-html.xsl&amp;output=csv&amp;force-accept=text%2Fplain">sparql.org/sparql?query=s</a>
</p></blockquote>

### 2011

<blockquote about="{{page.url}}#2011-12-21" property="dcterms:date" datatype="xsd:date" content="2011-12-21">
<p property='dcterms:description'>data,data,data! a #semanticweb use case on Xmas: <a href='http://al3xandr3.github.com/2011/12/18/data.html'>al3xandr3.github.com</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-13b" property="dcterms:date" datatype="xsd:date" content="2011-12-13">
<p property='dcterms:description'>Think we don't realize yet how much of flying blind we do at the moment compared to the data driven future in health education business etc
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-10" property="dcterms:date" datatype="xsd:date" content="2011-12-10">
<p property='dcterms:description'>we can't really see all the variables - its called randomness
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-10d" property="dcterms:date" datatype="xsd:date" content="2011-12-10">
<p property='dcterms:description'>should use natural evolution learnings in digital world: version 1.0 is rarely any good, most things wont work failfast, competition matters 
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-10c" property="dcterms:date" datatype="xsd:date" content="2011-12-10">
<p property='dcterms:description'>natural evolution is more than just a bit of textbook we have to memorize in school it actually shows up again and again
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-10b" property="dcterms:date" datatype="xsd:date" content="2011-12-10">
<p property='dcterms:description'>so many technologies came, go, change and evolve... is like watching a fast forward natural evolution of the digital world
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-08b" property="dcterms:date" datatype="xsd:date" content="2011-12-08">
<p property='dcterms:description'>speed not always better, an iphone game is better released earlier than later but i wont hurry up the design of #ruby, good things take time
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-08" property="dcterms:date" datatype="xsd:date" content="2011-12-08">
<p property='dcterms:description'>how fast is an #agile snail? Faster than a non-agile snail but not as fast as the naturally agile hummingbird #tools
</p></blockquote>

<blockquote about="{{page.url}}#2011-12-07" property="dcterms:date" datatype="xsd:date" content="2011-12-07">
<p property='dcterms:description'>the 2012 reviewed edition of the 9 Unix precepts adds: #10 REST API(on Cloud) is the new shell & #11 JSON is the new plain text. 1st 9 <a href='http://bit.ly/9JS5CY'>http://bit.ly/9JS5CY</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-10-22" property="dcterms:date" datatype="xsd:date" content="2011-10-22">
<p property='dcterms:description'>scalability demands decoupling
</p></blockquote>

<blockquote about="{{page.url}}#2011-10-21" property="dcterms:date" datatype="xsd:date" content="2011-10-21">
<p property='dcterms:description'>API design is like user experience(UX) design for programmers Should also use optimization techniques: track usage, ab testing, user testing
</p></blockquote>

<blockquote about="{{page.url}}#2011-10-18" property="dcterms:date" datatype="xsd:date" content="2011-10-18">
<p property='dcterms:description'>don't underestimate beauty, it sounds shallow but weighs in heavily
</p></blockquote>

<blockquote about="{{page.url}}#2011-10-18b" property="dcterms:date" datatype="xsd:date" content="2011-10-18">
<p property='dcterms:description'>doing #agile without agile tools is like doing kung fu with sumo wrestlers. All you get is bad kung fu
</p></blockquote>

<blockquote about="{{page.url}}#2011-08-29" property="dcterms:date" datatype="xsd:date" content="2011-08-29">
<p property='dcterms:description'>just read the programming #semanticweb, wow this is big! like the esperanto for data schema's. Triples all the way down!
</p></blockquote>

<blockquote about="{{page.url}}#2011-08-16" property="dcterms:date" datatype="xsd:date" content="2011-08-16">
<p property='dcterms:description'>the Unix Way: <a href='http://bit.ly/qeA0lK'>http://bit.ly/qeA0lK</a> lovelly Nine Precepts
</p></blockquote>

<blockquote about="{{page.url}}#2011-08-15" property="dcterms:date" datatype="xsd:date" content="2011-08-15">
<p property='dcterms:description'>LOOL, pyruby: <a href='http://bit.ly/jeuFzt'>http://bit.ly/jeuFzt</a> allows to write ruby code inside python scripts. then i looked at the source code: <a href='http://bit.ly/jopDAl'>http://bit.ly/jopDAl</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-08-05" property="dcterms:date" datatype="xsd:date" content="2011-08-05">
<p property='dcterms:description'>revisiting old code(2-3y old) some cool bits but a lot of overcomplicated stuff. step 1: create unit tests, step 2: delete key full-on
</p></blockquote>

<blockquote about="{{page.url}}#2011-08-04" property="dcterms:date" datatype="xsd:date" content="2011-08-04">
<p property='dcterms:description'>"gambling is a tax on bad math" - i read somewhere
</p></blockquote>

<blockquote about="{{page.url}}#2011-07-17" property="dcterms:date" datatype="xsd:date" content="2011-07-17">
<p property='dcterms:description'>friday localized joke - @Safin: inventei 1 smiley, queres ver? @Alex: mostra @Safin: .) o sorriso de Camoes
</p></blockquote>

<blockquote about="{{page.url}}#2011-07-17b" property="dcterms:date" datatype="xsd:date" content="2011-07-17">
<p property='dcterms:description'>Why hasn't evolution(& naturalselection) made the mosquito noiseless? It would be so much more sucessfull
</p></blockquote>

<blockquote about="{{page.url}}#2011-05-20" property="dcterms:date" datatype="xsd:date" content="2011-05-20">
<p property='dcterms:description'>less is more: the delete key should be the biggest on the keyboard
</p></blockquote>

<blockquote about="{{page.url}}#2011-05-18" property="dcterms:date" datatype="xsd:date" content="2011-05-18">
<p property='dcterms:description'>Term Life Insurance and Death Probability, Understanding an insurance company's sense of my chances: <a href='http://bit.ly/iPWw4D'>http://bit.ly/iPWw4D</a> from Khan
</p></blockquote>

<blockquote about="{{page.url}}#2011-04-21" property="dcterms:date" datatype="xsd:date" content="2011-04-21">
<p property='dcterms:description'>new favorite site KhanAcademy: <a href='http://bit.ly/dxdfom'>http://bit.ly/dxdfom</a> with theory(videos) + practice. Enables a data driven teaching. School 2.0 ?
</p></blockquote>

<blockquote about="{{page.url}}#2011-04-20" property="dcterms:date" datatype="xsd:date" content="2011-04-20">
<p property='dcterms:description'>Today a full on exercise in API design, keeping backward compatibility, keeping code clean, smaller simpler API and loads of unit tests
</p></blockquote>

<blockquote about="{{page.url}}#2011-04-19" property="dcterms:date" datatype="xsd:date" content="2011-04-19">
<p property='dcterms:description'>just discovered emacs flymake, v. nice, this could even allow for a custom lint tool to be used by all developers with emacs on same proj
</p></blockquote>

<blockquote about="{{page.url}}#2011-04-07" property="dcterms:date" datatype="xsd:date" content="2011-04-07">
<p property='dcterms:description'>just realized i'm a "data driven humanoid"
</p></blockquote>

<blockquote about="{{page.url}}#2011-04-04" property="dcterms:date" datatype="xsd:date" content="2011-04-04">
<p property='dcterms:description'>CoffeeScript is like a cleaner javascript, ruby &amp; python influenced, talk: <a href='http://vimeo.com/20836767'>http://vimeo.com/20836767</a>, underscore.coffee: <a href='http://bit.ly/fFNOxG'>http://bit.ly/fFNOxG</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-04-02" property="dcterms:date" datatype="xsd:date" content="2011-04-02">
<p property='dcterms:description'>Little Riki(mini me) is now 1 year old, doing already some steps, has 3 teeth and says a couple of words(estonian only)
</p></blockquote>

<blockquote about="{{page.url}}#2011-03-25" property="dcterms:date" datatype="xsd:date" content="2011-03-25">
<p property='dcterms:description'>seems i'm kinda hot right now <a href='http://plixi.com/p/86836348'>http://plixi.com/p/86836348</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-03-25b" property="dcterms:date" datatype="xsd:date" content="2011-03-25">
<p property='dcterms:description'>we don't memorize all things equally, we assign different fade away weights based on importance. Facts a google search away, fade quicker
</p></blockquote>

<blockquote about="{{page.url}}#2011-03-17" property="dcterms:date" datatype="xsd:date" content="2011-03-17">
<p property='dcterms:description'>Adaptive Web Sites <a href='http://bit.ly/dHwDbQ'>http://bit.ly/dHwDbQ</a>, thats the right direction and in fact applies to all Human–devices interactions <a href='http://bit.ly/g8PUdC'>http://bit.ly/g8PUdC</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-03-10" property="dcterms:date" datatype="xsd:date" content="2011-03-10">
<p property='dcterms:description'>stomach flu, no traveling for me today
</p></blockquote>

<blockquote about="{{page.url}}#2011-03-10b" property="dcterms:date" datatype="xsd:date" content="2011-03-10">
<p property='dcterms:description'>unfortunately calm, soft & nice personality doesn't work well most of times in biz.. gotta watch more Sopranos, and learn some Tony's moves
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-21" property="dcterms:date" datatype="xsd:date" content="2011-02-21">
<p property='dcterms:description'>RT @patio11 Minor heresy: "Reverse a linked list" doesn't test ability, it tests for cultural fit in a programming community which likes pointers
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-18" property="dcterms:date" datatype="xsd:date" content="2011-02-18">
<p property='dcterms:description'>scrum looks funny, one guy calling out ticket numbers then people raising up point cards for estimations. Just missing someone say BINGO!
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-18b" property="dcterms:date" datatype="xsd:date" content="2011-02-18">
<p property='dcterms:description'>refactoring done, lessons learned: functional programming allows more flexible and shorter code, unit testing saves your ass many times.
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-15" property="dcterms:date" datatype="xsd:date" content="2011-02-15">
<p property='dcterms:description'>working on a web analytics tracking javascript api today, thriving for simpler, smaller, more flexible api w/ a bit of functional magic
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-09" property="dcterms:date" datatype="xsd:date" content="2011-02-09">
<p property='dcterms:description'>30 is the new 20, right?:  Well i surely hope so, as i just turned 30
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-06" property="dcterms:date" datatype="xsd:date" content="2011-02-06">
<p property='dcterms:description'>Weight Loss Predictor:  Got for 2010 Xmas a very cool book called the "4 Hour Body"(thanks Jose Santos) written... <a href='http://bit.ly/fugcNE'>http://bit.ly/fugcNE</a>
</p></blockquote>

<blockquote about="{{page.url}}#2011-02-02" property="dcterms:date" datatype="xsd:date" content="2011-02-02">
<p property='dcterms:description'>when you find out that your shirt is inside out while already at the office, then FYI most likely you are not a morning person
</p></blockquote>

<blockquote about="{{page.url}}#2011-01-25" property="dcterms:date" datatype="xsd:date" content="2011-01-25">
<p property='dcterms:description'>keep forgetting to slow down, avoid multitasking and keep it simple. so stopping for a minute to write a tweet and remind it.
</p></blockquote>

### 2010

<blockquote about="{{page.url}}#2010-12-31b" property="dcterms:date" datatype="xsd:date" content="2010-12-31">
<p property='dcterms:description'>I wonder if rounded number birthday years make for more action packed years. Hope not my 30th bday is coming up next year...
</p></blockquote>

<blockquote about="{{page.url}}#2010-12-31" property="dcterms:date" datatype="xsd:date" content="2010-12-31">
<p property='dcterms:description'>very action packed year, hope 2011 will be easier on me. Wonder if rounded number(10,15,20) years make for more action packed ones?...
</p></blockquote>

<blockquote about="{{page.url}}#2010-12-27" property="dcterms:date" datatype="xsd:date" content="2010-12-27">
<p property='dcterms:description'>note1: weather has its own agenda and it does now follows the homo sapiens calendar. note2: you shall not ignore weather forecasts
</p></blockquote>

<blockquote about="{{page.url}}#2010-12-23" property="dcterms:date" datatype="xsd:date" content="2010-12-23">
<p property='dcterms:description'>really nice to meet up with interesting people
</p></blockquote>

<blockquote about="{{page.url}}#2010-12-23b" property="dcterms:date" datatype="xsd:date" content="2010-12-23">
<p property='dcterms:description'>wonder if tina turner was aware of the marketing pov when making the "simply the best" song. Its perfect for promoting her Best Of albums
</p></blockquote>

<blockquote about="{{page.url}}#2010-12-22" property="dcterms:date" datatype="xsd:date" content="2010-12-22">
<p property='dcterms:description'>avoid car door dents, by parking between 2 much more expensive cars than your own #safeparkingrules
</p></blockquote>

<blockquote about="{{page.url}}#2010-12-02" property="dcterms:date" datatype="xsd:date" content="2010-12-02">
<p property='dcterms:description'>On the way home saw a guy in the street eating an ice-cream... It's -10 degrees outside... Weirdo
</p></blockquote>

<blockquote about="{{page.url}}#2010-11-30" property="dcterms:date" datatype="xsd:date" content="2010-11-30">
<p property='dcterms:description'>Geekiness of the day by Safin: if(!kill) fat++; its a Portuguese saying :)
</p></blockquote>

<blockquote about="{{page.url}}#2010-10-26" property="dcterms:date" datatype="xsd:date" content="2010-10-26">
<p property='dcterms:description'>RT @brunomlopes hey, @al3xandr3, you just pushed me into learning R with <a href="http://bit.ly/drGolW">http://bit.ly/drGolW</a>. any recommended books?
</p></blockquote>

<blockquote about="{{page.url}}#2010-09-19" property="dcterms:date" datatype="xsd:date" content="2010-09-19">
<p property='dcterms:description'>got stopped by police yesterday and, to my surprise they asked: "Why were you driving so slow?" - say Whaaat? that i didn't expect...
</p></blockquote>

<blockquote about="{{page.url}}#2010-08-17" property="dcterms:date" datatype="xsd:date" content="2010-08-17">
<p property='dcterms:description'>AB testing productivity, going on a information diet: no rss feeds, less of twitter, more of emacs. (Rescue)Time will tell.
</p></blockquote>

<blockquote about="{{page.url}}#2010-08-02" property="dcterms:date" datatype="xsd:date" content="2010-08-02">
<p property='dcterms:description'>30+ years old text editor that keeps on amazing me [http://vimeo.com/13158054](http://vimeo.com/13158054), talk about good software design... #emacs
</p></blockquote>

<blockquote about="{{page.url}}#2010-07-18" property="dcterms:date" datatype="xsd:date" content="2010-07-18">
<p property='dcterms:description'>Hocus Pocus at work, madness pure madness
</p></blockquote>

<blockquote about="{{page.url}}#2010-07-17" property="dcterms:date" datatype="xsd:date" content="2010-07-17">
<p property='dcterms:description'>Just finished reading the lady tasting tea. Loved it, it's almost like an historical novel about statistics. Many many usefull insights.
</p></blockquote>

<blockquote about="{{page.url}}#2010-05-25" property="dcterms:date" datatype="xsd:date" content="2010-05-25">
<p property='dcterms:description'>gotta love those slime messages: Connected Alexandre. This could be the beginning of a beautiful program! #clojure
</p></blockquote>

<blockquote about="{{page.url}}#2010-04-15" property="dcterms:date" datatype="xsd:date" content="2010-04-15">
<p property='dcterms:description'>new blog: <a href='http://al3xandr3.github.com/'>http://al3xandr3.github.com/</a> is a better platform for writing longer texts, minimalist design.
</p></blockquote>

<blockquote about="{{page.url}}#2010-01-21" property="dcterms:date" datatype="xsd:date" content="2010-01-21">
<p property='dcterms:description'>Emacs(aquamacs distribution) is now my main development tool. For a few months now. And I just can't live without org-mode anymore... :)
</p></blockquote>

### 2009

<blockquote about="{{page.url}}#2009-11-26" property="dcterms:date" datatype="xsd:date" content="2009-11-26">
<p property='dcterms:description'>Functional Programming lectures by Erik Meijer: Very much enjoying these lectures
</p></blockquote>

<blockquote about="{{page.url}}#2009-11-13" property="dcterms:date" datatype="xsd:date" content="2009-11-13">
<p property='dcterms:description'>Functional: Here's a few articles by Slava (on www.defmacro.org) that i enjoyed reading:.. <a href='http://bit.ly/2OpTe0'>http://bit.ly/2OpTe0</a>
</p></blockquote>

<blockquote about="{{page.url}}#2009-10-05" property="dcterms:date" datatype="xsd:date" content="2009-10-05">
<p property='dcterms:description'>Sneeky lazy evaluations in Clojure, making me chase my own tail.
</p></blockquote>

<blockquote about="{{page.url}}#2009-07-24" property="dcterms:date" datatype="xsd:date" content="2009-07-24">
<p property='dcterms:description'>As Bjork would say: Its all so peaceful and quiet until you open the MAIL, bam boom, you blow a fuse and the sky up above is caving in
</p></blockquote>

<blockquote about="{{page.url}}#2009-07-24b" property="dcterms:date" datatype="xsd:date" content="2009-07-24">
<p property='dcterms:description'>simpler, lighter, faster, cleaner, cheaper, leaner, lesser.
</p></blockquote>

<blockquote about="{{page.url}}#2009-07-20" property="dcterms:date" datatype="xsd:date" content="2009-07-20">
<p property='dcterms:description'>cat ownership tip: be sure to pay attention to what your cat brings back into the house. You might find yourself with a couple of new pets.
</p></blockquote>

<blockquote about="{{page.url}}#2009-07-07" property="dcterms:date" datatype="xsd:date" content="2009-07-07">
<p property='dcterms:description'>Sun went on vacations. Please inform his manager that Rain is not proper replacement. Rain temperament is just not suited for Sun's tasks.
</p></blockquote>

<blockquote about="{{page.url}}#2009-04-22" property="dcterms:date" datatype="xsd:date" content="2009-04-22">
<p property='dcterms:description'>very geeky: done my first Clojure macro! Soon(a couple of days) will show up in blog.
</p></blockquote>

<blockquote about="{{page.url}}#2009-01-27" property="dcterms:date" datatype="xsd:date" content="2009-01-27">
<p property='dcterms:description'>watching SICP lecture 6b. streams & their sneeky delays
</p></blockquote>



