--- 
layout: post
title: Ebay Misspells Search
category: code
tags:
  - automation
  - ruby
intro: "a script that given an ebay search term, creates misspells alternatives and then executes an (ebay)search. because sometimes great bargains can be found from misspells items"
---

A small ruby script that does searches in ebay. Is able to:

 - introducing some misspells in order to find those misspelled items that might be a great bargain(because nobody else is able to find them)
 - able to search in more than one ebay store.

Prints out to console the search results. Of course because is in ruby, is easy to modify and play around :)

Quick and dirty pulled together, but posting here in case someone else finds it useful.

### Use like so:

for multiple keyword search:

	> ruby ebayfind.rb "Ibanez guitar"

for single keyword search:

	> ruby ebayfind.rb Ibanez

## Code:

	require 'net/http'
	require 'rexml/document'
	require 'active_support'


	class Misspell

	 def self.a(a_text="word", options=["skip_letter", "double_letters",
	   "reverse_letters","skip_spaces","missed_key","inserted_key" ])

	    ## Sets up the params    params = Hash.new
	   params["user_input"] = a_text
	   options.each do |opt|
	     params[opt] = opt
	   end

	    #executes a call    
	    res = Net::HTTP.post_form(URI.parse('http://tools.seobook.com/spelling/keywords-typos.cgi'), params)

	    #cleans and formats results    
	    res.body.gsub("\n", ',').scan(/<textarea rows[^>]*(.*)<\/textarea>/).flatten.to_s.gsub(">", "").split(',')
	 end
	end



	if ARGV.length == 0
	 puts "#{$0}: You must enter at least one argument."
	 exit
	end

	search_str = [ARGV[0]]

	puts "Finding: #{search_str}"
	output = ""

	puts "Creating the misspells..."
	search_str << Misspell.a(search_str, ["skip_letter", "double_letters", "reverse_letters","skip_spaces","missed_key","inserted_key" ])
	search_str.flatten!
	puts "Search item with added misspells: #{search_str.join(",")}"

	#ebay_stores = {"1"=>"US", "3"=>"GB", "77"=>"DE", "71"=>"FR", "186"=>"ES", "146"=>"NL"}
	ebay_stores = {"3"=>"GB", "77"=>"DE", "71"=>"FR", "186"=>"ES", "146"=>"NL"}

	#Iterate through each Ebay 
	ebay_stores.each_key do |siteid|

	  # Iterate through each  
	  search_str.each do |query_string|

	    # Put together an eBay parameter string    
	    ebay_params = {
	     'callname' =>'FindItemsAdvanced',
	     'appid'                       =>'TODO:_YOUR_OWN_EBAY_API_ID',
	     'version'                     =>'553',
	     'responseencoding'            =>'XML',
	     'siteid'                      =>siteid,
	     'MessageID                   '=>'',
	     'BidCountMax                 '=>'',
	     'BidCountMin                 '=>'',
	     'CategoryHistogramMaxChildren'=>'',
	     'CategoryHistogramMaxParents '=>'',
	     'CategoryID                  '=>'',
	     'CharityID                   '=>'',
	     'Condition                   '=>'',
	     'Currency                    '=>'',
	     'DescriptionSearch           '=>'',
	     'EndTimeFrom                 '=>'',
	     'EndTimeTo                   '=>'',
	     'ExcludeFlag                 '=>'',
	     'FeedbackScoreMax            '=>'',
	     'FeedbackScoreMin            '=>'',
	     'GroupMaxEntries             '=>'',
	     'GroupsMax                   '=>'',
	     'IncludeSelector             '=>'',
	     'ItemsAvailableTo            '=>'',
	     'ItemsLocatedIn              '=>'',
	     'ItemSort                    '=>'',
	     'ItemType                    '=>'AllItemTypes',
	     'MaxDistance                 '=>'',
	     'MaxEntries                  '=>'',
	     'ModTimeFrom                 '=>'',
	     'PageNumber                  '=>'',
	     'PaymentMethod               '=>'PayPal',
	     'PostalCode                  '=>'',
	     'PreferredLocation           '=>'',
	     'PriceMax                    '=>'',
	     'PriceMin                    '=>'',
	     'ProductID                   '=>'',
	     'Quantity                    '=>'',
	     'QuantityOperator            '=>'',
	     'QueryKeywords               '=> (query_string.gsub(' ', '%20')),
	     'SearchFlag                  '=>'',
	     'SellerBusinessType          '=>'',
	     'SellerID                    '=>'',
	     'SellerIDExclude             '=>'',
	     'SortOrder                   '=>'',
	     'StoreName                   '=>'',
	     'StoreSearch                 '=>''
	   }.map { |key,value| "#{key.strip}=#{value}" unless value.empty? }.join("&").squeeze('&')

	    # Ask eBay what it knows about our query_string    
	    ebay_response = Net::HTTP.get_response('open.api.ebay.com', '/shopping?' << ebay_params)

	    xml = REXML::Document.new(ebay_response.body)

	    # Get basic information    
	    response3 =  Hash.from_xml(xml.to_s)

	   xml.root.elements.each("/FindItemsAdvancedResponse/SearchResult/ItemArray/Item") do |element|
	     item =  Hash.from_xml(element.to_s)
	     puts ""
	     puts ">> Searching for: #{query_string}, in #{bay_stores[siteid]}, got #{response3["FindItemsAdvancedResponse"]["TotalItems"]} results"
	     puts item['Item']['Title']
	     puts item['Item']['EndTime']
	     puts item['Item']['ConvertedCurrentPrice']
	     puts item['Item']['GalleryURL']
	     puts item['Item']['ListingType']
	     puts item['Item']['Condition']
	     puts item['Item']['ViewItemURLForNaturalSearch']
	   end
	 end
	end
