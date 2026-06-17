(function ($) {
    "use strict";
    "use strict";

    var $window = $(window);
    var $body = $('body');

    /* Shared HairTreat Header and Footer Content */
    $('.navbar-brand img').attr({
        src: 'images/hairtreat-logo.png',
        alt: 'HairTreat'
    });

    $('.footer-logo img').attr({
        src: 'images/hairtreat-logo.png',
        alt: 'HairTreat'
    });

    $('.about-footer-content p').text('Our facility comprises advanced technological machines and equipment that help us find an adequate solution for your hair loss problem with a successful minimally invasive surgical process.');
    $('.footer-social-links .fa-facebook-f').closest('a').attr('href', 'https://www.facebook.com/hairtreat');

    $('.footer-links.quick-links ul').html(
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="treatments.html">Treatments</a></li>' +
        '<li><a href="contact.html">Hours &amp; Locations</a></li>' +
        '<li><a href="case-study.html">Case studies</a></li>' +
        '<li><a href="blog.html">Happenings</a></li>' +
        '<li><a href="about.html">About us</a></li>'
    );

    $('.footer-links-box .footer-links').not('.quick-links').first().html(
        '<h3>Useful Treatments</h3>' +
        '<ul>' +
        '<li><a href="service-single.html">Hair Transplant</a></li>' +
        '<li><a href="service-single.html">Hair Treatment</a></li>' +
        '<li><a href="service-single.html">Hair PRP</a></li>' +
        '<li><a href="service-single.html">Female Hair Transplant</a></li>' +
        '<li><a href="service-single.html">GFC PRP</a></li>' +
        '<li><a href="service-single.html">P Shot</a></li>' +
        '</ul>'
    );

    $('.footer-contact-box .footer-contact-item').eq(0).find('ul').html(
        '<li><i class="fa-solid fa-phone"></i><a href="tel:+8801805002681">+8801805002681</a>, <a href="tel:+8801805002682">01805002682</a></li>'
    );
    $('.footer-contact-box .footer-contact-item').eq(1).find('ul').html(
        '<li><i class="fa-solid fa-envelope"></i><a href="mailto:hairtreatclinic@gmail.com">hairtreatclinic@gmail.com</a></li>'
    );
    $('.footer-contact-box .footer-contact-item').eq(2).find('h3').text('Contact Address:');
    $('.footer-contact-box .footer-contact-item').eq(2).find('ul').html(
        '<li><i class="fa-solid fa-location-dot"></i>HairTreat, Lift:4 1/B, Garib E Newaz Avenue, Sector:11 Uttara, Dhaka, Bangladesh</li>'
    );

    /* Preloader Effect */
    $window.on('load', function(){
        $(".preloader").fadeOut(600);
    });

    /* Sticky Header */
    if($('.active-sticky-header').length){
        $window.on('resize', function(){
            setHeaderHeight();
        });

        function setHeaderHeight(){
            $("header.main-header").css("height", $('header .header-sticky').outerHeight());
        }

        $window.on("scroll", function() {
            var fromTop = $(window).scrollTop();
            setHeaderHeight();
            var headerHeight = $('header .header-sticky').outerHeight()
            $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
            $("header .header-sticky").toggleClass("active", (fromTop > 600));
        });
    }

    /* Slick Menu JS */
    $('#menu').slicknav({
        label : '',
        prependTo : '.responsive-menu'
    });

    if($("a[href='#top']").length){
        $(document).on("click", "a[href='#top']", function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    }

    /* Hero Slider Layout JS */
    const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
        slidesPerView : 1,
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
    });

    /* testimonial Slider JS */
    if ($('.testimonial-slider').length) {
        const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
            slidesPerView : 1,
            speed: 1000,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            breakpoints: {
                768:{
                    slidesPerView: 2,
                },
                991:{
                    slidesPerView: 3,
                }
            }
        });
    }

    /* About Case Poster Slider JS */
    if ($('.about-case-poster-slider').length) {
        const about_case_poster_slider = new Swiper('.about-case-poster-slider .swiper', {
            slidesPerView: 1,
            speed: 900,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3500,
            },
            pagination: {
                el: '.about-case-poster-pagination',
                clickable: true,
            },
        });
    }

    /* HairTreat Result Slider JS */
    if ($('.blog-result-slider').length) {
        const blog_result_slider = new Swiper('.blog-result-slider .swiper', {
            slidesPerView: 1,
            speed: 900,
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.blog-result-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
            },
        });

        $('.blog-result-slider').on('click', '.result-lightbox', function(event) {
            event.preventDefault();

            const currentSrc = $(this).attr('href');
            const $galleryItems = $('.blog-result-slider .swiper-slide:not(.swiper-slide-duplicate) .result-lightbox');
            const items = $galleryItems.map(function() {
                return {
                    src: $(this).attr('href'),
                    title: $(this).attr('title'),
                    type: 'image'
                };
            }).get();
            const selectedIndex = Math.max(0, items.findIndex(function(item) {
                return item.src === currentSrc;
            }));

            $.magnificPopup.open({
                items: items,
                type: 'image',
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                image: {
                    verticalFit: true
                }
            }, selectedIndex);
        });
    }

    /* Skill Bar */
    if ($('.skills-progress-bar').length) {
        $('.skills-progress-bar').waypoint(function() {
            $('.skillbar').each(function() {
                $(this).find('.count-bar').animate({
                width:$(this).attr('data-percent')
                },2000);
            });
        },{
            offset: '70%'
        });
    }

    /* Youtube Background Video JS */
    if ($('#herovideo').length) {
        var myPlayer = $("#herovideo").YTPlayer();
    }

    /* Init Counter */
    if ($('.counter').not('.clinic-trust-counter .counter').length) {
        $('.counter').not('.clinic-trust-counter .counter').counterUp({ delay: 6, time: 3000 });
    }

    /* Repeat Counter For Clinic Trust Section */
    if ($('.clinic-trust-counter').length) {
        const clinicCounterBox = document.querySelector('.clinic-trust-counter');
        const clinicCounters = clinicCounterBox.querySelectorAll('.counter');
        let clinicCounterRunning = false;
        let clinicCounterRunId = 0;

        clinicCounters.forEach((counter) => {
            counter.dataset.target = counter.textContent.trim();
            counter.textContent = '0';
        });

        function runClinicCounters() {
            clinicCounterRunning = true;
            clinicCounterRunId++;
            const currentRunId = clinicCounterRunId;

            clinicCounters.forEach((counter) => {
                const target = parseInt(counter.dataset.target, 10);
                const duration = 1600;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    if (currentRunId !== clinicCounterRunId) {
                        return;
                    }

                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    const easedProgress = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(easedProgress * target);

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }

                requestAnimationFrame(updateCounter);
            });
        }

        function resetClinicCounters() {
            clinicCounterRunning = false;
            clinicCounterRunId++;
            clinicCounters.forEach((counter) => {
                counter.textContent = '0';
            });
        }

        if ('IntersectionObserver' in window) {
            const clinicCounterObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !clinicCounterRunning) {
                        runClinicCounters();
                    }

                    if (!entry.isIntersecting && clinicCounterRunning) {
                        resetClinicCounters();
                    }
                });
            }, {
                threshold: 0.35
            });

            clinicCounterObserver.observe(clinicCounterBox);
        } else {
            runClinicCounters();
        }
    }

    /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

    /* Text Effect Animation */
    if ($('.text-anime-style-1').length) {
        let staggerAmount 	= 0.05,
            translateXValue = 0,
            delayValue 		= 0.5,
           animatedTextElements = document.querySelectorAll('.text-anime-style-1');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
                gsap.from(animationSplitText.words, {
                duration: 1,
                delay: delayValue,
                x: 20,
                autoAlpha: 0,
                stagger: staggerAmount,
                scrollTrigger: { trigger: element, start: "top 85%" },
                });
        });
    }

    if ($('.text-anime-style-2').length) {
        let	 staggerAmount 		= 0.03,
            translateXValue	= 20,
            delayValue 		= 0.1,
            easeType 			= "power2.out",
            animatedTextElements = document.querySelectorAll('.text-anime-style-2');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
                gsap.from(animationSplitText.chars, {
                    duration: 1,
                    delay: delayValue,
                    x: translateXValue,
                    autoAlpha: 0,
                    stagger: staggerAmount,
                    ease: easeType,
                    scrollTrigger: { trigger: element, start: "top 85%"},
                });
        });
    }

    if ($('.text-anime-style-3').length) {
        let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');

         animatedTextElements.forEach((element) => {
            //Reset if needed
            if (element.animation) {
                element.animation.progress(1).kill();
                element.split.revert();
            }

            element.split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(element, { perspective: 400 });

            gsap.set(element.split.chars, {
                opacity: 0,
                x: "50",
            });

            element.animation = gsap.to(element.split.chars, {
                scrollTrigger: { trigger: element,	start: "top 90%" },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }

    /* Parallaxie js */
    var $parallaxie = $('.parallaxie');
    if($parallaxie.length && ($window.width() > 991))
    {
        if ($window.width() > 768) {
            $parallaxie.parallaxie({
                speed: 0.55,
                offset: 0,
            });
        }
    }

    /* Zoom Gallery screenshot */
    $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
        }
    });

    /* Contact form validation */
    var $contactform = $("#contactForm");
    $contactform.validator({focus: false}).on("submit", function (event) {
        if (!event.isDefaultPrevented()) {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        /* Ajax call to submit form */
        $.ajax({
            type: "POST",
            url: "form-process.php",
            data: $contactform.serialize(),
            success : function(text){
                if (text === "success"){
                    formSuccess();
                } else {
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $contactform[0].reset();
        submitMSG(true, "Message Sent Successfully!")
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    /* Contact form validation end */

    /* Appointment form validation */
    var $appointmentForm = $("#appointmentForm");
    $appointmentForm.validator({focus: false}).on("submit", function (event) {
        if (!event.isDefaultPrevented()) {
            event.preventDefault();
            submitappointmentForm();
        }
    });

    function submitappointmentForm(){
        /* Ajax call to submit form */
        $.ajax({
            type: "POST",
            url: "form-appointment.php",
            data: $appointmentForm.serialize(),
            success : function(text){
                if (text === "success"){
                    appointmentformSuccess();
                } else {
                    appointmentsubmitMSG(false,text);
                }
            }
        });
    }

    function appointmentformSuccess(){
        $appointmentForm[0].reset();
        appointmentsubmitMSG(true, "Message Sent Successfully!")
    }

    function appointmentsubmitMSG(valid, msg){
        if(valid){
            var msgClasses = "h3 text-success";
        } else {
            var msgClasses = "h3 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    /* Appointment form validation end */

    /* Animated Wow Js */
    new WOW().init();

    /* Popup Video */
    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    }

})(jQuery);
