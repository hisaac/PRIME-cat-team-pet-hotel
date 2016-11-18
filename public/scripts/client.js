$(document).ready(function() {

  // getPets();
  getOwners();

   getPets();
   $(".go").on('click', function() {

   });
   $(".delete").on('click', function() {

   });
   $(".inOut").on('click', function() {

   });
   $("select").change('click', function() {

   });


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
  });
}


// function ownerDropdown(pets) {
//     $('#ownerSelector').empty()
//     console.log("first log genreDropdown: ", pets);
//     $('#ownerSelector').append('<option value="All">'
//         Owner Names '</option>');
//     var namesArray = [];
//     for (var i = 0; i < pets.length; i++) {
//         namesArray[i] = pets[i].firstName
//     }
//     $.unique(namesArray);
//     console.log("heres the namesArray: ", namesArray);
//     for (var i = 0; i < namesArray.length; i++) {
//         $('.selectGenre').append('<option value="' + namesArray[i] + '">' + pets.firstName + ' ' + pets.lastName + '</option>');
//     }


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
//
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
        for (var i = 0; i < table.length; i++) {
          $('#ownerSelector').append(table[i].first_name + " " + table[i].last_name);
        }

        console.log("This is the table: ", table);
    },
    error: function() {
        console.log('Database error');
    }

})
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
}
// function deleteRow(this){
//
// }
