/*
 * jQuery plug-in
 * ・要素の位置を固定
 * ・指定のピ座標までスクロールすると要素を表示
 * ・Hover時に要素の透過濃度を変更
 *
 * @ (C) 2013, YuichiWatanabe
 * @license   GNU General Public License Version3
 * @version   1.0.0
 * @since     File available since Release 1.0.0
 */

;(function($){
	$.fn.FixedElement = function(options){
		var target = this;
		options = $.extend({
			top:15,			// int（要素の座標）
			right:5,		// int（要素の座標）
			left: "",		// int（要素の座標）
			display: "none",	// String「none,block」 （要素の初期表示形式）
			showPx: 200,		// int（要素を表示する座標）
			duration: "slow",	// int「ミリ秒単位の数字」String「'slow','normal','fast'」（要素非表示のアニメーション速度）
			onOpacity: 1,		// int「0～1」（要素の透過度）
			offOpacity: 0.5		// int「0～1」（要素の透過度）
		},options);
		return target.each(function(){
			//要素のCSS
			target.css({
				position: "absolute",
				top: options.top,
				right: options.right,
				left: options.left,
				display: options.display
			});
			var targetY = parseInt(target.css("top"));
			$(window).scroll(function(){
				var point = targetY + $(document).scrollTop();
				var scrollTop = $(window).scrollTop() >= options.showPx;
				// 要素の位置を固定
				target.animate({
					top:point
				},{
					duration: 0,
					queue: false
				});
				// 指定のピクセルまでスクロールすると要素を表示
				if(scrollTop){
					target.fadeIn(options.duration);
					target.stop().animate({
						opacity: options.offOpacity
					},400);
				} else {
					target.fadeOut(options.duration);
				}
				// Hover時に要素の透過濃度を変更
				$(this).hover(
					function(e){
						var scrollTop = $(window).scrollTop();
						if(scrollTop != 0){
							target.stop().animate({
								opacity: options.onOpacity
							},400);
						}
					},
					function(e){
						var scrollTop = $(window).scrollTop();
						if(scrollTop != 0){
							target.stop().animate({
								opacity: options.offOpacity
							},400);
						}
					}
				);
			});
		});
	} 
})(jQery);