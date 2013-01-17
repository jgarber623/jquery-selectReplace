/**
 * @name jQuery selectReplace (https://github.com/jgarber623/jquery-selectReplace)
 * @author Jason Garber
 * @copyright (cc) Jason Garber (http://sixtwothree.org and http://www.viget.com)
 *
 * Licensed under the CC-GNU GPL (http://creativecommons.org/licenses/GPL/2.0/)
 */

;(function( $, window, document, undefined ) {
	
	var SelectReplace = function( elem, options ) {
		this.elem = elem;
		this.$elem = $( elem );
		this.options = options;
		this.metadata = this.$elem.data( 'selectreplace-options' );
	};
	
	SelectReplace.prototype = {
		defaults: {
			focusClassName: 'select-focus',
			valueClassName: 'select-value',
			wrapperClassName: 'select-wrapper'
		},
		
		init: function() {
			this.config = $.extend( {}, this.defaults, this.options, this.metadata );
			
			var _self = this,
				$value = $( '<span class="' + this.config.valueClassName + '" />' ).html( this.getCurrentValue() ),
				$wrapper = $( '<span class="' + this.config.wrapperClassName + '" />' );
				
			var events = {
				'blur.selectReplace': function() {
					_self.$elem.parent().removeClass( _self.config.focusClassName );
				},
				'change.selectReplace': function() {
					$value.html( _self.getCurrentValue() );
				},
				'focus.selectReplace': function() {
					_self.$elem.parent().addClass( _self.config.focusClassName );
				}
			};
			
			this.$elem.wrap( $wrapper ).before( $value ).on( events );
			
			return this;
		},
		
		getCurrentValue: function() {
			return this.$elem.find( ':selected' ).html();
		}
	};
	
	$.fn.selectReplace = function( options ) {
		return this.each( function() {
			new SelectReplace( this, options ).init();
		});
	};
	
})( jQuery, window, document );