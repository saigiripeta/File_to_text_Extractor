import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
   productId: any
  activatedroute =inject(ActivatedRoute)

  ngOnInit(): void {
  
  //path params value
  this.productId = this.activatedroute.snapshot.paramMap.get("id")

  //Query Params
  // alert(this.activatedroute.snapshot.queryParamMap.get("name"))


   //Send API call to get product Data
  }
}
