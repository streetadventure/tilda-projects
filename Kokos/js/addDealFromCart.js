window.fblead = false;
window.fbinitcheckout = false;
window.gt_start_quiz = false;
window.gt_order_form = false;
window.gt_startpayment = false;

function get_products_from_cart(){
    var data = [];

    for (var index = 0; index < window.tcart.products.length; index++) {
        data.push({name:"Продукт",value:window.tcart.products[index].name});
        if(window.tcart.products[index].options != undefined){
            for (var i = 0; i< window.tcart.products[index].options.length; i++) {
                data.push({name:window.tcart.products[index].options[i].option,value:window.tcart.products[index].options[i].variant});
            }
        }
    }
    return data;
}

$(document).ready(function() {

    var $mev_cart_deal_form = $('.t706__orderform form');

    $mev_cart_deal_form.on('click', 'button', function(event) {
        var arErrors = window.tildaForm.validate($mev_cart_deal_form);
        if(arErrors.length>0){
            // ничего не делаем, есть ошибки при заполнении формы
        }else{

            if (fbq != undefined && !window.fblead) {
                fbq('track', 'Lead');
                window.fblead = true;
            }

            if (window.gtag != undefined && !window.gt_order_form) {
                gtag( 'event', 'order_form', {'value': window.tcart.amount} );
                window.gt_order_form = true;
            }

            if(window.gtag!=undefined && !window.gt_startpayment){
                gtag( 'event', 'startpayment', {'value': window.tcart.amount} );
                window.gt_startpayment = true;
            }

            var form_data = $mev_cart_deal_form.serializeArray(),
            details_data = get_products_from_cart();

            form_data.push({
                'name':'product_price',
                'value':window.tcart.amount
            });
            form_data.push({
                'name':'site_url',
                'value':window.location.hostname+window.location.pathname
            })

            var data_to_send = {
                form_data: form_data,
                details_data: details_data
            };

            $.ajax({
                url: 'https://todobox.ru/payment/kokoslook/kokos/bitrix24-sdk.php' + window.location.search,
                type: 'post',
                dataType: 'json',
                data: data_to_send,
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

    });

});