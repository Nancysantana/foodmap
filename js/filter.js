function loadPage() {
	paintRestaurants(restaurants);
	// $('#search').keyup(filterRestaurants);
	$('.modal').modal();
}


  function paintRestaurants(array) {
    var template =   '<div class="food">'+
        '<img src="__src__"  class="modal fade" data-src = "__src__" data-name = "__name__" data-adress = "__adress__" data-food = "__food__" data-specialty-food = "__specialty-food__" data-services = "__services__" alt="Photo food">'+
      '</div>'
    var finalTemplate = "";
    array.forEach(function(restaurants){
      var $images = $('<img />');
      $images.attr('src',restaurants['photo']);
      finalTemplate += template.replace("__src__",restaurants.photo)
                               .replace("__name__",restaurants.name)
                               .replace("__adress__",restaurants.adress)
                               .replace("__food__",restaurants.food)
                               .replace("__specialty-food__",restaurants['specialty-food'])
                               .replace("__services__",restaurants.services);
    });

    $("#contenedor").html(finalTemplate);
  }
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


$(document).ready(loadPage);
