1.HTMl（Hyper Text Makeup Language）超文本标记语言，没有逻辑性。
	浏览器（主要是谷歌和火狐）内核：
	B/S 
	C/S 	
	B/S项目架构		浏览器/服务器  简化系统开发、维护使用 
		需要通过浏览器访问的项目
	C/S项目架构  client		客户端/服务端
		需要通过客户端访问的项目

	http协议与https协议的区别
	 	http协议是超文本传输协议缩写，前后端交互。https协议的安全性高于http协议。

	tcp与udp协议区别
		tcp协议（三次握手）
	
	url资源统一定位符---地址

2.DOCTYPE指定文档类型	
	<html>
	<head>
	<meta charset="utf-8>	用来声明当前文本编码方式为utf-8
	<title>
	<body>

.html与.htm有什么区别？  并没有什么区别，以前的系统问题，导致无法全显示。

3.
	块级元素：独占一行，并且可以设置宽高。

	行内元素：共享一行，不可以设置宽高
		img除外

		将行内元素转换成块级元素：display:block; 将块级元素转换成行内元素：display:inline;
		如果将元素设置为行内块级元素：dispaly:inline-block
			(和其他元素共享一行，可以设置宽高)
		行内元素一般不嵌套块级元素
		p标签是三级标签，不可嵌套比它级别更高的标签。

		无意义标签:span、div

	空元素：

	html属性：
		核心属性(大多数元素含有的属性)：
			id
			class
			title
			style

	实体：
		空格：&nbsp;  

	注释：

	段落p标签自带margin

	有序列表ol
	无序列表ul

	超链接：
		href表示跳转的目的地，取值：   id值用于锚点跳转	 URL使用path来定位文件相对路径与绝对路径   email

	图片：
		alt与title的区别：
			alt表示替换图片的文本内容，当url地址出错的时候会显示alt的 内容。
			title作为图片的标题内容

		LayUI经典模块化框架（写js项目的时候可以使用）

	表格：
		在tbody里面追加表格
			th表头，td单元格。

	HTML5里面新增标签（版本低无法使用，语义化标签）
		header
		
		details元素
			open属性

4.表单（表单提交方式跟表单提交数据类型）
	get携带参数比较少，安全性少。
	post携带参数多，且安全性更高。

	通过enctype属性设定表单数据的内容类型
		form-data  以流的方式上传文档

	input表单组件
		textarea多行文本

	表单HTML5新增标签：progress
	input的type属性取值
	autofocus：自动聚焦
	pattern：正则表达式
	required：必填

5.CSS（Cast Style Sheets）
	引入方式：
		外部样式表
			外部样式表link与@import的区别:
				link 属于HTML中的标签，页面加载时同时被加载，link没有兼容问题。
				@import 属于CSS范畴，页面加载完成后再去加载，import要考虑兼容问题。
		内部样式表

		行内样式表

	样式表引入的优先级：行内样式 > 外部样式表 = 内嵌式样式表（就近原则）

6.盒子模型(由外到内：边距(margin) => 边框(border) => 填充(padding) => 内容)
	w3c
		设置width和height是内容区的
		盒子的宽高：内容区+padding区+border区
		所占屏幕空间的宽高：盒子的宽高+margin区
		内容区的宽高：width和height
	ie盒子
		设置width和height是盒子的宽高
		盒子的宽高：width和height
		所占屏幕空间的宽高：盒子的宽高+margin区
		内容区的宽高：width和height-border区-padding区
	转换
		box-sizing:content-box;  //w3c
		box-sizing:border-box;  //ie
	padding(填充)/margin(边距)
		填充就是指向一个元素的内部增加空间，也可以称为"内边距",与外边距不同的是填充会改变元素大小，随着填充的增加，元素会被撑大。
		4个值  上  右  下 左
		3个值  上  左右  下
		2个值  上下  左右
		一个值 上下左右


