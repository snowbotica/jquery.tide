(function ( $ ) {
 
    $.fn.tide = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#c4c4c4",
            backgroundColor: "white"
        }, options );

		// collect the string from the dom
		var sentance = this.html();
		// create an array of individual parts
		var sentanceArray = sentance.split('');
		// This is a scoped global
		var tidalArray = []
        
 
        // Greenify the collection based on the settings variable.
        // return this.css({
        //     color: settings.color,
        //     backgroundColor: settings.backgroundColor
        // });
			// contructs a set of broken down letters
	for (var i = 0; i < sentanceArray.length; i++) {
		var flotsam = {} 
    	flotsam.letter = sentanceArray[i];
    	flotsam.classs = 'spring-tide';
 		// console.log(flotsam)
 		var jetsum = constructHtml(flotsam); 
 		tidalArray.push(jetsum);
 		$('.make-tidal').empty()
 		for (var i =0; i < tidalArray.length; i++){
 			$('.make-tidal').append(tidalArray[i]);
 		}
 		// $('.make-tidal').html()
	}
	function constructHtml(item){
		var html =  '<span class="flotsam '+item.classs+'">'
			html += item.letter
			html += '</span>'
		var jqueryHtml = $(html);
		return jqueryHtml
	}

	// var tidalHtml = createJetsum()
	// $('.make-tidal').html(tidalHtml)

	function makeCurrent(targetArray){
		console.log(targetArray.length)
		var total = targetArray.length
		var pointer = 0
		var moon = false
		setInterval(function(){
			if (pointer == 0) { // first element
				console.log('here')
				targetArray[pointer].css({'color':'#c4c4c4'})
				targetArray[total -1].css({'color':'#000'})
				pointer++;
			} 
			else if (pointer == total -1) { // last element
				targetArray[pointer].css({'color':'#c4c4c4'})
				targetArray[pointer -1].css({'color':'#000'})
				pointer = 0;
			}
			else { // all other elements
				targetArray[pointer].css({'color':'#c4c4c4'})
				targetArray[pointer -1].css({'color':'#000'})
				pointer++;
			}
		}
		, 500);
	}
	makeCurrent(tidalArray);
 
    };
 
}( jQuery ));
