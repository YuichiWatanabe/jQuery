/*
 * jQuery plug-in
 * ・フォームの文字数/バイト数を取得
 * ・カウントアップ/ダウン選択可
 * ・改行をカウントに含まない設定可
 *
 * @ (C) 2013, YuichiWatanabe
 * @license   GNU General Public License Version3
 * @version   1.0.0
 * @since     File available since Release 1.0.0
 */

/* -js demo-
* $("#textarea1").TextCount({
* 	limit: 140,
* 	mode: "UP",
* 	type: "STRING",
* 	newline: "ON",
* 	textareaWidth: 400,
* 	textareaHeight: 60,
* 	countText: "COUNTER : ",
* 	countTextAlign: "right",
* 	countTextSize: 10,
* 	countTextColorNormal: "#999",
* 	countTextColorWarning: "#F00",
* 	countTextWeight: "bold"
* });
*/

/* -html demo-
* <textarea id="textarea1"></textarea>
*/

;(function($){
	$.fn.TextCount = function(options){
		var targets = this;
		
		options = $.extend({
			limit: 140,							// 文字数/BYTE数制限： int
			mode: "UP",							// カウント方式： "UP","DOWN"
			type: "STRING",						// カウントタイプ： "STRING","BYTE"
			newline: "ON",						// カウントに改行を含む/含まない： "ON","OFF"
			textareaWidth: 400,					// フォームの横幅： int
			textareaHeight: 60,					// フォームの縦幅： int
			countText: "COUNTER : ",			// カウンターの文字： "string"
			countTextAlign: "right",			// カウンターの位置: "right","left","center"
			countTextSize: 10,					// カウンターの文字サイズ： int
			countTextColorNormal: "#999",		// カウンターの文字色（通常時）： "#colorcode"
			countTextColorWarning: "#F00",		// カウンターの文字色（警告時）："#colorcode"
			countTextWeight: "bold"				// カウンターの文字の太さ： 100,200,300,400,500,600,700,800,900
		},options);
		
		// main
		return targets.each(function(){
			var $textarea = $(this);
			$textarea.css({
				width: options.textareaWidth,
				height: options.textareaHeight
			});
			$textarea.wrapAll("<div>");
			$textarea.parenet().css({
				width: options.textareaWidth
			});
			$textarea.after("<div></div>");
			$textarea.next().css({
				color: options.countTextColorNormal,
				"font-bold": options.countTextWeight,
				"font-size": options.countTextSize,
				"text-align": options.countTextAlign
			});
			counter($textarea);
			$textarea.keyup(
				function(){
					counter($textarea);
				}
			);
		});
		
		// inner
		function counter($textarea){
			var val = $textarea.val();
			// newline
			if(options.newline === "OFF"){
				val = var.replace(/\r\n/g,"");		// ie
				val = var.replace(/\n/g,"");		// chrome
			}
			var count = innerProcess(val);
			var surplus = options.limit - count;
			// text color - normal
			function normal(){
				$textarea.next().css({
					color: options.countTextColorNormal
				});
			}
			// text color - warning
			function warning(){
				$textarea.next().css({
					color: options.countTextColorWarning
				});
			}
			// mode
			switch(options.mode){
				case "UP":
					if(count > options.limit){ warning(); } else { normal(); }
					$textarea.next().html(options.countText + count);
					break;
				case "DOWN":
					if(count < 0){ warning(); } else { normal(); }
					$textarea.next().html(options.countText + surplus);
					break;
				default:
					if(count > options.limit){ warning(); } else { normal(); }
					$textarea.next().html(options.countText + count);
					break;
			}
		}
		
		// inner
		function innerProcess(val){
			var count = 0;
			// type
			switch(options.type){
				case "STRING":
					count = val.length;
					break;
				case "BYTE":
					for(var i = 0; i < val.length; i++){
						var uni = escape(val.charAt(i));
						if(uni.length < 4){
							count++;
						} else {
							count += 2;
						}
					}
					break;
				default:
					count = val.length;
					break;
			}
			return count;
		}
	} 
})(jQery);