--- 
layout: post
title: Who Chats the Most?
categories: 
  - data
  - visualization
  - statistics
  - ruby
intro: "From my <strong>Skype chat history</strong>, a visualization of the counts of chats by (anonymised) author.<br /><img src=\"http://al3xandr3.github.com/img/contacts.png\" alt='contacs.png' />"
---

From my Skype chat history, a visualization of the counts of chats by
(anonymised) author.

![http://al3xandr3.github.com/img/contacts.png][1]


### Code

    
    require 'sqlite3'
    require 'rubyvis'
    
    contacts={}
      
    # count
    db = SQLite3::Database.new("[skype-folder]/main.db")
    db.execute("SELECT author, count(author) FROM Messages GROUP BY author ORDER BY count(author) DESC" ) do |author, count|
      #contacts[author]=count # real ones
      contacts[author.split('').sample(3).join]=count if count>60 # Anonymized
    end
    
    cs=pv.Colors.category20()
    format=Rubyvis::Format.number
    color = pv.Colors.category20
    nodes = pv.dom(contacts).root("rubyvis").nodes
    
    vis = pv.Panel.new()
        .width(600)
        .height(1000)
    
    treemap = vis.add(Rubyvis::Layout::Treemap).
      nodes(nodes).
      mode("squarify").
      round(true)
    
    treemap.leaf.add(Rubyvis::Panel).
      fill_style(lambda{ |d| cs.scale(d) }).
      stroke_style("#fff").
      line_width(1).
      antialias(true).
      title(lambda {|d| d.node_name + " " + format.format(d.node_value)})
    
    treemap.node_label.add(Rubyvis::Label).
      text_style(lambda {|d| pv.rgb(0, 0, 0, 1)}).
      font(lambda{|d| v=d.node_value/90; (v<=8)? "#8px sans-serif" : "#{v}px sans-serif"})
    vis.render
    
    # saves an svg
    File.open("contacts.svg", "w+").write vis.to_svg
    

   [1]: http://al3xandr3.github.com/img/contacts.png