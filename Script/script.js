// "Our services" section script:
const chooseBtn = document.getElementsByClassName("service__chooseblock");
const contentBlocks = document.getElementsByClassName("service__visibilityblock");

[].forEach.call(chooseBtn, (elem) => {
    elem.onclick = () => {
        if (!(elem.classList.contains('service__choosed'))) {
            [].forEach.call(chooseBtn, (el) => {
                el.classList.remove('service__choosed');
            });
            elem.classList.add('service__choosed');
        };

        let currentBtn = [].indexOf.call(chooseBtn, elem);
        if (!(contentBlocks[currentBtn].classList.contains('.service__nonvisibilityblock'))) {
            [].forEach.call(contentBlocks, (element) => {
                element.classList.remove('service__nonvisibilityblock');
            });
            contentBlocks[currentBtn].classList.add('service__nonvisibilityblock');
        };
    };
});

// "Our Amazing Work" section script:
const workImgs = {
    "Graphic design": ["Images/Work/graphic-design1.jpg",
        "Images/Work/graphic-design2.jpg",
        "Images/Work/graphic-design3.jpg",
        "Images/Work/graphic-design4.jpg",
        "Images/Work/graphic-design5.jpg",
        "Images/Work/graphic-design6.jpg",
        "Images/Work/graphic-design7.jpg",
        "Images/Work/graphic-design8.jpg",
        "Images/Work/graphic-design9.jpg",
        "Images/Work/graphic-design10.jpg",
        "Images/Work/graphic-design11.jpg",
        "Images/Work/graphic-design12.jpg"
    ],
    "Web design": ["Images/Service/web-design1.jpg",
        "Images/Service/web-design2.jpg",
        "Images/Service/web-design3.jpg",
        "Images/Service/web-design4.jpg",
        "Images/Service/web-design5.jpg",
        "Images/Service/web-design6.jpg",
        "Images/Service/web-design7.jpg"
    ],
    "Landing pages": ["Images/Work/landing-page1.jpg",
        "Images/Work/landing-page2.jpg",
        "Images/Work/landing-page3.jpg",
        "Images/Work/landing-page4.jpg",
        "Images/Work/landing-page5.jpg",
        "Images/Work/landing-page6.jpg",
        "Images/Work/landing-page7.jpg"
    ],
    Wordpress: ["Images/Work/wordpress1.jpg",
        "Images/Work/wordpress2.jpg",
        "Images/Work/wordpress3.jpg",
        "Images/Work/wordpress4.jpg",
        "Images/Work/wordpress5.jpg",
        "Images/Work/wordpress6.jpg",
        "Images/Work/wordpress7.jpg",
        "Images/Work/wordpress8.jpg",
        "Images/Work/wordpress9.jpg",
        "Images/Work/wordpress10.jpg"
    ]
};
let randomProperty = function(obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};
// console.log(randomProperty(workImgs));

const $workCategories = $('.work__chooseblocks');
for (let key in workImgs) {
    if (key === 'Graphic design') {
        for (let i = 0; i < 4; i++) {
            let $allWorkContentBlock = $('<div/>', {
                class: 'work__relativeblock',
            });
            // console.log(workImgs[key]);
            $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
            let $allWorkHoverBlock = $('<div/>', {
                class: 'work__hovercontentblock verticalaligncenter',
            });
            $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
            $allWorkContentBlock.append($allWorkHoverBlock);
            $(".work__contentblocks").append($allWorkContentBlock);
        };

    } else if (key === 'Web design') {
        for (let i = 0; i < 4; i++) {
            let $allWorkContentBlock = $('<div/>', {
                class: 'work__relativeblock',
            });
            // console.log(workImgs[key]);
            $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
            let $allWorkHoverBlock = $('<div/>', {
                class: 'work__hovercontentblock verticalaligncenter',
            });
            $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
            $allWorkContentBlock.append($allWorkHoverBlock);
            $(".work__contentblocks").append($allWorkContentBlock);
        };
    } else if (key === 'Wordpress') {
        for (let i = 0; i < 4; i++) {
            let $allWorkContentBlock = $('<div/>', {
                class: 'work__relativeblock',
            });
            // console.log(workImgs[key]);
            $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
            let $allWorkHoverBlock = $('<div/>', {
                class: 'work__hovercontentblock verticalaligncenter',
            });
            $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
            $allWorkContentBlock.append($allWorkHoverBlock);
            $(".work__contentblocks").append($allWorkContentBlock);
        };
    };
    $('.work__relativeblock').mouseenter(function(event) {
        $('.work__hovercontentblock').not($(event.currentTarget).find('.work__hovercontentblock')).hide();
        $(event.currentTarget).find('.work__hovercontentblock').show();
        $(event.currentTarget).mouseleave((event) => {
            $('.work__hovercontentblock').hide();
        });
    });
};

