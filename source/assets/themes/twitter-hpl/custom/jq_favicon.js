function imageExists(src, callback) {
    var img = new Image;
    img.onload = function() {
        callback(src, true);
    };
    img.onerror = function() {
        callback(src, false);
    };
    img.src=src;
}
$(document).ready(function(){
	$(".review_link").map( function(){
		var me = $(this);
		var href = $(this).attr("href");
		var href_favicon = href + "favicon.ico";
		imageExists(href_favicon, function(src, exists) {
			if (exists) {
				$('<img>').attr('src', src).appendTo(me);
			} else {
				// do nothing
			}
		});	
	})
});
