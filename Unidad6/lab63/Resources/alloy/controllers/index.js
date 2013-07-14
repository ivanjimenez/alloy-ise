function Controller() {
    function mensaje() {
        alert("Hola");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "maroon",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#ccc",
        font: {
            fontSize: 26,
            font: "customFont"
        },
        text: "Esta es mi primera etiqueta hecha para el Curso de Titanium + Alloy",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.button = Ti.UI.createButton({
        top: 350,
        title: "Mensaje",
        id: "button"
    });
    $.__views.index.add($.__views.button);
    mensaje ? $.__views.button.addEventListener("click", mensaje) : __defers["$.__views.button!click!mensaje"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.button!click!mensaje"] && $.__views.button.addEventListener("click", mensaje);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;