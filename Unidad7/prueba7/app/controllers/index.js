// Hacemos una instancia del controlador
var button = Alloy.createController('ok').getView();
// Modificamos algunos atributos
button.bottom = 0;
button.title = 'Ya no soy el botón OK.';
button.width = Ti.UI.SIZE;

button.addEventListener('click', function(e){

	alert("Soy el nuevo Botón OK");

});


var button1 = $.button1.getView();

button1.addEventListener('click', function(e){

	alert("Soy el nuevo Botón 1");

});
    

// Añado a la vista
$.index.add(button);

//Abro el index 
$.index.open();