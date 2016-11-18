$(document).ready(function() {

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
     event.preventDefault();
     var petInfo = {};
     petInfo.name = $('#petName').val();
     petInfo.color = $('#color').val();
     petInfo.breed = $('#breed').val();
     petinfo.ownerId = $('select :selected').val();
     submitPet(petInfo);

   });

});

function getPets() {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(pets) {
      getOwners();
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
        for (var i = 0; i < table.length; i++) {
          console.log("test" + i);
          $('#ownerSelector').append('<option>' + table[i].first_name + " " + table[i].last_name + '</option>');
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

function newOwner(owner) {
    $.ajax({
      type: 'POST',
      url: '/owners',
      data: owner,
      success: function(response) {
        console.log('owner post success');
        getOwners();
      },
      error: function() {
        console.log('could not post a new owner');
      }
    });

}

function submitPet(petInfo) {
  $.ajax({
    type: 'POST',
    url: '/pets',
    data: petInfo,
    success: function(response) {
      getPets();
    },
    error: function() {
      console.log('could not post a new pet');
    }
  });

}
