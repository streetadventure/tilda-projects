//сбрасываем hash
if (document.location.hash) {
    document.location.hash = "";
}

//слайдер
$('.parameters-box__head').owlCarousel({
    loop: false,
    center: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ["<a href='#'><</a>", "<a href='#'>></a>"],
    URLhashListener: true,
    responsive: {
        1000: {
            items: 3,
            touchDrag: false,
            mouseDrag: false,
            pullDrag: false,
            freeDrag: false,
        },
        800: {
            items: 2,
        },
        400: {
            items: 2,
        },
        0: {
            items: 2,
        }
    }
});

$('.parameters-box__main').owlCarousel({
    items: 1,
    touchDrag: false,
    mouseDrag: false,
    pullDrag: false,
    freeDrag: false,
    nav: false,
    margin: 5,
    dots: false,
    URLhashListener: true,
});
//массив со всеми параметрами для рандома
let parametersAllArr = {
    color: [
        ["#000000", "Черный", true, 0],
        ["#804E82", "Фиолет", true, 0],
        ["#E4CAF1", "Лаванда", true, 0],
        ["#FDD9E8", "Маршмеллоу", true, 0],
        ["#E5CCAE", "Песок", true, 0],
        ["#997D68", "Кофе", true, 0],
        ["#FFFFFF", "Белый", true, 0],
        ["#BAC1BF", "Дымчатый", true, 0],
        ["#57555A", "Графит", true, 0],
        ["#E42C36", "Красный", true, 0],
        ["#FE6203", "Хеллуин", true, 0],
        ["#FFE270", "Желтый", true, 0],
        ["#F2EC7A", "Лимонный", true, 0],
        ["#E33D85", "Фуксия", true, 0],
        ["#74C86A", "Лайм", true, 0],
        ["#64762C", "Хаки", true, 0],
        ["#97A38F", "Оливка", true, 0],
        ["#1F9480", "Изумруд", true, 0],
        ["#B3E2D8", "Тиффани", true, 0],
        ["#2E4393", "Синий", true, 0],
        ["#83A3EC", "Голубой", true, 0],
        ["#BB847F", "Пыльная роза", true, 0],
        ["#A2BEEE", "Пыльный деним", true, 0],
        ["#91B4B8", "Снежная мята", true, 0],
        ["#EDBFC1", "Персик", true, 0],
        ["#FDAE97", "Коралл", true, 0],
        ["#E2E4E6", "Молочный меланж", true, 0],
        ["#E5E4EA", "Тофу", true, 0],
    ]
};
//Добавляем класс .human
document.querySelector(".display-selection .clothes").addEventListener('click', delHuman);
document.querySelector(".display-selection .person").addEventListener('click', addHuman);
function addHuman() {
    document.querySelector(".constructor-hoodie__design").classList.add("human")
};
function delHuman() {
    document.querySelector(".constructor-hoodie__design").classList.remove("human")
};
//Добавляем класс .active и делаем активной кнопку далее
let choiceArr = document.querySelectorAll("div[data-choice] li");
choiceArr.forEach(element => {
    element.addEventListener('click', choiceActive)
}
);
//Всплывающая подсказка
function choiceTitle(elem, title) {
    document.querySelector(".title-choice").classList.remove("title-anim");
    setTimeout(animAdd, 200);
    //document.querySelector(".title-choice span").innerHTML = elem
    document.querySelector(".title-choice b").innerHTML = title;
};
function animAdd() {
    document.querySelector(".title-choice").classList.add("title-anim")
};

//Активируем кнопки вперед назад красим пройденые пути а также где мы находимся
let btnNext = document.querySelector('.btn_next'),
    lineProgress = document.querySelector('.parameters-progress__line-activ'),
    owlNext = document.querySelector('.owl-nav .owl-next'),
    owlPrev = document.querySelector('.owl-nav .owl-prev');
owlNext.classList.add('disable');

//btnNext.addEventListener('click', disableAdd)
owlNext.addEventListener('click', disableAdd);
owlPrev.addEventListener('click', disableAdd);

function disableAdd() {
    owlNext.classList.add('disable');
    //  btnNext.classList.add('disable')
}

