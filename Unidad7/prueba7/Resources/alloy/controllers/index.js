function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.button1 = Alloy.createController("ok", {
        id: "button1",
        __parentSymbol: $.__views.index
    });
    $.__views.button1.setParent($.__views.index);
    $.__views.button2 = Alloy.createController("ok", {
        id: "button2",
        __parentSymbol: $.__views.index
    });
    $.__views.button2.setParent($.__views.index);
    $.__views.button3 = Alloy.createController("ok", {
        id: "button3",
        __parentSymbol: $.__views.index
    });
    $.__views.button3.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var button = Alloy.createController("ok").getView();
    button.bottom = 0;
    button.title = "Ya no soy el botón OK.";
    button.width = Ti.UI.SIZE;
    button.addEventListener("click", function() {
        alert("Soy el nuevo Botón OK");
    });
    var button1 = $.button1.getView();
    button1.addEventListener("click", function() {
        alert("Soy el nuevo Botón 1");
    });
    $.index.add(button);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;