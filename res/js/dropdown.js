// Show avatar dropdown menu with loaded data

$(document).ready(function() {
	$.get('https://private-anon-a3e92b771c-wad20postit.apiary-mock.com/users/1', function(response) {
      $('#avatar-img').attr('src', response.avatar);

      $(".avatar").click(function() {
        $('#name').html(response.firstname + ' ' + response.lastname);
        $('#email').html(response.email);
        $('.dropdown').slideToggle();
      });

      $(document).on("click", function(event) {
        var trigger = $(".avatar")[0];
        var dropdown = $(".dropdown");

        if (dropdown !== event.target && !dropdown.has(event.target).length && trigger !== event.target) {
          $(".dropdown").hide();
        }
      });
    });
});