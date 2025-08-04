interface IUser {
    username:string;
    gender:string;
    id?:number;
    isMarried:boolean
}

var user1:IUser ={
 username:"raj",
 gender:"male",

 isMarried:false
 
}



interface IProduct {
     getPrice();
     display();
     getdiscount(discount);
}

class Iphone16 implements IProduct{
    getPrice() {
        
    }
    display() {
        
    }
    getdiscount(discount: any) {
        
    }
}
