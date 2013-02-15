/*
 * jQuery plug-in
 * ・滑らかなアニメーションのページ内リンク
 * ・移動速度を変更可
 * ・アニメーション終了時の実行関数指定可
 * ・アニメーション実行中のフレーム毎の実行関数指定可
 *
 * @ (C) 2013, YuichiWatanabe
 * @license   GNU General Public License Version3
 * @version   1.0.0
 * @since     File available since Release 1.0.0
 */

<<<<<<< HEAD
=======
/* -js demo-
* $("area[href^=#],a[href^=#]").SmoothLink({
* 		speed: "fast",					// 速度
* 		easing: "swing",				// イージング
* 		complete: function(arg){},		// アニメーション終了時の実行関数
* 		step: function(arg){}			// アニメーション実行中のフレーム毎の実行関数
* });
*/

>>>>>>> test
;(function($){
	$.fn.SmoothLink = function(options){
		var target = this;
		options = $.extend({
<<<<<<< HEAD
			speed: "fast",					// int「ミリ秒単位の数字」String「'slow','normal','fast'」（移動速度）
			easing: "swing",				// String（イージング）
=======
			speed: "fast",						// int「ミリ秒単位の数字」String「'slow','normal','fast'」（移動速度）
			easing: "swing",					// String（イージング）
>>>>>>> test
			complete: function(arg){},			// function（アニメーション終了時の実行関数）
			step: function(arg){}				// function（アニメーション実行中のフレーム毎の実行関数）
		},options);
		
		return target.each(function(){
			target.click(
				function(){
					var point = $(this.hash);
					var pointY = $(point).offset().top;
					$("html,body").animate({
						scrollTop: pointY
					},{
						duration: options.speed,
						easing: options.easing,
						complete: options.complete,
						step: options.step
					});
				}
			);
		});
	} 
})(jQery);