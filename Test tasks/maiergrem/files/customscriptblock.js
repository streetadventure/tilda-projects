$(document).ready(function() {
    let body = $('body');

    body.on('change', 'input, .t-inputquantity', updateCalc);
    body.on('click', '.t-inputquantity__btn', updateCalc);

    function getLessons() {
        let lessons = {}
        lessons.checked = $('input[name="uroki"]:checked');
        lessons.value = lessons.checked.val();
        lessons.count = (lessons.value === undefined) ? 0 : parseInt(lessons.value);
        return lessons;
    }

    function getStudio() {
        let studio = {}
        studio.isPaid = [8, 16];
        studio.yes = $('input[name=studio]').first();
        return studio;
    }

    function getDirections(lessons) {

        let directions = {}
        directions.fields = $('.t-inputquantity');
        directions.buttons = {
            plus: $('.t-inputquantity__btn-plus'),
            minus: $('.t-inputquantity__btn-minus')
        }
        directions.selected = 0;
        directions.lessons = lessons.count;

        directions.fields.each(function(i, e) {
            let element = $(e);
            let value = element.val();
            let avail = lessons.count - directions.selected;
            if (parseInt(value) > lessons.count || parseInt(value) > avail) {
                $(e).val(0);
                value = 0;
                if (lessons.count === 0) {
                    alert('Пожалуйста, выберите количество занятий');
                }
                else {
                    alert('Вы можете выбрать еще: ' + avail + ' ' + declOfNum(avail, ['урок', 'урока', 'уроков']));
                }
            }
            element.val(value.length ? Math.ceil(value) : 0);
            directions.selected += value.length ? parseInt(value) : 0;
        });

        return directions;
    }

    function getCurrentPrice(recid, id_field){
        var el_rec = $("#rec" + recid)
          , el_wrapper = el_rec.find("[data-input-lid=" + id_field + "]")
          , el_resN = el_wrapper.find(".t-calc")

        return el_resN.text()
    }

    function updateCalc(force = true) {

        let lessons = getLessons();
        let studio = getStudio();
        let directions = getDirections(lessons);
        let condition = ($.inArray(lessons.count, studio.isPaid) >= 0);

        console.log(lessons);
        console.log(directions);
        console.log(condition);

        (condition) ? studio.yes.attr('data-calc-value', 10000) : studio.yes.attr('data-calc-value', 0);
        (directions.selected < lessons.count) ? directions.buttons.plus.show() : directions.buttons.plus.hide();
        if (lessons.count === 0 && force === false) {
            setTimeout(function() {
                $('.t-inputquantity__btn-plus').hide();
            }, 2000);
        }

        if (force) {
            tcalc__init('330424977','1608124034364');
            calc_total("Уроки", getCurrentPrice('330424977','1608124034364'));
        }

    }

    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }

    updateCalc(false);

});