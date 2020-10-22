function buttonClicked() {
    $('.follow').click(function () {
        var $this = $(this);
        if ($this.hasClass('follow')) {
            $this.removeClass("follow").addClass("followed")
            $this.text('Followed');
        } else {
            $this.removeClass("followed").addClass("follow")
            $this.text('Follow');
        }
    });
}

$(function () {
    $.get('https://private-anon-55b9e17f14-wad20postit.apiary-mock.com/profiles', function (response) {

        for (post of response) {
            let div = $('<div class="profile-container">')

            let img = $('<img class="profile-avatar">').attr('src', post.avatar)
            let firstname = $('<h1>').text(post.firstname)
            let lasttname = $('<h1>').text(post.lastname)

            buttonClicked()

            let button = $('<button class="follow">').text("Follow")
            div.append(img)
            div.append(firstname)
            div.append(lasttname)
            div.append(button)
            $('section').append(div);

            buttonClicked()


        }
    })

});


