import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/api/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  selected:string;
  private product : FormGroup;
  logForm() {
    let send  = this.product.value;
    for (var propName in send) { 
      let arr;
      if(this.selected == "RAM"){
          arr = ["speed", "ukuran"];

      }else if(this.selected == "Processor"){
        arr = ["chipset", "tipeProcessor", "speed", "ukuran" ];
        }else if (this.selected == "Motherboard"){
        arr = ["baseClock",    "boostClock",    "core",    "thread",    "speed",    "ukuran"];
      }else{
        arr = ["baseClock",  "boostClock",  "core",  "thread",  "chipset",  "tipeProcessor",  "speed",  "ukuran"];
      }
      if (arr.includes(propName)) {
        delete send[propName];
      }
    }
    // console.log(send);
    this.productsService.addProduct(send);
    this.presentToast();
    this.router.navigateByUrl("/admin");

  }
  constructor(private formBuilder: FormBuilder, private productsService : ProductService, private router: Router,  public toastController: ToastController) {
      this.product = this.formBuilder.group({
        imageUrl: ['', Validators.required],
        type: ['',Validators.required],
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfuly added.',
      duration: 2000,
      color:"success",
    });
    toast.present();
  }


  changeTipe($event){
    this.selected = this.product.get('type').value;
    // console.log("dadawdwad");
    // console.log(this.selected);
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
  }
  
}
