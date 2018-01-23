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


$(document).ready(loadPage);
