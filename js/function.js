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

    $('.about-footer-content p').text('HairTreat provides consultation-based hair restoration and hair-loss treatment using modern equipment, personalized treatment planning and professional aftercare support.');
    $('.footer-social-links .fa-facebook-f').closest('a').attr('href', 'https://www.facebook.com/hairtreat');
    $('.footer-links.quick-links ul').html(
        '<li><a href="./">Home</a></li>' +
        '<li><a href="treatments">Treatments</a></li>' +
        '<li><a href="transplant">Transplant</a></li>' +
        '<li><a href="hours-and-location">Hours &amp; Locations</a></li>' +
        '<li><a href="hair-transplant-cost">Pricing</a></li>' +
        '<li><a href="reviews">Reviews</a></li>' +
        '<li><a href="about">About us</a></li>' +
        '<li><a href="contact-us">Contact us</a></li>'
    );

    $('.footer-treatment-links').html(
        '<h3>Treatments</h3>' +
        '<ul>' +
        '<li><a href="hair-prp">Hair PRP</a></li>' +
        '<li><a href="hair-line-correction">Hair Line Correction</a></li>' +
        '<li><a href="fue">FUE</a></li>' +
        '<li><a href="laser-hair-removal">Laser Hair Removal</a></li>' +
        '<li><a href="p-shot">P-Shot</a></li>' +
        '<li><a href="gfc-prp">GFC PRP</a></li>' +
        '<li><a href="hair-transplant">Hair Transplant</a></li>' +
        '<li><a href="eyebrow-transplant">Eyebrow Transplant</a></li>' +
        '<li><a href="female-hair-transplant">Female Hair Transplant</a></li>' +
        '<li><a href="beard-transplant">Beard Transplant</a></li>' +
        '<li><a href="fut-hair-transplant">FUT Hair Transplant</a></li>' +
        '<li><a href="sapphire-hair-transplant">Sapphire Hair Transplant</a></li>' +
        '</ul>'
    );

    $('.footer-chamber-links').html(
        '<h3>Chamber Address</h3>' +
        '<ul>' +
        '<li><strong><a href="https://hairtreat.com.bd/" target="_blank" rel="noopener">HairTreat</a></strong>' +
        '<a href="https://www.google.com/maps/place/Hair+Treat/@23.8755355,90.3879628,17z/data=!3m1!4b1!4m6!3m5!1s0xaeab4d22846befc1:0x5bce4e019fd18f28!8m2!3d23.8755355!4d90.3905377!16s%2Fg%2F11xlztc2gv?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Lift:4, House:1/B, Garib E Newaz Avenue, Sector 11, Uttara, Dhaka, Bangladesh, 1230</a>' +
        '<a href="tel:+8801805002681">(+88) 01805 002681</a></li>' +
        '<li><strong><a href="https://talukderclinicandnursinghome.com/" target="_blank" rel="noopener">Tangail Chamber:</a></strong>' +
        '<a href="https://www.google.com/maps/search/?api=1&query=Talukder%20Clinic%20and%20Nursing%20Home%20Puraton%20Bus%20stand%20Tangail%20Sodor" target="_blank" rel="noopener noreferrer">Talukder Clinic and Nursing Home, Puraton Bus stand, Tangail Sodor.</a>' +
        '<a href="tel:+8801805002688">(+88) 01805 002688</a></li>' +
        '</ul>'
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
    if ($('.hero-slider-layout .swiper').length) {
        $('.hero-slider-layout .swiper').each(function() {
            const $this = $(this);
            new Swiper(this, {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 4000,
                },
                pagination: {
                    el: $this.find('.hero-pagination')[0] || '.hero-pagination',
                    clickable: true,
                },
            });
        });
    }

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

    if ($('.text-anime-style-3, .section-title h1, .section-title h2, .section-title h3, .section-title-h3-override').length) {
        let	animatedTextElements = document.querySelectorAll('.text-anime-style-3, .section-title h1, .section-title h2, .section-title h3, .section-title-h3-override');
 
         animatedTextElements.forEach((element) => {
             // SplitText separates Bengali vowel signs and conjuncts from their
             // base characters, so keep Bengali headings as a single text run.
             if (/[\u0980-\u09FF]/.test(element.textContent)) {
                 return;
             }

             // Remove WOW.js conflicts to let GSAP animate characters cleanly
             element.classList.remove('wow', 'fadeInUp');
             element.removeAttribute('data-wow-delay');
             element.style.visibility = 'visible';
             element.style.opacity = '1';

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
        var isValid = !event.isDefaultPrevented();
        event.preventDefault();

        if (!isValid) {
            return;
        }

        submitappointmentForm();
    });

    function submitappointmentForm(){
        var whatsappNumber = $appointmentForm.data("whatsapp-number");

        if (whatsappNumber) {
            var serviceName = $appointmentForm.data("service-name") || "Appointment";
            var fullName = $.trim($("#full_name").val());
            var phone = $.trim($("#phone").val());
            var address = $.trim($("#address").val());
            var cleanWhatsappNumber = (whatsappNumber + "").replace(/[^0-9]/g, "");
            var message = "Hello, I want to book a " + serviceName + ".\n"
                + "Full Name: " + fullName + "\n"
                + "Phone Number: " + phone + "\n"
                + "Address: " + address;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'lead_form_success',
                lead_type: 'appointment'
            });
            window.location.href = "https://api.whatsapp.com/send?phone=" + cleanWhatsappNumber + "&text=" + encodeURIComponent(message);
            return;
        }

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


    window.redirectTreatmentWhatsapp = function(button){
        var form = button ? button.closest("form") : null;
        if (!form) {
            return false;
        }

        var whatsappNumber = (form.getAttribute("data-whatsapp-number") || "8801805002681").replace(/[^0-9]/g, "");
        var serviceName = form.getAttribute("data-service-name") || "Appointment";
        var fullNameInput = form.querySelector('[name="full_name"]');
        var phoneInput = form.querySelector('[name="phone"]');
        var addressInput = form.querySelector('[name="address"]');
        var fullName = fullNameInput ? fullNameInput.value.trim() : "";
        var phone = phoneInput ? phoneInput.value.trim() : "";
        var address = addressInput ? addressInput.value.trim() : "";

        if (!fullName || !phone || !address) {
            form.reportValidity();
            return false;
        }

        var message = "Hello, I want to book a " + serviceName + ".\n"
            + "Full Name: " + fullName + "\n"
            + "Phone Number: " + phone + "\n"
            + "Address: " + address;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'lead_form_success',
            lead_type: 'appointment'
        });
        window.location.href = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(message);
        return false;
    };

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








