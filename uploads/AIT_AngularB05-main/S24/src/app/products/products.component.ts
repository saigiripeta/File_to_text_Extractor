import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsData:any = []
  category:string = "all"

  theme:any = {
    color:"black",
    bgColor:"white"
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

  changeTheme(event:any){
     if(event.target.value==="true"){
      this.theme = {
         color:"white",
    bgColor:"black"
      }
     }else{
       this.theme = {
         color:"black",
    bgColor:"white"
      }
     }
  }
  ngOnInit(): void {
    this.getAllProducts()
  }



}
