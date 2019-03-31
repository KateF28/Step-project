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
const $workCategories = $('.work__chooseblocks');
$('.work__hovercontentblock').hide();
$workCategories.click((event) => {
    $workCategories.children().removeClass('work__choose');
    $(event.target).addClass('work__choose');
    const workCategoryTextContent = $(event.target).text();
    // console.log($workCategoryIndex);
    let createWorkContent = (category) => {
        // console.log(workImgs[category]);

        $.each(workImgs[category], (i, val) => {
            let $workContentBlock = $('<div/>', {
                class: 'work__relativeblock',
            });
            $workContentBlock.append(`<img src="${val}" alt="Work-chain icon" class="${category} img">`);

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
        });

    };
    createWorkContent(workCategoryTextContent);
});

$('.work__relativeblock').mouseover((event) => {
    $(event.currentTarget).find('>.work__hovercontentblock').show('fast');
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