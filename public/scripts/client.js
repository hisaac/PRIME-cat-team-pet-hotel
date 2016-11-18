$(document).ready(function() {



});

function getPets() {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(pets) {
      appendPets(pets);
    },
    error: function() {
      console.log('Database error');
    }
  })
}


function appendBooks(pets) {
  $("#pet-list").empty();

  for (var i = 0; i < pets.length; i++) {

    $el = $('tbody')
    var pet = pets[i];
    //$el.data('id', pet.id);



    $el.append('<tr><td>' + pet.owner + '</>');
    $el.append('<td>' + pet.name + '</td>');
    $el.append('<td>' + pet.breed + '</td>');
    $el.append('<td>' + pet.color + '</td>');
    $el.append('<td><button class="go">GO</button></td>');
    $el.append('<td><button class="delete">DELETE</button></td>'); //Delete BUTTON
    $el.append('<td><td><button class="inOut">In</button></td></td></tr>'); //Check in/out BUTTON
  }
