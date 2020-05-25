function t835mev_init(recid) {
    var rec = $('#rec' + recid);
    var quiz = rec.find('.t835mev__quiz');
    var quizWrapper = rec.find('.t835mev__quiz-wrapper');
    var quizFormWrapper = rec.find('.t835mev__quiz-form-wrapper');
    var form = rec.find('.t835mev .t-form');
    var quizQuestion = rec.find('.t835mev .t-input-group');
    var prevBtn = rec.find('.t835mev__btn_prev');
    var nextBtn = rec.find('.t835mev__btn_next');
    var resultBtn = rec.find('.t835mev__btn_result');
    var errorBoxMiddle = rec.find('.t-form__errorbox-middle .t-form__errorbox-wrapper');
    var submitBtnWrapper = rec.find('.t835mev .t-form__submit');
    var btnSubmit = rec.find('.t835mev .t-submit');
    var captureFormHTML = '<div class="t835mev__capture-form"></div>';
    rec.find('.t835mev .t-form__errorbox-middle').before(captureFormHTML);
    var quizDescriptionHeight = rec.find('.t835mev__quiz-description-wrapper').outerHeight(!0);
    var resultTitleHeight = rec.find('.t835mev__result-title').outerHeight(!0);
    var quizQuestionNumber = 0;
    form.removeClass('js-form-proccess');
    t835mev_workWithAnswerCode(rec);
    quizQuestion.each(function(i) {
        $(quizQuestion[i]).attr('data-question-number', i)
    });
    t835mev_wrapCaptureForm(rec);
    var captureForm = rec.find('.t835mev__capture-form');
    t835mev_showCounter(rec, quizQuestionNumber);
    t835mev_disabledPrevBtn(rec, quizQuestionNumber);
    t835mev_checkLength(rec);
    prevBtn.click(function(e) {
        if (quizQuestionNumber > 0) {
            quizQuestionNumber--
        }
        t835mev_setProgress(rec, -1);
        if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
            if (window.lazy == 'y') {
                t_lazyload_update()
            }
        }

        if($(quizQuestion[quizQuestionNumber]).data('whenshow') != undefined){
            quizQuestionNumber = showHideStep(
                $(quizQuestion[quizQuestionNumber]).data('whenshow'),
                $(quizQuestion[quizQuestionNumber]).data('parent-depend-form'),
                $(quizQuestion[quizQuestionNumber]).data('disablereq'),
                quizQuestionNumber,
                'prev'
            );
        }

        t835mev_awayFromResultScreen(rec);
        t835mev_showCounter(rec, quizQuestionNumber);
        t835mev_hideError(rec, quizQuestionNumber);
        t835mev_disabledPrevBtn(rec, quizQuestionNumber);
        t835mev_switchQuestion(rec, quizQuestionNumber);
        t835mev_scrollToTop(quizFormWrapper);
        e.preventDefault()
    });
    nextBtn.click(function(e) {
        if (quizWrapper.hasClass('t835mev__quiz-published')) {
            var showErrors = t835mev_setError(rec, quizQuestionNumber)
        }
        if (showErrors) {
            errorBoxMiddle.hide()
        }
        if (!showErrors) {
            quizQuestionNumber++;
            prevBtn.attr('disabled', !1);

            // показывать шаг с детялями при условии что вставлен для этого div в нужном месте в коде
            if ( rec.data('show-details')=="y" ) {
                if($(quizQuestion[quizQuestionNumber]).data('show-details')=="y"){
                    var showproduct = $(quizQuestion[quizQuestionNumber]).data('showproduct');
                    var details_data = get_selected_values_for_product(rec,showproduct),
                        details_text = '';
                    details_data.forEach(function(item, i, arr) {
                        details_text += item.name+': '+item.value+'<br>'
                    });
                    $('[data-showproduct="'+showproduct+'"] .t-input-subtitle').html(details_text);
                }
            }

            if($(quizQuestion[quizQuestionNumber]).data('whenshow') != undefined){
                quizQuestionNumber = showHideStep(
                    $(quizQuestion[quizQuestionNumber]).data('whenshow'),
                    $(quizQuestion[quizQuestionNumber]).data('parent-depend-form'),
                    $(quizQuestion[quizQuestionNumber]).data('disablereq'),
                    quizQuestionNumber,
                    'next'
                );
            }

            t835mev_setProgress(rec, 1);
            t835mev_showCounter(rec, quizQuestionNumber);
            t835mev_switchQuestion(rec, quizQuestionNumber);
            t835mev_scrollToTop(quizFormWrapper);
        }
        if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
            if (window.lazy == 'y') {
                t_lazyload_update()
            }
        }
        e.preventDefault()
    });
    quizQuestion.keypress(function(e) {
        if (event.keyCode === 13 && !form.hasClass('js-form-proccess')) {
            if (quizWrapper.hasClass('t835mev__quiz-published')) {
                var showErrors = t835mev_setError(rec, quizQuestionNumber)
            }
            var questionArr = t835mev_createQuestionArr(rec);
            if (showErrors) {
                errorBoxMiddle.hide()
            }
            prevBtn.attr('disabled', !1);
            if (!showErrors) {
                quizQuestionNumber++;
                t835mev_setProgress(rec, 1);
                if (quizQuestionNumber < questionArr.length) {

                    if ( rec.data('show-details')=="y" ) {
                        if($(quizQuestion[quizQuestionNumber]).data('show-details')=="y"){
                            var showproduct = $(quizQuestion[quizQuestionNumber]).data('showproduct');
                            var details_data = get_selected_values_for_product(rec,showproduct),
                                details_text = '';
                            details_data.forEach(function(item, i, arr) {
                                details_text += item.name+': '+item.value+'<br>'
                            });
                            $('[data-showproduct="'+showproduct+'"] .t-input-subtitle').html(details_text);
                        }
                    }

                    if($(quizQuestion[quizQuestionNumber]).data('whenshow') != undefined){
                        quizQuestionNumber = showHideStep(
                            $(quizQuestion[quizQuestionNumber]).data('whenshow'),
                            $(quizQuestion[quizQuestionNumber]).data('parent-depend-form'),
                            $(quizQuestion[quizQuestionNumber]).data('disablereq'),
                            quizQuestionNumber,
                            'next'
                        );
                    }

            
                    t835mev_switchQuestion(rec, quizQuestionNumber)
                } else {
                    t835mev_switchResultScreen(rec);
                    form.addClass('js-form-proccess');

                    recalc(window.mev_amount);

                    var form_data = form.serializeArray(),
                        details_data = get_selected_values(rec),
                        data_to_send = {
                            form_data: form_data,
                            details_data: details_data
                        };

                    form_data.push({
                        'name':'product_price',
                        'value':window.tcart.amount
                    });
                    form_data.push({
                        'name':'site_url',
                        'value':window.location.hostname+window.location.pathname
                    })

                    $.ajax({
                        url: 'https://todobox.ru/payment/kokoslook/hooli/quiz_hoolistum.php'+window.location.search,
                        // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                        type: 'post',
                        dataType: 'json',
                        data: data_to_send,
                    })
                    .done(function(data) {
                        // data.id - номер заказа в retailCRM
                        // $('#order_id').val(data.id);
                        if (fbq != undefined) {
                            fbq('track', 'Lead');
                        }
                        // window.open($('#write_to_whatsapp').attr('href'), "_blank");
                    })
                    .fail(function(data) {
                        // console.log("error");
                    })
                    .always(function() {
                        // console.log("complete");
                    });
                    
                    $.ajax({
                        url: 'https://todobox.ru/payment/kokoslook/hooli/bitrix24_hoolistum.php'+window.location.search,
                        // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                        type: 'post',
                        dataType: 'json',
                        data: data_to_send,
                    })
                    .done(function(data) {
                        // data.id - номер заказа в retailCRM
                        // $('#order_id').val(data.id);
                        if (fbq != undefined) {
                            fbq('track', 'Lead');
                        }
                        $('<input></input>', {
                            'type': 'hidden',
                            'name': 'InvoiceId',
                        }).val(data.ID).appendTo(form);
                        window.bitrix24DealId = data.ID;
                        // window.open($('#write_to_whatsapp').attr('href'), "_blank");
                    })
                    .fail(function(data) {
                        // console.log("error");
                    })
                    .always(function() {
                        // console.log("complete");
                    });
                }
                t835mev_scrollToTop(quizFormWrapper);
                t835mev_disabledPrevBtn(rec, quizQuestionNumber)
            }
            if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
                if (window.lazy == 'y') {
                    t_lazyload_update()
                }
            }
            e.preventDefault()
        }
    });
    resultBtn.click(function(e) {
        if (quizWrapper.hasClass('t835mev__quiz-published')) {
            var showErrors = t835mev_setError(rec, quizQuestionNumber)
        }
        if (showErrors) {
            errorBoxMiddle.hide()
        }
        if (!showErrors) {
            quizQuestionNumber++;
            t835mev_setProgress(rec, 1);
            t835mev_switchResultScreen(rec);
            t835mev_scrollToTop(quizFormWrapper);
            form.addClass('js-form-proccess');
            t835mev_disabledPrevBtn(rec, quizQuestionNumber);

            recalc(window.mev_amount);

            var form_data = form.serializeArray(),
                details_data = get_selected_values(rec),
                data_to_send = {
                    form_data: form_data,
                    details_data: details_data
                };

            form_data.push({
                'name':'product_price',
                'value':window.tcart.amount
            });
            form_data.push({
                'name':'site_url',
                'value':window.location.hostname+window.location.pathname
            })

            $.ajax({
                url: 'https://todobox.ru/payment/kokoslook/hooli/quiz_hoolistum.php'+window.location.search,
                // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                type: 'post',
                dataType: 'json',
                data: data_to_send,
            })
            .done(function(data) {
                // data.id - номер заказа в retailCRM
                // $('#order_id').val(data.id);
                if (fbq != undefined) {
                    fbq('track', 'Lead');
                }
                // window.open($('#write_to_whatsapp').attr('href'), "_blank");
            })
            .fail(function(data) {
                // console.log("error");
            })
            .always(function() {
                // console.log("complete");
            });
            
            $.ajax({
                url: 'https://todobox.ru/payment/kokoslook/hooli/bitrix24_hoolistum.php'+window.location.search,
                // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                type: 'post',
                dataType: 'json',
                data: data_to_send,
            })
            .done(function(data) {
                // data.id - номер заказа в retailCRM
                // $('#order_id').val(data.id);
                if (fbq != undefined) {
                    fbq('track', 'Lead');
                }
                $('<input></input>', {
                    'type': 'hidden',
                    'name': 'InvoiceId',
                }).val(data.ID).appendTo(form);
                window.bitrix24DealId = data.ID;
                // window.open($('#write_to_whatsapp').attr('href'), "_blank");
            })
            .fail(function(data) {
                // console.log("error");
            })
            .always(function() {
                // console.log("complete");
            });
        }
        e.preventDefault()
    })
}
function t835mev_workWithAnswerCode(rec) {
    rec.find('.t-input-group_ri').find('input').each(function(item) {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t835mev_setAnswerCode($this);
            var label = $this.parent().find('.t-img-select__text');
            label.text(label.text().split('value::')[0].trim())
        }
    });
    rec.find('.t-input-group_rd').find('input').each(function(item) {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t835mev_setAnswerCode($this);
            var label = $this.parent();
            label.html(function() {
                var html = $(this).html().split('value::')[0].trim();
                return html
            })
        }
    });
    rec.find('.t-input-group_sb').find('option').each(function(item) {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t835mev_setAnswerCode($this);
            $this.text($this.text().split('value::')[0].trim())
        }
    })
}
function t835mev_setAnswerCode($this) {
    var parameter = $this.val().split('value::')[1].trim();
    $this.val(parameter)
}
function t835mev_scrollToTop(quizFormWrapper) {
    var topCoordinateForm = quizFormWrapper.offset().top;
    $('html, body').animate({
        scrollTop: topCoordinateForm - 150
    }, 0)
}
function t835mev_checkLength(rec) {
    var nextBtn = rec.find('.t835mev__btn_next');
    var resultBtn = rec.find('.t835mev__btn_result');
    var questionArr = t835mev_createQuestionArr(rec);
    if (questionArr.length < 2) {
        nextBtn.hide();
        resultBtn.show()
    }
}
function t835mev_showCounter(rec, quizQuestionNumber) {
    var counter = rec.find('.t835mev__quiz-description-counter');
    var questionArr = t835mev_createQuestionArr(rec);
    counter.html(quizQuestionNumber + 1 + '/' + questionArr.length)
}
function t835mev_setError(rec, quizQuestionNumber) {
    var questionArr = t835mev_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    var isFieldErrorBoxExist;
    var arErrors = window.tildaForm.validate(currentQuestion);
    var showErrors;
    currentQuestion.addClass('js-error-control-box');
    if (currentQuestion.find('.t-input-error').length > 0) {
        isFieldErrorBoxExist = 1
    }
    var errorsTypeObj = arErrors[0];
    var arLang = window.tildaForm.arValidateErrors[window.tildaBrowserLang] || {};
    if (errorsTypeObj != undefined) {
        var errorType = errorsTypeObj.type[0];
        var errorTextCustom = rec.find('.t835mev .t-form').find('.t-form__errorbox-middle').find('.js-rule-error-' + errorType).text();
        var sError = '';
        if (errorTextCustom != '') {
            sError = errorTextCustom
        } else {
            sError = arLang[errorType]
        }
        showErrors = errorType == 'emptyfill' ? !1 : window.tildaForm.showErrors(currentQuestion, arErrors);
        currentQuestion.find('.t-input-error').html(sError)
    }
    return showErrors
}
function t835mev_hideError(rec, quizQuestionNumber) {
    var questionArr = t835mev_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    currentQuestion.removeClass('js-error-control-box');
    currentQuestion.find('.t-input-error').html('')
}
function t835mev_setProgress(rec, index) {
    var progressbarWidth = rec.find('.t835mev__progressbar').width();
    var progress = rec.find('.t835mev__progress');
    var questionArr = t835mev_createQuestionArr(rec);
    var progressWidth = progress.width();
    var progressStep = progressbarWidth / (questionArr.length);
    var percentProgressWidth = (progressWidth + index * progressStep) / progressbarWidth * 100 + '%';
    progress.css('width', percentProgressWidth)
}
function t835mev_wrapCaptureForm(rec) {
    var captureForm = rec.find('.t835mev__capture-form');
    var quizQuestion = rec.find('.t835mev .t-input-group');
    var quizFormWrapper = rec.find('.t835mev__quiz-form-wrapper');
    quizQuestion.each(function(i) {
        var currentQuizQuestion = $(quizQuestion[i]);
        var emailInputExist = $(currentQuizQuestion).hasClass('t-input-group_em');
        var nameInputExist = $(currentQuizQuestion).hasClass('t-input-group_nm');
        var phoneInputExist = $(currentQuizQuestion).hasClass('t-input-group_ph');
        var checkboxInputExist = $(currentQuizQuestion).hasClass('t-input-group_cb');
        var quizQuestionNumber = currentQuizQuestion.attr('data-question-number');
        var maxCountOfCaptureFields = quizFormWrapper.hasClass('t835mev__quiz-form-wrapper_withcheckbox') ? 4 : 3;
        if (quizQuestionNumber >= quizQuestion.length - maxCountOfCaptureFields) {
            if (quizFormWrapper.hasClass('t835mev__quiz-form-wrapper_withcheckbox')) {
                if (emailInputExist || nameInputExist || phoneInputExist || checkboxInputExist) {
                    currentQuizQuestion.addClass('t835mev__t-input-group_capture');
                    captureForm.append(currentQuizQuestion)
                }
            } else {
                if (emailInputExist || nameInputExist || phoneInputExist) {
                    currentQuizQuestion.addClass('t835mev__t-input-group_capture');
                    captureForm.append(currentQuizQuestion)
                }
            }
        }
    })
}
function t835mev_createQuestionArr(rec) {
    var quizQuestion = rec.find('.t835mev .t-input-group');
    var questionArr = [];
    quizQuestion.each(function(i) {
        var question = $(quizQuestion[i]);
        if (!question.hasClass('t835mev__t-input-group_capture')) {
            questionArr.push(quizQuestion[i])
        }
    });
    return questionArr
}
function t835mev_disabledPrevBtn(rec, quizQuestionNumber) {
    var prevBtn = rec.find('.t835mev__btn_prev');
    quizQuestionNumber == 0 ? prevBtn.attr('disabled', !0) : prevBtn.attr('disabled', !1)
}
function t835mev_switchQuestion(rec, quizQuestionNumber) {
    var nextBtn = rec.find('.t835mev__btn_next');
    var resultBtn = rec.find('.t835mev__btn_result');
    var questionArr = t835mev_createQuestionArr(rec);
    $(questionArr).hide();
    $(questionArr[quizQuestionNumber]).show();
    if (quizQuestionNumber === questionArr.length - 1) {
        nextBtn.hide();
        resultBtn.show()
    } else {
        nextBtn.show();
        resultBtn.hide()
    }
}
function t835mev_switchResultScreen(rec) {
    var captureForm = rec.find('.t835mev__capture-form');
    var quizDescription = rec.find('.t835mev__quiz-description');
    var resultTitle = rec.find('.t835mev__result-title');
    var prevBtn = rec.find('.t835mev__btn_prev');
    var resultBtn = rec.find('.t835mev__btn_result');
    var submitBtnWrapper = rec.find('.t835mev .t-form__submit');
    var questionArr = t835mev_createQuestionArr(rec);
    $(questionArr).hide();
    $(captureForm).show();
    resultBtn.hide();
    quizDescription.hide();
    resultTitle.show();
    // submitBtnWrapper.show();
    prevBtn.hide();
    submitBtnWrapper.css('display', 'flex');

}
function t835mev_awayFromResultScreen(rec) {
    var captureForm = rec.find('.t835mev__capture-form');
    var quizDescription = rec.find('.t835mev__quiz-description');
    var resultTitle = rec.find('.t835mev__result-title');
    var submitBtnWrapper = rec.find('.t835mev .t-form__submit');
    submitBtnWrapper.hide();
    $(captureForm).hide();
    quizDescription.show();
    resultTitle.hide()
}
function t835mev_onSuccess(form) {
    var inputsWrapper = form.find('.t-form__inputsbox');
    var inputsHeight = inputsWrapper.height();
    var inputsOffset = inputsWrapper.offset().top;
    var inputsBottom = inputsHeight + inputsOffset;
    var targetOffset = form.find('.t-form__successbox').offset().top;
    var prevBtn = form.parents('.t835mev').find('.t835mev__btn_prev');
    if ($(window).width() > 960) {
        var target = targetOffset - 200
    } else {
        var target = targetOffset - 100
    }
    if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
        inputsWrapper.addClass('t835mev__inputsbox_hidden');
        setTimeout(function() {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({
                    opacity: 0
                }, 50)
            }
        }, 300)
    } else {
        $('html, body').animate({
            scrollTop: target
        }, 400);
        setTimeout(function() {
            inputsWrapper.addClass('t835mev__inputsbox_hidden')
        }, 400)
    }
    var successurl = form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function() {
            window.location.href = successurl
        }, 500)
    }
    prevBtn.hide()
}
// Посчитать общую сумму изначально
function calc_total(summa) {

    window.tcart.amount = summa;
    window.tcart.prodamount = summa;
    window.tcart.total = summa;

    window.tcart.products[0] = {
        amount: summa,
        name: "Hooliстюм",
        price: summa,
        quantity: 1
    };

}
function recalc(summa){
    var new_summa = summa;
   
    $('input:checked').each(function(index, el) {
        if ( $(el).data('price')!=undefined ) {
            new_summa = new_summa + $(el).data('price');
        }
    });

    if( $('input[name=Promocode]').length ){
        var userPromocode = $('input[name=Promocode]').val();
        if
        ( userPromocode.toUpperCase() =="3GIRLS"
            || userPromocode.toUpperCase() =="ANYUTAMOM"
            || userPromocode.toUpperCase() =="VLR_ALL"
            || userPromocode.toUpperCase() =="IODA"
            || userPromocode.toUpperCase() =="MAZEPINA"
            || userPromocode.toUpperCase() =="SCAR"
            || userPromocode.toUpperCase() =="KRIS_ZH"
            || userPromocode.toUpperCase() =="VIXXKEI"
            || userPromocode.toUpperCase() =="PAVELETSKAYA"
            || userPromocode.toUpperCase() =="ANNNEMY"
            || userPromocode.toUpperCase() =="MILASYA"
            || userPromocode.toUpperCase() =="KHODZHULYA"
            || userPromocode.toUpperCase() =="IRINA_IS"
            || userPromocode.toUpperCase() =="OSGARD"
            || userPromocode.toUpperCase() =="REPINA"
            || userPromocode.toUpperCase() =="PUSHKINA"
            || userPromocode.toUpperCase() =="SINITSYNA"
            || userPromocode.toUpperCase() =="KOSHKINA"
            || userPromocode.toUpperCase() =="VALUYSKAYA"
            || userPromocode.toUpperCase() =="TANIMANI"
            || userPromocode.toUpperCase() =="FARTUNA"
            || userPromocode.toUpperCase() =="CRYBABY"
            || userPromocode.toUpperCase() =="DANAGE"
            || userPromocode.toUpperCase() =="ISV"
            || userPromocode.toUpperCase() =="NIKULA"
            || userPromocode.toUpperCase() =="BUPSIKITTY"
        ){
            new_summa = new_summa*0.9;
        }
    }

    window.tcart.amount = new_summa;
    window.tcart.prodamount = new_summa;
    window.tcart.total = new_summa;

    window.tcart.products[0].amount = new_summa;
    window.tcart.products[0].price = new_summa;
}
// Отправка сообщения в whatsapp
function get_res_wa_text(rec){
    var rec = $(rec),
        data = get_selected_values(rec);

    var details_text = '';
    data.forEach(function(item, i, arr) {
        details_text += item.name+': '+item.value+"\n";
    });

    details_text += rec.find("input[name=Phone]").val()+"\n";
    details_text += rec.find("input[name=Email]").val()+"\n";
    details_text += rec.find("input[name=quiz_type]").val()+"\n";

    return encodeURI("Привет, Hooli! 😜 \n\n"+
        "Хочу подтвердить свой заказ:\n\n"
        +details_text
    );
}

