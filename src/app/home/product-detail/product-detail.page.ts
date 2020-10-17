import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/api/product.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: Product;
  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
    
    
      this.activatedRoute.paramMap.subscribe( paramMap => {
  
        if(!paramMap.has('productId')) {return;}
        const productId = paramMap.get('productId');
        this.product = this.productService.getProduct(productId);
        // console.log(this.product);
      })
    }
  ionViewWillEnter(){
    
  }
}
