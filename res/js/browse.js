$ (function(){
    $.get('https://private-anon-55b9e17f14-wad20postit.apiary-mock.com/profiles', function (response){
        for (post of response){
            let div = $('<div class="profile-container">')
            $('.follow').click(function(){
                var $this = $(this);
                $this.removeClass("followed")
                $this.toggleClass('follow');
                if($this.hasClass('follow')){

                    $this.text('Follow');
                } else {
                    $this.removeClass("follow").addClass("followed")
                    $this.text('Followed');
                }

            });
            let img = $('<img class="profile-avatar">').attr('src',post.avatar)
            let firstname = $('<h1>').text(post.firstname)
            let lasttname = $('<h1>').text(post.lastname)
            let button = $('<button class="follow">').text("Follow")

            div.append(img)
            div.append(firstname)
            div.append(lasttname)
            div.append(button)

            $('section').append(div);
        }


    })
    $('.follow').click(function(){
        var $this = $(this);
        $this.toggleClass('follow');
        if($this.hasClass('follow')){
            $this.text('Follow');
        } else {
            $this.text('Followed');
        }
    });


});
