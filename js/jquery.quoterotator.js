/*
* File: jquery.quoterotator.js
* Version: 1.0.0
* Description: A simple jQuery plugin that rotates quotes / testimonials...
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

    $.fn.quoterotator = function (options) {

        var defaults = $.extend({
	    quotes: [
		{
		    text: "Example text 1...",
		    author: "Example Author 1",
		    subtitle: "Example Subtitle 1..."
		},
		{
		    text: "Example text 2...",
		    author: "Example Author 2",
		    subtitle: "Example Subtitle 2..."
		},
		{
		    text: "Example text 3...",
		    author: "Example Author 3",
		    subtitle: "Example Subtitle 3..."
		}				
	    ],
	    duration: 3000			
        }, options);
        
	/******************************
	Private Variables
	*******************************/         

	var object = $(this);
	var settings = $.extend(defaults, options);
	var quotes = settings.quotes;
	var currentIndex = 0;

	var quoteText, quoteAuthor, quoteSubtitle; // to be assigned to div elements later.
		
	/******************************
	Public Methods
	*******************************/         
        
        var methods = {
        	
	    init: function() {
		return this.each(function () {
		    methods.appendHTML();
		    methods.initializeItems();
		});
	    },
			
	    /******************************
	    Append HTML
	    *******************************/			

	    appendHTML: function() {

		var html = '<div class="quote"><div class="quoteText"></div></div><div class="quoteAuthor"></div><div class="quoteSubtitle"></div>';
		object.append(html);
		quoteText = object.find('.quote').find('.quoteText');
		quoteAuthor = object.find('.quoteAuthor');
		quoteSubtitle = object.find('.quoteSubtitle');				
	    },

	    /******************************
	    Initialize
	    *******************************/			

	    initializeItems: function() {

		methods.setQuote();

		setInterval(function(){
			methods.showNextQuote();
		}, settings.duration);

	    },			

	    /******************************
	    Show Next Quote
	    *******************************/			

	    showNextQuote: function() {

		if(currentIndex === quotes.length - 1) {
		    currentIndex = 0;
		}
		else {
		    currentIndex++;
		}

		quoteText.add(quoteAuthor).add(quoteSubtitle).fadeOut('slow', function(){
		    methods.setQuote();
		}).fadeIn();

	    },

	    /******************************
	    Set Quote
	    *******************************/			

	    setQuote: function() {
		quoteText.html(quotes[currentIndex].text);
		quoteAuthor.html(quotes[currentIndex].author);	

		if(quotes[currentIndex].subtitle)
			quoteSubtitle.html(quotes[currentIndex].subtitle);	
		else
			quoteSubtitle.html('');
	    }
        };
        
        if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);  
        } else {
            $.error( 'Method "' +  method + '" does not exist in quoterotator plugin!');
        } 
    };

})(jQuery);