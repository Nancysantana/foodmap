//Cuando se cargue la pagina  $(document).ready(loadPage) llamara a la funcion loadPage la cual contiene el resto de las funciones
function loadPage() {
  // Esta funcion pinta dinamicamente las imagenes en el contenedor contiene como parametro a la data
	paintRestaurants(restaurants);
  // Esta funcion filtra en este caso por nombre
  $('#filterRestaurants').keyup(filterRestaurants);
  // Esta funcion llama al modal dde bootstrap
	$('#myModal').modal(e);
  // Temporalmente previniendo error de carga con el modal
	e.preventDefault();
}

  // Resive un como parametro un array por medio de la data
  function paintRestaurants(array) {
    // Guardamos en una variable la plantilla que se mostrara en el contenedor del html
    var template =   '<div class="food">'+
        								'<img src="__src__"  data-toggle="modal" data-target="#myModal" class="imagesFood" data-src="__src__" data-name="__name__" data-adress="__adress__" data-food="__food__" data-specialty-food="__specialty-food__" data-services="__services__" alt="Photo food">'+
      								'</div>'
    var finalTemplate = "";
    // El forEach va iterar en el array de objetos
    array.forEach(function(restaurants){
      // aqui llamamos a la imagen creada arriba y le agregamos como atributo un src que incluira la foto que contiene la data
      var $images = $('<img />');
      $images.attr('src', restaurants['photo']);
      // remplazando los valores
      finalTemplate += template.replace("__src__", restaurants.photo)
                               .replace("__name__", restaurants.name)
                               .replace("__adress__", restaurants.adress)
                               .replace("__food__", restaurants.food)
                               .replace("__specialty-food__", restaurants['specialty-food'])
                               .replace("__services__", restaurants.services);
    });
    // pintando en el html
    $("#contenedor").html(finalTemplate);
  }

  // Extraemos la data llamandola por jquery
	function selectPhoto() {
		var $name = $(this).data('name');
		var $adress = $(this).data('adress');
		var $food = $(this).data('food');
		var $specialtyFood = $(this).data('specialty-food');
		var $services = $(this).data('services');
    // pintamos la informacion por medio de text y agregamosa a los contenedores del modal la informacion de las variables
		$('.modal-title').text($name);
		$('.adress').text($adress);
		$('.specialtyFood').text($specialtyFood);
		$('.service').text($services);
	}

 // Por medio de esta funcion filtraremos los restaurantes por medio de su nombre
	function filterRestaurants() {
		if ($('#filterRestaurants').val().trim().length > 0) { //trim nos dice la longitud del valor sin contar espacios vacios de nuestro input
			var inputRestaurants = $('#filterRestaurants').val().toLowerCase();//Convertimos a minusculas el caracter ingresado
			var filter = restaurants.filter(function(restaurants){//para filtrar elementos de un array utilizamos .filter
				return restaurants.name.toLowerCase().indexOf(inputRestaurants) >= 0;
			});
			paintRestaurants(filter);
      // No mostramos nada si no hay ninguna coinsidencia
		} else {
			$('#contenedor').empty();
			paintRestaurants(restaurants);
		}
	};

/*
  var $input = $("#filter_restorant");
  var $name = $(".modal-title");
  var $food = $(".food");
  var $adress = $("adress");
  var $service = $(".service");
  var $photo = $(".images");
  var $service = $(".button");

function loadPage() {
  $("#myModal").modal();
  $photo.click(selectPhoto);
  $input.keyup(nameRestaurant);
}

function selectPhoto() {
  var $restaurant = event.target.dataset.name;
  var $dataRestaurant = data[$restaurant];
  console.log($dataRestaurant);

  var $nameTitle = $dataRestaurant["name"];
  var $adreesUb = $dataRestaurant["adress"];
  var $foodEspecial = $dataRestaurant["food"];
}
*/
// Aqui se crea un evento a elementos creados dinamicamente
// Se utiliza .on prepara al documento para recivir informacion al llevar acabo el evento
$(document).on('click', '.imagesFood', selectPhoto);
$(document).ready(loadPage);
