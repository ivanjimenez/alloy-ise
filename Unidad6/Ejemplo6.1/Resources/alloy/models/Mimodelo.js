exports.definition = {
    config: {
        columns: {
            nombre: "string",
            direccion: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "mimodelo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("mimodelo", exports.definition, []);

collection = Alloy.C("mimodelo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;