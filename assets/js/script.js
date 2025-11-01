//Banner Slider
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#banner-slider");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 1,
            perMove: 1,
            arrows: true,
            pagination: false,
            autoplay: true,
            speed: 1800,

            // breakpoints: {
            //     1199: {
            //         gap: "45px",
            //         padding: "5rem",
            //     },
            //     991: {
            //         gap: "30px",
            //         padding: "0rem",
            //     },
            //     767: {
            //         gap: "20px",
            //         padding: "0rem",
            //     },
            //     575: {
            //         gap: "10px",
            //         padding: "0rem",
            //     },
            // },
        });

        splide.mount();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#achievement-slider");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            padding: "10rem",
            arrows: false,
            pagination: false,
            gap: "24px",
            drag: "free",
            focus: "center",
            speed: 3500,
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
            },
            breakpoints: {
                1199: {
                    perPage: 2,
                    padding: "7rem",
                },
                767: {
                    perPage: 2,
                    padding: "4rem",
                },
                575: {
                    perPage: 1,
                },
                280: {
                    perPage: 1,
                    padding: "2rem",
                }
            }
            // breakpoints: {
            //     1199: {
            //         gap: "45px",
            //         padding: "5rem",
            //     },
            //     991: {
            //         gap: "30px",
            //         padding: "0rem",
            //     },
            //     767: {
            //         gap: "20px",
            //         padding: "0rem",
            //     },
            //     575: {
            //         gap: "10px",
            //         padding: "0rem",
            //     },
            // },
        });

        splide.mount(window.splide.Extensions);
    });
});

// Client logo slider
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#client-slider");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 7,
            perMove: 1,
            arrows: false,
            pagination: false,
            gap: "24px",
            drag: "free",
            focus: "center",
            speed: 3500,
            autoScroll: {
                speed: 1,
                pauseOnHover: false,
            },
            breakpoints: {
                1199: {
                    perPage: 6,
                },
                767: {
                    perPage: 5,
                },
                575: {
                    perPage: 3,
                },
                280: {
                    perPage: 2,
                }
            }
            // breakpoints: {
            //     1199: {
            //         gap: "45px",
            //         padding: "5rem",
            //     },
            //     991: {
            //         gap: "30px",
            //         padding: "0rem",
            //     },
            //     767: {
            //         gap: "20px",
            //         padding: "0rem",
            //     },
            //     575: {
            //         gap: "10px",
            //         padding: "0rem",
            //     },
            // },
        });

        splide.mount(window.splide.Extensions);
    });
});

// Magnific Popup
$(document).ready(function () {
    $(".image-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
        closeOnContentClick: true,
        mainClass: "mfp-img-mobile",
        image: {
            verticalFit: true,
            titleSrc: "title",
        },
    });
});
