---
layout: post
title: Web Analytics Dictionary
category: data
tags:
  - web analytics
  - python
intro: "Web Analytics Dictionary"
---

<link rel="stylesheet" href="/css/cv.css" type="text/css" media="screen, projection" />

Found some time ago the: http://www.webanalyticsdictionary.com/, which i like a lot as a source of web analytics definitions. 

There is no in-site search mechanism, which i found frustrating, but alternatively is possible to use google search:

    "Acknowledgement Page" site: www.webanalyticsdictionary.com

(as long as what you search for is already indexed by the google search engine)

Anyway, i decided to web scrape it for my own reference, and posting here if someone else finds it useful also.

( It could even be used to put on a memory repetition program like Anki, to help learning all the terms, and/or preparing for job interviews for example. )

## Web Scraping it

### Step 1. Download the Internet to your computer (or just the site in this case)

    wget --wait=2 -r -p -U Mozilla http://www.webanalyticsdictionary.com/

- To pause 2 seconds between retrievals: --wait 
- Tell the site you are using some commonly accepted browser: -p -U Mozilla
- Recursively fetch the site, that is linked pages from it : -r

### Step 2. Extract the data

Step one has made a local copy of the site. Now we need to extract the useful data from it:

    from bs4 import BeautifulSoup
    import fnmatch
    import os
    import codecs

    out = codecs.open('webanalyticsdictionary.csv','w', encoding='utf-8')

    for root, dirs, files in os.walk("."):
        for filename in fnmatch.filter(files, "index.html"):
            print os.path.join(root, filename)
            f = open(os.path.join(root, filename), 'r')
            soup = BeautifulSoup(f.read())
            title = soup.select('.entry-title')
            content = soup.select('.entry-content')
            if title and content:
                print title[0].getText(), ",", 
                         content[0].getText().encode('ascii', 'ignore').replace('\n', ' ') + '\n'
                out.write(title[0].getText() + ",\"" +
                          content[0].getText().encode('ascii', 'ignore').replace('\n', ' ') + 
                          '\"\n')

I'm using the anaconda python all in one installation package to both install python and the libraries i need.

## Web Analytics Dictionary

