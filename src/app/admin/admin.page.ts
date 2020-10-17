import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';
import { Product } from '../model/product.model';
import { IonItemSliding } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  multiSelect :Boolean = false;
  prodList: String[] = [];
  products : Product[];
  constructor(private productsService : ProductService, public alertController: AlertController, public toastController: ToastController) {}
  ngOnInit() {
  }
 
  ionViewWillEnter(){
    this.products =  this.productsService.getAllProducts();
  }
  
  addToList(id){
    if(this.prodList.includes(id)){
    this.prodList = this.prodList.filter(obj => obj !== id );
    }else{
      this.prodList.push(id);
    }
    // console.log(this.prodList);
  }

  async presentToast(num) {
    const toast = await this.toastController.create({
      message: 'Successfuly deleted ' + num  +" items.",
      duration: 2000,
      color:"danger"
    });
    toast.present();
  }

  massDelete(){
    this.productsService.deleteProducts(this.prodList);
    this.products = this.productsService.getAllProducts();
    this.multiSelect = !this.multiSelect;
    this.presentToast(this.prodList.length);
    this.prodList = [];
  }

  async delete(prod: Product, slidingItem: IonItemSliding) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: 'Are you sure you want to delete ' + prod.merek + " " + prod.model + "?",
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          // console.log('canceled');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.productsService.deleteProduct(prod.id);
          // console.log(prod);
          slidingItem.close();
          this.products = this.productsService.getAllProducts();
        }
      }]
    });

    await alert.present();
     
  }
}
