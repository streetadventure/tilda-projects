//сбрасываем hash
if (document.location.hash) {
    document.location.hash = ""
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
            items: 4,
            touchDrag: false,
            mouseDrag: false,
            pullDrag: false,
            freeDrag: false,
        },
        800: {
            items: 4,
        },
        400: {
            items: 3,
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
        ["#000000", "Noir", false, 0],
        ["#804E82", "Violet", false, 0],
        ["#E4CAF1", "Lavande", false, 0],
        ["#FDD9E8", "Guimauve", false, 0],
        ["#E5CCAE", "Sable", false, 0],
        ["#997D68", "Café", false, 0],
        ["#FFFFFF", "Blanc", false, 0],
        ["#BAC1BF", "Fumé", false, 0],
        ["#57555A", "Graphite", false, 0],
        ["#E42C36", "Rouge", false, 0],
        ["#FE6203", "Halloween", false, 0],
        ["#FFE270", "Jaune", false, 0],
        ["#F2EC7A", "Citron", false, 0],
        ["#E33D85", "Fuchsia", false, 0],
        ["#74C86A", "Vert citron", false, 0],
        ["#64762C", "Kaki", false, 0],
        ["#97A38F", "Olive", false, 0],
        ["#1F9480", "Emeraude", false, 0],
        ["#B3E2D8", "Tiffany", false, 0],
        ["#2E4393", "Bleu", false, 0],
        ["#83A3EC", "Cyan", false, 0],
        ["#BB847F", "Rose poudré", false, 0],
        ["#A2BEEE", "Jean poudré", false, 0],
        ["#91B4B8", "Menthe neigeuse", false, 0],
        ["#EDBFC1", "Pêche", false, 0],
        ["#FDAE97", "Corail", false, 0],
        ["#E2E4E6", "Mélange lait", false, 0],
        ["#E5E4EA", "Tofu", false, 0],
    ],
    cut: [
        ["bochonok", "Oversize", false, 0],
        ["pryamoy", "Droite", false, 0],
        ["classic", "Classique", false, 0]
    ],
    length: [
        ["long", "Longue", false, 0],
        ["midi", "Standard", false, 0],
        ["short", "Courte", false, 0],
        ["krop", "Crop", false, 0]
    ],
    bottom: [
        ["na-zatyashke-so-shnurkom", "Bande élastique avec cordon de serrage", false, 0],
        ["na-rezinke", "Bande élastique", false, 0],
        ["oborka", "Volant", false, 0],
        ["obrezanniy-kray", "Crop", false, 0],
        ["kashkorse", "Bande élastique décorative à côtes", false, 0],
        ["shirokiy-manzhet", "Large ourlet en tissu principal", false, 0],
        ["shov", "Sans bande", false, 0],
    ],
    bottomKrop: [
        ["na-zatyashke-so-shnurkom", "Bande élastique avec cordon de serrage", false, 0],
        ["na-rezinke", "Bande élastique", false, 0],
        ["obrezanniy-kray", "Crop", false, 0],
        ["shov", "Sans bande", false, 0],
    ],
    pocket: [
        ["pocket-no", "Pas de poches", false, 0],
        ["kenguru", "Poche kangourou", false, 0],
        ["na-grudi", "Poches à rabat avec patte", false, 0],
        ["bokovie", "Poches latérales", false, 0],
        ["taynik", "Poche cachée", false, 0],
    ],
    cuff: [
        ["na-rezinke", "Bande élastique", false, 0],
        ["obrezanniy", "Crop", false, 0],
        ["manshet-s-dirkoy", "Avec un trou dans le poignet", false, 0],
        ["kashkorse", "Bande élastique décorative à côtes", false, 0],
        ["shov", "Sans bande", false, 0]
    ],
    hood: [
        ["klassika-s-verevkami", "Classique avec cordon de serrage", false, 0],
        ["vnakhlest-bez-verovok", "Recouverte sans cordon de serrage", false, 0],
        ["anorak", "Anorak", false, 0],
        ["dvoynoy-vorotnik", "Double capuche", false, 0],
        ["anorak-dvoynoy", "Double capuche + anorak", false, 0],
        ["na-molnii", "Capuche à fermeture éclair", false, 0],
        ["s-molniyey-sboku", "Capuche latérale à fermeture éclair", false, 0],
        ["vnakhlest-vorotnik", "Capuche + col", false, 0],
        ["dino", "Capuche de dragon", false, 0],
        ["rabbit", "Capuche de lapin", false, 0],
        ["fox", "Capuche de chat", false, 0],
    ],
    fastener: [
        ["000000", "Noir", false, 0],
        ["FFFFFF", "Blanc", false, 0],
        ["804E82", "Violet", false, 0],
        ["997D68", "Café", false, 0],
        ["E4CAF1", "Lavande", false, 0],
        ["E5CCAE", "Sable", false, 0]
    ]
},
    choiceKeyRu = {
        color: ["Couleur"],
        cut: ["Style"],
        length: ["Longueur"],
        bottom: ["Bas"],
        pocket: ["Poche"],
        cuff: ["Poignet"],
        hood: ["Capuche"],
        cloth: ["Tissu"],
        embroidery: ["Broderie"],
        size: ["Taille"],
        fastener: ["Fermeture"],
        growth: ["Hauteur"],
        
    }
