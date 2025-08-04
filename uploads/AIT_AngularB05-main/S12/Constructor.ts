class Product{
    pname:string;
    price:number;
    category:string;
    rating:number;

    constructor(pname,price,category,rating){
        this.pname = pname;
        this.price=price;
        this.category = category;
        this.rating = rating
    }

    display(){
        console.log(this.pname,this.price,this.category,this.rating)
    }
}

 var p1   = new Product("Trimmer",3000,"electronics",4.4)
 p1.display()
 p1.price = 7000

 var p2   = new Product("Shirt",5000,"Mens Clothing",4.8)
 p2.display()

 var p3   = new Product("Saree",9000,"Womens Clothing",4.6)
 p3.display()

 console.log("=======================================")

 p1.display()
 p2.display()
 p3.display()