const breakfast = [
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
    }
];

const lunch = [
    {
        pic: 'imgs/tab-item-05.png',
        title: 'Pumpkin soup',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$5'
    },
    {
        pic: 'imgs/tab-item-03.png',
        title: 'Chiken salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$18'
    },
    {
        pic: 'imgs/tab-item-02.png',
        title: 'Fresh juice',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    },
    {
        pic: 'imgs/tab-item-06.png',
        title: 'Omelette&Cheese',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$12'
    },
    {
        pic: 'imgs/tab-item-01.png',
        title: 'Veggy salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$10'
    },
    {
        pic: 'imgs/tab-item-04.png',
        title: 'Omelette',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    }
];

const dinner = [
    {
        pic: 'imgs/tab-item-04.png',
        title: 'Omelette',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$4'
    },
    {
        pic: 'imgs/tab-item-06.png',
        title: 'Omelette&Cheese',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$12'
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
        pic: 'imgs/tab-item-05.png',
        title: 'Pumpkin soup',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$5'
    },
    {
        pic: 'imgs/tab-item-03.png',
        title: 'Chiken salad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.',
        price: '$18'
    }
];

// --- Special menu options --- //
export const initSpecialMenuSwitcher = () => {
    const createColumn = () => {
        const column = `
            <div class="col-12 col-md-6"></div>
        `;
    
        return column;
    };
    
    const createOptionCard = (pic, title, desc, price) => {
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
    };
    
    const createMenu = (menu) => {
        $('#options-container').html('');
        for (let i = 0; i <= 1; i++) {
            $('#options-container').append(createColumn());
    
            if (i == 0) {
                for (let j = 0; j < 3; j++) {
                    let {pic, title, desc, price} = menu[j];
    
                    const optionCard = createOptionCard (pic, title, desc, price);
    
                    $('#options-container>div:first-child').append(optionCard);
                }
            } else {
                for (let j = 3; j < 6; j++) {
                    let {pic, title, desc, price} = menu[j];
    
                    const optionCard = createOptionCard (pic, title, desc, price);
    
                    $('#options-container>div:last-child').append(optionCard);
                }
            }
        }
    };

    const removeBorders = () => {
        $('.col-3 .card').removeClass('border');
        $('.col-3 .card').addClass('border-0');
    };
    
    $('#breakfast-special').click(function() {
        createMenu(breakfast);
        removeBorders();
        $('#breakfast-special .card').toggleClass('border-0');
        $('#breakfast-special .card').toggleClass('border');
    });
    
    $('#lunch-special').click(function() {
        createMenu(lunch);
        removeBorders();
        $('#lunch-special .card').toggleClass('border-0');
        $('#lunch-special .card').toggleClass('border');
    });
    
    $('#dinner-special').click(function() {
        createMenu(dinner);
        removeBorders();
        $('#dinner-special .card').toggleClass('border-0');
        $('#dinner-special .card').toggleClass('border');
    });
    
    $(document).ready(function(){
        $('#breakfast-special').trigger( "click" );
    });
}
