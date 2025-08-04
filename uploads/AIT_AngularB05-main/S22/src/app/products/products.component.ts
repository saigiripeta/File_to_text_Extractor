import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsData:any = []
  category:string = "all"


  getAllProducts(){
     fetch("https://fakestoreapi.com/products")
     .then((res)=>{return res.json()})
     .then((data)=>{
      this.productsData = data 
      console.log(this.productsData)
     })
     .catch((error)=>{
      console.log(error)
     })
  }

  ngOnInit(): void {
    this.getAllProducts()
  }



}
