$(document).ready(function() {


    // $('.container').hide();
    let page_memory = document.cookie;
    let page;

    clicked = $('.home');
    let prev_page;

    if (page_memory) {

        page = $.cookie('page');
        clicked = $(`.${page}`)
        prev_page = $.cookie('prev_page');
        //remove current class from home and/or prev page
        $(`.home`).removeClass('current');
        $(`.${prev_page}`).removeClass('current');
        //add current class to the stored page
        $(`.${page}`).addClass('current');
        //animate slider
        let current_pos = ($('nav').width() / 6.8) * $('.current').index();
        $('.slider').css('margin-left', `${current_pos}px`)
            //hide and show appropriate sections
        if (page !== 'home') $('#home').hide()
        $(`#${prev_page}`).css('animation', 'hide-down 2s forwards').fadeOut(750)
        $(`#${page}`).fadeIn(1500).css('animation', 'show-center-from-bottom 2s forwards')
    }
    //get current position of link and move the slider
    let current_pos = ($('nav').width() / 6.8) * $('.current').index();
    $('.slider').css('margin-left', `${current_pos}px`)

    $('nav li').click(function() {
        //remove current class and assign new
        if (clicked) {
            if (page) $(`.${page}`).removeClass('current');
            //turn old click into prev_page, so we know to hide it
            prev_page = clicked.attr('page');
            //store prev_page as cookie
            $.cookie('prev_page', prev_page);
            //remove current class from old click
            clicked.removeClass('current');
        }
        //assign new click to last clicked
        clicked = $(this);
        //add current class to new click
        $(this).addClass('current');

        //get current position of link and move the slider
        let current_pos = ($('nav').width() / 6.8) * $('.current').index();
        $('.slider').css('left', `${current_pos}px`)

        //page is new click
        page = $(this).attr('page');
        $.cookie('page', page)
        alert(prev_page)
        alert(page)
            //if new page click
        if (page !== prev_page) {
            //hide prev_page
            $(`#${prev_page}`).css('animation', 'hide-down 2s forwards').fadeOut(750)
                //show the new page
            setTimeout(function() {
                $(`#${page}`).fadeIn(1500).css('animation', 'show-center-from-bottom 2s forwards')
            }, 500)

        }

        // prev_page = $(clicked).attr('page');

        $('.slider').css('margin-left', `${current_pos}px`)

    })

})