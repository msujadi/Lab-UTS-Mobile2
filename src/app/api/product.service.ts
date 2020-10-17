import { Injectable } from '@angular/core';
import { Cpu } from '../model/cpu.model';
import { Gpu } from '../model/gpu.model';
import { Motherboard } from '../model/motherboard.model';
import { Product } from '../model/product.model';
import { Ram } from '../model/ram.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private id= "PD-";
  private count = 10;
  private products: (Cpu | Gpu |  Motherboard | Ram | Product)[] = [
    {
      id: "PD-1",
      merek: "Intel",
      model:"Core i7-10700KF",
      description: "Next Level Intel Processor",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/hDjmkQ/2020/9/18/05d66610-0561-41a3-b24e-318030313fd9.jpg",
      price: 5700000,
      stok: 20,
      type: "Processor",
      baseClock: 3.8,
      boostClock: 5.1 ,
      core: 8,
      thread: 16
    },
    {
      id: "PD-2",
      merek: "AMD",
      model:"Ryzen 3 3300X",
      description: "AMD Masterpiece Processor",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71qJkCH4EnL._AC_SL1384_.jpg",
      price: 2499000,
      stok: 7,
      type: "Processor",
      baseClock: 3.8,
      boostClock: 4.3 ,
      core: 4,
      thread: 8
    },
    {
      id: "PD-3",
      merek: "Kingston",
      model:"HYPER X GAMING DDR4",
      description: "Cuci gudang",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/9/10/cabdc6a2-9840-4d9d-990e-a2b4b4160957.jpg",
      price: 300000,
      stok:4,
      type: "RAM",
      speed: 2666,
      ukuran: 16
    },
    {
      id: "PD-4",
      merek: "MSI",
      model:"H310M PRO-VDH Plus",
      description: "Best Choice Budget MSI Motherboard",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/6/21/3525669/3525669_34b17dea-2842-4054-bffa-46d59738f759_800_800.jpg",
      price: 900000,
      stok: 50,
      type: "Motherboard",
      chipset: "Intel Z490",
      tipeProcessor:"Intel",
    },
    {
      id: "PD-5",
      merek: "Intel",
      model:"H61 - 1155",
      description: "Decent Intel Motherboard",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/5/13981439/13981439_24955cda-836d-4d15-b740-b5c0277541aa_800_800.jpg",
      price: 530000,
      stok:0,
      type: "Motherboard",
      chipset: "Intel H61",
      tipeProcessor:"Intel",
    },
    {
      id: "PD-6",
      merek: "MSI",
      model:"H410M PRO VH",
      description: "MSI Motherboard",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/9/21/51740e23-fee1-48e6-b379-07cbfba630ce.jpg",
      price: 1000000,
      stok:12,
      type: "Motherboard",
      chipset: "Intel H410",
      tipeProcessor:"Intel",
    },
    {
      id: "PD-7",
      merek: "Kingston ",
      model:"HyperX Predator",
      description: "Best DDR3 RAM",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/Gjnwh5NDUiqkL6RM6EXt2R-650-80.jpg",
      price: 409000,
      stok:4,
      type: "RAM",
      speed: 1600,
      ukuran: 8
    },
    {
      id: "PD-8",
      merek: "AMD ",
      model:"Radeon RX 5600 XT",
      description: "Pilihan baik buat gamer ber-budget",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/3/5373285/5373285_7d3adf15-9992-4889-b3d5-4faac6931e72_800_800",
      price: 4442000,
      stok:6,
      type: "GPU"
    },
  ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }

  addProduct(prod: (Cpu | Gpu |  Motherboard | Ram | Product)){
    this.count++;
    prod.id = this.id + this.count;
    this.products.push(prod);
    return 1;
  }

  deleteProduct(productId: string){
    return this.products = this.products.filter(obj => obj.id !== productId);
  }

  deleteProducts(productIds){
    return this.products = this.products.filter(obj => !productIds.includes(obj.id));
  }

  editProduct(prod: (Cpu | Gpu |  Motherboard | Ram | Product)){
    return this.products.find(product => {
      if(product.id === prod.id){
        product = prod;
      }
    });
  }

  getProduct(productId: string){
    return this.products.find(product => {
      return product.id === productId;
    });
  }
}
