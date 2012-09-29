/*
 *   jQuery RollingLinks Plugin
 *   Inspired by concept in http://lab.hakim.se/ example: http://jsfiddle.net/hakim/Ht6Ym/
 *    
 *   MIT licensed, (c) 2012   
 *   
 *   Author: Jonathan Chine
 *           Version plugin of Hakim
 *    
 */

(function ($) {
    var supports3DTransforms =  document.body.style['webkitPerspective'] !== undefined || 
                                document.body.style['MozPerspective'] !== undefined;

    $.fn.rollingLinks = function () {
        if ( Modernizr.csstransforms3d || supports3DTransforms ) {
            // Only actived if it's soported CSS3 transitions and transformations.
            return this.each(function () {
                var node = $( this );
                if( !node.hasClass('roll') ) {
                    node.addClass('roll');
                    node.html('<span data-title="'+ node.text() +'">' + node.html() + '</span>');
                } else {
                    node.html('<span data-title="'+ node.text() +'">' + node.html() + '</span>');
                }
            });    
        }
    };

})(jQuery);