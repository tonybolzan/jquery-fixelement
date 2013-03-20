/* ==========================================================
 * jquery-fixelement.js v1.0.0
 * http://github.com/tonybolzan/jquery-fixelement
 * ========================================================== */

;!(function ( $, window, document, undefined ) {

  "use strict";

 /* FIX CLASS DEFINITION
  * ====================== */
  var Fix = function (element, options) {
    this.$element = $(element);

    var data = this.$element.data();

    data.offset = data.offset || {};
    data.offsetTop   && (data.offset.top   = data.offsetTop);
    data.offsetRight && (data.offset.right = data.offsetRight);
    data.offsetLeft  && (data.offset.left  = data.offsetLeft);

    this.options = $.extend({}, $.fn.fix.defaults, data, options);
    this.$window = $(window)
      .on('scroll.fix.data-api', $.proxy(this.processScroll, this))
      .on('click.fix.data-api',  $.proxy(function () { setTimeout($.proxy(this.processScroll, this), 1); }, this));
    this.init();
    this.processScroll();
  };

  Fix.prototype = {
      init: function () {
        var position = this.$element.offset(),
            offset = this.options.offset,
            tmpStyle = this.$element.prop('style');

        this.oldStyle = {
                    left: '',
                    right: '',
                    position: '',
                    top: ''
        };
        for (var i=0; i < tmpStyle.length;i++) {
            this.oldStyle[tmpStyle[i]] = tmpStyle[tmpStyle[i]];
        }

        this.offsetTop = position.top - offset.top;
        this.offsetLeft = offset.left || position.left;
        this.offsetRight = offset.right || (this.$window.width() - (this.offsetLeft + this.$element.width()));
        this.resetClass = this.options['class'];
        this.fixed = false;

        if (typeof this.offsetTop === 'function') {this.offsetTop = offset.top(this.$element);}
        if (typeof this.offsetLeft === 'function') {this.offsetLeft = offset.left(this.$element);}
        if (typeof this.offsetRight === 'function') {this.offsetRight = offset.right(this.$element);}
      },

      processScroll: function () {
        if (!this.$element.is(':visible')) return;

        var scrollTop = this.$window.scrollTop();

        if(this.fixed) {
            if (scrollTop <= this.offsetTop) {
                this.fixed = false;
                this.$element.removeClass(this.resetClass).css(this.oldStyle);
            }
        } else {
            if (scrollTop > this.offsetTop) {
                this.fixed = true;
                this.$element.addClass(this.resetClass).css({
                    left: this.offsetLeft,
                    right: this.offsetRight,
                    position: 'fixed',
                    top: this.options.offset.top+'px'
                });
            }
        }
      }
  };

 /* FIX PLUGIN DEFINITION
  * ======================= */
  var old = $.fn.fix;

  $.fn.fix = function (option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('fix'),
          options = typeof option === 'object' && option;
      if (!data) $this.data('fix', (data = new Fix(this, options)));
      if (typeof option === 'string') data[option]();
    });
  };

  $.fn.fix.Constructor = Fix;

  $.fn.fix.defaults = {
    'class' : 'fix-top',
    'offset': {
        'top': 0
    }
  };

 /* FIX NO CONFLICT
  * ================= */
  $.fn.fix.noConflict = function () {
    $.fn.fix = old;
    return this;
  };

 /* FIX DATA-API
  * ============== */
  $(window).on('load', function () {
    $('[data-spy="fix"]').each(function () {
      $(this).fix();
    });
  });

})( jQuery, window, document );