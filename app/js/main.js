// --- Swipe active state for Navbar --- // 
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");
window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 87) {
        current = section.getAttribute("id"); }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");

        if (li.classList.contains(current)) {
            li.classList.add("active");
        }

        if (window.pageYOffset == 0) {
            navLi[0].classList.add("active");
        }
    });
};

// --- Collapse the navbar after a click on a link --- //
$(document).ready(function() {
    if (document.documentElement.clientWidth <= 768) {
        $('.nav-link').click(function() {
            $('.navbar-toggler').trigger( "click" );
        });
    }
});

// --- Multi-item menu carousel --- //
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
        pause: 8000,

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

// --- Chefs social links --- //
$(document).ready(function(){
    $('#Brady_Smith_card').click(function() {
        $('#Brady_Smith_socials').slideToggle();
    });

    $('#Tom_Eddison_card').click(function() {
        $('#Tom_Eddison_socials').slideToggle();
    });

    $('#Willy_Chan_card').click(function() {
        $('#Willy_Chan_socials').slideToggle();
    });
});

// --- Special menu options --- //
const specialMenu = [
    {
        pic: 'imgs/tab-item-01.png',
        title: 'Veggy salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$10'
    },
    {
        pic: 'imgs/tab-item-02.png',
        title: 'Fresh juice',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    },
    {
        pic: 'imgs/tab-item-03.png',
        title: 'Chiken salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$18'
    },
    {
        pic: 'imgs/tab-item-04.png',
        title: 'Omelette',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    },
    {
        pic: 'imgs/tab-item-05.png',
        title: 'Pumpkin soup',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$5'
    },
    {
        pic: 'imgs/tab-item-06.png',
        title: 'Omelette&Cheese',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$12'
    },
    {
        pic: 'imgs/tab-item-04.png',
        title: 'Omelette',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    },
    {
        pic: 'imgs/tab-item-02.png',
        title: 'Fresh juice',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    },
    {
        pic: 'imgs/tab-item-01.png',
        title: 'Veggy salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$10'
    },
    {
        pic: 'imgs/tab-item-03.png',
        title: 'Chiken salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$18'
    },
    {
        pic: 'imgs/tab-item-05.png',
        title: 'Pumpkin soup',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$5'
    },
];

function createColumn () {
    const column = `
        <div class="col-12 col-md-6"></div>
    `;

    return column;
}

function createOptionCard (pic, title, desc, price) {
    const optionCard = `
        <div class="card mb-3 border-0">
            <div class="row g-0">
                <div class="col-4 d-flex justify-content-center align-items-center">
                    <img src="${pic}" class="img-fluid" alt="${title}">
                </div>
                <div class="col-6">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${desc}</p>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <h3 class="text-light m-0 bg-primary p-4 border rounded">${price}</h3>
                </div>
            </div>
        </div>
    `;

    return optionCard;
}

function createMenu(start) {
    $('#options-container').html('');
    for (let i = 0; i <= 1; i++) {
        $('#options-container').append(createColumn());

        if (i == 0) {
            for (let j = start; j < (start + 3); j++) {
                let {pic, title, desc, price} = specialMenu[j];

                const optionCard = createOptionCard (pic, title, desc, price);

                $('#options-container>div:first-child').append(optionCard);
            }
        } else {
            for (let j = (start + 3); j < (start + 6); j++) {
                let {pic, title, desc, price} = specialMenu[j];

                const optionCard = createOptionCard (pic, title, desc, price);

                $('#options-container>div:last-child').append(optionCard);
            }
        }
    }
}

$('#breakfast-special').click(function() {
    createMenu(0)
});

$('#lunch-special').click(function() {
    createMenu(3)
});

$('#dinner-special').click(function() {
    createMenu(5)
});

$(document).ready(function(){
    $('#breakfast-special').trigger( "click" );
});

// --- Scroll to top button --- //
$(document).ready(function() {
    $('#scroll-up').click(function() {
        document.documentElement.scrollTop = 0;
    });
});

$(document).scroll(function() {
    if(document.documentElement.scrollTop >= 700 && document.querySelector('#scroll-up').classList.contains('d-none')) {
        $('#scroll-up').addClass('d-block');
        $('#scroll-up').removeClass('d-none');
    } else if(document.documentElement.scrollTop < 700 && document.querySelector('#scroll-up').classList.contains('d-block')) {
        $('#scroll-up').addClass('d-none');
        $('#scroll-up').removeClass('d-block');
    }
});