/*global lang*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const DialogsLib = require("lib/ui/dialogs");
const FloatingMenu = require("sf-core/ui/floatingmenu");
const Image = require("sf-core/ui/image");
const ItemExpense = require('../../../components/ItemExpense');
const ListViewItem = require('sf-core/ui/listviewitem');
const MockService = require("../../../objects/MockService");
const PageDesign = require("../../../ui/ui_pgExpanseManagement");
const Router = require("sf-core/router");
const System = require("sf-core/device/system");
const Timer = require("sf-core/timer");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.expenseList = [];
		initListView.call(this);
		initFloatingMenu.call(this);
    }
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.expenseList = MockService.getExpenses();
                this.listView.itemCount = this.expenseList.length;
                this.listView.refreshData();
                DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            }.bind(this),
            delay: 3000
        });
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgExpenseManagement.pageTitle"];
}

function initListView() {
    this.listView.rowHeight = 75;
    this.listView.itemCount = this.expenseList.length;
    this.listView.refreshEnabled = false;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemExpense();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    
    this.listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.expense = this.expenseList[index];
    }.bind(this);
    
    this.listView.onRowSelected = function() {
        
    };
}

function initFloatingMenu() {
    var titleColor = System.OS === "Android" ? Color.create("#1775D0") : Color.WHITE;
    var items = [
        new FloatingMenu.Item({
            title: "Food",
            titleColor: titleColor,
            icon: Image.createFromFile("images://icon_food.png"),
            onClick: addNewExpense
        }),
        new FloatingMenu.Item({
            title: "Hotel",
            titleColor: titleColor,
            icon: Image.createFromFile("images://icon_hotel.png"),
            onClick: addNewExpense
        }),
        new FloatingMenu.Item({
            title: "Travel",
            titleColor: titleColor,
            icon: Image.createFromFile("images://icon_airplane.png"),
            onClick: addNewExpense
        }),
        new FloatingMenu.Item({
            title: "Taxi",
            titleColor: titleColor,
            icon: Image.createFromFile("images://icon_taxi.png"),
            onClick: addNewExpense
        }),
        new FloatingMenu.Item({
            title: "Health",
            titleColor: titleColor,
            icon: Image.createFromFile("images://icon_health_bag.png"),
            onClick: addNewExpense
        })
    ];
        
    this.floatingMenu = new FloatingMenu({
        items: items,
        icon: Image.createFromFile("images://icon_add_blue.png"),
        color: Color.WHITE
    });
    this.layout.addChild(this.floatingMenu);
}

function addNewExpense(type) {
    Router.go("tabs/hr/newExpense");
}

module && (module.exports = Page_);