//Шкала прогресса
function progres() {
    let progresCheck = document.querySelectorAll(".parameters-box__head .owl-item"),
        progresOccupancy = true,
        progresSum = document.querySelectorAll(".parameters-box__head .owl-item .item:not([data-optional])").length,
        hudiProgress = 100;

    progresCheck.forEach(element => {
        if (!element.classList.contains("check") && !element.childNodes[0].hasAttribute("data-optional")) {
            progresOccupancy = false;
            hudiProgress -= 100 / progresSum;
        }
    });
    lineProgress.style.width = hudiProgress + "%";

    if (progresOccupancy) {
        //  finishBtn.classList.remove("disable")
        btnNext.classList.add("none");
        let btnCart = document.querySelector(".btn_ico_cart");
        btnCart.classList.add("active");
        btnCart.classList.remove("disable");

    }
}
//Формирование цены
let basePrice = 4990,
    finalPrice = 4990,
    basePriceElem = document.querySelector(".parameters-box__footer .price span");
function basePriceHTML() {
    let priceItem = basePrice;
    for (let key in choiceElem) {
        if (choiceElem[key][3] === undefined) {
            choiceElem[key][3] = 0;
        }
        priceItem += Number(choiceElem[key][3]);
        finalPrice = priceItem;
        basePriceElem.innerHTML = new Intl.NumberFormat('ru-RU').format(basePrice);
    }
}
// Параметры по умолчанию

let choiceElem,
    zipper = false,
    itemNum = 0,
    cookieName = 'hudiColor',
    choiceGetJson = getCookie(cookieName, json = true),
    choiceKeyRu = {
        color: ["Цвет"],
        cut: ["Крой"],
        length: ["Длина"],
        bottom: ["Низ"],
        pocket: ["Карман"],
        cuff: ["Манжета"],
        hood: ["Капюшон"],
        cloth: ["Ткань"],
        embroidery: ["Вышивка"],
        size: ["Размер"],
        growth: ["Рост"],
        "sleeve-left": ["Левый рукав"],
        "sleeve-right": ["Правый рукав"],
        "cuff-right": ["Левый манжет"],
        "cuff-left": ["Правый манжет"],
        front: ["Спереди"],
        back: ["Спина"],
    }

if (choiceGetJson) {
    choiceElem = choiceGetJson;
} else {
    choiceElem = {
        "sleeve-left": ["#997D68", "Кофе", false, 0],
        "sleeve-right": ["#997D68", "Кофе", false, 0],
        "cuff-right": ["#997D68", "Кофе", false, 0],
        "cuff-left": ["#997D68", "Кофе", false, 0],
        front: ["#997D68", "Кофе", false, 0],
        back: ["#997D68", "Кофе", false, 0],
        hood: ["#997D68", "Кофе", false, 0],
        pocket: ["#997D68", "Кофе", false, 0],
        bottom: ["#997D68", "Кофе", false, 0],
        cloth: ["no", "Без начеса", false, 0],
        // embroidery: ["no", "Не выбран", false, 0],
        size: ["no", "Не выбран", false, 0],
        growth: ["no", "Не выбран", false, 0],
    }
}