$('.work__hovercontentblock').hide();

$workCategories.click((event) => {
    $('.work__relativeblock').remove();
    $workCategories.children().removeClass('work__choose');
    $(event.target).addClass('work__choose');
    const workCategoryTextContent = $(event.target).text();

    let createWorkContent = (category) => {

        if (category !== 'All') {
            $.each(workImgs[category], (i, val) => {

                let $workContentBlock = $('<div/>', {
                    class: 'work__relativeblock',
                });
                $workContentBlock.append(`<img src="${val}" alt="Work-chain icon" class="work__contentimg">`);

                let $workHoverBlock = $('<div/>', {
                    class: 'work__hovercontentblock verticalaligncenter',
                });
                $workHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${category}</p>`);
                $workContentBlock.append($workHoverBlock);

                $(".work__contentblocks").append($workContentBlock);
                $('.work__hovercontentblock').hide();
                $('.work__loadmoreButton').hide();
            });
        } else if (category === 'All') {

            for (let key in workImgs) {
                if (key === 'Graphic design') {
                    for (let i = 0; i < 4; i++) {
                        let $allWorkContentBlock = $('<div/>', {
                            class: 'work__relativeblock',
                        });
                        // console.log(workImgs[key]);
                        $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
                        let $allWorkHoverBlock = $('<div/>', {
                            class: 'work__hovercontentblock verticalaligncenter',
                        });
                        $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
                        $allWorkContentBlock.append($allWorkHoverBlock);
                        $(".work__contentblocks").append($allWorkContentBlock);
                    };

                } else if (key === 'Web design') {
                    for (let i = 0; i < 4; i++) {
                        let $allWorkContentBlock = $('<div/>', {
                            class: 'work__relativeblock',
                        });
                        // console.log(workImgs[key]);
                        $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
                        let $allWorkHoverBlock = $('<div/>', {
                            class: 'work__hovercontentblock verticalaligncenter',
                        });
                        $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
                        $allWorkContentBlock.append($allWorkHoverBlock);
                        $(".work__contentblocks").append($allWorkContentBlock);
                    };
                } else if (key === 'Wordpress') {
                    for (let i = 0; i < 4; i++) {
                        let $allWorkContentBlock = $('<div/>', {
                            class: 'work__relativeblock',
                        });
                        // console.log(workImgs[key]);
                        $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
                        let $allWorkHoverBlock = $('<div/>', {
                            class: 'work__hovercontentblock verticalaligncenter',
                        });
                        $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
                        $allWorkContentBlock.append($allWorkHoverBlock);
                        $(".work__contentblocks").append($allWorkContentBlock);
                    };
                };

                $('.work__hovercontentblock').hide();
                $('.work__loadmoreButton').show();
            };

        };

        $('.work__relativeblock').mouseenter(function(event) {
            $('.work__hovercontentblock').not($(event.currentTarget).find('.work__hovercontentblock')).hide();
            $(event.currentTarget).find('.work__hovercontentblock').show();
            $(event.currentTarget).mouseleave((event) => {
                $('.work__hovercontentblock').hide();
            });
        });


    };
    createWorkContent(workCategoryTextContent);
});
// console.log($('.work__relativeblock').length);

$('.work__loadmoreButton').click((event) => {

    if ($('.work__relativeblock').length <= 12) {

        for (let key in workImgs) {
            if (key === 'Graphic design') {
                for (let i = 4; i < 8; i++) {
                    let $allWorkContentBlock = $('<div/>', {
                        class: 'work__relativeblock',
                    });
                    // console.log(workImgs[key]);
                    $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
                    let $allWorkHoverBlock = $('<div/>', {
                        class: 'work__hovercontentblock verticalaligncenter',
                    });
                    $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
                    $allWorkContentBlock.append($allWorkHoverBlock);
                    $(".work__contentblocks").append($allWorkContentBlock);
                };
            } else if (key === 'Web design') {
                for (let i = 4; i < 7; i++) {
                    let $allWorkContentBlock = $('<div/>', {
                        class: 'work__relativeblock',
                    });
                    // console.log(workImgs[key]);
                    $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
                    let $allWorkHoverBlock = $('<div/>', {
                        class: 'work__hovercontentblock verticalaligncenter',
                    });
                    $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
                    $allWorkContentBlock.append($allWorkHoverBlock);
                    $(".work__contentblocks").append($allWorkContentBlock);
                };
            } else if (key === 'Landing pages') {
                for (let i = 0; i < 5; i++) {
                    let $allWorkContentBlock = $('<div/>', {
                        class: 'work__relativeblock',
                    });
                    // console.log(workImgs[key]);
                    $allWorkContentBlock.append(`<img src="${workImgs[key][i]}" alt="Work-chain icon" class="work__contentimg">`);
                    let $allWorkHoverBlock = $('<div/>', {
                        class: 'work__hovercontentblock verticalaligncenter',
                    });
                    $allWorkHoverBlock.append(`<div>
                         <img src="Images/Work/Work-chain.png" alt="Work-chain icon" class="work__hovercontentimg">
                         <img src="Images/Work/Work-search@1X.png" alt="Work-search icon" class="work__hovercontentimg">
                         </div>
                         <p class="work__hoverfirstline colormain ">Creative design</p>
                         <p class="work__hoversecondline">${key}</p>`);
                    $allWorkContentBlock.append($allWorkHoverBlock);
                    $(".work__contentblocks").append($allWorkContentBlock);
                };
            };
            $('.work__hovercontentblock').hide();
            // $('.work__loadmoreButton').show();
        };

        $('.work__relativeblock').mouseenter(function(event) {
            $('.work__hovercontentblock').not($(event.currentTarget).find('.work__hovercontentblock')).hide();
            $(event.currentTarget).find('.work__hovercontentblock').show();
            $(event.currentTarget).mouseleave((event) => {
                $('.work__hovercontentblock').hide();
            });
        });

    } else
    /////////////////////////////////////// Дописать если больше 24 и меньше 36 то удалять кнопку
    {
        $('.work__loadmoreButton').hide();
    };
});

// "Feedback" section script:
let $slide = $('.feedback__feedbacks>.feedback__feedback');
let $prev = $('.prev');
let $next = $('.next');
let $pag = $('.feedback__sliderpag');

$slide.first().addClass('activefeedback');
$pag.eq($slide.filter('.activefeedback').index()).addClass('feedback__activepag');

$prev.click(() => {
    let slideIndex = $slide.filter('.activefeedback').index();
    if (slideIndex === 0) {
        slideIndex = $slide.length;
    }
    $slide.eq(slideIndex - 1).addClass('activefeedback').siblings().removeClass('activefeedback');
    $pag.eq(slideIndex - 1).addClass('feedback__activepag').siblings().removeClass('feedback__activepag');
});
$next.click(() => {
    let slideIndex = $slide.filter('.activefeedback').index();
    if (slideIndex === $slide.length - 1) {
        slideIndex = -1;
    }
    $slide.eq(slideIndex + 1).addClass('activefeedback').siblings().removeClass('activefeedback');
    $pag.eq(slideIndex + 1).addClass('feedback__activepag').siblings().removeClass('feedback__activepag');
});

$pag.mouseover((event) => {
    $slide.eq($(event.currentTarget).index()).addClass('activefeedback').siblings().removeClass('activefeedback');
    $(event.currentTarget).addClass('feedback__activepag').siblings().removeClass('feedback__activepag');
});

// "Gallery" section script:
// var $grid = $('.grid').imagesLoaded( function() {
let $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    isFitWidth: true,
    gutter: '.gutter-sizer',
    transitionDuration: '0.5s',
});
// }); 

$grid.on('mouseenter', '.grid-item', function(event) {
    $('.gallery__img').not($(event.currentTarget)).css({ "visibility": "visible" });
    $(event.currentTarget).find('img').css({ "visibility": "hidden" });
    //   $(event.currentTarget).css({"background-color":"#878787", 
    // "background":"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))", 
    // "cursor":"pointer"});
    $grid.on('mouseleave', '.grid-item', () => {
        $(this).find('img').css({ "visibility": "visible" });
        // trigger layout
        $grid.masonry();
    });
    // trigger layout
    $grid.masonry();
});

$('.append-button').on('click', function() {
    let $elems = [getItemElement(), getItemElement(), getItemElement()];
    $.each($elems, (i, val) => {
        $(val).append(`<img src="Images/Gallery/${randomInteger(1, 16)}.jpg" alt="Gallery img" class="gallery__img">`);
    });
    $grid.append($elems).masonry('appended', $elems);
    $(this).hide();
    $grid.masonry();
});

function getItemElement() {
    let elem = document.createElement('div');
    let wRand = Math.random();
    let hRand = Math.random();
    let widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
    let heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
    elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
    return elem;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}