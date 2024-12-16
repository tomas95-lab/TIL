(function ($) {
    "use strict";


    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    

    new WOW().init();



    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });



    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });



    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });



    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


const portfolioContainer = document.querySelector(".projects");
const totalImages = 34;
const imagesPerLoad = 6;
const loadMoreButton = document.getElementById('load-more');

let currentImageIndex = 1; 

function loadImages() {

    const limit = Math.min(currentImageIndex + imagesPerLoad - 1, totalImages);


    for (let i = currentImageIndex; i <= limit; i++) {
        const projectDiv = document.createElement('div');
    projectDiv.classList.add('col-lg-4', 'col-md-6', 'portfolio-item', 'first', 'wow', 'fadeInUp');
    projectDiv.setAttribute('data-wow-delay', '0.1s');


    projectDiv.innerHTML = `
        <div class="rounded overflow-hidden m-2">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid w-100 portfolio-img" src="img/portfolio/imagen (${i}).jpg" alt="">
                <div class="portfolio-overlay">
                    <a class="btn btn-square btn-outline-light mx-1" href="img/portfolio/imagen (${i}).jpg" data-lightbox="portfolio">
                        <i class="fa fa-eye"></i>
                    </a>
                </div>
            </div>
            <div class="border border-5 border-light border-top-0 p-4">
                <p class="text-primary fw-medium mb-2">Carpintería General</p>
                <h5 class="lh-base mb-0">Fabricación y Remodelación de Muebles de Madera</h5>
            </div>
        </div>

    `;


    portfolioContainer.appendChild(projectDiv);
    }


    currentImageIndex = limit + 1;


    if (currentImageIndex > totalImages) {
        loadMoreButton.style.display = 'none';
    }
}

loadImages();

loadMoreButton.addEventListener('click', loadImages);

for (let i = 1; i <= totalImagenes; i++) {

    
}