function get_selected_values(rec){
    var data = [];
    rec.find(".t-input-group").each(function(index, el) {
        var obj={},
            checked = $(el).find('input[type="radio"]:checked,input[type="checkbox"]:checked,input.y_rost');

        if(checked.length > 0){
            obj['name'] = $(el).data('name');
            obj['value'] = checked.val();
            data.push(obj);
        }
    });

    return data;
}
function get_selected_values_for_product(rec,product){
    var data = [];
    rec.find('[data-product="'+product+'"]').each(function(index, el) {
        var obj={},
            checked = $(el).find('input[type="radio"]:checked,input[type="checkbox"]:checked,input.y_rost');

        if(checked.length > 0){
            obj['name'] = $(el).data('name');
            obj['value'] = checked.val();
            data.push(obj);
        }
    });

    return data;
}

function show_details(recid){
    var rec = $('#rec' + recid);
    if ( rec.data('show-details')=="y" ) {
        return true;
    }else{
        return false;
    }
}

// добавляем стили для show/hide вариантов в зависимости от ранее выбранных 
function optional_dependency(){
    var parent_options = $("[data-optional]");

    parent_options.each(function(index, el) {
        var parent_option = $(el);
        parent_option.find('input').each(function(index, el) {
            var clickable_input = $(el);
            clickable_input.on('click', function(event) {
                var resultating_inputs_str = parent_option.data('optional');
                var resultating_inputs_arr = resultating_inputs_str.split("|");
                for (var input_key in resultating_inputs_arr){
                    var result_input = $('input[name="'+resultating_inputs_arr[input_key]+'"]');
                    result_input.each(function(index, el){
                        var allowed_opt = $(el).data('prev-selection').split("|");
                        if ( allowed_opt.some(function(arr_el){return clickable_input.val() == arr_el}) ) {
                            $(el).closest('label').show();
                        }else{
                            $(el).closest('label').hide();
                        }
                    })
                }
            });
        });
    });
}
function showHideStep(whenshow,depend,disablereq,quizQuestionNumber,direction){
    var depend_div = $('[data-name="'+depend+'"]');
    var when_to_show = whenshow.split("|");

    var depend_div_input = depend_div.find('input:checked');

    if ( !when_to_show.some(function(arr_el){return depend_div_input.val() == arr_el}) ) {
        $('[name="'+disablereq+'"]').removeAttr('data-tilda-req');
        if ( direction == "next" ) {
            return ++quizQuestionNumber;
        } else if ( direction == "prev" ) {
            return --quizQuestionNumber;
        }
    }else{
        $('[name="'+disablereq+'"]').attr('data-tilda-req',1);
        return quizQuestionNumber;
    }
}


