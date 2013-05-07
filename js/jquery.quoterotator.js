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
			duration: 3000,
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
			]
        }, options);
        
		/******************************
		Private Variables
		*******************************/         
        
        var object = $(this);
		var settings = $.extend(defaults, options);
		var quotes = settings.quotes;
		var currentIndex = 0;
		
		var quoteText = object.find('.quote').find('.quoteText');
		var quoteAuthor = object.find('.quoteAuthor');
		var quoteSubtitle = object.find('.quoteSubtitle');
		
		/******************************
		Public Methods
		*******************************/         
        
        var methods = {
        	
			init: function() {
				return this.each(function () {
					methods.initializeItems();
				});
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
			
				if(currentIndex == quotes.length - 1) {
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
				quoteSubtitle.html(quotes[currentIndex].subtitle);				
			},
		
        };
        
        if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);  
        } else {
            $.error( 'Method "' +  method + '" does not exist in quoterotator plugin!');
        } 
};

})(jQuery);