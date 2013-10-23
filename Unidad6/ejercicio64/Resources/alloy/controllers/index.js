function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundGradient: {
            type: "radial",
            startPoint: {
                x: 25,
                y: 25
            },
            endPoint: {
                x: 25,
                y: 25
            },
            colors: [ "cyan", "blue" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ccc",
        top: 0,
        font: {
            fontSize: 20,
            font: "customFont"
        },
        text: "Esta es la etiqueta del Ejercicio64",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.__alloyId1 = Ti.UI.createButton({
        bottom: 100,
        height: 50,
        width: 150,
        right: "10%",
        backgroundColor: "#ddd",
        title: "Ok",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;