//Добавляем класс .human
document.querySelector(".display-selection .clothes").addEventListener('click', delHuman)
document.querySelector(".display-selection .person").addEventListener('click', addHuman)
function addHuman() {
    document.querySelector(".constructor-hoodie__design").classList.add("human")
}
function delHuman() {
    document.querySelector(".constructor-hoodie__design").classList.remove("human")
}
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
}
function animAdd() {
    document.querySelector(".title-choice").classList.add("title-anim")
}

//Активируем кнопки вперед назад красим пройденые пути а также где мы находимся
let lineProgress = document.querySelector('.parameters-progress__line-activ'),
    btnNext = document.querySelector('.btn-box .btn_next'),
    owlNext = document.querySelector('.owl-nav .owl-next'),
    owlPrev = document.querySelector('.owl-nav .owl-prev')
owlNext.classList.add('disable')

//btnNext.addEventListener('click', disableAdd)
owlNext.addEventListener('click', disableAdd)
owlPrev.addEventListener('click', disableAdd)

function disableAdd() {
    owlNext.classList.add('disable')
    // btnNext.classList.add('disable')
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
            hudiProgress -= 100 / progresSum
        }
    });
    lineProgress.style.width = hudiProgress + "%";

    if (progresOccupancy) {
        //  finishBtn.classList.remove("disable")
        btnNext.classList.add("none");

        let btnCart = document.querySelector(".btn_ico_cart");
        btnCart.classList.add("active")
        btnCart.classList.remove("disable")

    }
}
//Формирование цены
let basePrice = 99,
    finalPrice = 99,
    basePriceElem = document.querySelector(".parameters-box__footer .price span");
function basePriceHTML() {
    let priceItem = basePrice;
    for (let key in choiceElem) {
        if (choiceElem[key][3] === undefined) {
            choiceElem[key][3] = 0;
        }
        priceItem += Number(choiceElem[key][3]);
        finalPrice = priceItem;
        basePriceElem.innerHTML = new Intl.NumberFormat('ru-RU').format(priceItem);
    }
}
// Параметры по умолчанию
document.querySelector(".parameters-box__head [data-hash=fastener]").parentNode.classList.add("disable");
document.querySelector(".choice [data-choice=fastener]").parentNode.classList.add("disable");

let choiceElem,
    zipper = false,
    itemNum = 0,
    cookieName = 'hudi',
    choiceGetJson = getCookie(cookieName, json = true);

