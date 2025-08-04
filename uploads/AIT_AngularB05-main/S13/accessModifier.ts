class Product {
   public brandName;
   private price;
   protected rating;

   constructor(){
    this.brandName = "Apple";
    this.price = 199999
    this.rating=4.8
   }

   protected display(){
    console.log(this.brandName,this.price,this.rating)
   }
}

var p1 = new Product()
// p1.rating;
// console.log(p1.brandName,p1.price)

class Order extends Product {

    displayOrder(){
        // console.log(this.brandName,this.price)
        console.log(this.rating)
    }
}
