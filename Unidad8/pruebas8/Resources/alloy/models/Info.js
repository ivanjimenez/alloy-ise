exports.definition = {
    config: {
        columns: {
            nombre: "String",
            direccion: "String",
            dni: "String"
        },
        adapter: {
            type: "sql",
            collection_name: "personal"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("info", exports.definition, []);

collection = Alloy.C("info", exports.definition, model);

exports.Model = model;

exports.Collection = collection;