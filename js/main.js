(function($) {
    "use strict";

    // offcanvas-js
    $('.offcanvas-open').click(function() {
        $('.offcanvas-menu').addClass('active');
        $('.offcanvas-overlay').addClass('active');
    });
    $('.offcanvas-close').click(function() {
        $('.offcanvas-menu').removeClass('active');
        $('.offcanvas-overlay').removeClass('active');
        $('.level2-offmenu').removeClass('active');
        $("body").removeClass('level2-off-opened');
    });
    $('.close-offcanvas').click(function() {
        $('.offcanvas-menu').removeClass('active');
        $('.offcanvas-overlay').removeClass('active');
    });
    $(document).mouseup(function(e) {
        var container = $(".offmenu");

        // If the target of the click isn't the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.offcanvas-menu').removeClass('active');
            $('.offcanvas-overlay').removeClass('active');
        }
    });
    $('.level2-offmenu-opener').click(function() {
        $(this).siblings('.level2-offmenu').addClass('active');
        $("body").addClass('level2-off-opened');
    })
    $('.level2-offmenu-back').click(function() {
        $('.level2-offmenu').removeClass('active');
        $("body").removeClass('level2-off-opened');
    })



    // save-button
    $('.save-button').click(function() {

        $(this).toggleClass('save')
        $(this).attr('href', 'javascript:void(0)')

    })


    // left-filter-bar
    $('.left-filter-bar-opener').click(function() {
        $('.left-filter-bar').addClass('active')
    })
    $('.left-filter-bar-closer').click(function() {
        $('.left-filter-bar').removeClass('active')
    })


    $('input[type="checkbox"]').closest('label').css('cursor', 'pointer');
    $('input[type="radio"]').closest('label').css('cursor', 'pointer');


    // float-s-button
    if ($('#all-courses').length) {
        $(window).scroll(function() {
            if ($('#all-courses').offset().top < ($(window).scrollTop() + $(window).height() - 20)) {
                $(".float-s-button").addClass("hidden");
            } else {
                $(".float-s-button").removeClass("hidden");
            }
        })
    }


    // course-list-slider
    $('.course-slider-active').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        nav: true,
        items: 6,
        margin: 20,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 3
            },
            767: {
                items: 4
            },
            991: {
                items: 5
            },
            1199: {
                items: 6
            },
            1399: {
                items: 6
            },
            1439: {
                items: 6
            }
        }
    });


    // f-course-slider-active
    $('.f-course-slider-active').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        nav: true,
        items: 4,
        margin: 20,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 32
            },
            450: {
                items: 1,
                stagePadding: 70
            },
            575: {
                items: 1,
                stagePadding: 100
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            },
            1399: {
                items: 4
            },
            1439: {
                items: 4
            }
        }
    });


    // f-course-slider-active
    $('.l-offer-slider-active').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        nav: true,
        items: 4,
        margin: 20,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 50
            },
            450: {
                items: 1,
                stagePadding: 90
            },
            575: {
                items: 1,
                stagePadding: 100
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            },
            1399: {
                items: 4
            },
            1439: {
                items: 4
            }
        }
    });


    // best-of-slider-active
    $('.best-of-slider-active').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        nav: true,
        items: 4,
        margin: 20,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 55
            },
            450: {
                items: 1,
                stagePadding: 90
            },
            575: {
                items: 1,
                stagePadding: 100
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            },
            1399: {
                items: 4
            },
            1439: {
                items: 4
            }
        }
    });


    // owl-carousel
    $('.slider-ins-active').owlCarousel({
        loop: false,
        margin: 8,
        responsiveClass: true,
        nav: true,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 1
            },
            1199: {
                items: 1
            },
            1399: {
                items: 1
            },
            1439: {
                items: 1
            }
        }
    });


    // article-slider-active
    $('.article-slider-active').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        nav: true,
        items: 3,
        margin: 20,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1,
                // stagePadding: 50
                margin: 16,
            },
            450: {
                items: 1,
                // stagePadding: 90
                margin: 16,
            },
            575: {
                items: 1,
                // stagePadding: 100
                margin: 16,
            },
            767: {
                items: 1
            },
            991: {
                items: 2
            },
            1199: {
                items: 3
            },
            1399: {
                items: 3
            },
            1439: {
                items: 3
            }
        }
    });


    // owl-carousel
    $('.demo').owlCarousel({
        loop: true,
        margin: 50,
        responsiveClass: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            },
            1399: {
                items: 4
            },
            1439: {
                items: 4
            }
        }
    });

    //range-slider
    if ($('#slider-range').length) {
        $(function() {
            var sStep = 10000;
            var sMin = 0;
            var sMax = 40000;
            $("#slider-range").slider({
                range: true,
                min: sMin,
                max: sMax,
                step: sStep,
                animate: "slow",
                values: [10000, 20000],
                slide: function(event, ui) {
                    $("#min-amount").val("$" + ui.values[0]);
                    $("#max-amount").val("$" + ui.values[1]);
                },
            });
            let text = "";
            for (let i = 0; i < ((sMax / sStep) + 1); i++) {
                text += "<div class='step'><div class='step-content'><span class='prep'>$</span>" + ((i * sStep) / 1000) + "<span class='apnd'>k</span></div></div>";
            }
            $('#slider-range').append('<div class="steps-show"></div>');
            $('#slider-range').find('.steps-show').html(text);
        });
    }




    //magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image'
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


})(jQuery);




$(document).ready(function() {

    $('.search-clear').click(function() {
        $(this).siblings('.input').attr('value', '');
        $(this).parents('.hero-filter-box').removeClass('inputed');
        $(this).addClass('hide');
    });


    // let text = "";
    // for (let i = 0; i < 5; i++) {
    // text += "The number is " + i + "<br>";
    // }
    // $('.test').html(text);

    // // scroll up
    // $(function(){
    //   $.scrollUp();
    // });


    // nice-select
    $('.nice-select').niceSelect();

    $('select').niceSelect();

    // preloader
    $("#preloader").fadeOut(500);


    let outBtn = document.querySelectorAll(".ThreeOption span")

    outBtn.forEach(outBtns => {
        outBtns.addEventListener("click", () => {
            removeActive()
            outBtns.classList.add("active")
        })
    })

    function removeActive() {
        outBtn.forEach(outBtns => {
            outBtns.classList.remove("active")
        })
    }

    // Input Type File
    var inputs = document.querySelectorAll('.Upload_btn_input')

    for (var i = 0, len = inputs.length; i < len; i++) {
        customInput(inputs[i])
    }

    function customInput(el) {
        const fileInput = el.querySelector('[type="file"]')
        const label = el.querySelector('label p')

        fileInput.onchange =
            fileInput.onmouseout = function() {
                if (!fileInput.value) return

                var value = fileInput.value.replace(/^.*[\\\/]/, '')
                el.className += ' -chosen'
                label.innerText = value
            }
    }

})