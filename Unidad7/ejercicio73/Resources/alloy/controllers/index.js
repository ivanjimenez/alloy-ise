function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Filas",
        id: "__alloyId2"
    });
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId4"
    });
    var __alloyId5 = [];
    __alloyId5.push($.__views.__alloyId4);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Soy la Fila 1",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId7"
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Soy la Fila  2",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId9"
    });
    __alloyId5.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Soy la Fila  3",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId11"
    });
    __alloyId5.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Soy la Fila  4",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId13"
    });
    __alloyId5.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Soy la Fila  5",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId3 = Ti.UI.createTableView({
        data: __alloyId5,
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Filas",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId16 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Sections & Rows",
        id: "__alloyId16"
    });
    $.__views.__alloyId18 = Ti.UI.createSearchBar({
        height: "43dp",
        top: 0,
        barColor: "#444",
        showCancel: true,
        id: "__alloyId18"
    });
    $.__views.__alloyId19 = Ti.UI.createTableViewSection({
        headerTitle: "Section 1",
        id: "__alloyId19"
    });
    var __alloyId20 = [];
    __alloyId20.push($.__views.__alloyId19);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId22"
    });
    $.__views.__alloyId19.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId23"
    });
    $.__views.__alloyId19.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewSection({
        headerTitle: "Section 2",
        id: "__alloyId24"
    });
    __alloyId20.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewSection({
        headerTitle: "Section 3",
        id: "__alloyId28"
    });
    __alloyId20.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId17 = Ti.UI.createTableView({
        data: __alloyId20,
        search: $.__views.__alloyId18,
        filterAttribute: "title",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId15 = Ti.UI.createTab({
        window: $.__views.__alloyId16,
        title: "Filas y Secciones",
        id: "__alloyId15"
    });
    $.__views.index.addTab($.__views.__alloyId15);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;