//Конструктор
async function choiceActive(param = false) {
    let attr = this.parentNode.parentNode.getAttribute("data-choice"),
        elem = document.querySelector(`div[data-choice*=${attr}] li.active`),
        title = this.getAttribute("data-title"),
        item = this.getAttribute("data-item"),
        price = Number(this.getAttribute("data-price"));
    if (elem) {
        elem.classList.remove("active");
    }
    this.classList.add("active");

    btnNext.classList.remove("disable");
    owlNext.classList.remove('disable');
    //Цвет
    if (attr == "sleeve-left") {
        designItem = ".design-box__sleeve_left"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "sleeve-right") {
        designItem = ".design-box__sleeve_right"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "cuff-left") {
        designItem = ".design-box__cuff_left"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "cuff-right") {
        designItem = ".design-box__cuff_right"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "front") {
        designItem = ".design-box__length"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "pocket") {
        designItem = ".design-box__pocket"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "bottom") {
        designItem = ".design-box__bottom"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "hood") {
        designItem = ".design-box__hood"
        designItemHood = ".design-box__hood-person"
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style');
        style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        style.innerHTML += `${designItemHood} .color-shadow-dark, ${designItemHood} .color-shadow, ${designItemHood} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    if (attr == "back") {
        choiceElem[attr] = [item, title, true, price];
        choiceTitle("Цвет: ", choiceElem[attr][1]);
    }
    //Начес
    if (attr == "cloth") {
        choiceElem[attr] = [item, title, true, price];
        choiceTitle("Ткань: ", choiceElem[attr][1]);
    }
    //вышивка
    if (attr == "embroidery") {
        choiceElem[attr] = [item, title, true, price];
        choiceTitle("Вышивка: ", choiceElem[attr][1]);
    }
    //Размер
    if (attr == "size") {
        choiceElem[attr] = [item, item, true, price];
        choiceTitle("Размер: ", choiceElem[attr][1]);

    }
    //Рост
    if (attr == "growth") {
        choiceElem[attr] = [item, item + " см", true, price];
        choiceTitle("Рост: ", choiceElem[attr][1]);
    }
    document.querySelector(".owl-item.active.center").classList.add("check");
    //Прогресс
    progres();
    basePriceHTML();
    cookieAdd();
}
//Рандомные числа
let numRandomArr = document.querySelectorAll(".choice__info-box .num-random"),
    numRandom = Math.floor(Math.random() * 17) + 8;
numRandomArr.forEach(element => {
    element.innerHTML = numRandom
});
//Сворачиваем параметры на мобилке
let parametersMobBtn = document.querySelector(".parameters-box__mob"),
    parametersMobItem = document.querySelector(".container");

parametersMobBtn.addEventListener("click", parametersMobFun)
function parametersMobFun() {
    this.classList.toggle("active");
    parametersMobItem.classList.toggle("active");
}

//Решаем баг на айфонах с 100vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Всплывающее окно
let modal = document.querySelector(".modal"),
    modalPrev = document.querySelector(".modal__prev"),
    modalBox = document.querySelector(".modal__box"),
    modalBtnArr = document.querySelectorAll("[data-modal]");

modalBtnArr.forEach(element => {
    element.addEventListener("click", modalAdd);
});

modalPrev.addEventListener("click", modalDel);

async function modalAdd() {
    const promise = new Promise(async (resolve, reject) => {
        let modalName = this.dataset.modal,
            modalItem = await fetch(`https://nautz.ru/new-constructor/modal/_${modalName}.html`);
        modal.classList.add("active");

        if (this.dataset.modal == "form") {
            modal.classList.add("full");
            calc_total("Худи", finalPrice)
            // закончил квиз
            if (typeof (window.ym) != "undefined") {
                ym(66248908, 'reachGoal', 'quiz_finish')
            }
            window.statisticDataSendedCounter = 1
            closeIt()
        } else {
            modal.classList.remove("full");
        }
        if (modalItem.ok) {
            let text = await modalItem.text();
            modalBox.innerHTML = text;
            createTempOrder();
            if (this.dataset.modal === "form") {
                if (typeof formFlag === "undefined") {
                    await $.getScript("https://nautz.ru/new-constructor/js/_form.js");
                }
                resolve(modalForm())
            }
        }
    });
    promise.then()
}

function modalDel() {
    window.cli_session = uuidv4();
    modal.classList.add("del")
    setTimeout(function () {
        modal.classList.remove("del")
        modal.classList.remove("active")
    }, 50);
}
function createTempOrder(){
    var for_api = {};

    var form = $("#modal-form");

    for_api.product_brand = 129; // Hooli
    for_api.amount = finalPrice;

    var params = {};
    for (let key in choiceElem) {
        params[choiceKeyRu[key]] = choiceElem[key][1];
    }

    for_api.params = params;

    $.ajax({
        url: 'https://nautz.ru/api/bitrix/create_temp_order_nc', // тут подразумевается что пока скрипт будет тестироваться на nautz, потом на тильде надо будет указвать полный путь
        type: 'post',
        dataType: 'json',
        data: for_api,
    })
    .done(function(data) {
        console.log(data);

        $('<input></input>', {
            'type': 'hidden',
            'name': 'InvoiceId',
        }).val(data.id).appendTo(form);

        $('<input></input>', {
            'type': 'hidden',
            'name': 'InvoiceNoDB',
        }).val(data.invoice_id).appendTo(form);

    })
    .fail(function() {
        console.log("error");
    });
}
// Go to the next item

