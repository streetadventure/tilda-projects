function t862mev_init(recid) {
    var rec = $('#rec' + recid);
    var quiz = rec.find('.t862mev__quiz');
    var quizWrapper = rec.find('.t862mev__quiz-wrapper');
    var quizFormWrapper = rec.find('.t862mev__quiz-form-wrapper');
    var form = rec.find('.t862mev .t-form');
    var quizQuestion = rec.find('.t862mev .t-input-group');
    var prevBtn = rec.find('.t862mev__btn_prev');
    var nextBtn = rec.find('.t862mev__btn_next');
    var resultBtn = rec.find('.t862mev__btn_result');
    var errorBoxMiddle = rec.find('.t-form__errorbox-middle .t-form__errorbox-wrapper');
    var submitBtnWrapper = rec.find('.t862mev .t-form__submit');
    var btnSubmit = rec.find('.t862mev .t-submit');
    var captureFormHTML = '<div class="t862mev__capture-form"></div>';
    rec.find('.t862mev .t-form__errorbox-middle').before(captureFormHTML);
    var quizDescriptionHeight = rec.find('.t862mev__quiz-description-wrapper').outerHeight(!0);
    var resultTitleHeight = rec.find('.t862mev__result-title').outerHeight(!0);
    var quizQuestionNumber = 0;
    form.removeClass('js-form-proccess');
    rec.attr('data-animationappear', 'off');
    rec.css('opacity', '1');
    t862mev_workWithAnswerCode(rec);
    quizQuestion.each(function(i) {
        $(quizQuestion[i]).attr('data-question-number', i)
    });
    t862mev_wrapCaptureForm(rec);
    var captureForm = rec.find('.t862mev__capture-form');
    t862mev_showCounter(rec, quizQuestionNumber);
    t862mev_disabledPrevBtn(rec, quizQuestionNumber);
    t862mev_checkLength(rec);
    t862mev_openToHook(rec, form, quizQuestion, captureForm);
    prevBtn.click(function(e) {
        if (quizQuestionNumber > 0) {
            quizQuestionNumber--
        }
        t862mev_setProgress(rec, -1);
        t862mev_lazyLoad();
        t862mev_awayFromResultScreen(rec);
        t862mev_showCounter(rec, quizQuestionNumber);
        t862mev_hideError(rec, quizQuestionNumber);
        t862mev_disabledPrevBtn(rec, quizQuestionNumber);
        t862mev_switchQuestion(rec, quizQuestionNumber);
        e.preventDefault()
    });
    nextBtn.click(function(e) {
        var showErrors = t862mev_showError(rec, quizWrapper, quizQuestionNumber);
        if (showErrors) {
            errorBoxMiddle.hide()
        }
        if (!showErrors) {
            quizQuestionNumber++;
            prevBtn.attr('disabled', !1);

            if(quizQuestionNumber==1){
                if (window.gtag != undefined) {
                    gtag( 'event', 'start_quiz' );
                }
            }

            if ( rec.data('show-details')=="y" ) {
                if($(quizQuestion[quizQuestionNumber]).data('show-details')=="y"){
                    var details_data = get_selected_values(rec),
                        details_text = '';
                    details_data.forEach(function(item, i, arr) {
                        details_text += item.name+': '+item.value+'<br>'
                    });
                    $('.t-input-group_details .t-input-subtitle').html(details_text);
                }
            }

            t862mev_setProgress(rec, 1);
            t862mev_showCounter(rec, quizQuestionNumber);
            t862mev_switchQuestion(rec, quizQuestionNumber)
        }
        t862mev_lazyLoad();
        e.preventDefault()
    });
    quizQuestion.keypress(function(e) {
        if (event.keyCode === 13 && !form.hasClass('js-form-proccess')) {
            var showErrors = t862mev_showError(rec, quizWrapper, quizQuestionNumber);
            var questionArr = t862mev_createQuestionArr(rec);
            if (showErrors) {
                errorBoxMiddle.hide()
            }
            prevBtn.attr('disabled', !1);
            if (!showErrors) {
                quizQuestionNumber++;

                if(quizQuestionNumber==1){
                    if (window.gtag != undefined) {
                        gtag( 'event', 'start_quiz' );
                    }
                }

                t862mev_setProgress(rec, 1);
                if (quizQuestionNumber < questionArr.length) {

                    if ( rec.data('show-details')=="y" ) {
                        if($(quizQuestion[quizQuestionNumber]).data('show-details')=="y"){
                            var details_data = get_selected_values(rec),
                                details_text = '';
                            details_data.forEach(function(item, i, arr) {
                                details_text += item.name+': '+item.value+'<br>'
                            });
                            $('.t-input-group_details .t-input-subtitle').html(details_text);
                        }
                    }

                    t862mev_switchQuestion(rec, quizQuestionNumber)
                } else {
                    t862mev_switchResultScreen(rec);
                    form.addClass('js-form-proccess');

                    calc_total(rec,2990);

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

                    if (fbq != undefined) {
                        fbq('track', 'Lead');
                    }
                    if (window.gtag != undefined) {
                        gtag( 'event', 'order_form', {'value': window.tcart.amount} );
                    }

                    $.ajax({
                        url: 'https://todobox.ru/payment/kokoslook/hooli/quiz_hooli_shtany.php'+window.location.search,
                        // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                        type: 'post',
                        dataType: 'json',
                        data: data_to_send,
                    })
                    .done(function(data) {
                        // data.id - номер заказа в retailCRM
                        // $('#order_id').val(data.id);
                        
                        // window.open($('#write_to_whatsapp').attr('href'), "_blank");
                    })
                    .fail(function(data) {
                        // console.log("error");
                    })
                    .always(function() {
                        // console.log("complete");
                    });

                    $.ajax({
                        url: 'https://todobox.ru/payment/kokoslook/hooli/bitrix24_hooli_shtany.php'+window.location.search,
                        // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                        type: 'post',
                        dataType: 'json',
                        data: data_to_send,
                    })
                    .done(function(data) {
                        // data.id - номер заказа в retailCRM
                        // $('#order_id').val(data.id);
                        
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
                t862mev_disabledPrevBtn(rec, quizQuestionNumber)
            }
            t862mev_lazyLoad();
            e.preventDefault()
        }
    });
    resultBtn.click(function(e) {
        var showErrors = t862mev_showError(rec, quizWrapper, quizQuestionNumber);
        if (showErrors) {
            errorBoxMiddle.hide()
        }
        if (!showErrors) {
            quizQuestionNumber++;
            t862mev_setProgress(rec, 1);
            t862mev_switchResultScreen(rec);
            form.addClass('js-form-proccess');
            t862mev_disabledPrevBtn(rec, quizQuestionNumber);

            calc_total(rec,2990);

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

            if (fbq != undefined) {
                fbq('track', 'Lead');
            }
            if (window.gtag != undefined) {
                gtag( 'event', 'order_form', {'value': window.tcart.amount} );
            }

            $.ajax({
                url: 'https://todobox.ru/payment/kokoslook/hooli/quiz_hooli_shtany.php'+window.location.search,
                // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                type: 'post',
                dataType: 'json',
                data: data_to_send,
            })
            .done(function(data) {
                // data.id - номер заказа в retailCRM
                // $('#order_id').val(data.id);
                // window.open($('#write_to_whatsapp').attr('href'), "_blank");
            })
            .fail(function(data) {
                // console.log("error");
            })
            .always(function() {
                // console.log("complete");
            });

            $.ajax({
                url: 'https://todobox.ru/payment/kokoslook/hooli/bitrix24_hooli_shtany.php'+window.location.search,
                // url: 'https://webhook.site/68606da9-00c8-40ea-8617-4fec4fb00b85',
                type: 'post',
                dataType: 'json',
                data: data_to_send,
            })
            .done(function(data) {
                // data.id - номер заказа в retailCRM
                // $('#order_id').val(data.id);
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
function t862mev_workWithAnswerCode(rec) {
    rec.find('.t-input-group_ri').find('input').each(function(item) {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t862mev_setAnswerCode($this);
            var label = $this.parent().find('.t-img-select__text');
            label.text(label.text().split('value::')[0].trim())
        }
    });
    rec.find('.t-input-group_rd').find('input').each(function(item) {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t862mev_setAnswerCode($this);
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
            t862mev_setAnswerCode($this);
            $this.text($this.text().split('value::')[0].trim())
        }
    })
}
function t862mev_setAnswerCode($this) {
    var parameter = $this.val().split('value::')[1].trim();
    $this.val(parameter)
}
function t862mev_openToHook(rec, form, quizQuestion, captureForm) {
    var popup = rec.find('.t-popup');
    var hook = popup.attr('data-tooltip-hook');
    var analitics = popup.attr('data-track-popup');
    if (hook !== '') {
        var obj = $('a[href="' + hook + '"]');
        obj.click(function(e) {
            t862mev_showPopup(rec, form, quizQuestion, captureForm);
            t862mev_resizePopup(rec);
            e.preventDefault();
            if (window.lazy == 'y') {
                t_lazyload_update()
            }
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') {
                    virtTitle = virtTitle.substring(7)
                }
                Tilda.sendEventToStatistics(analitics, virtTitle)
            }
        })
    }
}
function t862mev_showError(rec, quizWrapper, quizQuestionNumber) {
    if (quizWrapper.hasClass('t862mev__quiz-published')) {
        var errors = t862mev_setError(rec, quizQuestionNumber);
        return errors
    }
}
function t862mev_lazyLoad() {
    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
        if (window.lazy == 'y') {
            t_lazyload_update()
        }
    }
}
function t862mev_setHeight(rec, form, quizQuestion, captureForm) {
    var questions = [];
    var questionsHeight = [];
    var descrHeight = rec.find('.t862mev__quiz-description').outerHeight();
    var titleHeight = rec.find('.t862mev__result-title').outerHeight();
    quizQuestion.each(function() {
        var $this = $(this);
        if (!$this.hasClass('t862mev__t-input-group_capture')) {
            questions.push($this)
        }
    });
    questions.forEach(function(item) {
        questionsHeight.push(item.outerHeight())
    });
    var maxHeightQuestion = Math.max.apply(null, questionsHeight);
    var captureFormHeight = captureForm.outerHeight();
    var height = maxHeightQuestion > captureFormHeight ? maxHeightQuestion : captureFormHeight;
    questions.forEach(function(item) {
        item.css('min-height', height)
    });
    captureForm.css('min-height', height);
    rec.find('.t862mev__quiz-form-wrapper').css('min-height', height);
    var headerHeight = titleHeight > descrHeight ? titleHeight : descrHeight;
    var quizWrapperHeight = rec.find('.t862mev__quiz-form-wrapper').outerHeight();
    var btnHeight = rec.find('.t862mev__btn-wrapper').outerHeight();
    rec.find('.t862mev__wrapper').css('min-height', headerHeight + quizWrapperHeight + btnHeight)
}
function t862mev_setMobileHeight() {
    t862mev_calcVH();
    window.addEventListener('resize', function() {
        t862mev_calcVH()
    })
}
function t862mev_calcVH() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px')
}
function t862mev_checkLength(rec) {
    var nextBtn = rec.find('.t862mev__btn_next');
    var resultBtn = rec.find('.t862mev__btn_result');
    var questionArr = t862mev_createQuestionArr(rec);
    if (questionArr.length < 2) {
        nextBtn.hide();
        resultBtn.show()
    }
}
function t862mev_showCounter(rec, quizQuestionNumber) {
    var counter = rec.find('.t862mev__quiz-description-counter');
    var questionArr = t862mev_createQuestionArr(rec);
    counter.html(quizQuestionNumber + 1 + '/' + questionArr.length)
}
function t862mev_setError(rec, quizQuestionNumber) {
    var questionArr = t862mev_createQuestionArr(rec);
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
        var errorTextCustom = rec.find('.t862mev .t-form').find('.t-form__errorbox-middle').find('.js-rule-error-' + errorType).text();
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
function t862mev_hideError(rec, quizQuestionNumber) {
    var questionArr = t862mev_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    currentQuestion.removeClass('js-error-control-box');
    currentQuestion.find('.t-input-error').html('')
}
function t862mev_setProgress(rec, index) {
    var progressbarWidth = rec.find('.t862mev__progressbar').width();
    var progress = rec.find('.t862mev__progress');
    var questionArr = t862mev_createQuestionArr(rec);
    var progressWidth = progress.width();
    var progressStep = progressbarWidth / (questionArr.length);
    var percentProgressWidth = Math.ceil((progressWidth + index * progressStep) / progressbarWidth * 100) + '%';
    progress.css('width', percentProgressWidth)
}
function t862mev_wrapCaptureForm(rec) {
    var captureForm = rec.find('.t862mev__capture-form');
    var quizQuestion = rec.find('.t862mev .t-input-group');
    quizQuestion.each(function(i) {
        var currentQuizQuestion = $(quizQuestion[i]);
        var emailInputExist = $(currentQuizQuestion).hasClass('t-input-group_em');
        var nameInputExist = $(currentQuizQuestion).hasClass('t-input-group_nm');
        var phoneInputExist = $(currentQuizQuestion).hasClass('t-input-group_ph');
        var checkboxInputExist = $(currentQuizQuestion).hasClass('t-input-group_cb');
        var quizQuestionNumber = currentQuizQuestion.attr('data-question-number');
        var maxCountOfCaptureFields = 4;
        if (quizQuestionNumber >= quizQuestion.length - maxCountOfCaptureFields) {
            if (emailInputExist || nameInputExist || phoneInputExist || checkboxInputExist) {
                currentQuizQuestion.addClass('t862mev__t-input-group_capture');
                captureForm.append(currentQuizQuestion)
            }
        }
    })
}
function t862mev_createQuestionArr(rec) {
    var quizQuestion = rec.find('.t862mev .t-input-group');
    var questionArr = [];
    quizQuestion.each(function(i) {
        var question = $(quizQuestion[i]);
        if (!question.hasClass('t862mev__t-input-group_capture')) {
            questionArr.push(quizQuestion[i])
        }
    });
    return questionArr
}
function t862mev_disabledPrevBtn(rec, quizQuestionNumber) {
    var prevBtn = rec.find('.t862mev__btn_prev');
    quizQuestionNumber == 0 ? prevBtn.attr('disabled', !0) : prevBtn.attr('disabled', !1)
}
function t862mev_switchQuestion(rec, quizQuestionNumber) {
    var nextBtn = rec.find('.t862mev__btn_next');
    var resultBtn = rec.find('.t862mev__btn_result');
    var questionArr = t862mev_createQuestionArr(rec);
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
function t862mev_switchResultScreen(rec) {
    var captureForm = rec.find('.t862mev__capture-form');
    var quizDescription = rec.find('.t862mev__quiz-description');
    var resultTitle = rec.find('.t862mev__result-title');
    var prevBtn = rec.find('.t862mev__btn_prev');
    var resultBtn = rec.find('.t862mev__btn_result');
    var submitBtnWrapper = rec.find('.t862mev .t-form__submit');
    var questionArr = t862mev_createQuestionArr(rec);
    $(questionArr).hide();
    $(captureForm).show();
    resultBtn.hide();
    quizDescription.hide();
    resultTitle.show();
    submitBtnWrapper.show()
}
function t862mev_awayFromResultScreen(rec) {
    var captureForm = rec.find('.t862mev__capture-form');
    var quizDescription = rec.find('.t862mev__quiz-description');
    var resultTitle = rec.find('.t862mev__result-title');
    var submitBtnWrapper = rec.find('.t862mev .t-form__submit');
    submitBtnWrapper.hide();
    $(captureForm).hide();
    quizDescription.show();
    resultTitle.hide()
}
function t862mev_onSuccess(form) {
    var inputsWrapper = form.find('.t-form__inputsbox');
    var inputsHeight = inputsWrapper.height();
    var inputsOffset = inputsWrapper.offset().top;
    var inputsBottom = inputsHeight + inputsOffset;
    var targetOffset = form.find('.t-form__successbox').offset().top;
    var prevBtn = form.parents('.t862mev').find('.t862mev__btn_prev');
    if ($(window).width() > 960) {
        var target = targetOffset - 200
    } else {
        var target = targetOffset - 100
    }
    if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
        inputsWrapper.addClass('t862mev__inputsbox_hidden');
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
            inputsWrapper.addClass('t862mev__inputsbox_hidden')
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
function t862mev_lockScroll() {
    var body = $('body');
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css('top', '-' + bodyScrollTop + 'px');
        body.attr('data-popup-scrolltop', bodyScrollTop)
    }
}
function t862mev_unlockScroll() {
    var body = $('body');
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $('body').attr('data-popup-scrolltop');
        body.removeClass('t-body_scroll-locked');
        body.css('top', '');
        body.removeAttr('data-popup-scrolltop')
        window.scrollTo(0, bodyScrollTop)
    }
}
function t862mev_showPopup(rec, form, quizQuestion, captureForm) {
    var popup = rec.find('.t-popup');
    var quiz = rec.find('.t862mev__quiz');
    popup.css('display', 'block');
    rec.find('.t-range').trigger('popupOpened');
    if (window.lazy == 'y') {
        t_lazyload_update()
    }
    setTimeout(function() {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
        if ($(window).width() > 640 && quiz.hasClass('t862mev__quiz_fixedheight')) {
            t862mev_setHeight(rec, form, quizQuestion, captureForm)
        }
        if ($(window).width() <= 640) {
            t862mev_setMobileHeight()
        }
        t862mev__showJivo(popup, '1', '1')
    }, 50);
    $('body').addClass('t-body_popupshowed t862mev__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        setTimeout(function() {
            t862mev_lockScroll()
        }, 500)
    }
    rec.find('.t-popup').click(function(e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) {
            return
        }
        if (e.target == this) {
            t862mev_closePopup()
        }
    });
    rec.find('.t-popup__close').click(function(e) {
        t862mev_closePopup()
    });
    rec.find('a[href*="#"]').click(function(e) {
        var url = $(this).attr('href');
        if (!url || url.substring(0, 7) != '#price:') {
            t862mev_closePopup();
            if (!url || url.substring(0, 7) == '#popup:') {
                setTimeout(function() {
                    $('body').addClass('t-body_popupshowed')
                }, 300)
            }
        }
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            t862mev_closePopup()
        }
    })
}
function t862mev_closePopup() {
    $('body').removeClass('t-body_popupshowed t862mev__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t862mev_unlockScroll()
    }
    $('.t-popup').removeClass('t-popup_show');
    t862mev__showJivo($('.t-popup'), '2147483647', '2147483648');
    setTimeout(function() {
        $('.t-popup').not('.t-popup_show').css('display', 'none')
    }, 300)
}
function t862mev_resizePopup(rec) {
    var div = rec.find('.t-popup__container').height();
    var win = $(window).height() - 120;
    var popup = rec.find('.t-popup__container');
    if (div > win) {
        popup.addClass('t-popup__container-static')
    } else {
        popup.removeClass('t-popup__container-static')
    }
}
function t862mev__showJivo(popup, indexMobile, indexDesktop) {
    if ($('._show_1e.wrap_mW.__jivoMobileButton').length != 0) {
        $('._show_1e.wrap_mW.__jivoMobileButton').css('z-index', indexMobile)
    }
    if ($('.label_39#jvlabelWrap').length != 0) {
        $('.label_39#jvlabelWrap').css('z-index', indexDesktop)
    }
}
function t862mev_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7)
    }
    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0)
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                })
            }
        }
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            })
        }
    }
}