| **Keyword** | **What is** |
|:---------------|:---------------------------|
| 1st  Party Cookies | First-party cookies are cookies that are associated with the host domain. Suppose your go to www.my.site.com, and you get 2 cookies:  www.site.com and www.ad.com.  The www.site.com is a 1st party cookie, the www.ad.com is a 3rd party cookie |
| 112.2o7.net | The domain of the SiteCatalyst cookie that is set for report suites that target the Omniture Data Center in San Jose, California  |
| 122.2o7.net | The domain of the SiteCatalyst cookie that is set for report suites that target the Omniture Data Center in Dallas, Texas.  |
| 3rd  Party Cookies | Third-party cookies are cookies from any other domain. Suppose your go to my.site.com, and you get 2 cookies:  www.site.com and www.ad.com.  The www.site.com is a 1st party cookie, the www.ad.com is a 3rd party cookie |
| A/B Testing |  This includes testing different variations of a particular page A/B testing proves to be especially helpful when comparing the overall design or single elements.   |
| Abandonment | The number of customers who drop off during the process of conversion, like a half filled form or incomplete purchase.  |
| abandonment rate | The number of abandoned shopping carts vs. the number of completed transactions.  |
| ABC analysis | An approach for classifying accounts based on their attractiveness. A accounts are the most attractive while C accounts are the least attractive.  |
| ABC inventory classification | A classification scheme used to implement inventory management strategies. Products are segmented into groups based upon unit sales or some other criterion. (For example, class A might be items with the highest frequency of sales, etc.) Inventory management is then guided by this segmentation.  |
| Absolute URL’s Link | Absolute URLs use the full-path address, such as http://www.domain.com/page1.htm. (See also Relative URLs link.) Read more: http://www.sempo.org/?page=glossary#ixzz1ZyryDNXW  |
| ACC | Average cost per click. The cost of a marketing campaign divided by the number of clicks generated. This metric is used to measure the effectiveness of your marketing campaigns. The campaign cost is taken from your campaign settings or is provided by search engines.  |
| Account Activity Too | SiteCatalyst tool that enables you to view server calls per report suite.  |
| Account Manager | An Account Manager is an Omniture support representative that offers help in answering questions and/or resolving issues for supported users with a support plan that offers them a dedicated Account Manager.  |
| Accounts Authentication Service | A Google service that processes requests for access and issues authentication tokens that your client can then send to a particular Google service, such as the Custom Search Service. To learn more, seeGoogle Data APIs Authentication Overview.  |
| Accuracy | The ability of a measurement to match the actual value of the quantity being measured. Accuracy is the foundation upon which your marketing analytics should be built. If you cant trust that your data is accurate, you cant make confident decisions. In statistical terms, accuracy is the width of the confidence interval for a desired confidence level. See also Unique Visitors.   |
| Acknowledgment Page | A page displayed after a visitor completes an action or transaction. For example, a thank-you or a receipt page. Acknowledgment pages are often important inScenario Analysis, where it is an indicator of a completed scenario.  |
| Acquisition | Acquisition refers to how successful you are at getting these visitors  |
| Acquisition Strategy | A process of finding those potential customers who are in the market and ready to buy. The attempt to lead customers to a web site and to welcome them, answer their questions and close the sale. Read more:http://www.sempo.org/?page=glossary#ixzz1Zys78U66  |
| ACT | After-Click Tracking is the recording the activity path of a visitor to a site after they have clicked on an email link.  |
| Advanced Analysis | Generic industry term relating to the advanced analysis of your web site traffic data. With regard to SiteCatalyst, it is the tab that contains advanced analysis features, including Data Warehouse, ASI, Discover, and Multivariate Testing.  |
| Advanced Segment Insight (ASI) | ASI stands for Advanced Segment Insight. This tool is used to segment data retrospectively from the Data Warehouse and create the new custom segment in a SiteCatalyst Report Suite.  |
| Affiliate Marketing | A method of marketing where other websites can sign up to sell your products for a commission.  |
| Aggregate | Total site traffic for a defined period of time  |
| AJAX | Asynchronous JavaScript and XML. Rich media technology for dynamically changing content on web pages based on user action, page action, etc.  |
| Alert | Email notification that is sent when a specified metric exceeds a predefined threshold.  |
| All Search Engines | SiteCatalyst report that shows the traffic sent to you by both paid and natural search engines.  |
| Allocation | Allocation metrics are visit-based metrics in which the pages that visitors use result in success events, e.g. revenue or cart adds. For example, a visitor navigates through five pages of your site, and the visit results in a purchase of a $10,000 item. The allocation metric gives partial credit of the $10,000 to the five pages, so that each page receives $2,000 credit. If conversion is enabled, then allocation for pages is also automatically enabled. The linear allocation option for eVars follows this method.  |
| Anchor | HTML tag < a href > that references a specific link contained within the content of a page.  |
| ASI Slot | The ASI slot holds the segmented Advanced Segment Insight Data. It works much like a report suite, which regularly holds collected web analysis data.  |
| ASP (Application Service Providers) | Third-party providers of software-based services and solutions. Distribution is made from one central data center across a wide area network. ASPs are a common tool companies use to outsource their various information technology needs.  |
| Excluded Keywords | For details, please see the entryNegative Keywords |
| Revshare / RevenueSharing | A method of allocating per-click revenue to a site publisher, and click-through charges to a search engine that distributes paid-ads to its context network partners, for every page viewer who clicks on the content sites sponsored ads. A type of site finders fee. |
| Podcasts | A podcast is a media file that is distributed over the internet using syndication feeds, for playback on portable media players and personal computers. Like radio, it can mean both the content and the method of syndication. The latter may also be termed podcasting. The host or author of a podcast is often called a podcaster. Source: Wikipedia |
| Organic Search Listings | Listings that search engines do not sell (unlike paid listings). Instead, sites appear solely because a search engine has deemed it editorially important for them to be included, regardless of payment. Paid Inclusion Content is also often considered organic even though it is paid for. This is because paid inclusion content usually appears intermixed with unpaid organic results. |
| Meta Feeds | Ad networks that pull advertiser listings from other providers. They may or may not have their own distribution and advertiser networks. |
| Authorization | A security-related process that decides the privileges of a human user, process, or program that Entry archived,click hereto see full entry The definitions herein are compiled fromProfessional Search Engine Optimization with PHP(Wrox 2007) andProfessional Search Engine Optimization with ASP.NET(Wrox 2007). Now translated into 4 languages, these books are recognized as standard references when approaching search marketing from the technology angle.  |
| Automatic PageNames Plug-in | Omniture plug-in that will dynamically set a page name based on the existing URL folder structure. The plug-in is also configurable to include/exclude query string parameters.  |
| Avatar | A graphical image of a user, such as used in graphical real-time Chat applications, or a graphical personification of a computer or a computer process, intended to make the computing or network environment a friendlier place.  |
| BigDaddy | An update to Google's ranking algorithms for web sites that occurred in early 2006. |
| Branch | In Page Flow Reports, branches show you the next and previous pages you can track from your starting page.  |
| Bread Crumb | In a web page, a link-based navigation tool that displays your location in the content hierarchy of a site.  |
| Breadcrumb navigation | Navigational links appearing on a web page that show the path taken to reach that Entry archived,click hereto see full entry  |
| Breakdown | Term used to define the action of integrating two correlated items or reports. See Correlation.  |
| Browser | The software used to access a website. Examples of browsers include Internet Explorer, Firefox, and Netscape.  |
| Browser Cache (pronounced CASH) Cart Open | An application that provides a way to look at and interact with all the information on the World Wide Web (also called a Web browser). It is technically a client program (such as Microsoft Internet Explorer or Netscape Navigator) that uses Hypertext Transfer Protocol (HTTP) to send requests to Web servers throughout the Internet on behalf of the user. A temporary storage location from which data can be retrieved. Data retrieval from cache is usually much faster than from the server. The Internet makes predominant use of the following two caching mechanisms: The Web browser stores recently downloaded pages in a temporary location on your hard drive. When you return to a page you've recently viewed, the browser quickly retrieves it from this local cache rather than the original server. You can usually change the size of your cache, depending on the browser you use. Most ISPs utilize caching servers on their network. When a browser requests a page, the page is downloaded to the individuals computer and also saved on the caching server. If a different user then requests the same page, it is then retrieved from one of the caching servers rather than the site servers. Many analysis tools (especially log file analyzers) fail to count page views from cached pages. SiteCatalysts proprietary cache-busting technology counts cached page views the same way it counts page views that have not been retrieved from cache, resulting in much more accurate Web site usage data. Events in which the cart object is created for a customer. Cart opens usually occur when a customer selects an item for purchase, but can occur without an item as well.  |
| Browser Height | Metric that refers to the vertical distance of the data in the browser window only. The toolbars, menus, buttons, etc. are all excluded as part of the browser height.  |
| Browser Type | Metric that refers to the type of browser being used by the visitor; i.e. Internet Explorer, Mozilla, Firefox, etc.  |
| Browser Width | Metric that refers to the horizontal distance of the data in the browser window only.  |
| Calendar Tool | SiteCatalyst tool that enables you to select the timeframe for which data will be displayed in a selected report. You can select days, months, years, or a specified, granular time frame; i.e. May 3, 2005 to May 8, 2005.  |
| Campaign Option | The campaign container can display one of more campaign options selected by the targeting engine. A campaign option is an individual creative. It may be a single image, like a banner, or it can be a complex piece of HTML, including text, images, and multimedia content.  |
| Campaign-specific Metrics | Campaign-specific metrics are fixed numeric values associated with a campaign, such as the hard cost for a campaign.  |
| campaign Variable | The campaign variable identifies marketing campaigns used to bring visitors to your site. The value of campaign is usually taken from a query string parameter.  |
| Cart | See Shopping Cart  |
| Cart Additions | Refers to additions to the  shopping cart being used by the visitor when making purchases on a web site.  |
| Cart Removal | Refers to removals from the  shopping cart being used by the visitor when making purchases on a web site.  |
| Cart Views | Event in which the contents of the shopping cart are viewed by the customer.  |
| Categories | Similar groups of products, such as electronics or music (much like channels or content groups in the Traffic Reports). Categories can contain multiple products, for example, the Electronics Category can contain televisions, radios, and computers.  |
| Account Activity Too | SiteCatalyst tool that enables you to view server calls per report suite. |
| Data Bloc | Data blocks are used in Excel Integration. They contain data that is taken from SiteCatalyst and posted to an Excel worksheet. |
| Absolute URL’s Link | Absolute URLs use the full-path address, such as http://www.domain.com/page1.htm. (See also Relative URLs link.) Read more: http://www.sempo.org/?page=glossary#ixzz1ZyryDNXW |
| Action | Actions performed by your visitors. If your actions are set to unique, then the Action metric shows the number of unique actions (e.g., if a visitor makes three purchases during a visit, only one unique action is counted). Otherwise, the action metric shows the total number of (non-unique) actions (e.g., if an action occurs more than once during a visit, it will be counted every time it occurs). |
| Certificate Signing Request (CSR) | A text file generated by the web server on which the SSL certificate will be installed. A Certificate Authority uses this text file to create a  "signed" SSL certificate.  |
| Clickstream | (alt. to click path) is the recording of what a computer user clicks on while Web browsing or using another software application. As the user clicks anywhere in the web page or application, the action is logged on a client or inside the Web server, as well as possibly the Web browser, routers, or ad servers. |
| Cookie | A cookie is a text file that uniquely identifies and is stored in the user's browser. Cookies are most commonly used to identify individuals and remember general user preferences. SiteCatalyst uses cookies both to differentiate requests from different browsers and to store helpful information that can be used by the application at a later time. In particular, SiteCatalyst uses cookies to anonymously define new visitors, help analyze click-stream data, and track historical activity on the web site such as response to particular campaigns or the length of the sales cycle.  |
| Cookie Combining Utility Plug-in | This cookieCombiningUtility will reduce the number of cookies set by Omniture's code. Data for all cookies will be stored within one session cookie and one persistent cookie.  |
| cookieDomainPeriods Variable | The cookieDomainPeriods variable is used to determine the domain with which cookies will be set. The name  cookieDomainPeriods refers to the number of periods in the domain when the domain begins with www For example, the www.mysite.com contains two periods (..), while www.mysite.co.jp contains three periods. Another way to describe the variable is the number of sections in the main domain of the site (two for mysite.com and three for mysite.co.jp)  |
| cookieLifetime Variable | The cookieLifetime variable is used by both JavaScript and SiteCatalyst servers in determining the lifespan of a cookie.  |
| Core Site | A single site that represents key business requirements.  |
| Correlation | Correlation Reports are particularly useful for understanding the relationships between two or more Traffic Custom Insight variables, or other system variables. Correlations come in three sizes (2, 5, and 20), based on the number of items that are correlated together at the same time. Correlation groups with more than 500,000 unique combinations of values cannot be correlated within the real time interface.  |
| CPC | Cost per Click. An advertising model in which the advertiser (sponsor) pays the publisher a certain amount each time the sponsor's ad is clicked. Also sometimes referred to as PPC (pay-per-click).  |
| CPL | Cost per Lead. The cost for gaining a lead to a new customer.  |
| CPM | Cost per million. Pertains to instances in which the code on the clients web page generates a server call to Omniture, e.g. image request.  |
| Creative Element | Creative elements classifications are characteristics that vary between placements or instances of the campaign, and include characteristics such as media type, headline, keyword, and media vendor.  |
| Creatives | Refers to the team in your organization that works to develop certain collateral, for example, the web site or any other marketing material.  |
| CSV | Comma-separated values. File format where columns of data are separated by a selected comma.  |
| currencyCode Variable | The currencyCode variable is used to determine the conversion rate to be applied to revenue as it enters the SiteCatalyst databases.  |
| Custom Insight Report | The set of reports that are related to the group of custom traffic variables (prop variables). Each prop report is a separate custom insight report.  |
| Custom Pattern | Pattern in the Pattern Builder that enables you to build a custom pattern. |
| Customer | A Web site visitor who has completed a transaction on your site.  |
| Customer Loyalty | The Customer Loyalty Report reveals purchasing patterns of customers based on three categories of loyalty. A user who enters the site and makes a single purchase is considered a "new customer." A user who makes their second and third purchases is considered a "return customer and a user who makes four or more purchases is considered a "loyal customer."  |
| Customer Support Portal | Refers to the Help Section of SiteCatalyst where users can go to receive answers to their questions. Options include white papers, Knowledge Base, Live Chat, Ask a Question, SiteCatalyst User Guide, Implementation Manual, et cetera.  |
| Customized Calendar | Calendar options in SiteCatalyst other than the Gregorian model. Options include the 4-4-5 and 4-5-4 calendar models, both of which are used as standards for the retail industry. Additionally, SiteCatalyst offers an option for a completely customizable calendar that you can set up yourself.  |
| Dashboard Accelerator | The Dashboard Accelerator stores a cached version of your dashboard for subsequent viewing. By caching (saving) a view of your dashboard for 24 hours, the Dashboard Accelerator is able to retrieve that view almost instantaneously.  |
| Dashboard Player | Omniture's Dashboard Player is a Flash-based tool that displays the reportlets from selected dashboards in slideshow fashion on your screen.  |
| Data Bloc | Data blocks are used in Excel Integration. They contain data that is taken from SiteCatalyst and posted to an Excel worksheet.  |
| Data Extract | Data extracts let you choose the parameters you will view on both the X- and Y-axes of the report, as well as the item by which the report will be filtered. For example, you could place products along the left side of the report, dates across the top, and a metric as the overall data filter. The Data Extracts are delivered reports, and are only available in CSV format.  |
| Data Feed | A data feed is a compressed (zipped) file containing traffic data for one report suite. If data feeds are enabled for multiple report suites, a separate data file is  sent for each report suite. Each compressed data feed file contains 13 tab delimited text files, each carrying a .tsv filename extension. One file contains traffic data and the  other files contain reference data.  |
| Data Sources Activation Wizard | Part of the Data Sources Manager that enables you to activate or deactivate existing Data Sources. See Data Sources Manager.  |
| Dimensions | A general source of data that can be used to define various types of segments or counts and represents a fundamental dimension of visitor behavior or site dynamics. Examples include event and referrer.  |
| Direct | These visitors came to your site by manually entering the URL of the page.  |
| Individual | Activity of a single Web visitor for a defined period of time.  |
| Lead Generation | Web sites that generate leads for products or services offered by another company. On a lead generation site, the visitor is unable to make a purchase but will fill out a contact form in order to get more information about the product or service presented. A submitted contact form is considered a lead. It contains personal information about a visitor who has some degree of interest in a product or service.  |
| Link Cardinality | See Link Popularity.  |
| Link Farming | The attempt to substantially and artificially increase link popularity.  |
| Link Popularity | Link popularity generally refers to the total number of links pointing to any particular URL. There are typically two types of link popularity: Internal and External. Internal link popularity typically refers to the number of links or pages within a web site that link to a specific URL. External link popularity refers to the number of inbound links from external web sites that are pointing to a specific URL. If you have more links than your competitors, you are typically known to have link cardinality or link superiority .  |
| Linkbait | Also known as link bait, this is something on your site that people will notice and link to. By linking to your site, other sites are saying they value the content of  your site and that they think other people will be interested in it, too.  |
| linkHandler Suite Plug-in | The linkHandler suite of plug-ins allows for easy detection of file download and exit links. It also provides insight into clicks to specific links without modifying the existing link code.  |
| Linking Profile | A profile is a representation of the extent to which something exhibits various characteristics. A linking profile is the result of an analysis of where your links are coming from.  |
| linkInternalFilters Variable | linkInternalFilters is an optional variable used in conjunction with linkExternalFilters to determine whether a link is an exit link.  |
| linkLeaveQueryString Variable | The linkLeaveQueryString variable determines whether or not the query string should be included on Exit Links and Download Links.  |
| linkName Variable | linkName is an optional variable used in Link Tracking that determines the name of a custom, download, or exit link.  |
| linkTrackEvents Variable | linkTrackEvents is a comma-separated list of events that may be sent with a custom, exit, or download link. If an event is not in linkTrackEvents, then it will not be sent to SiteCatalyst, even if it is populated in the onClick event of a link.  |
| Log File Analysis | The analysis of records stored in the log file. In its raw format, the data in the log files can be hard to read and overwhelming. There are numerous log file analyzers that convert log file data into user-friendly charts and graphs. A good analyzer is generally considered an essential tool in SEO because it can show search engine  statistics such as the number of visitors received from each search engine, the keywords each visitors used to find the site, visits by search engine spiders etc...  |
| Long-tailed Keywords | Keyword phrases with at least 2 or 3 words in them.  |
| Long Tail | Keyword phrases with at least three, sometimes four or five, words in them. These long tail keywords are usually highly specific and draw lower traffic than shorter, more competitive keyword phrases, which is why they are also cheaper. Often times, long tail keywords, in aggregate, have good conversion ratios for the low number of click throughs they generate.  |
| MapMyLead | This tool allows sales people to generate more leads from their websites. Most of the B2B sites have a conversion ratio of less than 2%. That means, you don't know who the remaining 98% is. MapMyLead helps our customers to know which companies are coming to their website and what they are doing. MapMyLead comes with advanced querying capabilities as well as a convenient scheduling feature to get data emailed on daily or weekly basis.  |
| Meta Feeds | Ad networks that pull advertiser listings from other providers. They may or may not have their own distribution and advertiser networks.  |
| META Refresh redirect | A client-side redirect.  |
| Minimum Bid | The least amount that an advertiser can bid for a keyword or keyword phrase and still be active on the search ad network. This amount can range from $0.01 to $0.50 (or more for highly competitive keywords), and is set by the search engine.  |
| Mod_rewrite | URL Rewrite processes, also known as mod rewrites, are employed when a webmaster decides to reorganize a current web site, either for the benefit of better user experience with a new directory structure or to clean up URLs which are difficult for search engines to index.  |
| Multivariate Testing |  Although A/B testing is useful, it has some limitations. Multivariate testing on the other hand can test combinations of multiple elements MVT testing can obtain dramatic results by varying online factors such as design, copy, images etc MVT testing can help you make the most of your site and get ahead of your competitors |
| Multivariate Testing | A type of testing that varies and tests more than one or two campaign elements at a time to determine the best performing elements and combinations.  Multivariate testing can gather significant results on many different components of, for example, alternative PPC ad titles or descriptions in a short period of time. Often it requires special expertise to analyze complex statistical results. (Compare to A/B Testing which changes only one element at a time, alternately serving an old version ad and a changed one.) In search advertising, you might do A/B Split or Multivariate testing to learn what parts of a landing page (background color, title, headline, fill in forms, design, images) produce higher conversions and are more cost effective.  |
| Naked Links | A posted and visible link in the text of a web page that directs to a web site.  |
| Negative Keywords | Filtered-out keywords to prevent ad serves on them in order to avoid irrelevant click-through charges on, for example, products that you do not sell, or to refine and narrow the targeting of your Ad Groups keywords. Microsoft adCenter calls them excluded keywords. Formatting negative keywords varies by search engine; but they are usually designated with a minus sign.  |
| Netscape Plug-ins | This SiteCatalyst report lets you learn which plug-ins are used by the visitors to your site (available only for Netscape). This information is especially useful if your web page has content that requires a specific plug-in.  |
| Network | A group of two or more computer systems linked together. There are many types of computer networks, including: Local-Area Networks (LANs), where the computers are geographically close together (in the same building). WideArea Networks (WANs), where the computers are farther apart and are connected by telephone lines or radio waves. Computers on a network are sometimes called nodes. Computers and devices that allocate resources for a network are called servers.  |
| % New Visits | Of all the visits to your site, what percentage of them came to your site for the first time. By itself, this is nearly useless. But, when paired with other stats it  can be illuminating. For example, lets compare the number of new visitors to the number of page views. If your new visitor count is high and continues to grow, but your page views remains constant that would tell you that while you are attracting visitors, they are not coming back.  |
| Next Page | SiteCatalyst report that provides detailed site path analysis by pinpointing where your visitors go within your site after leaving any given page on your site. For example if you want to find where your visitors go after your home page, this report will show you the top five pages your visitors go to after leaving your home page.  |
| Next Page Flow | SiteCatalyst report that graphically illustrates two levels of the most popular next pages that your visitors view following the selected page. The report also highlights when visitors exit your site.  |
| No Script Tag | The noscript element is used to define an alternate content (text) if a script is NOT executed. This tag is used for a browser that recognizes the < script > tag, but does not support the script in it.  |
| No Follow | No Follow is an attribute webmasters can place on links that tell search engines not to count the link as a vote or not to send any trust to that site. Search engines will follow the link, yet it will not influence search results. No Follows can be added to any link with this code: rel=nofollow.  |
| Optimization Testing | Testing is integral to the running of a successful website, as without experimenting, no one can tell what is really working.  |
| Organic Results | Listings on SERPs that were not paid for; listings for which search engines do not sell space. Sites appear in organic (also called natural) results because a search engine has applied formulas (algorithms) to its search crawler index, combined with editorial decisions and content weighting, that it deems important enough inclusion without payment. Paid Inclusion Content is also often considered organic even though it is paid advertising because paid inclusion content usually appears on SERPs mixed with unpaid, organic results.  |
| Organic Search Listings | Listings that search engines do not sell (unlike paid listings). Instead, sites appear solely because a search engine has deemed it editorially important for them to be included, regardless of payment. Paid Inclusion Contentis also often considered organic even though it is paid for. This is because paid inclusion content usually appears intermixed with unpaid organic results.  |
| Organic Search Rankings | Search engine ranking of web pages found in SERPs.  |
| Original Referrer | Customers can visit your site multiple times, and have a different referrer for each visit. The original referrer is the referrer customers used the first time they arrived at your site.  |
| P4P | Acronym for Pay for Performance, also designated as PFP. See alsoPPC Advertising.  |
| Revshare / RevenueSharing | A method of allocating per-click revenue to a site publisher, and click-through charges to a search engine that distributes paid-ads to its context network partners, for every page viewer who clicks on the content sites sponsored ads. |
| Podcasts | A podcast is a media file that is distributed over the internet using syndication feeds, for playback on portable media players and personal computers. Like 'radio,' it can mean both the content and the method of syndication. |
| Organic Search Listings | Listings that search engines do not sell (unlike paid listings). Instead, sites appear solely because a search engine has deemed it editorially important for them to be included, regardless of payment. |
| Meta Feeds | Ad networks that pull advertiser listings from other providers. They may or may not have their own distribution and advertiser networks. |
| Latent Semantic Indexing | LSI uses word associations to help search engines know more accurately what a page is about.  |
| PageRank (PR) | PR is the Google technology developed at Stanford University for placing importance on pages and web sites. At one point, PageRank (PR) was a major factor in rankings. Today it is one of hundreds of factors in the algorithm that determines a pages rankings.  |
| Pages per Visit | This tells you the average number of pages that get viewed during each visit. Higher numbers indicate that your visitors read multiple pages before they leave.  |
| Paid Inclusion | Refers to the process of paying a fee to a search engine in order to be included in that search engine or directory. Also known as guaranteed inclusion. Paid inclusion does not impact rankings of a web page; it merely guarantees that the web page itself will be included in the index. These programs were typically used by web sites that were not being fully crawled or were incapable of being crawled, due to dynamic URL structures, frames, etc.  |
| Pay Per Call | A model of paid advertising similar to Pay Per Click (PPC), except advertisers pay for every phone call that comes to them from a search ad, rather than for every click-through to their web site landing page for the ad. Often higher cost than PPC advertising; but valued by advertisers for higher conversion rates from consumers who take the action step of telephoning an advertiser.  |
| Personas | These are people types or sub-groups that encompass several attributes, such as gender, age, location, salary level, leisure activities, lifestyle characteristics, marital / family status or some kind of definable behavior. Useful profiles for focusing ad messages and offers to targeted segments.  |
| PFP | Acronym for Pay for Performance; also designated as P4P. See also PPC Advertising.  |
| (PIE) Persistent Identification Element | is a type of tag that is attached a users browser, providing a unique ID for that visitor. A PIE is not unlike a cookie. Though that kind of thinking will never assure your progress as a pastry chef.  |
| Position | In PPC advertising, position is the placement on a search engine results page where your ad appears relative to other paid ads and to organic search results. Top ranking paid ads (high ranking 10 to 15 results, depending on the engine) usually appear at the top of the SERP and on the right rail (right-side column of the page). Ads appearing in the top three paid-ad or Sponsored Ad slots are known as Premium Positions. Paid search ad position is determined by confidential algorithms and Quality Score measures specific to each search engine. However, factors in the engines position placement under some advertiser control include bid price, the ads CTR, relevancy of your ad to searcher requests, relevance of your click-through landing page to the search request, and quality measures search engines calculate to ensure quality user experience.  |
| Position Preference | A feature in Google AdWords and in Microsoft adCenter enabling advertisers to specify in which positions they would like their ads to appear on the SERP. However, it does not provide a position guarantee.  |
| PPC | Acronym for Pay Per Click. See also PPC Advertising.  |
| PPC Management | The monitoring and maintenance of a Pay-Per-Click campaign or campaigns. This includes changing bid prices, expanding and refining keyword lists, editing ad copy, testing campaign components for cost effectiveness and successful conversions, and reviewing performance reports for reports to management and clients, as well as results to feed into future PPC campaign operations.  |
| PPC Advertising | Acronym for Pay-Per-Click Advertising, a model of online advertising in which advertisers pay only for each click on their ads that directs searchers to a  specified landing page on the advertisers web site. PPC ads may get thousands of impressions (views or serves of the ad); but, unlike more traditional ad models billed on a CPM (Cost-Per-Thousand-Impressions) basis, PPC advertisers only pay when their ad is clicked on. Charges per ad click-through are based on advertiser bids in hybrid ad space auctions and are influenced by competitor bids, competition for keywords and search engines proprietary quality measures of advertiser ad and landing page content.  |
| PPCSE | Acronym for Pay-Per-Click Search Engine.  |
| Quality Index | For details, please see Quality Score  |
| Quality Score | A number assigned by Google to paid ads in a hybrid auction that, together with maximum CPC, determines each ads rank and SERP position. Quality Scores reflect an ads historical CTR, keyword relevance, landing page relevance, and other factors proprietary to Google. Yahoo! refers to the Quality Score as a Quality Index. And both Google and Yahoo! display 3- or 5-step indicators of quality evaluations for individual advertisers.  |
| Query | The keyword or keyword phrase a searcher enters into a search field, which initiates a search and results in a SERP with organic and paid listings.  |
| Rank | How well positioned a particular web page or web site appears in search engine results. For example, if you rank at position #1, youre the first listed paid or sponsored ad. If you're in position #18, it is likely that your ad appears on the second or third page of search results, after 17 competitor paid ads and organic listings. Rank and position affect your click-through rates and, ultimately, conversion rates for your landing pages.  |
| Reciprocal Link | Two different sites that link out to each other. Also referred to as Cross Linking.  |
| Relevance | The concept Relevance is related to the PPC advertising. Relevance is a measure of how closely your ad title, description, and keywords are related to the search query and the searchers expectations.  |
| Retention |  This refers to your customer buying from you again  Campaign analysis consists of tracking, measuring and optimizing website visitor traffic and reach and acquisition initiatives. Campaign analytics is an integral part of the overall web analytics process because a major part of the online budget is invested in getting visitor traffic to the website. At Outsource2india, we can help you optimize your marketing campaign spend by tracking and measuring the effectiveness of the campaigns at the broad level to the key phrase or creative level. Web visitor traffic acquisition types can be categorized into offline and online channels. The following is a list of offline and online channels:  Online channels:PPC, Banners, PR/social media initiatives, Emails and affiliate programs Offline channels:Television, Radio, Print, POS advertisements, Direct mails, OOH media etc...   |
| Revshare / RevenueSharing | A method of allocating per-click revenue to a site publisher, and click-through charges to a search engine that distributes paid-ads to its context network partners, for every page viewer who clicks on the content sites sponsored ads. A type of site finders fee.  |
| RichMedia | Media with embedded motion or interactivity. A growing option for PPC advertisers as rates of broadband connectivity increases.   |
| RightRail | The common name for the right-side column of a web page. On a SERP, right rail is usually where sponsored listings appear.  |
| Robots.txt | A text file present in the root directory of a website which is used to direct the activity of search engine crawlers. This file is typically used to tell a crawler which portions of the site should be crawled and which should not be .  |
| RSS Aggregator | A client software that uses web feed to retrieve syndicated web content such as blogs, podcasts, vlogs, and mainstream mass media websites, or in the case of a search aggregator, a customized set of search results.Such applications are also referred to as RSS readers, feed readers, feed aggregators, news readers or search aggregators. These have been recently supplemented by the so-called RSS-narrators [such as TalkingNews or Talkr which not only aggregates news feeds but also converts them into podcasts   |
| Search Engine Optimization (SEO) | SEO is a significant function that increases the visibility of your website on the web. SEO makes sure that your website content is keyword rich. The aim is to target the most popular keywords that a particular target audience uses while searching on the web, and help you excel in organic search marketing. With a clear understanding of how search engines work. |
| Segmented | A subset of the site traffic for a defined period of time, filtered in some way to gain greater analytical insight: e.g., by campaign (e-mail, banner, PPC, affiliate), by visitor type (new vs. returning, repeat buyers, high value), by referrer.  |
| Seriousness of usage | Assume you need some important information from the web, will you prefer your desktop or the mobile? The answer will mostly lean towards the former. This directly reflects the behavior of most internet users; we are not challenging the use of mobiles for collecting serious information but merely suggesting upon the preferences of a user when looking for serious information. This behavior implies that the quality of browsing on the desktop platforms is higher compared to the mobile platform. The point here is the sustained focus of the user, which is more on desktops rather than mobiles.  |
| s_account Variable  | The s_account variable determines the report suite where data will be stored and reported in SiteCatalyst. If sending to multiple report suites (multi-suite tagging) s_account may be a comma-separated list of values.  |
| T1 | A dedicated Internet connection that supports data transfer rates of up to 1.54 megabits per second.  |
| Tabular View | SiteCatalyst report view that can help you view current performance for your site, performance trends or the portions that have had the greatest or least improved performance for any time period.  |
| Taguchi Method | Mathematical theory used in Multivariate Testing.  |
| Target | SiteCatalyst feature that enables you to see, graphically, how your site is performing based on set goals (or targets).  |
| TCP/IP (Transmission Control Protocol/Internet Protocol) | Represents the suite of communications protocols used to connect hosts to the Internet. TCP/IP is the de facto standard for transmitting data over networks. Even network operating systems with their own protocols, such as Netware, support TCP/IP.  |
| Traffic sources | This tells you how visitors get to your site, providing numbers for each of three methods; ...  |
| Visit Length | See Time Spent per Visit  |
| Visitor Detail | SiteCatalyst report that shows visitor information for the last visitors to your site. Each visitor is defined by IP address. Information collected for each visitor is presented in an easy to read table with detail for five visitors listed on each page.  |
| Visitor Number | SiteCatalyst report that helps you gauge visitor loyalty by tracking the number of times each visitor visits your site. During your selected time period, you can see whether more of the visits were from visitors that came to your site for the first time or the 20th time.  |
| Visitor Retention | See Return Visits  |
| Visitor / Unique Visitor / Unique User | The uniquely identified client generating requests on the web server (log analysis) or viewing pages (page tagging) within a defined time period (i.e. day, week or month). A Unique Visitor counts once within the timescale. A visitor can make multiple visits. Identification is made to the visitors computer, not the person, usually via cookie and/or IP+User Agent. Thus the same person visiting from two different computers will count as two Unique Visitors. Increasingly visitors are uniquely identified by Flash LSOs (Long Storage Objects), which are less susceptible to privacy enforcement. % Exit:The percentage of users who exit from a page. - end official glossary There are some bits of jargon outside the more official terms that you may encounter and find handy to know  |
| visitorNamespace Variable | This variable is used to identify the domain with which cookies are set.  |
| Web Elements | Google product that lets you copy and paste code for displaying Google products, such as Custom Search and Google Calendar onto your own website. To learn more and see which Google products have a Web Element, see the Web Elements site.  |
| Web Server |  This is a vague term whose meaning must be determined by the context in which its used. It will mean one of two things: The physical computer that acts as a server. This is a computer just like any other. It is called a server because its main function is to deliver web pages. Often there is nothing particularly special about a servers hardware, its only a server because of the software.  |
| Yearly Unique Visitor | The number of unduplicated (counted only once) visitors to your website over the course of a single year.  |
| zip Variable | The zip variable tracks the U.S. zip code in which a visitor is located.  |