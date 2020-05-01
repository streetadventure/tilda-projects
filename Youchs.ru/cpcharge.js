window.pay = function (charge) {
    var widget = new cp.CloudPayments();
    widget.charge({ // options
	    	publicId: 'pk_30195248752877cfd0efb85de209f', // pk_633b7edc45709544c864ce384eb47 - todobox.ru
	    	description: charge.description,
	    	amount: charge.amount,
	    	currency: 'RUB',
	    	invoiceId: charge.invoiceId,
	    	accountId: charge.accountId,
        },
        function (options) { // success
            //действие при успешной оплате
            // console.log(options)
        },
        function (reason, options) { // fail
            //действие при неуспешной оплате
            // console.log(options)
        });
};

$(document).ready(function() {
  $('#cloudpayment_button').on('click', function(event) {
  	event.preventDefault();

    var pathArray = window.location.pathname.split('/');
  	
    if(pathArray[pathArray.length-1]=="cart"){
        $.get('/cart.js', function(data) {
            if (data != undefined && data.length > 0) {
                json = JSON.parse(data);
                var description = '',
                    amount = json.total_price.toString().slice(0, -2),
                    invoiceId = json.token;
                for (var i = json.items.length - 1; i >= 0; i--) {
                    description += json.items[i].product_title+'\n';
                }

                charge = {
                    "description": description,
                    "amount": +amount,
                    "invoiceId": invoiceId,
                };
                window.pay(charge);
            } else {
                $.get('/cart.json', function(data) {
                    if (data != undefined && data.length > 0) {
                        json = JSON.parse(data);
                        var description = '',
                            amount = json.total_price.toString().slice(0, -2),
                            invoiceId = json.token;
                        for (var i = json.items.length - 1; i >= 0; i--) {
                            description += json.items[i].product_title;               
                        }

                        charge = {
                            "description": description,
                            "amount": +amount,
                            "invoiceId": invoiceId,
                        };
                        window.pay(charge);
                    } else {
                        console.log('no data recieved');
                    }
                });
            }
            
        });
    }else{
        $.get(window.location.pathname+'.js', function(data) {
            if (data != undefined && data.length > 0) {
                json = JSON.parse(data);
                
                var description = json.title,
                    amount = json.price.toString().slice(0, -2),
                    invoiceId = 'tiju'+Math.round((new Date()).getTime()/1000);

                charge = {
                    "description": description,
                    "amount": +amount,
                    "invoiceId": invoiceId,
                };
                window.pay(charge);
            } else {
                $.get(window.location.pathname+'.json', function(data) {
                    if (data != undefined && data.length > 0) {
                        json = JSON.parse(data);

                        var description = json.title,
                            amount = json.price.toString().slice(0, -2),
                            invoiceId = 'tiju'+Math.round((new Date()).getTime()/1000);

                        charge = {
                            "description": description,
                            "amount": +amount,
                            "invoiceId": invoiceId,
                        };
                        window.pay(charge);
                    } else {
                        console.log('no data recieved');
                    }
                });
            }
            
        });
    }
  	


  });
    
});