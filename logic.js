$(document).ready(function() {
    function getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);

        (value != null) ? page = unescape(value[1]): null;
    }

    // $('.container').hide();
    let page_memory = document.cookie;
    let page;
    getCookie('page')
    alert(page)
    clicked = $('.one');
    let prev_page = 'home';

    $(`#${prev_page}`).css('animation', 'hide-down 2s forwards').fadeOut(750)
    $(`#${page}`).fadeIn(1500).css('animation', 'show-center-from-bottom 2s forwards')

    $('nav li').click(function() {
        //remove current class and assign new
        if (clicked) clicked.removeClass('current');
        clicked = $(this);
        $(this).addClass('current');

        //get current position of link and move the slider
        let current_pos = ($('nav').width() / 6.8) * $('.current').index();
        $('.slider').css('left', `${current_pos}px`)

        //CSS animations
        page = $(this).attr('page');
        if (page !== prev_page) {
            $(`#${prev_page}`).css('animation', 'hide-down 2s forwards').fadeOut(750)

            setTimeout(function() {
                $(`#${page}`).fadeIn(1500).css('animation', 'show-center-from-bottom 2s forwards')
                page_memory = document.cookie = `page = ${page};`;
            }, 500)

        }

        prev_page = $(clicked).attr('page');
        $('.slider').css('margin-left', `${current_pos}px`)

    })

})