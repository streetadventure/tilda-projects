<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="shortcut icon" href="http://nautz.loc/new-constructor/img/favicon.ico" type="image/x-icon" />
    <title>Конструктор Худи</title>
    <link rel="stylesheet" href="http://nautz.loc/new-constructor/css/index.min.css?v=<?= time() ?>">
    <style></style>
</head>

<body>
    <header>

    </header>
    <div class="constructor-hoodie">
        <div class="container">
            <div class="constructor-hoodie__design human">
                <div class="display-selection">
                    <div class="clothes"><img src='http://nautz.loc/new-constructor/img/ico-1.png' alt='img' srcset='http://nautz.loc/new-constructor/img/svg/ico-1.svg'></div>
                    <div class="person"><img src='http://nautz.loc/new-constructor/img/ico-2.png' alt='img' srcset='http://nautz.loc/new-constructor/img/svg/ico-2.svg'></div>
                </div>
                <div class="hoodie-nav_bottom">
                    <img src='http://nautz.loc/new-constructor/img/random.png' id="random-btn" alt='img' srcset='http://nautz.loc/new-constructor/img/svg/random.svg'>
                    <div class="clue">?</div>
                </div>
                <div class="title-choice title-anim">
                    <p><span></span> <b>Всего 10 простых шагов<br>и худи твое!</b></p>
                </div>
                <div class="design-box">
                    <div class="design-box__legs">
                    </div>
                    <div class="design-box__cuff">
                    </div>
                    <div class="design-box__length">
                    </div>
                    <div class="design-box__bottom">
                    </div>
                    <div class="design-box__pocket">
                    </div>
                    <div class="design-box__logo">
                    </div>
                    <div class="design-box__hood-person">
                    </div>
                    <div class="design-box__hood">
                    </div>
                </div>
            </div>
            <div class="constructor-hoodie__parameters">
                <!-- <div class="parameters-progress">
                    <div class="parameters-progress__line">
                        <div class="parameters-progress__line-activ" style="width: 0%;"></div>
                    </div>
                    <a href="#cut" class="btn_next disable">Далее</a>
                </div> -->
                <div class="parameters-box">
                    <div class="parameters-box__head owl-carousel">
                        <a href="#color" class="item" data-hash="color">
                            <p>Цвет</p>
                        </a>
                        <a href="#cut" class="item" data-hash="cut">
                            <p>крой</p>
                        </a>
                        <a href="#length" class="item" data-hash="length">
                            <p>длина</p>
                        </a>
                        <a href="#bottom" class="item" data-hash="bottom">
                            <p>низ</p>
                        </a>
                        <a href="#pocket" class="item" data-hash="pocket" data-optional="yes">
                            <p>карман</p>
                        </a>
                        <a href="#cuff" class="item" data-hash="cuff">
                            <p>Манжеты</p>
                        </a>
                        <a href="#hood" class="item" data-hash="hood">
                            <p>Капюшон</p>
                        </a>
                        <a href="#fastener" class="item" data-hash="fastener" data-optional="yes">
                            <p>молния</p>
                        </a>
                        <a href="#cloth" class="item" data-hash="cloth">
                            <p>Ткань</p>
                        </a>
                        <a href="#embroidery" class="item" data-hash="embroidery">
                            <p>Вышивка</p>
                        </a>
                        <a href="#size" class="item" data-hash="size">
                            <p>Размер</p>
                        </a>
                        <a href="#growth" class="item" data-hash="growth">
                            <p>рост</p>
                        </a>
                    </div>
                    <div class="parameters-box__mob"></div>
                    <div class="parameters-box__main owl-carousel">
                        <div class="choice" data-hash="color">
                            <div class="choice-color" data-choice="color">
                                <ul class="choice-color__free">
                                    <li data-title="Черный" data-item="#000000" style="background-color: #000000"></li>
                                    <li data-title="Фиолет" data-item="#804E82" style="background-color: #804E82"></li>
                                    <li data-title="Лаванда" data-item="#E4CAF1" style="background-color: #E4CAF1"></li>
                                    <li data-title="Маршмеллоу" data-item="#FDD9E8" style="background-color: #FDD9E8"></li>
                                    <li data-title="Песок" data-item="#E5CCAE" style="background-color: #E5CCAE"></li>
                                    <li data-title="Кофе" data-item="#997D68" style="background-color: #997D68"></li>
                                </ul>
                                <ul class="choice-color__price">
                                    <li data-title="Белый" data-item="#FFFFFF" style="background-color: #FFFFFF" data-price="1000"></li>
                                    <li data-title="Дымчатый" data-item="#BAC1BF" style="background-color: #BAC1BF;" data-price="1000"></li>
                                    <li data-title="Графит" data-item="#57555A" style="background-color: #57555A" data-price="1000"></li>
                                    <li data-title="Красный" data-item="#E42C36" style="background-color: #E42C36" data-price="1000"></li>
                                    <li data-title="Хеллуин" data-item="#FE6203" style="background-color: #FE6203" data-price="1000"></li>
                                    <li data-title="Желтый" data-item="#FFE270" style="background-color: #FFE270" data-price="1000"></li>
                                    <li data-title="Лимонный" data-item="#F2EC7A" style="background-color: #F2EC7A" data-price="1000"></li>
                                    <li data-title="Фуксия" data-item="#E33D85" style="background-color: #E33D85" data-price="1000"></li>
                                    <li data-title="Лайм" data-item="#74C86A" style="background-color: #74C86A" data-price="1000"></li>
                                    <li data-title="Хаки" data-item="#64762C" style="background-color: #64762C" data-price="1000"></li>
                                    <li data-title="Оливка" data-item="#97A38F" style="background-color: #97A38F" data-price="1000"></li>
                                    <li data-title="Изумруд" data-item="#1F9480" style="background-color: #1F9480" data-price="1000"></li>
                                    <li data-title="Тиффани" data-item="#B3E2D8" style="background-color: #B3E2D8" data-price="1000"></li>
                                    <li data-title="Синий" data-item="#2E4393" style="background-color: #2E4393" data-price="1000"></li>
                                    <li data-title="Голубой" data-item="#83A3EC" style="background-color: #83A3EC" data-price="1000"></li>
                                    <li data-title="Пыльная роза" data-item="#BB847F" style="background-color: #BB847F" data-price="1000"></li>
                                    <li data-title="Пыльный деним" data-item="#A2BEEE" style="background-color: #A2BEEE" data-price="1500"></li>
                                    <li data-title="Снежная мята" data-item="#91B4B8" style="background-color: #91B4B8" data-price="1500"></li>
                                    <li data-title="Персик" data-item="#EDBFC1" style="background-color: #EDBFC1" data-price="1500"></li>
                                    <li data-title="Коралл" data-item="#FDAE97" style="background-color: #FDAE97" data-price="1500"></li>
                                    <li data-title="Молочный меланж" data-item="#E2E4E6" style="background-color: #E2E4E6" data-price="1500"></li>
                                    <li data-title="Тофу" data-item="#E5E4EA" style="background-color: #E5E4EA" data-price="1500"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="choice" data-hash="cut">
                            <div class="choice-img" data-choice="cut">
                                <ul>
                                    <li data-item="bochonok" data-title="Бочонок">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cut/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cut/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="pryamoy" data-title="Прямой">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cut/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cut/img-3.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="classic" data-title="Классика">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cut/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cut/img-2.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-1.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-1.jpg">
                                    </picture>
                                    <p>Сейчас еще <span class="num-random">25</span> человек собирают худи в конструкторе!</p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="length">
                            <div class="choice-img" data-choice="length">
                                <ul>
                                    <li data-item="long" data-title="Длинный">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/length/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/length/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="midi" data-title="Средний">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/length/img-4.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/length/img-4.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="short" data-title="Короткий">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/length/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/length/img-2.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="krop" data-title="Кроп">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/length/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/length/img-3.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-2.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-2.jpg">
                                    </picture>
                                    <p>Отслеживай путь своего худи на произвостве в личном кабинете!</p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="bottom">
                            <div class="choice-img" data-choice="bottom">
                                <ul>
                                    <li data-item="na-zatyashke-so-shnurkom" data-title="На затяжке со шнурком">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="na-rezinke" data-title="На резинке">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-2.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="oborka" data-title="Оборка">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-3.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="obrezanniy-kray" data-title="Обрезанный край">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-4.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-4.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="kashkorse" data-title="Декоративная резинка кашкорсе">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-5.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-5.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="shirokiy-manzhet" data-title="Широкий манжет из основной ткани">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-6.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-6.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="shov" data-title="Шов">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/bottom/img-7.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/bottom/img-7.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-2.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-2.jpg">
                                    </picture>
                                    <p>Отслеживай путь своего худи на произвостве в личном кабинете!</p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="pocket">
                            <div class="choice-img" data-choice="pocket">
                                <ul>
                                    <li data-item="pocket-no" data-title="Без карманов">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/pocket/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/pocket/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="kenguru" data-title="Кенгуру">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/pocket/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/pocket/img-2.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="na-grudi" data-title="Накладные с клапанами">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/pocket/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/pocket/img-3.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="bokovie" data-title="С сбоку">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/pocket/img-4.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/pocket/img-4.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="taynik" data-title="Тайник">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/pocket/img-5.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/pocket/img-5.jpg">
                                        </picture>
                                    </li>
                                </ul>
                                <p class="choice-more" data-modal="more">Подробнее</p>
                                <p class="disable">Если вы хотите добавить карман то <a href="#length">измените длину</a></p>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-3.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-3.jpg">
                                    </picture>
                                    <p>Персональный менеджер ответит на твои вопросы в <a href="#" target="_blank">чате!</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="cuff">
                            <div class="choice-img" data-choice="cuff">
                                <ul>
                                    <li data-item="na-rezinke" data-title="На резинке">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cuff/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cuff/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="obrezanniy" data-title="Обрезанный край">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cuff/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cuff/img-2.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="manshet-s-dirkoy" data-title="С дыркой в манжете">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cuff/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cuff/img-3.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="kashkorse" data-title="Декоративная резинка кашкорсе">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cuff/img-4.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cuff/img-4.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="shov" data-title="Шов">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cuff/img-5.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cuff/img-5.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-3.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-3.jpg">
                                    </picture>
                                    <p>Персональный менеджер ответит на твои вопросы в <a href="#" target="_blank">чате!</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="hood">
                            <div class="choice-img" data-choice="hood">
                                <ul>
                                    <li data-item="klassika-s-verevkami" data-title="Классический с веревками">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-11.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-11.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="vnakhlest-bez-verovok" data-title="Внахлест без веревок">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-3.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="anorak" data-title="Анорак">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="dvoynoy-vorotnik" data-title="Двойной">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-4.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-4.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="anorak-dvoynoy" data-title="Анорак+двойной капюшон">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-2.jpg">
                                        </picture>
                                    </li>
                                    <!-- <li data-item="s-zapahom" data-title="На запах">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-12.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-12.jpg">
                                        </picture>
                                    </li> -->
                                    <li data-item="na-molnii" data-title="На молнии" data-price="490">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-8.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-8.jpg">
                                        </picture>
                                    </li>

                                    <li data-item="s-molniyey-sboku" data-title="с молнией сбоку" data-price="490">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-9.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-9.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="vnakhlest-vorotnik" data-title="Капюшон + воротник" data-price="490">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-10.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-10.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="dino" data-title="Дракон" data-price="700">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-5.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-5.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="rabbit" data-title="Зайка" data-price="700">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-6.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-6.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="fox" data-title="Кошка" data-price="700">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/hood/img-7.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/hood/img-7.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="choice" data-hash="fastener">
                            <div class="choice-img" data-choice="fastener">
                                <ul>
                                    <li data-item="000000" data-title="Черный">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/fastener/000000.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/fastener/000000.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="FFFFFF" data-title="Белый">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/fastener/FFFFFF.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/fastener/FFFFFF.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="804E82" data-title="Фиолет">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/fastener/804E82.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/fastener/804E82.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="997D68" data-title="Кофе">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/fastener/997D68.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/fastener/997D68.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="E4CAF1" data-title="Лаванда">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/fastener/E4CAF1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/fastener/E4CAF1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="E5CCAE" data-title="Песок">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/fastener/E5CCAE.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/fastener/E5CCAE.jpg">
                                        </picture>
                                    </li>
                                </ul>
                                <p class="disable">Чтоб изменить цвет выберите <a href="#hood">капюшон с молнией</a></p>
                            </div>
                        </div>
                        <div class="choice" data-hash="cloth">
                            <div class="choice-img" data-choice="cloth">
                                <ul class="choice-img__cloth">
                                    <li data-item="no" data-title="Без начеса - более легкий" data-price="1000">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cloth/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cloth/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="yes" data-title="С начесом - теплый, лучше держит форму">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/cloth/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/cloth/img-2.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-1.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-1.jpg">
                                    </picture>
                                    <p>Сейчас еще <span class="num-random">25</span> человек собирают худи в конструкторе!</p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="embroidery">
                            <div class="choice-img" data-choice="embroidery">
                                <ul class="choice-img">
                                    <li data-item="embroidery-no" data-title="Без вышивки">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/embroidery/img-3.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/embroidery/img-3.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="na-grudi" data-title="Спереди на груди" data-price="300">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/embroidery/img-6.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/embroidery/img-6.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="na-kapushone" data-title="Hooli сбоку на капюшоне" data-price="300">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/embroidery/img-1.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/embroidery/img-1.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="s-zadi" data-title="Hooli сзади на лопатке" data-price="300">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/embroidery/img-2.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/embroidery/img-2.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="kartinka" data-title="Печать своей картинки" data-price="2490">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/embroidery/img-4.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/embroidery/img-4.jpg">
                                        </picture>
                                    </li>
                                    <li data-item="svoia-vyshivka" data-title="Своя вышивка" data-price="2490">
                                        <picture>
                                            <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/params/embroidery/img-5.webp">
                                            <img alt="img" src="http://nautz.loc/new-constructor/img/params/embroidery/img-5.jpg">
                                        </picture>
                                    </li>
                                </ul>
                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-1.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-1.jpg">
                                    </picture>
                                    <p>Сейчас еще <span class="num-random">25</span> человек собирают худи в конструкторе!</p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="size">
                            <div class="choice-size" data-choice="size">
                                <ul>
                                    <li data-item="XS">
                                        <p>xs</p>
                                    </li>
                                    <li data-item="S">
                                        <p>s</p>
                                    </li>
                                    <li data-item="M">
                                        <p>m</p>
                                    </li>
                                    <li data-item="L">
                                        <p>l</p>
                                    </li>
                                    <li data-item="X">
                                        <p>x</p>
                                    </li>
                                    <li data-item="XL">
                                        <p>xl</p>
                                    </li>
                                    <li data-item="XXL">
                                        <p>xxl</p>
                                    </li>
                                    <li data-item="3XL">
                                        <p>3xl</p>
                                    </li>
                                    <li data-item="4XL">
                                        <p>4xl</p>
                                    </li>
                                    <li data-item="5XL">
                                        <p>5xl</p>
                                    </li>
                                    <li data-item="6XL">
                                        <p>6xl</p>
                                    </li>
                                    <li data-item="7XL">
                                        <p>7xl</p>
                                    </li>
                                </ul>
                                <p class="table-size" data-modal="size">Таблица размеров</p>

                            </div>
                            <div class="choice__info">
                                <div class="choice__info-box">
                                    <picture>
                                        <source type="image/webp" srcset="http://nautz.loc/new-constructor/img/img-text-1.webp">
                                        <img alt="img" src="http://nautz.loc/new-constructor/img/img-text-1.jpg">
                                    </picture>
                                    <p>Сейчас еще <span class="num-random">25</span> человек собирают худи в конструкторе!</p>
                                </div>
                            </div>
                        </div>
                        <div class="choice" data-hash="growth">
                            <div class="choice-growth" data-choice="growth">
                                <ul>
                                    <li data-item="143-154">
                                        <p>143-154 см</p>
                                    </li>
                                    <li data-item="155-166">
                                        <p>155-166 см</p>
                                    </li>
                                    <li data-item="167-178">
                                        <p>167-178 см</p>
                                    </li>
                                    <li data-item="179-190">
                                        <p>179-190 см</p>
                                    </li>
                                    <li data-item="191-201">
                                        <p>191-201 см</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="choice" data-hash="finish">

                        </div>
                    </div>
                    <div class="parameters-box__footer">
                        <div class="parameters-progress">
                            <div class="parameters-progress__line">
                                <div class="parameters-progress__line-activ" style="width: 0%;"></div>
                            </div>
                        </div>
                        <p class="price"><span>2 990</span><i> 14 990 ₽</i></p>
                        <div class="btn_ico_cart disable" data-modal="form">В корзину</div>
                    </div>
                </div>
            </div>
            <div class="modal">
                <div class="modal__prev"></div>
                <div class="modal__box"></div>
            </div>

        </div>
    </div>
    <script src="https://unpkg.com/cookielib/src/cookie.min.js"></script>
    <script src="http://nautz.loc/new-constructor/js/main.min.js?v=<?= time() ?>"></script>
    <script src="http://nautz.loc/new-constructor/js/main.js?v=<?= time() ?>"></script>
</body>

</html>
