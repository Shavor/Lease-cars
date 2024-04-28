$(function() {

    let slider = $('#slider'),
        header = $('#header'),
        sliderH = slider.innerHeight(),
        headerH = header.innerHeight();

    // Nav toggle on mobule=======================

    let navToggle = $('#navToggle'),
        nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();


        $(this).toggleClass('active');
        $('body').toggleClass('show-nav');
        nav.toggleClass('show');
        header.toggleClass('show')
    })

    $(window).on('resize', function() {
        navToggle.removeClass('active');
        nav.removeClass('show');
        header.removeClass('show')
    })


    // Header class on sckroll======================
    headerScroll ();

    $(window).on('scroll resize', headerScroll)

    function headerScroll () {
        let scrollTop = $(this).scrollTop();
        sliderH = slider.innerHeight();
        headerH = header.innerHeight();

        if(scrollTop >= sliderH - headerH) {
            header.addClass('header__main--dark');
        } else {
            header.removeClass('header__main--dark');
        }
    }

    // ===========Initialize AOS https://github.com/michalsnik/aos======================

    AOS.init({
      // Global settings:
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 80, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

})
