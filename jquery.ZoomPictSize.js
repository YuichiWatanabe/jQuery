/*
 * jQuery plug-in
 * ・写真を拡大する
 * ・イベントハンドラ選択可
 *
 * @ (C) 2013, YuichiWatanabe
 * @license   GNU General Public License Version3
 * @version   1.0.0
 * @since     File available since Release 1.0.0
 */

/* -js demo-
* $(".zoom").ZoomPictSize({
* 	activeSize: 50,				// 
* 	normalIndex: 1,				// 
* 	activeIndex: 99,			// 
* 	speed: 400,					// 
* 	easing: "liner",			// 
* 	shadow:"0 0 10 #666",		// 
* 	float: "",					// 
* 	text: "ON",					// 
* 	textColor: "#999",			// 
* 	textWeight: "bold",			// 
* 	textAlign: "right",			// 
* 	action: "hover"				// 
* });
*/

/* -html demo-
* <img src="path" width="100" height="100" class="zoom"/>
* <img src="path" width="100" height="100" class="zoom"/>
* <img src="path" width="100" height="100" class="zoom"/>
*/

;(function($){
	$.fn.ZoomPictSize = function(options){
		var targets = this;
		options = $.extend({
			activeSize: 50,				// 拡大率： int
			normalIndex: 1,				// z-index（通常時）： int
			activeIndex: 99,			// z-index（拡大時）： int
			speed: 400,					// 拡大速度： int
			easing: "liner",			// イージング： "switch", "liner"
			shadow:"0 0 10 #666",		// 影（webkitのみ）： "webkitのcss指定方式"
			float: "",					// float："right", "left"
			text: "ON",					// textの有無： "ON", "OFF"
			textColor: "#999",			// textの色： "#colorcode"
			textWeight: "bold",			// textの太さ： 100,200,300,400,500,600,700,800,900
			textAlign: "right",			// textの位置： "right","left","center"
			action: "hover"				// イベントハンドラ： "hover", "toggle", "click", "dblclick"
		},options);
		return targets.each(function(){
			var $img = $(this);
			var imgWidth = parseInt($img.width());
			var imgHeight = parseInt($img.height());
			var clicked = false;
			$img.wrapAll("<div>");
			$img.parent().css({
				width: imgWidth,
				height: imgHeight,
				position: "relative"
			});
			if(options.float === "left" || options.float === "right"){
				$img.parent().css({
					float: optons.float,
					display: inline
				});
			}
			$img.css({
				top: 0,
				left 0,
				position: "absolute"
			});
			// add text
			if(options.text === "ON"){
				$img.after('<div>This '+ options.action +' !</div>');
				$img.next().css({
					position: "absolute",
					top: imgHeight,
					left: 0,
					width: imgWidth,
					color: options.textColor,
					"font-weight": options.textWeight,
					"text-alidn": options.textAlign
				});
			}
			// event handler
			switch(options.action){
				case "toggle" || "click":
					$img.toggle(
						function(){ active($img); },
						function(){ normal($img); }
					);
					break;
				case "hover":
					$img.hover(
						function(){ active($img); },
						function(){ normal($img); }
					);
					break;
				case "dblclick":
					$img.dblclick(
						function(){
							if(clicked === false){
								active($img);
								clicked = true;
							} else {
								normal($img);
								clicked = false;
							}
						}
					);
					break;
			}
			
			// inner function
			function active($img){
				$img.parent().css({ "z-index": options.activeIndex });
				$img.stop().animate({
						top: '-'+options.activeSize+'',
						left: '-'+options.activeSize+'',
						width: imgWidth + 2 * options.activeSize,
						height: imgHeight + 2 * options.activeSize
					}, options.speed, options.easing,
					function(){
						$img.css({ "-webkit-box-shadow": options.shadow });
					}
				);
				if(options.text === "ON"){
					$img.next().stop().animate({
						top: imgHeight + options.activeSize,
						left: '-'+options.activeSize+'',
						width: imgWidth + 2 * options.activeSize
					}, options.speed, options.easing);
				}
			}
			// inner function
			function normal($img){
				$img.stop().animate({
						top: 0,
						left: 0,
						width: imgWidth,
						height: imgHeight
					}, options.speed, options.easing,
					function(){
						$img.parent().css({ "z-index": options.normalIndex });
						$img.css({ "-webkit-box-shadow": "" });
					}
				);
				if(options.text === "ON"){
					$img.next().stop().animate({
						top: imgHeight,
						left: 0,
						width: imgWidth
					}, options.speed, options.easing);
				}
			}
		});
	} 
})(jQery);