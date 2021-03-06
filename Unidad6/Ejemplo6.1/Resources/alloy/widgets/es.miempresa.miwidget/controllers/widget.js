function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "es.miempresa.miwidget/" + s : s.substring(0, index) + "/es.miempresa.miwidget/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("es.miempresa.miwidget");
    this.__widgetId = "es.miempresa.miwidget";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    ls;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;