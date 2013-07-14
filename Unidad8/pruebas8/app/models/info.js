exports.definition = {
    config: {
        "columns": {
            "nombre": "String",
            "direccion": "String",
            "dni": "String"
        },
       
        "adapter": {
            "type": "sql",
            "collection_name": "personal"
        }
    }
}