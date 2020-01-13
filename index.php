<!DOCTYPE html>
<html>
<head>
	<title>test form</title>

	<script src="https://static.tildacdn.com/js/jquery-1.10.2.min.js"></script>
</head>
<body>

<style>
.container{
	width: 980px;
	margin: 0px auto;
	height: 100vh;
	display: flex;
    justify-content: center;
    align-items: center;
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
.submit_btn{
	position: relative;
	display: inline-block;

    border: 0 none;
    margin: 0;
    border: 1px solid #eee;

    color: #ffffff;
    background-color: #ff7300;

    font-size: 16px;
    line-height: 44px;
    text-align: center;
    text-decoration: none;

    border-radius: 22px;
    -moz-border-radius: 22px;
    -webkit-border-radius: 22px;
}

</style>

<!-- <div class="container">
	<form id="ShopForm" action="https://todobox.ru/payment/kokoslook/tilda-webhook-test.php" method="POST" name="ShopForm">
	
		<select id="productID" name="product">
			<option value="0">Вид продукции</option>
			<option value="Шубы">Шубы</option>
			<option value="Пуховики">Пуховики</option>
		</select>
		<br><br>
		<input class="required" type="text" size="43" id="Sum" name="sum" placeholder="Сумма">
		<br><br>
		<input class="required" type="text" size="43" name="name" placeholder="Имя">
		<br><br>
		<input class="required" type="text" size="43" id="email" name="email" placeholder="E-Mail">
		<br><br>
		<input type="radio" value="PC" name="paymentType">Оплата со счета в Яндекс.Деньгах<br>
		<input checked="checked" type="radio" value="AC" name="paymentType">Оплата банковской картой<br>
		<input type="radio" value="GP" name="paymentType">Оплата по коду через терминал<br>
		<input type="radio" value="WM" name="paymentType">Оплата cо счета WebMoney<br>
		
		<input class="pay" type="submit" value="Оплатить">
		
		<a href="#order:Занятие йогой=100" id="paybutton" target="" class=""><div class="t-btn t142__submit " style="color:#000000;border:3px solid #000000;">Оплатить</div></a>
	
		<br>
		
	</form>
</div>	 -->

<div class="container">
	<form id="ShopForm" action="https://todobox.ru/payment/kokoslook/tilda-webhook-test.php" method="POST" name="ShopForm">

		<input type="text" name="orderno" id="order" class="mev-input" placeholder="Номер заказа" />
		<br><br>
		<input type="text" name="sum" id="Sum" class="mev-input" placeholder="Сумма">
		<br><br>
		
		<a href="" id="paybutton" target="" class="mev-input submit_btn">Оплатить</a>

		<br>
		
	</form>	
</div>

<script>
jQuery(document).ready(function($) {

	function doHref() {
		var product = 'Услуга пошива',order = '',sum = '', href='';

		if ( $('#product').val() != undefined && $('#product').val() != "" ) {
			product = $('#product').val();
		}

		if ( $('#order').val() != undefined && $('#order').val() != "" ) {
			order = $('#order').val();
		}

		if ( $('#Sum').val() != undefined && $('#Sum').val() != "" ) {
			sum = $('#Sum').val();
		}

		href = '#order:'+product+'('+order+')='+sum;

	    $('#paybutton').attr('href', href);
	}

	$('#product').bind('input', doHref);
	$('#order').bind('input', doHref);
	$('#Sum').bind('input', doHref);
	
});
</script>

</body>
</html>