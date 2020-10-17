import { Component } from '@angular/core';
import { ProductService } from '../api/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products : Product[];
  iconName:String = "grid-outline";
  listView:Boolean = true;
  constructor(private productsService : ProductService) {}
  ngOnInit() {
  }
  changeLayout(){
    if(this.listView){
      this.iconName = "list-outline";
    }else{
      this.iconName = "grid-outline";
    }
    this.listView = !this.listView;
  }
  ionViewWillEnter(){
    this.products =  this.productsService.getAllProducts();
    this.products = this.products.filter(obj => obj.stok !== 0);
    // console.log(this.products);
  }
}
