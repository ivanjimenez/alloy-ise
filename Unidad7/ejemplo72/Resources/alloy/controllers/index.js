function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.win1 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Soy Win1",
        id: "win1"
    });
    $.__views.label1 = Ti.UI.createLabel({
        top: 50,
        color: "black",
        text: "Soy Window 1",
        id: "label1"
    });
    $.__views.win1.add($.__views.label1);
    $.__views.button = Ti.UI.createButton({
        title: "Abrir Win 3",
        id: "button"
    });
    $.__views.win1.add($.__views.button);
    $.__views.tab1 = Ti.UI.createTab({
        title: "Opción 1",
        window: $.__views.win1,
        id: "tab1"
    });
    $.__views.index.addTab($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win2",
        title: "Soy Win2"
    });
    $.__views.label2 = Ti.UI.createLabel({
        color: "black",
        text: "Soy Window 2",
        id: "label2"
    });
    $.__views.win2.add($.__views.label2);
    $.__views.tab2 = Ti.UI.createTab({
        title: "Opción 2",
        window: $.__views.win2,
        id: "tab2"
    });
    $.__views.index.addTab($.__views.tab2);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var w3 = Alloy.createController("win3");
    $.button.addEventListener("click", function() {
        $.tab1.open(w3.getView());
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;