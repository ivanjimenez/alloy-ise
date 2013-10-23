function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "win3";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3"
    });
    $.__views.win3 && $.addTopLevelView($.__views.win3);
    $.__views.label3 = Ti.UI.createLabel({
        color: "white",
        text: "Soy Win 3",
        id: "label3"
    });
    $.__views.win3.add($.__views.label3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win3.addEventListener("tipo_de_evento", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;