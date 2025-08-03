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
