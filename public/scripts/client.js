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

function appendPets(pets) {
for (var i = 0; i < books.length; i++) {
  $el("tbody").append('<tr><td>)

  var book = books[i];
  $el.data('id', book.id);
  console.log("Date from DB: ", book.published);

}
