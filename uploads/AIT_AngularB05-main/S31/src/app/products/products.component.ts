import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductcategoriesComponent } from '../productcategories/productcategories.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductcategoriesComponent,ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsData:any = []
  category:string = "all"


  getCategory(data:any){
this.category = data
console.log(this.category)
// alert(this.category)
  }
 

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
