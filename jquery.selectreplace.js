/**
 * @name jQuery selectReplace (https://github.com/jgarber623/jquery-selectReplace)
 * @author Jason Garber
 * @copyright (cc) Jason Garber (http://sixtwothree.org and http://www.viget.com)
 *
 * Licensed under the CC-GNU GPL (http://creativecommons.org/licenses/GPL/2.0/)
 */

;(function($) {
	$.fn.selectReplace = function( options ) {
		return this.each( function() {
			var opts = $.extend( {}, $.fn.selectReplace.defaults, options ),
				$this = $( this ),
				$value = $( '<span class="value" />' ),
				$wrapper = $( '<span class="select-wrapper" id="' + $this.attr( "id" ) + '-wrapper" />' );
			
			$value.html( $.fn.selectReplace.getCurrentValue( $this ) );
			
			$this.wrap( $wrapper ).before( $value ).bind({
				"change.selectReplace": function() {
					$value.html( $.fn.selectReplace.getCurrentValue( $this ) );
				},
				
				"focus.selectReplace": function() {
					$this.closest( "span.select-wrapper" ).addClass( opts.focusClassName );
				},
				
				"blur.selectReplace": function() {
					$this.closest( "span.select-wrapper" ).removeClass( opts.focusClassName );
				}
			});
		});
	};
	
	$.fn.selectReplace.getCurrentValue = function( select ) {
		var $select = $( select );
		
		return $select.find( 'option[value="' + $select.val() + '"]' ).html();
	};
	
	$.fn.selectReplace.defaults = {
		focusClassName: "focus"
	};
})(jQuery);