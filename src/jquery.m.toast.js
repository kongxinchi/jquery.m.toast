(function($){
	var container = null;
    var toast = function(message, options){
		// default properties
        options = options || {};
        options.width = options.width || 0;
        options.duration = options.duration || 2000;
        options.type = options.type || '';
        options.align = options.align || 'bottom';
        if(!options.hasOwnProperty('singleton')) {
            options.singleton = true;
        }

        // init toast container
		if(!container){
			container = $('<ul></ul>').addClass('toast').appendTo(document.body).hide();
		}

        switch(options.align) {
            case 'top':
                container.css({'top': '0', 'bottom': '', 'margin': '40px 0 0 0'});
                break;
            case 'bottom':
                container.css({'top': '', 'bottom': '0', 'margin': '0 0 40px 0'});
                break;
        }

        if(options.singleton) {
            container.html('');
        }

		// append message to container
        var span = "<span>" + message + "</span>";
        var item = $('<li></li>').hide();
        if(options.width > 0) {
            span = "<span style='width: " + options.width + "'>" + message + "</span>";
        }
        if(options.align == 'top') {
            item.html(span).prependTo(container);
        } else {
            item.html(span).appendTo(container)
        }

		// set custom class
		if(options.type !== '') item.addClass(options.type);
		// setup timeout
        var timeout = null;
		timeout = setTimeout(function(){
            clearTimeout(timeout);
            item.animate({ height: 0, opacity: 0}, 'fast', function(){
                item.remove();
                container.children().length || container.hide();
            });
        }, options.duration);

		// show toast
        container.show();
		item.fadeIn('normal');
	};
	$.extend({ toast: toast });
})(jQuery);