$('.btn_next').click(clickNext);
$('.owl-nav .owl-next').click(clickNextNone);
$('.owl-nav .owl-prev').click(clickPrevNone);

function clickNext() {
    let slide = document.querySelector(".owl-item.active.center").children[0]
    if (slide.dataset.hash == "growth") {
        btnNext.classList.add("none");
        let btnCart = document.querySelector(".btn_ico_cart");
        btnCart.classList.add("active")
        btnCart.classList.remove("disable")
    } else {
        $('.parameters-box__head').trigger('next.owl.carousel', [200]);
        $('.parameters-box__main').trigger('next.owl.carousel', [200]);
    }
}
function clickNextNone() {

    setTimeout(function () {
        if (document.querySelector(".owl-item.active.center").classList.contains("disable")) {
            $('.parameters-box__head').trigger('next.owl.carousel', [200]);
            $('.parameters-box__main').trigger('next.owl.carousel', [200]);
        }
    }, 20);
}
function clickPrevNone() {
    setTimeout(function () {
        if (document.querySelector(".owl-item.active.center").classList.contains("disable")) {
            $('.parameters-box__head').trigger('prev.owl.carousel', [200]);
            $('.parameters-box__main').trigger('prev.owl.carousel', [200]);
        }
    }, 20);
}




