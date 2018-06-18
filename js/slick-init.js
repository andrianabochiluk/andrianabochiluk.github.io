$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
                    },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
                    }
                ]
    });
})
