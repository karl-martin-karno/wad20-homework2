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
            let div2 = $('<div class="profile-container-item">')
            let img = $('<img class="profile-avatar">').attr('src', post.avatar)
            let fullname = $('<h1>').text(post.firstname).append(" "+ post.lastname)

            buttonClicked()

            let button = $('<button class="follow">').text("Follow")
            div2.append(img)
            div2.append(fullname)
            div2.append(button)
            div.append(div2);
            $('section').append(div);

            buttonClicked()
        }
    })
});