function calc_total(rec, summa) {
    
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
            || userPromocode.toUpperCase() =="LUDMILABO"
            || userPromocode.toUpperCase() =="SVETAKELLY"
            || userPromocode.toUpperCase() =="ALINASMB"
            || userPromocode.toUpperCase() =="MAXON"
            || userPromocode.toUpperCase() =="PAPRIKA"
            || userPromocode.toUpperCase() =="RAKITINA"
            || userPromocode.toUpperCase() =="ПАПРИКА"
            || userPromocode.toUpperCase() =="IDELUX127"
            || userPromocode.toUpperCase() =="K_DIKUSAR"
            || userPromocode.toUpperCase() =="IDELUX127"
            || userPromocode.toUpperCase() =="STASMILEEV"
            || userPromocode.toUpperCase() =="GRUSTNIYK0TIK"
            || userPromocode.toUpperCase() =="ZHEKOKO"
            || userPromocode.toUpperCase() =="ЗМЕЯ"
        ){
            new_summa = new_summa*0.9;
        }
    }

    window.tcart.amount = new_summa;
    window.tcart.prodamount = new_summa;
    window.tcart.total = new_summa;

    window.tcart.products[0] = {
        amount: new_summa,
        name: 'Услуга по пошиву '+"Штаны Hooli",
        price: new_summa,
        quantity: 1
    };

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

function show_details(recid){
    var rec = $('#rec' + recid);
    if ( rec.data('show-details')=="y" ) {
        return true;
    }else{
        return false;
    }
}

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

    $('#rec001,#rec002,#rec003,#rec004').on('click', '.t862mev__btn_result', function(event) {
        var rec = $(this).closest('[id^=rec]');
        var text = get_res_wa_text(rec);
        rec.find('.write_to_whatsapp').attr('href', 'https://api.whatsapp.com/send?phone=79160087490&text='+text);

        calc_total(rec,2990);
    });

    $('.t835mev__capture-form').find('button').click(function(event) {
        if(window.gtag!=undefined){
            gtag( 'event', 'startpayment', {'value': window.tcart.amount} );
        }
    });

    $('.t835mev__capture-form').find('#write_to_whatsapp').click(function(event) {
        if(window.gtag!=undefined){
            gtag( 'event', 'startwatsapp', {'value': window.tcart.amount} );
        }
    });
});