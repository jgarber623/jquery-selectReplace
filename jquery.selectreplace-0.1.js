$.fn.selectReplace = function(opts) {
	if (!($.browser.msie && $.browser.version < 7)) {
		return this.each(function() {
			var $this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

			$this.wrap('<span id="' + $this.attr('id') + '-wrapper" class="select-wrapper"></span>').before('<span class="value">' + $this.find('option[value=' + $this.val() + ']').html() + '</span>');
			$this.css("opacity", 0.01);

			$this.change(function() {
				$this.siblings('.value').html($this.find('option[value=' + $this.val() + ']').html());
			});

			$this.focus(function() {
				$this.closest('.select-wrapper').addClass('focus');
			}).blur(function() {
				$this.closest('.select-wrapper').removeClass('focus');
			});

		});
	}
};