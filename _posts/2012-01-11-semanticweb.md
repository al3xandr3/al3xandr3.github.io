--- 
layout: post
title: How to get into the Semantic Web
categories: 
  - data
  - semanticweb
  - javascript
  - statistics
  - visualization
  - SPARQL
intro: "<img alt='SemanticWebQuotes' src='http://al3xandr3.github.com/img/semanticweb_quotes.png'/><br /><strong>Practical examples</strong> on <i>getting in there</i>, <i>adding the site</i> and <i>using it</i>"
---

Practical examples on how to get onto the semantic web and on using it. 

### Getting in There

Start by creating a semantic web personal online profile using the Friend-Of-A-Friend (FOAF) vocabulary. The FOAF has became the standard for personal profiles on the semantic web, and as the name implies, it also lets you link to people you know.

I used the [foaf-a-matic online tool](http://www.ldodds.com/foaf/foaf-a-matic) and then uploaded the results to my site's [foaf.rdf](http://al3xandr3.github.com/foaf.rdf). Easy.

With this, can already use the semantic web query language, called SPARQL, to inquire about what it knows about me:

    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    SELECT ?property ?value
    FROM <http://al3xandr3.github.com/foaf.rdf>
    WHERE { 
      ?me foaf:name "Alexandre Matos Martins" .
      ?me ?property ?value .
    }

<a href="http://www.sparql.org/sparql?query=++++PREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A++++SELECT+%3Fproperty+%3Fvalue%0D%0A++++FROM+%3Chttp%3A%2F%2Fal3xandr3.github.com%2Ffoaf.rdf%3E%0D%0A++++where+%7B+%0D%0A++++++%3Fme+foaf%3Aname+%22Alexandre+Matos+Martins%22+.%0D%0A++++++%3Fme+%3Fproperty+%3Fvalue+.%0D%0A++++%7D&default-graph-uri=&output=xml&stylesheet=%2Fxml-to-html.xsl" target="_blank">run on sparql.org &rarr;</a>


**Why Another Online Profile?**

How many times have you filled in your personal profile information on web sites? Google+, Facebook, YouTube, Yahoo!, MSN, Blogspot, Amazon, Twitter, LinkedIn, Flickr, Tumblr, Ebay, mySpace, hi5!, etc... How many times more we need to do it again?

The semantic web is about sharing data in an agreed upon format, so that the data can be easily linked-to and (re)used. Thus, once my profile is on the semantic web any new site that I sign-up for, can just read-in this data instead of asking me to fill it in.

> Sharing data, in an agreed upon format, is an incentive for re-use and disincentive for wasteful duplication. Choose #semanticweb.


### Adding the Site

Next step is to add the web site onto the semantic web. 

Augmenting a web site content with semantic data, facilitates data sharing, essentially web pages became little standalone data repositories that can be understood by the semantic web tools.

The way to do it is simple enough; add (invisible)html tags into the existing web pages that specify (the semantics)meaning of the html elements. 

These extra html tags, that add meaning to web pages, are defined in a microformat called RDFa, quoting [Wikipedia](http://en.wikipedia.org/wiki/RDFa):

> RDFa defines how to embed RDF subject-predicate-object expressions within XHTML documents, it also enables the extraction of RDF model triples by compliant user agents.

For example in the **About** section of this site, I added some rdfa tags saying that all that section is about Me and that "Alexandre Matos Martins" is my name and that I am of type Person, and that the Twitter link is one of my OnlineAccounts, etc...

With the rdfa tags added to the site is now possible to use semantic web tools to query website data. For example: find the topics(subjects) of the site (the _Tags_ cloud):

    PREFIX dcterms: <http://purl.org/dc/terms/>
    SELECT ?subject 
    FROM <http://www.w3.org/2007/08/pyRdfa/extract?uri=http://al3xandr3.github.com/>
    WHERE {
     <http://al3xandr3.github.com> ?predicate ?subject . 
     ?s dcterms:subject ?subject .
    }

<a href="http://www.sparql.org/sparql?query=++++PREFIX++dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0A++++SELECT+%3Fsubject+%0D%0A++++FROM+%3Chttp%3A%2F%2Fwww.w3.org%2F2007%2F08%2FpyRdfa%2Fextract%3Furi%3Dhttp%3A%2F%2Fal3xandr3.github.com%2F%3E%0D%0A++++WHERE+%7B%0D%0A+++++%3Chttp%3A%2F%2Fal3xandr3.github.com%3E+%3Fpredicate+%3Fsubject+.+%0D%0A+++++%3Fs+dcterms%3Asubject+%3Fsubject+.%0D%0A++++%7D&default-graph-uri=&output=xml&stylesheet=%2Fxml-to-html.xsl" target="_blank">run on sparql.org &rarr;</a>

Note that this is a live search, i.e. whenever i add a new topic(subject) into the tag cloud of the site, re-running the query above will show the new topics also.


> RDFa augments web pages as standalone data repositories that #semanticweb can understand, doubling as normal web pages, imagine web scraping done right.


### Using It

Why is all this data useful? well for a more futuristic good use case check the [Data, Data, Data! semantic web use case on Xmas](http://al3xandr3.github.com/2011/12/18/data.html).

But in the meanwhile, we can already play around with more mundane things, for example, predicting how likely is it, that i will write a twitter quote for any given day.

I collected a few of my twitter quotes on the [quotes page](http://al3xandr3.github.com/pages/quotes.html) and each quote has an rdfa date on it.

So we can use the following sparql query to fetch directly from the quotes page, the dates and how many quotes, on each date, I've wrote:

    PREFIX  dcterms: <http://purl.org/dc/terms/>
    SELECT ?date (count(?subject) AS ?total)
    FROM <http://www.w3.org/2007/08/pyRdfa/extract?uri=http://al3xandr3.github.com/pages/quotes.html>
    WHERE { 
      ?subject dcterms:date ?date .
    }
    GROUP BY ?date
    ORDER BY ?date

<a href="http://www.sparql.org/sparql?query=++++PREFIX++dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0A++++SELECT+%3Fdate+%28count%28%3Fsubject%29+AS+%3Ftotal%29%0D%0A++++FROM+%3Chttp%3A%2F%2Fwww.w3.org%2F2007%2F08%2FpyRdfa%2Fextract%3Furi%3Dhttp%3A%2F%2Fal3xandr3.github.com%2Fpages%2Fquotes.html%3E%0D%0A++++WHERE+%7B+%0D%0A++++++%3Fsubject+dcterms%3Adate+%3Fdate+.%0D%0A++++%7D%0D%0A++++GROUP+BY+%3Fdate%0D%0A++++ORDER+BY+%3Fdate&default-graph-uri=&output=xml&stylesheet=%2Fxml-to-html.xsl" target="_blank">run on sparql.org &rarr;</a>

Then i see the day-of-the-week for each of those dates and sum up the number of quotes per day of the week.

Having this, I can calculate the probability(the expected value) for each day, and can then just lookup the probability for any given day.

For a full (a)live data experience this is implemented in javascript that fetches the data when this page is opened.

I use jquery .ajax to go fetch the data of the sparql query defined above, do some data manipulation, plot it using [d3.js](http://mbostock.github.com/d3/), and finally output the prediction.

Look at the source code of this page, to see how it works.

#### Quotes per day of the week:

<br />
<br />
<script type="text/javascript" src="http://www.datejs.com/build/date.js"></script>
<script type="text/javascript" src="http://mbostock.github.com/d3/d3.js"></script>

<div id="chart"><img alt='SemanticWebQuotes' id="backup" src='http://al3xandr3.github.com/img/semanticweb_quotes.png'/></div>
<script type="text/javascript">
var count = "                                  \
  PREFIX  dcterms: <http://purl.org/dc/terms/> \
  SELECT ?date (count(?subject) AS ?total)     \
  FROM <http://www.w3.org/2007/08/pyRdfa/extract?uri=http://al3xandr3.github.com/pages/quotes.html> \
  WHERE {                         \
  ?subject dcterms:date ?date .   \
  }                               \
  GROUP BY ?date                  \
  ORDER BY ?date                  \
  ", 
  day, per_day={"Mon":0,"Tue":0,"Wed":0,"Thu":0,"Fri":0,"Sat":0,"Sun":0},
  data=[],
  total_tw=0, today_tw=0;

$.ajax({
  url: "http://sparql.org/sparql?query=" + encodeURIComponent(count) + "&output=json",
  dataType: "jsonp",
  success: function(d) {

    // group per day-of-week
    $.each(d.results.bindings, function(i, v) { 
      day = (new Date.parse(v.date.value)).toString("ddd");
      per_day[day] += parseInt(v.total.value);
    });

    // plot & stats
    $.each(per_day, function(k, v) { 
      // setup for plot
      data.push({day: k, value: v});

      // stats
      total_tw += v;
      if (k == Date.today().toString("ddd")) {
        today_tw = v;
      }
    });
    
    // we have data, static backup
    if (per_day["Thu"] !== 0) {
      $('#backup').remove();
    }

    var w = 420,
    h = 200,
    x = d3.scale.linear().domain([0, data.length]).range([0, w]),
    y = d3.scale.linear().domain([0, d3.max(data, function(d) {return d.value;})]).range([0,h]);

    var chart = d3.select("#chart")
      .append("svg")
        .attr("width",  w+30)
        .attr("height", h+30); 
  
    chart.selectAll("rect")
        .data(data)
      .enter().append("rect")
        .attr("x", function(d,i) { return x(i); })
        .attr("y", function(d) { return h - y(d.value); })
        .attr("height", function(d) { return y(d.value); })
        .attr("width", 40)
        .attr("fill", "#2d578b");

    chart.selectAll("text.bars")
        .data(data)
      .enter().append("text")
        .attr("x", function(d, i) { return x(i) + 20; })
        .attr("y", function(d) { return h - y(d.value) + 3; })
        .attr("dy", "1.2em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.value;})
        .attr("fill", "white");

    chart.selectAll("text.xAxis")
        .data(data)
      .enter().append("text")
        .attr("x", function(d,i) { return x(i) + 20; })
        .attr("y", h)
        .attr("text-anchor", "middle")
        .attr("style", "font-size: 12 important!; font-family: Helvetica, sans-serif")
        .text(function(d) { return d.day;})
        .attr("transform", "translate(0, 18)")
        .attr("class", "xAxis");

    // Prediction Text
    $('#prediction').html("Today is <strong>" + 
                        Date.today().toString("dddd") + 
                        "</strong>, so is <strong>" +
                        Math.round(today_tw/total_tw*100) +
                        "%</strong> likely that I'll tweet.");
  }
});
</script>

<span id="prediction">For example on <strong>Thursday</strong> is <strong>21%</strong> likelly that I'll tweet.</span>

<br />

#### References

- [Data, Data, Data! semantic web use case on Xmas](http://al3xandr3.github.com/2011/12/18/data.html)
- [foaf-a-matic online tool](http://www.ldodds.com/foaf/foaf-a-matic)
- [rdfa cheat sheet pdf](http://t.co/4bhVAHfV)
- [Firefox rdfa debug](http://rdfadev.sourceforge.net/)
- [linked data javascript tutorial](http://dailyjs.com/2010/11/26/linked-data-and-javascript/)