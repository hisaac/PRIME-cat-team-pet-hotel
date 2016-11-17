$(document).ready(function() {



});

function getPets() {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(pets) {
      appendBooks(pets);
    },
    error: function() {
      console.log('Database error');
    }

  })
}
