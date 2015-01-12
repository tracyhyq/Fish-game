require.config({
	paths: {
		'zepto': 'lib/zepto.min',
		'underscore': 'lib/underscore.1.3.2'
	},
	shim: {
	    zepto: {
	    	exports: '$'
	    },
	    underscore: {
	        exports: '_'
	    }
	}
});

require([
	'zepto',
	'underscore',
	'../../data/data',
	'./rateController'
], function($, _, data, rateController){
	$(document).ready(function(){
		var count = 0,
			count2550 = 0,
			count5180 = 0,
			count81135 = 0,
			count136185 = 0,
			count186250 = 0,
			fishes = data.fishes,
			fish = null;

		for(var i = 1; i <= 100000; i++){
			fish = rateController.getFish(fishes);
			count += fish.code;
			if(i % 5 == 0) {
				if(count <= 50 && count >= 25){
					count2550 ++;
				}else if(count <= 80 && count >= 51){
					count5180 ++;
				} else if(count <= 135 && count >= 81){
					count81135 ++;
				} else if(count <= 185 && count >= 136) {
					count136185 ++;
				}else if(count <= 250 && count >= 186) {
					count186250 ++;
				}

				count = 0;
			}			
			
		}

		console.log("25-50: " + count2550, "rate: " + (count2550 / 20000));
		console.log("51-80: " + count5180, "rate: " + (count5180 / 20000));
		console.log("81-135: " + count81135, "rate: " + (count81135 / 20000));
		console.log("136-185: " + count136185, "rate: " + (count136185 / 20000));
		console.log("186-250: " + count186250, "rate: " + (count186250 / 20000));
	});
});