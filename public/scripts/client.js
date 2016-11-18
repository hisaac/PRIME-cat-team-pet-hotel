var pets = {};

$(document).ready(function() {
  getOwners();
   getPets();
   $('#submitNewOwner').on('click', function() {
     event.preventDefault();
     var ownerName = {};
     ownerName.firstName = $('#firstName').val();
     ownerName.lastName = $('#lastName').val();
     newOwner(ownerName);
     console.log('ownerName: ', ownerName);
   });
   $('#submitPet').on('click', function() {

   });

});

function getPets() {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(pets) {
      pets = pets;
      appendPets(pets);
    },
    error: function() {
      console.log('Database error');
    }
  });
}




// - put request  - //
// function updatePets() {
//     var id = $(this).parent().data('id');
//     console.log(id);
//
//     // - make pet object - //
//     var pets = {};
//     var fields = $(this).parent().children().serializeArray();
//     fields.forEach(function(field) {
//         pets[field.name] = field.value;
//     });
//     console.log(book);
// //
//     $.ajax({
//         type: 'PUT',
//         url: '/pets/' + id,
//         data: book,
//         success: function(result) {
//             console.log('updated!!!!');
//             getPets();
//         },
//         error: function(result) {
//             console.log('could not update book!');
//         }
//     });
// }

function getOwners () {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(table) {
        // ownerDropdown(table);
        $('ownerSelector').empty();

        for (var i = 0; i < table.length; i++) {
          console.log("test" + i);
          $('#ownerSelector').append('<option value="'+ table[i].id + '">' + table[i].first_name + " " + table[i].last_name + '</option>');
        }

        console.log("This is the table: ", table);
    },
    error: function() {
        console.log('Database error');
    }
  });
}



function appendPets(pets) {
  $("tbody").empty();
  for (var i = 0; i < pets.length; i++) {
    $el = $('tbody');
    var pet = pets[i];
    //$el.data('id', pet.id);

    $el.append(
      '<tr><td>' + pet.first_name + ' ' + pet.last_name +  '</td>' +
      '<td><input type="text" value="' + pet.name + '"></td>' +
      '<td><input type="text" value="' + pet.breed + '"></td>' +
      '<td><input type="text" value="' + pet.color + '"></td>' +
      '<td><button class="go">GO</button></td>' +
      '<td><button class="delete">DELETE</button></td>' +
      '<td><button class="inOut">In</button></td></tr>'
    );
}

function newOwner(ownerName) {
    $('#ownerSelector').append('<option value="' + ownerName.firstName + ' ' + ownerName.lastName + '">' +
    ownerName.firstName + ' ' + ownerName.lastName + '</option>');
}
}
