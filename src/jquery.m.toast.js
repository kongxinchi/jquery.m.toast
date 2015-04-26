(function($){
	var container = null;
    var toast = function(message, prop){
		// default properties
        prop = prop || {};
        prop.width = prop.width || 0;
        prop.duration = prop.duration || 2000;
        prop.type = prop.type || '';
        prop.align = prop.align || 'bottom';
        if(!prop.hasOwnProperty('singleton')) {
            prop.singleton = true;
        }

        // init toast container
		if(!container){
			container = $('<ul></ul>').addClass('toast').appendTo(document.body).hide();
		}

        switch(prop.align) {
            case 'top':
                container.css({'top': '0', 'bottom': '', 'margin': '40px 0 0 0'});
                break;
            case 'bottom':
                container.css({'top': '', 'bottom': '0', 'margin': '0 0 40px 0'});
                break;
        }

        if(prop.singleton) {
            container.html('');
        }

		// append message to container
        var span = "<span>" + message + "</span>";
        var item = $('<li></li>').hide();
        if(prop.width > 0) {
            span = "<span style='width: " + prop.width + "'>" + message + "</span>";
        }
        if(prop.align == 'top') {
            item.html(span).prependTo(container);
        } else {
            item.html(span).appendTo(container)
        }

		// set custom class
		if(prop.type !== '') item.addClass(prop.type);
		// show container
		!container.hasClass('active') && container.addClass('active').show();
		// setup timeout
        var timeout = null;
		timeout = setTimeout(function(){
            clearTimeout(timeout);
            item.animate({ height: 0, opacity: 0}, 'fast', function(){
                item.remove();
                container.children().length || container.removeClass('active').hide();
            });
        }, prop.duration);
		// show toast
		item.fadeIn('normal');
	};
	$.extend({ toast: toast });
})(jQuery);