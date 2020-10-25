$(function () {
    $.get('https://private-anon-01a41ea7a6-wad20postit.apiary-mock.com/posts', function (response) {
        for (let post of response) {
            let media = '';
            if (post.media != null) {
                if (post.media.type === 'image') {
                    media = '            <div class="post-image">\n' +
                        `                <img src="${post.media.url}" alt="">\n` +
                        '            </div>'
                } else if (post.media.type === 'video') {
                    media = '            <div class="post-image">\n' +
                        '                <video controls>\n' +
                        `                    <source src="${post.media.url}">\n` +
                        '            </div>'
                }
            }
            $('section').append(`<div class="post">
            <div class="post-author">
                <span class="post-author-info">
                    <img src="${post.author.avatar}" alt="Post author">
                    <small>${post.author.firstname} ${post.author.lastname}</small></small>
                </span>
                <small>${post.createTime}</small>
            </div>
            ${media}
            <div class="post-title">
                <h3>${post.text != null ? post.text : ''}</h3>
            </div>
            <div class="post-actions">
                <button type="button" name="like" class="like-button" >${post.likes}</button>
            </div>
        </div>`);
        }
        $('.like-button').click(function () {
            let $this = $(this);
            if ($this.hasClass('liked')) {
                $this.removeClass('liked')
            } else {
                $this.addClass('liked')
            }
        });
    });
});
