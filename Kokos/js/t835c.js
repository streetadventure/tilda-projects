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

            if(quizQuestionNumber==8){
                if ($('[name=dostavka]:checked').val()=='Самовывоз') {
                    quizQuestionNumber++;
                    $('[name="address"]').removeAttr('data-tilda-req');
                }
            }

            t835mev_setProgress(rec, 1);
            t835mev_showCounter(rec, quizQuestionNumber);
            t835mev_switchQuestion(rec, quizQuestionNumber);
            t835mev_scrollToTop(quizFormWrapper);

            if(quizQuestionNumber==6){
                $.ajax({
                    url: 'https://todobox.ru/payment/kokoslook/quiz_puhan_a.php',
                    type: 'post',
                    dataType: 'json',
                    data: form.serialize(),
                })
                .done(function(data) {
                    // data.id - номер заказа в retailCRM
                    $('#order_id').val(data.id);
                })
                .fail(function(data) {
                    // console.log("error");
                })
                .always(function() {
                    // console.log("complete");
                });
                
                if (fbq != undefined) {
                    fbq('track', 'InitiateCheckout',{value: $('#rec001 input[name="lenght"]:checked').data('price'), currency: 'RUB'});
                }
            } else if (quizQuestionNumber==9){
                $.ajax({
                    url: 'https://todobox.ru/payment/kokoslook/quiz_puhan_a.php',
                    type: 'post',
                    dataType: 'json',
                    data: form.serialize(),
                })
                .done(function(data) {

                })
                .fail(function(data) {
                    // console.log("error");
                })
                .always(function() {
                    // console.log("complete");
                });                
            }
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
                    t835mev_switchQuestion(rec, quizQuestionNumber)
                } else {
                    t835mev_switchResultScreen(rec);
                    form.addClass('js-form-proccess')
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
            t835mev_disabledPrevBtn(rec, quizQuestionNumber)
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
    submitBtnWrapper.show()
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