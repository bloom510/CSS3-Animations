$(document).ready(function() {


    // $('.container').hide();
    let page_memory = document.cookie;
    let page;

    clicked = $('.home');
    let prev_page = 'home';

    alert($.cookie('page'))
    alert($.cookie('prev_page'))
    if (page_memory) {
        page = $.cookie('page');
        prev_page = $.cookie('prev_page');
        //remove current class from one
        $(`#${prev_page}`).removeClass('current');
        //add current class to the stored page
        $(`.${page}`).addClass('current');
        //animate slider and page
        $(`#home`).css('animation', 'hide-down 2s forwards').fadeOut(750)
        $(`#${page}`).fadeIn(1500).css('animation', 'show-center-from-bottom 2s forwards')
    }

    //get current position of link and move the slider
    let current_pos = ($('nav').width() / 6.8) * $('.current').index();
    $('.slider').css('margin-left', `${current_pos}px`)

    $('nav li').click(function() {
        //remove current class and assign new
        if (clicked) {
            prev_page = clicked.attr('page');
            $.cookie('prev_page', prev_page);
            clicked.removeClass('current');
        }
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
                // document.cookie = `clicked = ${clicked.attr('class')}`

            }, 500)

        }

        prev_page = $(clicked).attr('page');

        $('.slider').css('margin-left', `${current_pos}px`)
        console.log(`Prevpage: ${prev_page} page: ${page} `)
        console.log('clicked', clicked)

    })

})