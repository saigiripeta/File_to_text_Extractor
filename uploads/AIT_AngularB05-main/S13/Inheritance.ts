
class User{
    name:string;
    gender:string;

    constructor(name:string,gender:string){
this.name = name;
this.gender = gender
    }

    displayDetails(){
        console.log(this.name,this.gender)
    }
}

// var a1 = new A("Aditya","male") // a1 = {name:"--",gender:"--",displayDetails:function(){}}
// var a2 = new A("Shubham","male")

// a1.displayDetails()
// a2.displayDetails()


class Address extends User{

    city:string;
    state:string;

    constructor(city,state){
        super("Aman","male")
this.city = city;
this.state = state
    }

    displayAddressDetails(){
        this.displayDetails()
        console.log(this.city,this.state)
    }
}

// var address1 = new Address("pune","MH")
// address1.displayAddressDetails()


class Contact extends Address {
    email:string;
    phone:number; 

    constructor(){
        super("Indore","MP")
        this.email = "aman@gmail.com";
        this.phone = 999999999999
    }

    displayContactDetails() {
        this.displayAddressDetails()
        console.log(this.email,this.phone)
    }
}

const c1 = new Contact()
c1.displayContactDetails()
