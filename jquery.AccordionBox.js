/*
 * jQuery plug-in
 * ・アコーディオンメニュー
 * ・開閉速度を変更可
 * ・単独開閉、複数開閉を選択可
 * ・初期状態で開く要素を選択可
 *
 * @ (C) 2013, YuichiWatanabe
 * @license   GNU General Public License Version3
 * @version   1.0.0
 * @since     File available since Release 1.0.0
 */

<<<<<<< HEAD
=======
/* -js demo-
* $(".accordion").AccordionBox({
* 		duration: "fast",
* 		defaultActive: 0,
* 		action: "single",
* 		wrap: "div.wrap",
* 		parent: "div.parent",
* 		children: "ul.children",
* 		activeClass: "opened"
* });
*/

/* -html demo-
* <div class="accordion">
* 	<div class="wrap">
* 		<div class="parent">parent name</div>
* 		<ul class="children">
* 			<li>children name1</li>
* 			<li>children name2</li>
* 			<li>children name3</li>
* 		</ul>
* 	</div>
* 	<div class="wrap">
* 		<div class="parent">parent name</div>
* 		<ul class="children">
* 			<li>children name1</li>
* 			<li>children name2</li>
* 			<li>children name3</li>
* 		</ul>
* 	</div>
* 	<div class="wrap">
* 		<div class="parent">parent name</div>
* 		<ul class="children">
* 			<li>children name1</li>
* 			<li>children name2</li>
* 			<li>children name3</li>
* 		</ul>
* 	</div>
* </div>
*/

/* -css demo-
* .accordion {
	width: 200px;
	border: 1px #ccc solid;
* }
* .accordion .wrap .parent {
	font-size: 90%;
	padding: 3px;
	cursor: pointer;
	background: url(path) transparent no-repeat 0px 0px;
	border-top 1px #ccc solid;
* }
* .accordion .wrap .parent.opend {
	background: url(path) transparent no-repeat 0px 0px;
* }
* .accordion .wrap ul.children {
	font-size: 90%;
	display:block;
	padding: 3px;
* }
*/

>>>>>>> test
;(function($){
	$.fn.AccordionBox = function(options){
		var target = this;
		options = $.extend({
<<<<<<< HEAD
			duration: "fast",		// int「ミリ秒単位の数字」String「'slow','normal','fast'」（開閉アニメーション速度）
			defaultActive: 0,		// int「0～要素数 ※0は全閉」（初期状態で開く要素を指定）
			action: "mulch",		// String「'single','mulch'」（単独開閉、複数開閉）
			wrap: "div.wrap",		// String（親子のグループ名）
=======
			duration: "fast",			// int「ミリ秒単位の数字」String「'slow','normal','fast'」（開閉アニメーション速度）
			defaultActive: 0,			// int「0～要素数 ※0は全閉」（初期状態で開く要素を指定）
			action: "mulch",			// String「'single','mulch'」（単独開閉、複数開閉）
			wrap: "div.wrap",			// String（親子のグループ名）
>>>>>>> test
			parent: "div.parent",		// String（親要素名）
			children: "ul.children",	// String（子要素名）
			activeClass: "opened"		// String（アクティブ時のクラス名）
		},options);
		var wrap = target.find(ops.wrap);
		var parent = target.find(''+ops.wrap+' '+ops.parent+'');
		var children = target.find(''+ops.wrap+' '+ops.children+'');
		return target.each(function(){
			children.hide();
			target.find(''+ops.wrap+':nth-child('+ops.defaultActive+') '+ops.parent+'').addClass(ops.activeClass);
			target.find(''+ops.wrap+':nth-child('+ops.defaultActive+') '+ops.parent+'').nextUntil(parent).slideDown(ops.duration);
			if(ops.action === "single"){
				parent.not(this).removeClass(ops.activeClass));
				parent.not(this).nextUntil(parent).slideUp(ops.duration);
			}
			$(this).toggleClass(ops.activeClass);
			$(this).nextUntil(parent).slideToggle(ops.duration);
			return false;
		});
	} 
})(jQery);