// Выполнить после загрузки документа
$(document).ready(function() {
window.tildaForm.cloudpaymentPay = function(n, s) {
    if (!0 !== window.cloudpaymentsapiiscalled)
        return window.tildaForm.cloudpaymentLoad(),
        window.setTimeout(function() {
            window.tildaForm.cloudpaymentPay(n, s)
        }, 200),
        !1;
    var d = s.currency
      , t = s.language
      , e = {};
    if (t = t || ("RUB" == d || "BYR" == d || "BYN" == d || "RUR" == d ? "ru-RU" : "UAH" == d ? "uk" : "en-US"),
    !window.cloudpaymentshandler) {
        if ("object" != typeof window.cp)
            return window.setTimeout(function() {
                window.tildaForm.cloudpaymentPay(n, s)
            }, 200),
            !1;
        e = {
            language: t
        },
        s.applePaySupport && "off" == s.applePaySupport && (e.applePaySupport = !1),
        s.googlePaySupport && "off" == s.googlePaySupport && (e.googlePaySupport = !1),
        window.cloudpaymentshandler = new cp.CloudPayments(e)
    }
    var r = {};
    r.projectid = s.projectid,
    r.bitrixDealId = window.bitrix24DealId;
    s.cloudPayments && (s.cloudPayments.recurrent || s.cloudPayments.customerReceipt) && (r.cloudPayments = s.cloudPayments);
    var l = n.closest(".t-popup_show");
    return l && 0 != l.length || (l = n.closest(".t706__cartwin_showed")),
    l.data("old-style", l.attr("style")),
    l.attr("style", "z-index:100"),
    window.tildaForm.orderIdForStat = s.invoiceId,
    s.skin || (s.skin = "classic"),
    window.cloudpaymentshandler.charge({
        publicId: s.publicId,
        description: s.description,
        amount: parseFloat(s.amount),
        currency: d,
        accountId: s.accountId,
        invoiceId: s.invoiceId,
        requireEmail: 1 == s.requireEmail,
        email: s.email,
        skin: s.skin,
        data: r
    }, function(t) {
        window.cloudpaymentshandler = !1,
        l.attr("style", l.data("old-style"));
        var e = "/tilda/" + n.attr("id") + "/payment/"
          , r = "Pay order in form " + n.attr("id")
          , a = s.amount
          , o = s.description;
        $("#allrecords").data("tilda-currency", d),
        window.Tilda && "function" == typeof Tilda.sendEventToStatistics && Tilda.sendEventToStatistics(e, r, o, a),
        window.tildaForm.clearTCart(n),
        "" < s.successurl && window.setTimeout(function() {
            window.location.href = s.successurl
        }, 300),
        "" < n.data("successmessage") ? n.find(".js-successbox").html(n.data("successmessage")) : n.find(".js-successbox").html(""),
        n.data("successmessage", "");
        var i = n.data("success-callback");
        window.tildaForm.successEnd(n, s.successurl, i),
        n.trigger("tildaform:aftersuccess")
    }, function(t, e) {
        if (l.attr("style", l.data("old-style")),
        n.find(".js-successbox").hide(),
        "" < n.data("successmessage") ? n.find(".js-successbox").html(n.data("successmessage")) : n.find(".js-successbox").html(""),
        n.data("successmessage", ""),
        window.cloudpaymentshandler = !1,
        "" < s.failureurl)
            window.location.href = s.failureurl;
        else {
            l.find(".t706__cartwin-products").show(),
            l.find(".t706__cartwin-prodamount-wrap").show(),
            l.find(".t706__form-bottom-text").show(),
            n.find(".t-form__inputsbox").show();
            try {
                tcart__lockScroll()
            } catch (t) {}
        }
    }),
    !1
}

    $('#rec001').on('click', '.t835mev__btn_result', function(event) {
        var text = get_res_wa_text('#rec001');
        $('#write_to_whatsapp').attr('href', 'https://api.whatsapp.com/send?phone=79160087490&text='+text);
    });

    calc_total(6990);
    window.mev_amount = 6990;

    optional_dependency();
});