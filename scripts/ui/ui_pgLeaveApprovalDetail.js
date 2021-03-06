/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Button = require('sf-core/ui/button');
const TextBox = require('sf-core/ui/textbox');
const Font = require('sf-core/ui/font');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgLeaveApprovalDetail_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const mainContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 520,
			marginLeft: 10,
			marginRight: 10,
			paddingLeft: null,
			paddingRight: null,
			paddingTop: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: null,
			alignItems: FlexLayout.AlignItems.STRETCH
		});
		var mainContainer = new FlexLayout(mainContainerStyle);
		this.layout.addChild(mainContainer);
		this.mainContainer = mainContainer;

		const userInformationStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 100,
			paddingLeft: 10,
			paddingRight: 10,
			paddingBottom: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var userInformation = new FlexLayout(userInformationStyle);
		mainContainer.addChild(userInformation);
		
		const flexlayout1104Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginTop: null,
			height: 220,
			marginLeft: null,
			marginRight: null,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});
		var flexlayout1104 = new FlexLayout(flexlayout1104Style);
		mainContainer.addChild(flexlayout1104);
		
		const descriptionLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 120,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10
		});
		var descriptionLayout = new FlexLayout(descriptionLayoutStyle);
		mainContainer.addChild(descriptionLayout);
		
		const buttonsLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 60,
			marginTop: 10,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var buttonsLayout = new FlexLayout(buttonsLayoutStyle);
		mainContainer.addChild(buttonsLayout);
		
		const avatarStyle = getCombinedStyle(".imageView", {
			width: 60,
			height: 60,
			borderRadius: 30,
			borderWidth: null,
			image: Image.createFromFile("images://avatar1.png"),
			imageFillType: ImageFillType.ASPECTFIT
		});
		var avatar = new ImageView(avatarStyle);
		userInformation.addChild(avatar);
		this.avatar = avatar;

		const rejectStyle = getCombinedStyle(".button", {
			width: null,
			height: null,
			text: "REJECT",
			backgroundColor: Color.create(255, 255, 50, 75),
			flexGrow: 10
		});
		var reject = new Button(rejectStyle);
		buttonsLayout.addChild(reject);
		
		const flexlayout1105Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var flexlayout1105 = new FlexLayout(flexlayout1105Style);
		flexlayout1104.addChild(flexlayout1105);
		
		const descriptionStyle = getCombinedStyle(".textBox", {
			width: null,
			height: null,
			text: "",
			flexGrow: 1,
			font: Font.create("Lato", "12", Font.NORMAL)
		});
		var description = new TextBox(descriptionStyle);
		descriptionLayout.addChild(description);
		this.description = description;

		const flexlayout1106Style = getCombinedStyle(".flexLayout .flexLayout-filled", {
			width: null,
			height: null,
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var flexlayout1106 = new FlexLayout(flexlayout1106Style);
		flexlayout1104.addChild(flexlayout1106);
		
		const flexlayout3Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1
		});
		var flexlayout3 = new FlexLayout(flexlayout3Style);
		buttonsLayout.addChild(flexlayout3);
		
		const flexlayout1103Style = getCombinedStyle(".flexLayout", {
			height: 60,
			width: null,
			marginLeft: 10,
			flexGrow: 2
		});
		var flexlayout1103 = new FlexLayout(flexlayout1103Style);
		userInformation.addChild(flexlayout1103);
		
		const flexlayout408Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 60,
			flexGrow: 1,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});
		var flexlayout408 = new FlexLayout(flexlayout408Style);
		userInformation.addChild(flexlayout408);
		
		const imageview171Style = getCombinedStyle(".imageView", {
			width: 50,
			height: 50,
			backgroundColor: Color.create(0, 255, 255, 255),
			image: Image.createFromFile("images://icon_calendar.png"),
			imageFillType: ImageFillType.ASPECTFIT,
			positionType: FlexLayout.PositionType.ABSOLUTE,
			alignSelf: FlexLayout.AlignSelf.CENTER
		});
		var imageview171 = new ImageView(imageview171Style);
		flexlayout1104.addChild(imageview171);
		
		const approveStyle = getCombinedStyle(".button", {
			width: null,
			height: null,
			text: "APPROVE",
			backgroundColor: Color.create(255, 62, 208, 151),
			flexGrow: 10
		});
		var approve = new Button(approveStyle);
		buttonsLayout.addChild(approve);
		
		const imageview66Style = getCombinedStyle(".imageView", {
			width: null,
			height: 20,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://icon_sick_leave.png"),
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var imageview66 = new ImageView(imageview66Style);
		flexlayout408.addChild(imageview66);
		
		const flexlayout1108Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			flexGrow: 1,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout1108 = new FlexLayout(flexlayout1108Style);
		flexlayout1105.addChild(flexlayout1108);
		
		const nameStyle = getCombinedStyle(".label", {
			width: null,
			height: null,
			text: "Adam Stewart",
			textColor: Color.create(255, 74, 74, 74),
			flexGrow: 1,
			font: Font.create("Arial", 18, Font.NORMAL)
		});
		var name = new Label(nameStyle);
		flexlayout1103.addChild(name);
		this.name = name;

		const flexlayout1Style = getCombinedStyle(".flexLayout", {
			backgroundColor: Color.create(0, 255, 255, 255),
			width: null,
			height: null,
			marginLeft: 10,
			marginTop: 20,
			marginRight: 10,
			marginBottom: 5,
			flexGrow: 1,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout1 = new FlexLayout(flexlayout1Style);
		flexlayout1106.addChild(flexlayout1);
		
		const flexlayout1108_1Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			flexGrow: 1,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout1108_1 = new FlexLayout(flexlayout1108_1Style);
		flexlayout1105.addChild(flexlayout1108_1);
		
		const label541Style = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: 20,
			textAlignment: TextAlignment.MIDCENTER,
			text: "Sick Leave",
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 12, Font.NORMAL)
		});
		var label541 = new Label(label541Style);
		flexlayout408.addChild(label541);
		
		const positionStyle = getCombinedStyle(".label", {
			width: null,
			height: null,
			text: "Manager of S&M",
			textColor: Color.create(128, 74, 74, 74),
			flexGrow: 1,
			font: Font.create("Arial", 14, Font.NORMAL)
		});
		var position = new Label(positionStyle);
		flexlayout1103.addChild(position);
		this.position = position;

		const imageview170Style = getCombinedStyle(".imageView", {
			width: 30,
			height: 30,
			image: Image.createFromFile("images://icon_clock.png"),
			imageFillType: ImageFillType.ASPECTFIT,
			backgroundColor: Color.create(255, 255, 255, 255),
			positionType: FlexLayout.PositionType.ABSOLUTE,
			alignSelf: FlexLayout.AlignSelf.CENTER
		});
		var imageview170 = new ImageView(imageview170Style);
		flexlayout1105.addChild(imageview170);
		
		const label1_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			textColor: Color.create(255, 74, 74, 74),
			text: "MAY 19, 2017",
			marginLeft: null,
			marginRight: 15,
			marginTop: 15,
			flexGrow: 1,
			font: Font.create("Arial", 18, Font.NORMAL)
		});
		var label1_1 = new Label(label1_1Style);
		flexlayout1108_1.addChild(label1_1);
		
		const flexlayout2Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1
		});
		var flexlayout2 = new FlexLayout(flexlayout2Style);
		flexlayout1.addChild(flexlayout2);
		
		const flexlayout1111Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			paddingRight: 5,
			paddingTop: 5,
			paddingBottom: 5,
			paddingLeft: 30,
			flexGrow: 1
		});
		var flexlayout1111 = new FlexLayout(flexlayout1111Style);
		flexlayout1108.addChild(flexlayout1111);
		
		const flexlayout1115Style = getCombinedStyle(".flexLayout", {
			width: 1,
			height: null,
			backgroundColor: Color.create(255, 151, 151, 151),
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var flexlayout1115 = new FlexLayout(flexlayout1115Style);
		flexlayout1108.addChild(flexlayout1115);
		
		const flexlayout1114Style = getCombinedStyle(".flexLayout", {
			width: 1,
			height: null,
			backgroundColor: Color.create(255, 151, 151, 151),
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var flexlayout1114 = new FlexLayout(flexlayout1114Style);
		flexlayout1108_1.addChild(flexlayout1114);
		
		const flexlayout2_1Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1
		});
		var flexlayout2_1 = new FlexLayout(flexlayout2_1Style);
		flexlayout1.addChild(flexlayout2_1);
		
		const label1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			textColor: Color.create(255, 74, 74, 74),
			text: "MAY 24, 2017",
			marginLeft: 15,
			marginTop: 15,
			flexGrow: 1,
			font: Font.create("Arial", 18, Font.NORMAL)
		});
		var label1 = new Label(label1Style);
		flexlayout1108_1.addChild(label1);
		
		const flexlayout1111_2Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			paddingRight: 30,
			paddingTop: 5,
			paddingBottom: 5,
			paddingLeft: 5,
			flexGrow: 1
		});
		var flexlayout1111_2 = new FlexLayout(flexlayout1111_2Style);
		flexlayout1108.addChild(flexlayout1111_2);
		
		const flexlayout2_1_1Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1
		});
		var flexlayout2_1_1 = new FlexLayout(flexlayout2_1_1Style);
		flexlayout1.addChild(flexlayout2_1_1);
		
		const label2_3Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.BOTTOMCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(255, 255, 255, 255),
			text: "5",
			flexGrow: 2,
			font: Font.create("Arial", 24, Font.NORMAL)
		});
		var label2_3 = new Label(label2_3Style);
		flexlayout2_1.addChild(label2_3);
		
		const label2_3_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.BOTTOMCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(255, 255, 255, 255),
			text: "14",
			flexGrow: 2,
			font: Font.create("Arial", 24, Font.NORMAL)
		});
		var label2_3_1 = new Label(label2_3_1Style);
		flexlayout2_1_1.addChild(label2_3_1);
		
		const label2Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.BOTTOMCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(255, 255, 255, 255),
			text: "19",
			flexGrow: 2,
			font: Font.create("Arial", 24, Font.NORMAL)
		});
		var label2 = new Label(label2Style);
		flexlayout2.addChild(label2);
		
		const label1572_2Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			text: "12:30",
			textColor: Color.create(255, 74, 74, 74),
			flexGrow: 1
		});
		var label1572_2 = new Label(label1572_2Style);
		flexlayout1111_2.addChild(label1572_2);
		
		const label1572Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			text: "9:30",
			textColor: Color.create(255, 74, 74, 74),
			flexGrow: 1
		});
		var label1572 = new Label(label1572Style);
		flexlayout1111.addChild(label1572);
		
		const label2_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.TOPCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(128, 255, 255, 255),
			text: "Days",
			flexGrow: 1,
			font: Font.create("Arial", 12, Font.NORMAL)
		});
		var label2_1 = new Label(label2_1Style);
		flexlayout2.addChild(label2_1);
		
		const label2_1_1_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.TOPCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(128, 255, 255, 255),
			text: "Days",
			flexGrow: 1,
			font: Font.create("Arial", 12, Font.NORMAL)
		});
		var label2_1_1_1 = new Label(label2_1_1_1Style);
		flexlayout2_1_1.addChild(label2_1_1_1);
		
		const label2_1_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.TOPCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(128, 255, 255, 255),
			text: "Days",
			flexGrow: 1,
			font: Font.create("Arial", 12, Font.NORMAL)
		});
		var label2_1_1 = new Label(label2_1_1Style);
		flexlayout2_1.addChild(label2_1_1);
		
		const label1572_1_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.TOPCENTER,
			text: "End Time",
			textColor: Color.create(128, 74, 74, 74),
			flexGrow: 1,
			font: Font.create("Arial", 14, Font.NORMAL)
		});
		var label1572_1_1 = new Label(label1572_1_1Style);
		flexlayout1111_2.addChild(label1572_1_1);
		
		const label1572_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.TOPCENTER,
			text: "Start Time",
			textColor: Color.create(128, 74, 74, 74),
			flexGrow: 1,
			font: Font.create("Arial", 14, Font.NORMAL)
		});
		var label1572_1 = new Label(label1572_1Style);
		flexlayout1111.addChild(label1572_1);
		
		const label2_2_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(191, 255, 255, 255),
			text: "REQUESTED",
			flexGrow: 1,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label2_2_1 = new Label(label2_2_1Style);
		flexlayout2_1.addChild(label2_2_1);
		
		const label2_2_1_1Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(191, 255, 255, 255),
			text: "REMAINS",
			flexGrow: 1,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label2_2_1_1 = new Label(label2_2_1_1Style);
		flexlayout2_1_1.addChild(label2_2_1_1);
		
		const label2_2Style = getCombinedStyle(".label", {
			width: null,
			height: null,
			textAlignment: TextAlignment.MIDCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			textColor: Color.create(191, 255, 255, 255),
			text: "TOTAL",
			flexGrow: 1,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label2_2 = new Label(label2_2Style);
		flexlayout2.addChild(label2_2);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			mainContainer: mainContainer
		});
		
		//assign the children of mainContainer
		mainContainer.children = Object.assign({}, {
			userInformation: userInformation,
			flexlayout1104: flexlayout1104,
			descriptionLayout: descriptionLayout,
			buttonsLayout: buttonsLayout
		});
		
		//assign the children of userInformation
		userInformation.children = Object.assign({}, {
			avatar: avatar,
			flexlayout1103: flexlayout1103,
			flexlayout408: flexlayout408
		});
		
		//assign the children of flexlayout1104
		flexlayout1104.children = Object.assign({}, {
			flexlayout1105: flexlayout1105,
			flexlayout1106: flexlayout1106,
			imageview171: imageview171
		});
		
		//assign the children of descriptionLayout
		descriptionLayout.children = Object.assign({}, {
			description: description
		});
		
		//assign the children of buttonsLayout
		buttonsLayout.children = Object.assign({}, {
			reject: reject,
			flexlayout3: flexlayout3,
			approve: approve
		});
		
		//assign the children of flexlayout1105
		flexlayout1105.children = Object.assign({}, {
			flexlayout1108: flexlayout1108,
			flexlayout1108_1: flexlayout1108_1,
			imageview170: imageview170
		});
		
		//assign the children of flexlayout1106
		flexlayout1106.children = Object.assign({}, {
			flexlayout1: flexlayout1
		});
		
		//assign the children of flexlayout1103
		flexlayout1103.children = Object.assign({}, {
			name: name,
			position: position
		});
		
		//assign the children of flexlayout408
		flexlayout408.children = Object.assign({}, {
			imageview66: imageview66,
			label541: label541
		});
		
		//assign the children of flexlayout1108
		flexlayout1108.children = Object.assign({}, {
			flexlayout1111: flexlayout1111,
			flexlayout1115: flexlayout1115,
			flexlayout1111_2: flexlayout1111_2
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			flexlayout2: flexlayout2,
			flexlayout2_1: flexlayout2_1,
			flexlayout2_1_1: flexlayout2_1_1
		});
		
		//assign the children of flexlayout1108_1
		flexlayout1108_1.children = Object.assign({}, {
			label1_1: label1_1,
			flexlayout1114: flexlayout1114,
			label1: label1
		});
		
		//assign the children of flexlayout2
		flexlayout2.children = Object.assign({}, {
			label2: label2,
			label2_1: label2_1,
			label2_2: label2_2
		});
		
		//assign the children of flexlayout1111
		flexlayout1111.children = Object.assign({}, {
			label1572: label1572,
			label1572_1: label1572_1
		});
		
		//assign the children of flexlayout2_1
		flexlayout2_1.children = Object.assign({}, {
			label2_3: label2_3,
			label2_1_1: label2_1_1,
			label2_2_1: label2_2_1
		});
		
		//assign the children of flexlayout1111_2
		flexlayout1111_2.children = Object.assign({}, {
			label1572_2: label1572_2,
			label1572_1_1: label1572_1_1
		});
		
		//assign the children of flexlayout2_1_1
		flexlayout2_1_1.children = Object.assign({}, {
			label2_3_1: label2_3_1,
			label2_1_1_1: label2_1_1_1,
			label2_2_1_1: label2_2_1_1
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
		title: "newPage001"
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgLeaveApprovalDetail_);