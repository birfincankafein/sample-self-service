/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const PageDesign = require("../../../ui/ui_pgExpenseApprovalDetail");
const ScrollView = require("sf-core/ui/scrollview");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow);
		initTexts.call(this);
		wrapContentIntoScroll.call(this);
    }
);

function onShow(parentOnShow) {
	if (typeof parentOnShow === "function") parentOnShow();
	initHeaderBar.call(this);
}

function initTexts() {
	this.titleItem.title.text = lang["pgExpenseApprovalDetail.title"];
	this.titleItem.value.text = "-";
	this.typeItem.title.text = lang["pgExpenseApprovalDetail.type"];
	this.typeItem.value.text = "-";
	this.expenseItem.title.text = lang["pgExpenseApprovalDetail.expense"];
	this.expenseItem.value.text = "$1,500.30";
	this.expenseDateItem.title.text = lang["pgExpenseApprovalDetail.expenseDate"];
	this.expenseDateItem.value.text = "03 May 2017";
	this.fileTitle.text = lang["pgExpenseApprovalDetail.file"];
	this.noteTitle.text = lang["pgExpenseApprovalDetail.note"];
	this.detailsTitle.text = lang["pgExpenseApprovalDetail.details"];
	this.approve.text = lang["pgExpenseApprovalDetail.approve"];
	this.reject.text = lang["pgExpenseApprovalDetail.reject"];
	this.note.text = "-";
}

function initHeaderBar() {
	this.headerBar.itemColor = Color.WHITE;
	this.headerBar.title = lang["pgExpenseApprovalDetail.pageTitle"];
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1	
	});
	this.layout.removeChild(this.mainLayout);
	this.scrollView.addChild(this.mainLayout);
	this.layout.addChild(this.scrollView);
}

module && (module.exports = Page_);