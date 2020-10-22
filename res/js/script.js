$ (function(){
    $.get('https://private-anon-55b9e17f14-wad20postit.apiary-mock.com/profiles', function (response){
        for (post of response){
            let div = $('<div class="profile-container">')
            let img = $('<img>').attr('src',post.avatar)
            let firstname = $('<h1>').text(post.firstname)
            let lasttname = $('<h1>').text(post.lastname)

            div.append(img)
            div.append(firstname)
            div.append(lasttname)

            $('section').append(div);
        }


    })


});
