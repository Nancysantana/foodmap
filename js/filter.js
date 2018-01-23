var $input = $("#filter_restorant");
var $name = $(".modal-title");
var $food = $(".food");
var $adress = $("adress");
var $service = $(".service");
var $photo = $(".imags");
var $service = $("button");


function loadPage() {
  $("#myModal").modal();
  $photo.ckick(selectPhoto);
  $input.keyup(nameRestaurant);
}

function selectPhoto() {
  var $restaurant = event.target.dataset.name;
  var $dataRestaurant = data[$restaurant];

  var $nameTitle = $dataRestaurant["name"];
  var $adreesUb = $dataRestaurant["adress"];
  var $foodEspecial = $dataRestaurant["food"];
  var $
}

$(document).ready(loadPage);
