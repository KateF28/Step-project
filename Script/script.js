let chooseBtn = document.getElementsByClassName("menu__menuclause");
console.log(chooseBtn);
[].forEach.call(chooseBtn, (elem) => {
    elem.onclick = (event) => {
        let currentBtn = [].indexOf.call(chooseBtn, event.currentTarget);
        if (currentBtn > 1) {
            let serviceChoose = document.getElementsByClassName("service__choose")[0];
            serviceChoose.className = "service__chooseblock";
            elem.className = "service__hoverchoose";
        };
    };
});