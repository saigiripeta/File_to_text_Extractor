let product = {
  brand: "Apple",
  model: "Iphone 16",
  rating: 4.8,
  price: 90000,
};
console.log(product);
console.log("---------------------------------------");

//Insert new Property
product.inStock = true;
product["discount"] = "20%";
console.log(product);
