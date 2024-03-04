jQuery(($) => {

    $(".menu-item").on('click', function() {
        var liText = $(this).attr('data-scroll');
        $('html, body').animate({
            scrollTop: $("#" + liText ).offset().top
        }, 500);
    });

    $('#menu-button').on('click', function () {
        $(this).toggleClass('btn-close');
        if ($(this).hasClass('btn-close')) {
            $('#menu-page-container').removeClass('hidden');
        } else {
            $('#menu-page-container').addClass('hidden');
        }
    });

    $('.menu-item').on('click', function () {
        $('#menu-page-container').addClass('hidden');
        $('#menu-button').removeClass('btn-close');
    });

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.header-container').addClass('primary-bg');
        } else {
            $('.header-container').removeClass('primary-bg');
        }
    });

    $('#view-portfolio-btn').on('click', function () {
        let link = $('#view-portfolio-btn').attr('data-url');
        if (link) {
            window.open(link, '_blank');
        }
    });
    
    $('#view-skills-btn').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#skills" ).offset().top
        }, 500);
    });

    $('#project-type-all').on('click', function () {
        $('.project-type-btn').removeClass('selected-project-type');
        $(this).addClass('selected-project-type');
        $('.project-grid-item').removeClass('hidden');
    });

    $('#project-type-uxui').on('click', function () {
        $('.project-type-btn').removeClass('selected-project-type');
        $(this).addClass('selected-project-type');
        $('.project-grid-item-uxui').removeClass('hidden');
        $('.project-grid-item-graphic').addClass('hidden');
    });

    $('#project-type-graphic').on('click', function () {
        $('.project-type-btn').removeClass('selected-project-type');
        $(this).addClass('selected-project-type');
        $('.project-grid-item-uxui').addClass('hidden');
        $('.project-grid-item-graphic').removeClass('hidden');
    });

    $('#scroll-to-top').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    var innerWidth = window.innerWidth;
    var innerHeight = document.body.scrollHeight;
    var lightWidth = innerWidth / 2;
    var lightHight = lightWidth;
    var positionX = 0;
    var positionY = 0;
    var toRight = true;
    var toBottom = true;
    var moveSpeed = 10;
    function spotlightMove() {
        if (positionX <= 0) {
            toRight = true;
        }
        if (positionX > innerWidth - lightWidth - moveSpeed) {
            toRight = false;
        }
        if (positionY <= 0) {
            toBottom = true;
        }
        if (positionY > innerHeight - lightHight - moveSpeed) {
            toBottom = false;
        }
        if (toRight) {
            positionX += moveSpeed;
        } else {
            positionX -= moveSpeed;
        }

        if (toBottom) {
            positionY += moveSpeed;
        } else {
            positionY -= moveSpeed;
        }

        $('#spotlight-1').css({
            top: positionY,
            left: positionX
        });
    }

    setInterval(function () {
        spotlightMove();
    }, 100);

});