7.选择器
	普遍选择器/统配选择器

	后代选择器
	使用""隔开两个选择器


	子代选择器：
	相邻同胞选择：
	一般同胞选择器：
	多选择器：
	组合选择器：
	属性选择器：
	伪类选择器：以冒号:开头的
		*:first-child  选中第一个孩子
		*:last-child   选中最后一个孩子
		*:nth-child(n/2n+1/odd/even)  从1开始  选中第几个孩子
		*:nth-last-child(n/2n+1/odd/even) 选中倒数第几个孩子
		*:first-of-type  每种类型中的第一个孩子
		*:last-of-type  每种类型中的最后一个孩子
		*:nth-of-type(n/2n+1/odd/even)  每种类型中的第几个孩子
		*:nth-last-of-type(n/2n+1/odd/even) 每种类型中的倒数第几个孩子
		*:only-child 选中独生子元素

		:link      未被访问的
		:visited   已访问的
		:hover     悬停的
		:active    点击的
		:focus     聚焦的
		:disabled  禁用的
		:enabled   可用的
		:checked   用户选中的
		:default   默认选中的
		:invalid   未通过验证的
		:valid     通过验证的
		:required  必填项
		:optional  选填项
		:in-range  在范围内
		:out-of-range 在范围外

	伪元素选择器：以双冒号::开头的，用在选择器后用于选择指定的元素
		::after     content属性		清除浮动的操作
		::before    content属性
		div::first-letter  第一个字符 你
			<div>
				你好
				<p>hello</p>
			</div>
		::first-line
			第一行
		::selection 用户在浏览器中的选中的字符

	特性值：（同一个元素不能跨等级比较）
		声明在元素的style属性中，特性值为1000
		声明在一个选择器中的所有ID选择器，100
		包含在一个选择器中的所有类选择器，属性选择器，伪元素选择器，特性值为10
		包含在一个选择器中的所有元素选择器，伪元素选择器，特性值为1

	a标签访问的顺序：

	级联与继承（一般不使用）
	CSS的级联
		1.@important  最优先
		2.特性值
			style属性内的  1000
			ID选择器   100
			Class选择器、属性选择器、伪类选择器    10
			标签选择器、伪元素选择器  1
			其他* > 空格 + ~  0 
		3.位置规则
			就近原则
			如果特性值一样，后面的设置覆盖前面的设置。
	CSS继承
		属性值可以取值为
			inherit  继承
			initial  默认样式，不继承的   color
			unset  不设置，没有操作。该继承的继承，不继承的不继承
	
	绝对值单位：px
	相对值单位：em

	百分比：布局中使用百分比布局必须在上层元素使用固定宽高。

	字体图标：

	列表样式

8.CSS新增标签

9.定位布局、浮动布局、伸缩盒布局

定位布局  position属性
	定位布局完全脱离。
	1.静态定位
		position:static;
		默认文档流的位置
	2.相对定位
		position:relative;
		相对于原来的位置进行定位。
		原先位置保留，不脱离文档流
	3.绝对定位
		position:absolute;
		如果有定位的祖先元素，相对于离它最近的定位的祖先元素定位
		如果没有定位的祖先元素，相对于视口区的左上角定位
		原先位置不保留，脱离文档流
	4.固定定位
		position:fixed;
		固定在浏览器(视口区)的某个位置上
		原先位置不保留，脱离文档流
	定位元素：使用相对定位，绝对定位，固定定位，定位的元素
	定位元素才可以使用以下属性：left,right,top,bottom


浮动布局
	浮动元素不会覆盖文字内容。浮动布局脱离文档流，不脱离文本流，不会遮挡行内元素。
	脱离文档流，飘在上层
	float:left/right;
	浮动元素在排列的时候，只参考一个前一个元素位置即可。
	清除浮动（清除浮动时可以清楚左浮动，也可以清除右浮动）：
		兄弟元素之间清除浮动产生的影响：clear:both
		父子元素之间清除浮动产生的影响：overflow:hidden;(父元素上的)
	浮动元素的重叠问题：
		1.浮动元素不会覆盖文字内容。
		2.浮动元素不会覆盖图片内容(因为图片本身也属于文本，可以把图片看作一个特殊的文字)
		3.浮动元素不会覆盖表单元素(输入框、单选按钮、复选框、按钮、下拉选择框等)
	
伸缩盒布局
	等比例划分
	
	z-index 层叠顺序
		值越大离眼睛越近 0【默认】 -100 1000
		绝对定位元素，层叠顺序

	浮动、定位块级元素，不再独占一行，需要自己设置


	盒子、浮动、定位、flex

10.动画与变形
	动画
		一帧一帧的东西组成一个动画序列
		先声明动画序列，再使用
		声明：

11.媒体查询

11.DOM 树节点
