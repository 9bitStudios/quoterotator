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
			duration: 3000
        }, options);
        
		/******************************
		Private Variables
		*******************************/         
        
        var object = $(this);
		var settings = $.extend(defaults, options);
		var quotes = object.children();
		var currentIndex = 0;
		
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
				methods.showNextQuote();
				
			},			
			
			showNextQuote: function() {
				quotes.eq(currentIndex % quotes.length).fadeIn(1000).delay(settings.duration).fadeOut(1000, methods.showNextQuote);
				currentIndex++;
			}
			
		
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