if (choiceGetJson) {
    choiceElem = choiceGetJson;
} else {
    choiceElem = {
        color: ["#997D68", "Café", false, 0],
        cut: ["pryamoy", "Droit", false, 0],
        length: ["midi", "Standard", false, 0],
        bottom: ["kashkorse", "Bande élastique décorative à côtes", false, 0],
        pocket: ["kenguru", "Poche kangourou", false, 0],
        cuff: ["kashkorse", "Bande élastique décorative à côtes", false, 0],
        hood: ["vnakhlest-bez-verovok", "Recouverte sans cordon de serrage", false, 0],
        cloth: ["no", "Sans poil", false, 0],
        // embroidery: ["no", "Не выбран", false, 0],
        size: ["no", "Aucun sélectionné", false, 0],
        growth: ["no", "Aucun sélectionné", false, 0],
    }
}

//Конструктор
async function choiceActive() {
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
    if (attr == "color") {
        choiceElem[attr] = [item, title, true, price];
        style = document.querySelector('style#forChangeColorCorrect');
        style.innerHTML = `.color-shadow-dark, .color-shadow, .color-base {fill: ${choiceElem[attr][0]} !important; stroke: ${choiceElem[attr][0]} !important;}`;
        choiceTitle("Цвет: ", choiceElem[attr][1]);

    }
    //Крой
    if (attr == "cut") {
        choiceElem[attr] = [item, title, true, price];
        let lengthItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem[attr][0]}/length/${choiceElem["length"][0]}.svg`),
            bottomItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem[attr][0]}/bottom/${choiceElem["length"][0]}/${choiceElem["bottom"][0]}.svg`),
            cuffItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem[attr][0]}/cuff/${choiceElem["cuff"][0]}.svg`);
        choiceTitle("Крой: ", choiceElem[attr][1]);
        if (lengthItem.ok) {
            let text = await lengthItem.text();
            let urlDoom = document.querySelector(".design-box__length");
            urlDoom.innerHTML = text;
        }
        if (bottomItem.ok) {
            let text = await bottomItem.text();
            let urlDoom = document.querySelector(".design-box__bottom");
            urlDoom.innerHTML = text;
        }
        if (cuffItem.ok) {
            let text = await cuffItem.text();
            let urlDoom = document.querySelector(".design-box__cuff");
            urlDoom.innerHTML = text;
        }

    }
    //Длина
    if (attr == "length") {
        choiceElem[attr] = [item, title, true, price];
        let lengthItem,
            bottomItem,
            pocketItem;
        if (item == "krop") {
            choiceElem["pocket"] = ["pocket-no", "Без карманов", false, 0];
            choiceElem["bottom"] = ["shov", "Шов", false, 0];
            lengthItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/length/${choiceElem[attr][0]}.svg`);
            bottomItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/bottom/${choiceElem[attr][0]}/${choiceElem["bottom"][0]}.svg`);
            pocketItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/pocket/${choiceElem["pocket"][0]}.svg`);
            document.querySelector(".parameters-box__head [data-hash=pocket]").parentNode.classList.add("disable");
            document.querySelector(".choice [data-choice=pocket]").parentNode.classList.add("disable");
        }
        else {
            // choiceElem["pocket"] = ["kenguru", "Кенгуру", 0];
            // choiceElem["bottom"] = ["kashkorse", "Декоративная резинка кашкорсе", 0];
            lengthItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/length/${choiceElem[attr][0]}.svg`);
            bottomItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/bottom/${choiceElem[attr][0]}/${choiceElem["bottom"][0]}.svg`);
            pocketItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/pocket/${choiceElem["pocket"][0]}.svg`);
            document.querySelector(".parameters-box__head [data-hash=pocket]").parentNode.classList.remove("disable");
            document.querySelector(".choice [data-choice=pocket]").parentNode.classList.remove("disable");
        }
        choiceTitle("length: ", choiceElem[attr][1]);
        if (lengthItem.ok) {
            let text = await lengthItem.text();
            let urlDoom = document.querySelector(".design-box__length");
            urlDoom.innerHTML = text;
        }
        if (bottomItem.ok) {
            let text = await bottomItem.text();
            let urlDoom = document.querySelector(".design-box__bottom");
            urlDoom.innerHTML = text;
        }
        if (pocketItem.ok) {
            let text = await pocketItem.text();
            let urlDoom = document.querySelector(".design-box__pocket");
            urlDoom.innerHTML = text;
        }
    }
    //Низ
    if (attr == "bottom") {
        choiceElem[attr] = [item, title, true, price];
        let bottomItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/bottom/${choiceElem["length"][0]}/${choiceElem[attr][0]}.svg`);
        choiceTitle("bottom: ", choiceElem[attr][1]);
        if (bottomItem.ok) {
            let text = await bottomItem.text();
            let urlDoom = document.querySelector(".design-box__bottom");
            urlDoom.innerHTML = text;
        }

    }
    //Карман
    if (attr == "pocket") {
        choiceElem[attr] = [item, title, true, price];
        let pocketItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/pocket/${choiceElem[attr][0]}.svg`);
        choiceTitle("pocket: ", choiceElem[attr][1]);
        if (pocketItem.ok) {
            let text = await pocketItem.text();
            let urlDoom = document.querySelector(".design-box__pocket");
            urlDoom.innerHTML = text;
        }

    }
    //Манжеты
    if (attr == "cuff") {
        choiceElem[attr] = [item, title, true, price];
        let cuffItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/cuff/${choiceElem[attr][0]}.svg`);
        choiceTitle("cuff: ", choiceElem[attr][1]);
        if (cuffItem.ok) {
            let text = await cuffItem.text();
            let urlDoom = document.querySelector(".design-box__cuff");
            urlDoom.innerHTML = text;
        }

    }
    //Капюшон
    if (attr == "hood") {
        choiceElem[attr] = [item, title, true, price];
        let hoodItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/hood/${choiceElem[attr][0]}.svg`);
        let hoodPersonItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/hood-person/${choiceElem[attr][0]}.svg`);
        choiceTitle("hood: ", choiceElem[attr][1]);
        if (hoodItem.ok) {
            let text = await hoodItem.text();
            let urlDoom = document.querySelector(".design-box__hood");
            urlDoom.innerHTML = text;
        }
        if (hoodPersonItem.ok) {
            let text = await hoodPersonItem.text();
            let urlDoom = document.querySelector(".design-box__hood-person");
            urlDoom.innerHTML = text;
        }
        if (item == "s-molniyey-sboku" || item == "na-molnii") {
            document.querySelector(".parameters-box__head [data-hash=fastener]").parentNode.classList.remove("disable");
            document.querySelector(".choice [data-choice=fastener]").parentNode.classList.remove("disable");

        }
        else {
            document.querySelector(".parameters-box__head [data-hash=fastener]").parentNode.classList.add("disable");
            document.querySelector(".choice [data-choice=fastener]").parentNode.classList.add("disable");
        }
    }
    //Молния
    if (attr == "fastener") {
        choiceElem[attr] = [item, title, true, price];
        choiceTitle("fastener: ", choiceElem[attr][1]);
    }
    //Начес
    if (attr == "cloth") {
        choiceElem[attr] = [item, title, true, price];
        choiceTitle("fabric: ", choiceElem[attr][1]);
    }
    //вышивка
    if (attr == "embroidery") {
        choiceElem[attr] = [item, title, true, price];
        choiceTitle("embroidery: ", choiceElem[attr][1]);
    }
    //Размер
    if (attr == "size") {
        choiceElem[attr] = [item, item, true, price];
        choiceTitle("size: ", choiceElem[attr][1]);

    }
    //Рост
    if (attr == "growth") {
        choiceElem[attr] = [item, item + " см", true, price];
        choiceTitle("height: ", choiceElem[attr][1]);
    }
    document.querySelector(".owl-item.active.center").classList.add("check");
    //Прогресс
    progres();
    //проверки на на детали по параметрам
    if (choiceElem["length"][0] == "short") {
        document.querySelector("[data-item=bokovie]").classList.add("none")
    } else {
        document.querySelector("[data-item=bokovie]").classList.remove("none")
    }
    if (choiceElem["length"][0] == "krop") {
        // document.querySelector("[data-choice=bottom] [data-item=oborka]").classList.add("none")
        document.querySelector("[data-choice=bottom] [data-item=shirokiy-manzhet]").classList.add("none")
        document.querySelector("[data-choice=bottom] [data-item=kashkorse]").classList.add("none")
    } else {
        // document.querySelector("[data-choice=bottom] [data-item=oborka]").classList.remove("none")
        document.querySelector("[data-choice=bottom] [data-item=shirokiy-manzhet]").classList.remove("none")
        document.querySelector("[data-choice=bottom] [data-item=kashkorse]").classList.remove("none")
    }
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
            modalItem = await fetch(`https://nautz.ru/new-constructor/modal/fr/oneof/_${modalName}.html`);
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
                    await $.getScript("https://nautz.ru/new-constructor/js/fr/oneof/_form.js");
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
// Go to the next item
function createTempOrder(){
    var for_api = {};

    var form = $("#modal-form");

    for_api.product_brand = 2363; // Hooli
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
    setCookie(cookieName, choiceSetJson, { expires: Date(14) });
}
//Заполняем прогресс констуктора из кук
async function startHudi() {
    for (let key in choiceElem) {
        if (choiceElem[key][2]) {
            //навигация
            let elem = document.querySelector(`.parameters-box__head [data-hash*=${key}]`).parentNode
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
    }

    //собираем svg
    let style = document.querySelector('style#forChangeColorCorrect');
    style.innerHTML = `.color-shadow-dark, .color-shadow, .color-base {fill: ${choiceElem["color"][0]} !important; stroke: ${choiceElem["color"][0]} !important;}`;
    let bottomItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/bottom/${choiceElem["length"][0]}/${choiceElem["bottom"][0]}.svg`),
        lengthItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/length/${choiceElem["length"][0]}.svg`),
        pocketItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/pocket/${choiceElem["pocket"][0]}.svg`),
        cuffItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/cuff/${choiceElem["cuff"][0]}.svg`),
        hoodItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/hood/${choiceElem["hood"][0]}.svg`),
        hoodPersonItem = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/${choiceElem["cut"][0]}/hood-person/${choiceElem["hood"][0]}.svg`),
        hoodLegs = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/legs.svg`);
    hudiLogo = await fetch(`https://nautz.ru/new-constructor/img/svg/gerl/logo.svg`);
    //Проверка на кроп
    if (choiceElem["length"][0] == "krop") {
        document.querySelector(".parameters-box__head [data-hash=pocket]").parentNode.classList.add("disable");
        document.querySelector(".choice [data-choice=pocket]").parentNode.classList.add("disable");
    } else {
        document.querySelector(".parameters-box__head [data-hash=pocket]").parentNode.classList.remove("disable");
        document.querySelector(".choice [data-choice=pocket]").parentNode.classList.remove("disable");
    }
    //Проверка на молнию
    if (choiceElem["hood"][0] == "s-molniyey-sboku" || choiceElem["hood"][0] == "na-molnii") {
        document.querySelector(".parameters-box__head [data-hash=fastener]").parentNode.classList.remove("disable");
        document.querySelector(".choice [data-choice=fastener]").parentNode.classList.remove("disable");
    } else {
        document.querySelector(".parameters-box__head [data-hash=fastener]").parentNode.classList.add("disable");
        document.querySelector(".choice [data-choice=fastener]").parentNode.classList.add("disable");
    }
    //Проверка на длину
    if (choiceElem["length"][0] == "short") {
        document.querySelector("[data-item=bokovie]").classList.add("none")
    }
    if (choiceElem["length"][0] == "krop") {
        // document.querySelector("[data-choice=bottom] [data-item=oborka]").classList.add("none")
        document.querySelector("[data-choice=bottom] [data-item=shirokiy-manzhet]").classList.add("none")
        document.querySelector("[data-choice=bottom] [data-item=kashkorse]").classList.add("none")
    }
    //
    if (bottomItem.ok) {
        let text = await bottomItem.text();
        let urlDoom = document.querySelector(".design-box__bottom");
        urlDoom.innerHTML = text;
    }
    if (lengthItem.ok) {
        let text = await lengthItem.text();
        let urlDoom = document.querySelector(".design-box__length");
        urlDoom.innerHTML = text;
    }
    if (pocketItem.ok) {
        let text = await pocketItem.text();
        let urlDoom = document.querySelector(".design-box__pocket");
        urlDoom.innerHTML = text;
    }
    if (cuffItem.ok) {
        let text = await cuffItem.text();
        let urlDoom = document.querySelector(".design-box__cuff");
        urlDoom.innerHTML = text;
    }
    if (hoodItem.ok) {
        let text = await hoodItem.text();
        let urlDoom = document.querySelector(".design-box__hood");
        urlDoom.innerHTML = text;
    }
    if (hoodPersonItem.ok) {
        let text = await hoodPersonItem.text();
        let urlDoom = document.querySelector(".design-box__hood-person");
        urlDoom.innerHTML = text;
    }
    if (hoodLegs.ok) {
        let text = await hoodLegs.text();
        let urlDoom = document.querySelector(".design-box__legs");
        urlDoom.innerHTML = text;
    }
    if (hudiLogo.ok) {
        let text = await hudiLogo.text();
        let urlDoom = document.querySelector(".design-box__logo");
        urlDoom.innerHTML = text;
    }
}
startHudi();
progres();
basePriceHTML()
//рандом
let randomBtn = document.getElementById("random-btn");
randomBtn.onclick = randomHudi;
window.imLuckyCounter = 0
function randomHudi() {
    for (let key in parametersAllArr) {
        let element = parametersAllArr[key];
        let randomNum = Math.floor(Math.random() * element.length);
        if (choiceElem[key]) {
            for (let index = 0; index < choiceElem[key].length; index++) {
                choiceElem[key][index] = element[randomNum][index]
                if (index == 2) {
                    choiceElem[key][index] = true
                }
            }
        }
    }
    if (choiceElem["length"][0] === "krop") {
        choiceElem["pocket"][0] = "pocket-no";
        let randomBottom = Math.floor(Math.random() * parametersAllArr["bottomKrop"].length);
        for (let index = 0; index < parametersAllArr["bottomKrop"].length; index++) {

            choiceElem["bottom"][index] = parametersAllArr["bottomKrop"][randomBottom][index]
        }
    }
    if (choiceElem["length"][0] === "short" && choiceElem["pocket"][0] === "bokovie") {
        choiceElem["pocket"][0] = "kenguru";
    }
    window.imLuckyCounter++;
    localStorage.imLuckyCounter = window.imLuckyCounter
    startHudi();
    basePriceHTML();
    cookieAdd();
}
//меняем цвет
let areaColor = document.querySelector(".design-box");

areaColor.addEventListener('dblclick', nextColor);
function nextColor() {
    let colorArr = parametersAllArr["color"],
        colorItem = choiceElem["color"];
    for (let index = 0; index < colorArr.length; index++) {
        if (colorItem[0] == colorArr[index][0]) {
            if (index == (colorArr.length - 1)) {
                for (let i = 0; i < colorItem.length; i++) {
                    colorItem[i] = colorArr[0][i]
                }
                break

            } else {
                for (let i = 0; i < colorItem.length; i++) {
                    colorItem[i] = colorArr[index + 1][i];
                }
                break
            }
        }
    }
    startHudi();
    basePriceHTML();
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
        choiceImgInfo.innerHTML = `<p>${info}</p><span>${price} €</span>`
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
//Нужно раскомментировать (calc_total также см в коде где фция вызываеться)
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
            localStorage.status = 'Closed the tab';
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
        
        analyticsData.constructor_id = 'hudi'
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


// отправка статистики
/*let analyticsData = {'statistic':choiceElem};
window.addEventListener("unload", function () {
    navigator.sendBeacon("https://nautz.ru/api/bitrix/newConstructorStata", analyticsData);
});*/

 