/* Google Sheet first, WhatsApp second (site-wide) */
(function () {
    "use strict";

    var SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx0XFezYJ2ApTlUUPqUnKYD-fe0pGMbG8UqU-C7jHc8s9TUCnRO-vsHgtmmJTmXPbgy/exec";
    var DEFAULT_WHATSAPP_NUMBER = "8801805002681";
    var busy = false;

    function valueFrom(form, names) {
        for (var i = 0; i < names.length; i++) {
            var field = form.querySelector('[name="' + names[i] + '"]');
            if (field && field.value) return field.value.trim();
        }
        return "";
    }

    function buttonLabel(element) {
        return ((element && (element.innerText || element.getAttribute("aria-label"))) || "WhatsApp")
            .replace(/\s+/g, " ").trim().slice(0, 120);
    }

    function setBusy(element, isBusy) {
        if (!element) return;
        if (isBusy) {
            element.dataset.hairtreatOriginalText = element.innerHTML;
            if (element.tagName === "BUTTON") element.innerHTML = "Saving...";
            element.setAttribute("aria-disabled", "true");
            if ("disabled" in element) element.disabled = true;
        } else {
            if (element.dataset.hairtreatOriginalText) {
                element.innerHTML = element.dataset.hairtreatOriginalText;
                delete element.dataset.hairtreatOriginalText;
            }
            element.removeAttribute("aria-disabled");
            if ("disabled" in element) element.disabled = false;
        }
    }

    function formMessageElement(form) {
        if (!form) return null;
        var output = form.querySelector("#msgSubmit, .lead-status, .h3.hidden");
        if (!output) {
            output = document.createElement("div");
            output.className = "lead-status";
            form.appendChild(output);
        }
        return output;
    }

    function showSuccess(form) {
        var output = formMessageElement(form);
        if (!output) return;
        output.className = "text-success lead-status";
        output.textContent = "Submitted successfully! Redirecting to WhatsApp...";
    }

    function showError(form) {
        var message = "Your information could not be saved. Please try again or call us.";
        var output = formMessageElement(form);
        if (output) {
            output.className = "text-danger lead-status";
            output.textContent = message;
        } else {
            window.alert(message);
        }
    }

    function formLead(form, button) {
        var name = valueFrom(form, ["full_name", "fullname", "name"]);
        var phone = valueFrom(form, ["phone", "mobile", "telephone"]);
        var email = valueFrom(form, ["email"]);
        var address = valueFrom(form, ["address"]);
        var visitorMessage = valueFrom(form, ["message", "comments", "comment"]);
        var service = form.dataset.serviceName || valueFrom(form, ["service", "treatment"]) || document.title;
        var lines = [];
        if (address) lines.push("Address: " + address);
        if (visitorMessage) lines.push(visitorMessage);

        return {
            name: name,
            phone: phone,
            email: email,
            service: service,
            message: lines.join("\n"),
            page: window.location.href,
            button: buttonLabel(button)
        };
    }

    function whatsappUrlForForm(form, lead) {
        var number = (form.dataset.whatsappNumber || DEFAULT_WHATSAPP_NUMBER).replace(/[^0-9]/g, "");
        var message = "Hello, I want to book a " + lead.service + ".\n"
            + "Full Name: " + (lead.name || "-") + "\n"
            + "Phone Number: " + (lead.phone || "-");
        if (lead.email) message += "\nEmail: " + lead.email;
        if (lead.message) message += "\n" + lead.message;
        return "https://api.whatsapp.com/send?phone=" + number + "&text=" + encodeURIComponent(message);
    }

    function saveLead(lead) {
        return new Promise(function (resolve, reject) {
            var token = "lead_" + Date.now() + "_" + Math.random().toString(36).slice(2);
            var frame = document.createElement("iframe");
            var postForm = document.createElement("form");
            var payloadInput = document.createElement("input");
            var tokenInput = document.createElement("input");
            var timeout;
            var submitted = false;
            var settled = false;

            frame.name = token;
            frame.srcdoc = "<!doctype html><html><body></body></html>";
            frame.style.display = "none";
            frame.setAttribute("aria-hidden", "true");
            postForm.method = "POST";
            postForm.action = SHEET_WEB_APP_URL;
            postForm.target = token;
            postForm.style.display = "none";
            payloadInput.type = "hidden";
            payloadInput.name = "payload";
            payloadInput.value = JSON.stringify(lead);
            tokenInput.type = "hidden";
            tokenInput.name = "token";
            tokenInput.value = token;
            postForm.appendChild(payloadInput);
            postForm.appendChild(tokenInput);

            function cleanup() {
                window.clearTimeout(timeout);
                window.removeEventListener("message", receiveResult);
                frame.removeEventListener("load", receiveLoad);
                postForm.remove();
                window.setTimeout(function () { frame.remove(); }, 100);
            }

            function succeed(result) {
                if (settled) return;
                settled = true;
                cleanup();
                resolve(result || { success: true });
            }

            function fail(message) {
                if (settled) return;
                settled = true;
                cleanup();
                reject(new Error(message || "Lead was not saved"));
            }

            function receiveResult(event) {
                var result = event.data;
                if (!result || result.type !== "hairtreat-sheet-result" ||
                    result.token !== token) return;
                if (result.success === true) {
                    succeed(result);
                } else {
                    fail(result.message);
                }
            }

            function receiveLoad() {
                if (!submitted) {
                    submitted = true;
                    postForm.submit();
                    return;
                }

                // Apps Script completed doPost before returning this document.
                // This also supports deployments that postMessage to their wrapper frame.
                window.setTimeout(function () {
                    succeed({ success: true, confirmedBy: "response-load" });
                }, 600);
            }

            window.addEventListener("message", receiveResult);
            frame.addEventListener("load", receiveLoad);
            document.body.appendChild(postForm);
            document.body.appendChild(frame);
            timeout = window.setTimeout(function () {
                fail("Google Sheet confirmation timed out");
            }, 20000);
        });
    }
    function completeLead(lead, whatsappUrl, button, form) {
        if (busy) return;
        busy = true;
        setBusy(button, true);

        saveLead(lead).then(function () {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: "lead_form_success", lead_type: form ? "form" : "whatsapp_click" });
            if (form) {
                showSuccess(form);
                window.setTimeout(function () {
                    window.location.href = whatsappUrl;
                }, 1500);
            } else {
                window.location.href = whatsappUrl;
            }
        }).catch(function () {
            busy = false;
            setBusy(button, false);
            showError(form);
        });
    }

    function isTrackedForm(form) {
        if (!form) return false;
        return form.hasAttribute("data-whatsapp-number") ||
            /^(appointmentForm|contactForm|pShotWhatsappForm|laserWhatsappForm)$/.test(form.id || "");
    }

    document.addEventListener("click", function (event) {
        var link = event.target.closest('a[href*="wa.me/"], a[href*="api.whatsapp.com/"]');
        if (link) {
            event.preventDefault();
            event.stopImmediatePropagation();
            completeLead({
                name: "",
                phone: "",
                email: "",
                service: document.title,
                message: "Direct WhatsApp button click",
                page: window.location.href,
                button: buttonLabel(link)
            }, link.href, link, null);
            return;
        }

        var button = event.target.closest("button, input[type=submit]");
        var form = button && button.closest("form");
        if (!isTrackedForm(form)) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        var lead = formLead(form, button);
        completeLead(lead, whatsappUrlForForm(form, lead), button, form);
    }, true);

    document.addEventListener("submit", function (event) {
        var form = event.target;
        if (!isTrackedForm(form)) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        var button = form.querySelector('button[type="submit"], input[type="submit"], button');
        var lead = formLead(form, button);
        completeLead(lead, whatsappUrlForForm(form, lead), button, form);
    }, true);
})();
