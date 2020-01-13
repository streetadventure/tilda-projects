<!DOCTYPE html>
<html>
<head>
    <title>test form</title>

    <script src="https://static.tildacdn.com/js/jquery-1.10.2.min.js"></script>
</head>
<body>
<style>
.container{
	margin: 0px auto;
}
.mev-input {
    font-family: 'OpinionPro',Arial,sans-serif;
    font-size: 100%;
	
    height: 44px;
    padding: 0 20px;
    width: 250px;

    border: 1px solid #eee;
    border-radius: 7px;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;

}
/* #allrecords  */.submit_btn{
	position: relative;
	display: inline-block;

    border: 0 none;
    margin: 0;
    border: 1px solid #eee;

    color: #ffffff;
    background-color: #ff00b0;

    font-size: 16px;
    line-height: 44px;
    text-align: center;
    text-decoration: none;
    font-family: 'OpinionPro',Arial,sans-serif;
    text-transform: uppercase;
    font-weight: 700;

    border-radius: 7px;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;

    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
/* #allrecords  */.submit_btn:hover{
    background-color: #ff5429;
}
/*  */
@media screen and (max-width: 480px){
    .mev-input{
        width: 238px;
    }
    #ShopForm{text-align: center;}
}
@media screen and (min-width: 980px){
    .t396 .tn-atom__img{
        margin-top: 120px;
    }
}
.submit_btn.disabled{
    cursor: not-allowed;
    opacity: .4
}
.submit_btn.disabled:hover{
    background-color: #ff00b0;
}

.t-checkbox_control{
    display: block;
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-family: 'Open Sans';

    font-size: 15px;
    line-height: 1.55;
}

.t-checkbox_control input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.t-checkbox_indicator {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 20px;
    border: 2px solid #000;
    box-sizing: border-box;
    margin-right: 10px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    opacity: .6;
}

/* Create the t-checkbox_indicator/indicator (hidden when not checked) */
.t-checkbox_indicator:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the t-checkbox_indicator when checked */
.t-checkbox_control input[type="checkbox"]:checked ~ .t-checkbox_indicator:after {
    display: block;
}

/* Style the t-checkbox_indicator/indicator */
.t-checkbox_control .t-checkbox_indicator:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 3px;
    height: 8px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

</style>
<div class="container">
	<form id="ShopForm" action="https://todobox.ru/payment/kokoslook/tilda-webhook-test.php" method="POST" name="ShopForm">

		<input type="text" name="orderno" id="order" class="mev-input" placeholder="№ заказа" data-tilda-req="1" data-tilda-rule="orderno"/>
		<br><br>
		<input type="text" name="sum" id="Sum" class="mev-input" placeholder="сумма" data-tilda-req="1" data-tilda-rule="summa">
		<br><br>
        <label class="t-checkbox_control" style="">
            <input type="checkbox" name="Checkbox" class="t-checkbox" value="yes" data-tilda-req="1" data-tilda-rule="checkbox">
            <div class="t-checkbox_indicator"></div>
            Я согласен с условиями
        </label>
        <br><br>
		
		<a href="" id="paybutton" target="" class="mev-input submit_btn">Оплатить</a>

		<br>
		
	</form>	
</div>

<script>
jQuery(document).ready(function($) {

    function check_inputs() {
        if( $('#order').val() == "" || $('#Sum').val() == "" || !$('.t-checkbox').prop('checked') ){
            $('#paybutton').attr('data-link-event-setted','').addClass('disabled');
            $('#paybutton').click(function(event) {
                event.preventDefault();
            });
        }else{
            $('#paybutton').removeAttr('data-link-event-setted').removeClass('disabled');
            tcart__addEvent__links();
        }
    }
    function doHref() {
        var product = 'Услуга пошива по заказу',order = '',sum = '', href='';

        if ( $('#product').val() != undefined && $('#product').val() != "" ) {
            product = $('#product').val();
        }

        if ( $('#order').val() != undefined && $('#order').val() != "" ) {
            order = $('#order').val();
        }

        if ( $('#Sum').val() != undefined && $('#Sum').val() != "" ) {
            sum = $('#Sum').val();
        }

        if( $('#order').val() == "" || $('#Sum').val() == "" || !$('.t-checkbox').prop('checked') ){
            href = "";
        } else {
            href = '#order:'+product+' '+order+'='+sum;
        }

        $('#paybutton').attr('href', href);

        check_inputs();
    }

    $('#paybutton').click(function(event) {
        event.preventDefault();
    });

    $('#product').bind('input', doHref);
    $('#order').bind('input', doHref);
    $('#Sum').bind('input', doHref);
    
});
</script>
</body>
</html>