//Пишем куки
function cookieAdd() {
    let choiceSetJson = JSON.stringify(choiceElem);
    setCookie(cookieName, choiceSetJson, { expires: Date(140) });
}
//Заполняем прогресс констуктора из кук
function startHudi() {
    for (let key in choiceElem) {
        if (choiceElem[key][2]) {
            //навигация
            let elem = document.querySelector(`.parameters-box__head [data-hash*=${key}]`).parentNode;
            elem.classList.add("check");
        }
        //что выбрано елементы
        let colorArr = document.querySelectorAll(`.choice [data-choice*=${key}] li`);
        colorArr.forEach(element => {
            element.classList.remove("active")
            if (element.getAttribute("data-item") == choiceElem[key][0]) {
                element.classList.add("active")
            }
        });
        //Стили
        let style = document.querySelector('style'),
            attr = key;
        if (attr == "sleeve-left") {
            let designItem = ".design-box__sleeve_left";
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "sleeve-right") {
            designItem = ".design-box__sleeve_right"
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "cuff-left") {
            designItem = ".design-box__cuff_left"
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "cuff-right") {
            designItem = ".design-box__cuff_right"
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "front") {
            designItem = ".design-box__length"
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "pocket") {
            designItem = ".design-box__pocket"
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "bottom") {
            designItem = ".design-box__bottom"
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }
        if (attr == "hood") {
            designItem = ".design-box__hood";
            designItemHood = ".design-box__hood-person";
            style.innerHTML += `${designItem} .color-shadow-dark, ${designItem} .color-shadow, ${designItem} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
            style.innerHTML += `${designItemHood} .color-shadow-dark, ${designItemHood} .color-shadow, ${designItemHood} .color-base {fill: ${choiceElem[attr][0]}; stroke: ${choiceElem[attr][0]};}`;
        }

    }
}
async function startSVG() {
    //загружаем SVG
    hoodLegs = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/legs.svg`);
    hudiLogo = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/logo.svg`);
    cuffLeft = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/cuff-left.svg`);
    cuffRight = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/cuff-right.svg`);
    sleeveLeft = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/sleeve-left.svg`);
    sleeveRight = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/sleeve-right.svg`);
    sleeveRight = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/sleeve-right.svg`);
    hudiLength = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/length.svg`);
    hudiBottom = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/bottom.svg`);
    hudiPocket = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/pocket.svg`);
    hudiHood = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/hood.svg`);
    hudiHoodPerson = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/hood-person.svg`);

    if (hudiLogo.ok) {
        let text = await hudiLogo.text();
        let urlDoom = document.querySelector(".design-box__logo");
        urlDoom.innerHTML = text;
    }
    if (hoodLegs.ok) {
        let text = await hoodLegs.text();
        let urlDoom = document.querySelector(".design-box__legs");
        urlDoom.innerHTML = text;
    }
    if (cuffLeft.ok) {
        let text = await cuffLeft.text();
        let urlDoom = document.querySelector(".design-box__cuff_left");
        urlDoom.innerHTML = text;
    }
    if (cuffRight.ok) {
        let text = await cuffRight.text();
        let urlDoom = document.querySelector(".design-box__cuff_right");
        urlDoom.innerHTML = text;
    }
    if (sleeveLeft.ok) {
        let text = await sleeveLeft.text();
        let urlDoom = document.querySelector(".design-box__sleeve_left");
        urlDoom.innerHTML = text;
    }
    if (sleeveRight.ok) {
        let text = await sleeveRight.text();
        let urlDoom = document.querySelector(".design-box__sleeve_right");
        urlDoom.innerHTML = text;
    }
    if (hudiLength.ok) {
        let text = await hudiLength.text();
        let urlDoom = document.querySelector(".design-box__length");
        urlDoom.innerHTML = text;
    }
    if (hudiBottom.ok) {
        let text = await hudiBottom.text();
        let urlDoom = document.querySelector(".design-box__bottom");
        urlDoom.innerHTML = text;
    }
    if (hudiHood.ok) {
        let text = await hudiHood.text();
        let urlDoom = document.querySelector(".design-box__hood");
        urlDoom.innerHTML = text;
    }
    if (hudiHoodPerson.ok) {
        let text = await hudiHoodPerson.text();
        let urlDoom = document.querySelector(".design-box__hood-person");
        urlDoom.innerHTML = text;
    }
    if (hudiPocket.ok) {
        let text = await hudiPocket.text();
        let urlDoom = document.querySelector(".design-box__pocket");
        urlDoom.innerHTML = text;
    }
}
startSVG()
startHudi();
progres();
basePriceHTML();
//рандом
let randomBtn = document.getElementById("random-btn"),
    randomElem = ["sleeve-left", "sleeve-right", "cuff-right", "cuff-left", "front", "back", "hood", "pocket", "bottom"];
randomBtn.onclick = randomHudi;
window.imLuckyCounter = 0
function randomHudi() {
    for (let key in randomElem) {
        numRandom = Math.floor(Math.random() * parametersAllArr["color"].length);
        choiceElem[randomElem[key]] = parametersAllArr["color"][numRandom];
    }
    window.imLuckyCounter++;
    localStorage.imLuckyCounter = window.imLuckyCounter
    startHudi();
    cookieAdd();
}


//hover подсказка
let choiceImgArr = document.querySelectorAll(".choice-img li"),
    choiceImgInfo;
choiceImgArr.forEach(element => {
    element.addEventListener("mouseenter", choiceImginfoAdd);
    element.addEventListener("mouseleave", choiceImginfoDel);
});

function choiceImginfoAdd() {
    choiceImgInfo = document.createElement("div"),
        info = this.dataset.title,
        price = this.dataset.price;
    if (this.dataset.price) {
        choiceImgInfo.innerHTML = `<p>${info}</p><span>${price} ₽</span>`
    }
    else {
        choiceImgInfo.innerHTML = `<p>${info}</p>`
    }
    choiceImgInfo.className = "choice-img__hover";
    this.append(choiceImgInfo)
}
function choiceImginfoDel() {
    this.removeChild(choiceImgInfo)
}
//нужна для работы оплаты. добавляет товар в тильдовскую корзину нужно раскомментировать
function calc_total(length, summa) {
    
        if ("yes" == window.tcart_initted) {
            window.tcart.amount = summa;
            window.tcart.prodamount = summa;
            window.tcart.total = summa;

            window.tcart.products[0] = {
                amount: summa,
                name: 'Услуга по пошиву ' + length,
                price: summa,
                quantity: 1
            };
            return
        } else {
            var cart_main_div = $(".t706").parent("div").attr("id");
            var div_num = cart_main_div.slice(3);
            t_onFuncLoad('tcart__init', function () {
                tcart__init(div_num, '');
                setTimeout(calc_total(length, summa), 200)
            });
        } 

}
/*function sendFacebookEvents(event, event_id, customData) {
    var data_to_send = {
        "clientUserAgent": window.navigator.userAgent,
        "fbp": getCookie("_fbp"),
        "url": window.location.href,
        "event": event,
        "event_id": event_id,
        "customData": customData,
    }
    $.ajax({
        url: 'https://nautz.ru/api/facebook_test_test',
        type: 'post',
        dataType: 'json',
        data: data_to_send,
    })
        .done(function (data) {

        })
        .fail(function (data) {
            // console.log("error");
        })
        .always(function () {
            // console.log("complete");
        });
}*/
// зашли на страницу
var pv = 0
if (pv == 0) {
    var date_for_event = new Date();
    var eventId = "mev" + date_for_event.getTime();
    if (typeof (fbq) != "undefined") {
        fbq('track', 'PageView', {}, { eventID: eventId });
    }
    // sendFacebookEvents('PageView', eventId);

    // начал квиз
    if (typeof (window.gtag) != "undefined") {
        gtag('event', 'start_quiz');
    }
    if (typeof (window.ym) != "undefined") {
        ym(66248908, 'reachGoal', 'start_quiz')
    }
    pv++
}
// начал оплату
$('.constructor-hoodie').on('click', '#formnewconstructor button', function (e) {
    var date_for_event = new Date();
    var eventId = "mev" + date_for_event.getTime();
    if (typeof (fbq) != "undefined") {
        fbq('track', 'InitiateCheckout', {}, { eventID: eventId });
    }
    // sendFacebookEvents('InitiateCheckout', eventId, window.customData);

    if (typeof (window.gtag) != "undefined") {
        gtag('event', 'startpayment', { 'value': window.tcart.amount });
    }
    if (typeof (window.ym) != "undefined") {
        ym(66248908, 'reachGoal', 'startpayment');
    }
    window.statisticDataSendedCounter = 3
    closeIt()
})
//отправка статистики
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function mevGetCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2){ // если _ga найден в строке кук
        return parts.pop().split(';').shift();
    } else if(name=="_ga") { // если не найден, генерируем свой uid
        let _ga = uuidv4();
        setCookie("_ga", _ga, { expires: Date(14) });
        return _ga;
    }else{
        return;
    }
}
function closeIt() {
    var linkClick = false;
    $("a").bind("click", () => {
        linkClick = true;
    });

    window.onbeforeunload = () => {
        if (!linkClick) {
            localStorage.status = 'Закрыли вкладку';
        }
    };
    if (!sessionStorage.getItem('status')) {
        var analyticsData = {
            'params':Object.assign({}, choiceElem)
        };
        var mne_povez = false
        if(!localStorage.getItem('imLuckyCounter')){
            if(window.imLuckyCounter>0) mne_povez = true
            analyticsData.params.mne_povezet = [window.imLuckyCounter,window.imLuckyCounter,mne_povez]
        }else{
            if(localStorage.getItem('imLuckyCounter')>0) mne_povez = true
            analyticsData.params.mne_povezet = [localStorage.getItem('imLuckyCounter'),localStorage.getItem('imLuckyCounter'),mne_povez]
        }
        
        analyticsData.constructor_id = 'hudi_color'
        analyticsData.uid = mevGetCookie("_ga")
        analyticsData.url = window.location.href
        analyticsData.session_id = window.cli_session
        analyticsData.statisticDataSendedCounter = window.statisticDataSendedCounter
        var data = analyticsData
        $.post( "https://nautz.ru/api/bitrix/newConstructorStata", data, function(data ){ 
            
        })
    }
}
window.cli_session = uuidv4();
// window.onbeforeunload = closeIt;

/* отправка статистики
let analyticsData = choiceElem;
window.addEventListener("unload", function () {
    navigator.sendBeacon(".https://nautz.ru/new-constructor/statistics.php", JSON.stringify(analyticsData));
});
 */
