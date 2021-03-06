const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const Router = require("sf-core/router");
const MockService = require('../../../objects/MockService');
const PageDesign = require("../../../ui/ui_pgHierarchy");
const ItemUser = require('../../../components/ItemUser');
const DialogsLib = require("lib/ui/dialogs");
const Timer = require("sf-core/timer");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.users = [];
		initListView(this.listView, this.users);
    }
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.users.slice(0);
                Array.prototype.push.apply(this.users, MockService.getUsers());
                this.listView.itemCount = this.users.length;
                this.listView.refreshData();
                DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            }.bind(this),
            delay: 1000
        });
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgHierarchy.pageTitle"];
}

function initListView(listView, data) {
    listView.rowHeight = 75;
    listView.itemCount = data.length;
    
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemUser();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    
    listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.user = data[index];
    };
    
    listView.onRowSelected = function() {
        Router.go("tabs/profile/profileDetail");
    }
}

module && (module.exports = Page_);