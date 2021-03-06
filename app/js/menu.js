// --- Multi-item menu carousel --- //
export const initMultiItemCarousel = () => {
    $(document).ready(function() {
        $("#menuCarousel").lightSlider({
            item: 4,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 0,
    
            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
    
            speed: 700, //ms'
            auto: true,
            pauseOnHover: true,
            loop: true,
            slideEndAnimation: true,
            pause: 3000,
    
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
    
            rtl:false,
            adaptiveHeight:false,
    
            vertical:false,
            verticalHeight:500,
            vThumbWidth:100,
    
            thumbItem:10,
            pager: false,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
    
            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,
    
            responsive : [
                {
                    breakpoint:992,
                    settings: {
                        item:3,
                    }
                },
                {
                    breakpoint:768,
                    settings: {
                        item:2,
                    }
                },
            ],
    
            onBeforeStart: function (el) {},
            onSliderLoad: function (el) {},
            onBeforeSlide: function (el) {},
            onAfterSlide: function (el) {},
            onBeforeNextSlide: function (el) {},
            onBeforePrevSlide: function (el) {}
        });
    });
}
