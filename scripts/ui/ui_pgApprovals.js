/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Color = require('sf-core/ui/color');

const LayoutHeaderBar = require("../components/LayoutHeaderBar");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgApprovals_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const layoutHeaderBarStyle = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			left: 0,
			top: 0,
			width: null,
			height: 60,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var layoutHeaderBar = new LayoutHeaderBar(layoutHeaderBarStyle, "pgApprovals");
		this.layout.addChild(layoutHeaderBar);
		this.layoutHeaderBar = layoutHeaderBar;

		const flexlayout137Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			marginLeft: 10,
			marginRight: 10,
			marginBottom: 10,
			flexGrow: 1,
			alignItems: FlexLayout.AlignItems.STRETCH,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});
		var flexlayout137 = new FlexLayout(flexlayout137Style);
		this.layout.addChild(flexlayout137);
		
		const comingSoonStyle = getCombinedStyle(".imageView", {
			width: null,
			height: 100,
			imageFillType: ImageFillType.ASPECTFIT
		});
		var comingSoon = new ImageView(comingSoonStyle);
		flexlayout137.addChild(comingSoon);
		this.comingSoon = comingSoon;

		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			flexlayout137: flexlayout137
		});
		
		//assign the children of flexlayout137
		flexlayout137.children = Object.assign({}, {
			comingSoon: comingSoon
		});
		
	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar", {});
	
	Object.assign(this.statusBar, statusBarStyle);
	
	if(statusBarStyle.color)
	  this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
	if(statusBarStyle.style)
	  this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
		title: "newPage001",
		visible: false
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create(255, 226, 226, 228)
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgApprovals_);