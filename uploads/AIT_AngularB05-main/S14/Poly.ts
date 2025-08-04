class PaymentMode {

    pay(){ //overiding
        console.log("-----------")
    }
}

class Gpay extends PaymentMode {
    pay(){
        console.log("payment is done through Gpay")
    }
}

class Phonepay extends PaymentMode {
    
}

class Razorpay extends PaymentMode{
    pay(){
        console.log("payment is done through razor pay")
    }
}


function doPayment(mode){
mode.pay()
  
}

doPayment(new Gpay())

doPayment(new Phonepay())

doPayment(new Razorpay())

