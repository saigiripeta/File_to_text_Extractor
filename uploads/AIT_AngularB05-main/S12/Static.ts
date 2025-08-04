class MyProduct{
    pname:string;
    price:number;
    category:string;
    rating:number;
    static companyName:string;

    constructor(pname,price,category,rating){
        this.pname = pname;
        this.price=price;
        this.category = category;
        this.rating = rating
        MyProduct.companyName = "C1"
    }

    display(){
        console.log(this.pname,this.price,this.category,this.rating,MyProduct.companyName)
    }

    static changeCompanyName(newCompanyName){
        this.companyName = newCompanyName
       
    }
}

 var p1   = new MyProduct("Trimmer",3000,"electronics",4.4)
 p1.display()
 p1.price = 7000

 var p2   = new MyProduct("Shirt",5000,"Mens Clothing",4.8)
 p2.display()

 var p3   = new MyProduct("Saree",9000,"Womens Clothing",4.6)
 p3.display()

 console.log("=======================================")

 MyProduct.changeCompanyName("C2")

 p1.display()
 p2.display()
 p3.display()