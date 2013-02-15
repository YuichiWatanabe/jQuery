/*
 * jQuery plug-in
 * ・要素点滅
 *
 * @ (C) 2013, YuichiWatanabe
 * @license   GNU General Public License Version3
 * @version   1.0.0
 * @since     File available since Release 1.0.0
 */

<<<<<<< HEAD
=======
/* -js demo-
* $(".blink").BlinkBlink({
* 		interval: 1000
* });
*/

>>>>>>> test
;(function($){
	$.fn.BlinkBlink = function(options){
		var target = this;
		options = $.extend({
			interval: 1000			// int「ミリ秒単位の数字」（要素の点滅間隔）
		},options);
		return target.each(function(){
			setInteval(
				function(){
					target.fadeOut(options.interval / 2,
						function(){target.fadeIn(options.interval / 2)})
				},options,interval
			);
		});
	} 
})(jQery);