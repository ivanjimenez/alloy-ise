var info = Alloy.createModel('info', {nombre:'Nathaniel Fisher', direccion:'Daton St'}); 
var nombre = info.get('nombre');
var direccion = info.get('direccion');
// Label object in the view with id = 'label'
$.label2.text = nombre + ' by ' + direccion;

$.index.open();
