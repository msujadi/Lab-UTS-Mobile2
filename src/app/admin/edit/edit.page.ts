import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductService } from 'src/app/api/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  selected:string;
  private product : FormGroup;
  private editedProduct;
  logForm() {
    let send  = this.editedProduct;
    // console.log(send);
    this.productService.editProduct(send);
    this.presentToast();
    this.router.navigateByUrl("/admin");

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfuly editted.',
      duration: 2000,
      color:"success",
    });
    toast.present();
  }
  constructor(private formBuilder: FormBuilder,  public toastController: ToastController, private productService : ProductService, private router: Router, private activatedRoute: ActivatedRoute,
    ) { 
      this.product = this.formBuilder.group({
        imageUrl: ['', Validators.required],
        merek: ['',Validators.required],
        model: ['',Validators.required],
        price: ['',Validators.required],
        stok: ['',Validators.required],
        baseClock: [''],
        boostClock: [''],
        core: [''],
        thread: [''],
        chipset: [''],
        tipeProcessor: [''],
        speed: [''],
        ukuran: [''],

    }); 
  }

  cekTipe(){
    this.selected = this.editedProduct.type;
    if(this.selected == "RAM"){
      //enable
        this.product.get("speed").setValidators([Validators.required]);
        this.product.get("speed").updateValueAndValidity();

        this.product.get("ukuran").setValidators([Validators.required]);
        this.product.get("ukuran").updateValueAndValidity();

        //disable
        this.product.get("baseClock").setValidators([]);
        this.product.get("baseClock").updateValueAndValidity();

        this.product.get("boostClock").setValidators([]);
        this.product.get("boostClock").updateValueAndValidity();

        this.product.get("core").setValidators([]);
        this.product.get("core").updateValueAndValidity();
        
        this.product.get("thread").setValidators([]);
        this.product.get("thread").updateValueAndValidity();

        this.product.get("chipset").setValidators([]);
        this.product.get("chipset").updateValueAndValidity();

        this.product.get("tipeProcessor").setValidators([]);
        this.product.get("tipeProcessor").updateValueAndValidity();
    }else if(this.selected == "Processor"){
      //enable
        this.product.get("baseClock").setValidators([Validators.required]);
        this.product.get("baseClock").updateValueAndValidity();

        this.product.get("boostClock").setValidators([Validators.required]);
        this.product.get("boostClock").updateValueAndValidity();

        this.product.get("core").setValidators([Validators.required]);
        this.product.get("core").updateValueAndValidity();
        
        this.product.get("thread").setValidators([Validators.required]);
        this.product.get("thread").updateValueAndValidity();

         //disable
         this.product.get("chipset").setValidators([]);
         this.product.get("chipset").updateValueAndValidity();
 
         this.product.get("tipeProcessor").setValidators([]);
         this.product.get("tipeProcessor").updateValueAndValidity();

         this.product.get("speed").setValidators([]);
         this.product.get("speed").updateValueAndValidity();
 
         this.product.get("ukuran").setValidators([]);
         this.product.get("ukuran").updateValueAndValidity();
      }else if (this.selected == "Motherboard"){
        //enable
        this.product.get("chipset").setValidators([Validators.required]);
        this.product.get("chipset").updateValueAndValidity();

        this.product.get("tipeProcessor").setValidators([Validators.required]);
        this.product.get("tipeProcessor").updateValueAndValidity();

        //disable
        this.product.get("baseClock").setValidators([]);
        this.product.get("baseClock").updateValueAndValidity();

        this.product.get("boostClock").setValidators([]);
        this.product.get("boostClock").updateValueAndValidity();

        this.product.get("core").setValidators([]);
        this.product.get("core").updateValueAndValidity();
        
        this.product.get("thread").setValidators([]);
        this.product.get("thread").updateValueAndValidity();
    }else{
     
      //disable
      this.product.get("speed").setValidators([]);
      this.product.get("speed").updateValueAndValidity();

      this.product.get("ukuran").setValidators([]);
      this.product.get("ukuran").updateValueAndValidity();

      this.product.get("baseClock").setValidators([]);
      this.product.get("baseClock").updateValueAndValidity();

      this.product.get("boostClock").setValidators([]);
      this.product.get("boostClock").updateValueAndValidity();

      this.product.get("core").setValidators([]);
      this.product.get("core").updateValueAndValidity();
      
      this.product.get("thread").setValidators([]);
      this.product.get("thread").updateValueAndValidity();

      this.product.get("chipset").setValidators([]);
      this.product.get("chipset").updateValueAndValidity();

      this.product.get("tipeProcessor").setValidators([]);
      this.product.get("tipeProcessor").updateValueAndValidity();
    }
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
  
      if(!paramMap.has('productId')) {return;}
      const productId = paramMap.get('productId');
      this.editedProduct = this.productService.getProduct(productId);
      // console.log(this.editedProduct);
      this.cekTipe();
    })
  }

}
