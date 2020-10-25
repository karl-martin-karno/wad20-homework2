// Show avatar dropdown menu with loaded data

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'https://private-anon-a3e92b771c-wad20postit.apiary-mock.com/users/1',

		success: function(data) {
      $('#avatar-img').attr('src', data.avatar);
      
      $(".avatar").click(function() {
        $('#name').html(data.firstname + ' ' + data.lastname);
        $('#email').html(data.email);
        $('.dropdown').slideToggle();
      });

      $(document).on("click", function(event) {
        var trigger = $(".avatar")[0];
        var dropdown = $(".dropdown");

        if (dropdown !== event.target && !dropdown.has(event.target).length && trigger !== event.target) {
          $(".dropdown").hide();
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
    
  });
});