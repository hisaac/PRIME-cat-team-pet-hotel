$(document).ready(function() {
  getPets();


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

// - put request  - //
function updatePets() {
    var id = $(this).parent().data('id');
    console.log(id);

    // - make pet object - //
    var pets = {};
    var fields = $(this).parent().children().serializeArray();
    fields.forEach(function(field) {
        book[field.name] = field.value;
    });
    console.log(book);

    $.ajax({
        type: 'PUT',
        url: '/pets/' + id,
        data: book,
        success: function(result) {
            console.log('updated!!!!');
            getPets();
        },
        error: function(result) {
            console.log('could not update book!');
        }
    });
}


function appendPets(pets) {
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
    $el.append('<td><button class="inOut">In</button></td></tr>'); //Check in/out BUTTON
  }

function deleteRow(this){

}
