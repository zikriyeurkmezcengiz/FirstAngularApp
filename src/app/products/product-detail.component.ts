import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle : string  = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.product = {
      'productId':id,
      'productName' :'Leaf Rake',
      'productCode':'GDN-xdf',
      'releaseDate':'March 19, 2019',
      'description':'xxxx',
      'price':19.95,
      'starRating':3.4,
      'imageUrl':'assets/images/leaf-rake.png'
    }

    this.pageTitle += `: ${id}`;
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}