
Personal site that host writings about my interests, and sometimes something useful for others also.

## Technology

It runs on http://jekyllrb.com/ as a service provided by the wonderful GitHub.

## File Structure

		css/         ->  
		    font/    ->  hosting font used
		img/         ->  images used in site
		js/          ->  
		    libs/    ->  3rd party js libs
		_includes/   ->  like html plugins, w/ dedicated functionality: GA tracking, discus
		_layouts/    ->  html layouts: homepage, posts
		_posts/      ->  Where the content i write lives (.md files)
		Rakefile    ->  Makefile in ruby, that helps me test site before commit
		sitemap.xml ->  sitemap that builds itself, to have site SEO aware
		_config.yml ->  Site global configurations

Feel free to copy/re-use any of my setup, I've done so myself :)
