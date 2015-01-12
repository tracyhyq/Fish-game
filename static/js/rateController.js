/**
 * 概率计算
 * @author tracyhyq
 * @date 2015-1-12
 */

define([], function(){
	return {
		getFish: function(targetRate){
			var newArr = targetRate.slice();

			var random = ~~(Math.random() * 100 + 1);

			for(var i = 0, len = targetRate.length; i < len; i++){
				if(targetRate[i].max >= random && targetRate[i].min <= random){
					return targetRate[i];
				}
			}
		}
	}
});