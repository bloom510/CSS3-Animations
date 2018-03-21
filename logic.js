$(document).ready(function() {
    // $('.container').hide();
    clicked = $('.one');
    let right = [];

    let prev_page = 'home';
    $('nav li').click(function() {
        //remove current class and assign new
        if (clicked) clicked.removeClass('current');
        clicked = $(this);
        $(this).addClass('current');

        //get current position of link and move the slider
        let current_pos = ($('nav').width() / 6.8) * $('.current').index();
        $('.slider').css('left', `${current_pos}px`)

        //CSS animations
        let page = $(this).attr('page');
        if (right.includes(page)) {
            $(`#${prev_page}`).css('animation', 'hide-left 2s forwards').fadeOut(750)

            setTimeout(function() {
                $(`#${page}`).show().css('animation', 'show-center-from-right 2s forwards')
            }, 500)

            right.splice(right.indexOf(page))

        } else if (!right.includes(page)) {
            right.push(prev_page)

            setTimeout(function() {
                $(`#${page}`).show().css('animation', 'show-center-from-left 2s forwards')
            }, 500);

            $(`#${prev_page}`).css('animation', 'hide-right 2s forwards').fadeOut(750)

        }

        prev_page = $(clicked).attr('page');
        console.log(right)
    })

    $('nav li ').hover(function() {
        let current_pos = ($('nav').width() / 6.8) * $(this).index();
        $('.slider').css('margin-left', `${current_pos}px`)
    })
    $('nav li ').mouseleave(function() {
        let current_pos = ($('nav').width() / 6.8) * $('.current').index();
        $('.slider').css('margin-left', `${current_pos}px`)
    })
})