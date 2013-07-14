function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Mi modelo",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.label2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "label2",
        bottom: "200"
    });
    $.__views.index.add($.__views.label2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var info = Alloy.createModel("info", {
        nombre: "Green Eggs and Ham",
        direccion: "Dr. Seuss"
    });
    var nombre = info.get("nombre");
    var direccion = info.get("direccion");
    $.label2.text = nombre + " by " + direccion;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;