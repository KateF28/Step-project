// Акордеон для блока "Our services":
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
                // element.style.transform = 'translateX(50px)';
                element.classList.remove('service__nonvisibilityblock');
            });
            contentBlocks[currentBtn].classList.add('service__nonvisibilityblock');
        };
    };
});

// Скрипт для блока "Our Amazing Work":
const $workCategories = $('.work__chooseblock');

// console.log($workCategories);
[].forEach.call($workCategories, (elem) => {
    elem.click((event) => {
        if (!(elem.hasClass('work__choose'))) {
            [].forEach.call($workCategories, (el) => {
                el.removeClass('work__choose');
            });
            elem.addClass('work__choose');
        };
    });
});