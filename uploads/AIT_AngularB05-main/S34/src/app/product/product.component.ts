import { CommonModule } from '@angular/common';
import { Component,Input,inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input() product:any;
category:any="all"
 router = inject(Router)
   switchToProductDetails(id:number){
    this.router.navigate(["/productdetails",id]) 
    //  this.router.navigate(["/productdetails"],{queryParams:{id:id,name:"kabir"}})
    // http://localhost:4200/productdetails/10
   }

}
