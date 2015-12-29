import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

class Product{

  public sku: string;

  public name: string;

  public imageUrl: string;

  public department: string[];

  public price: number; 

  constructor( product_sku: string, product_name: string, product_url: string, product_dept: string[], product_price: number) {
     this.sku          = product_sku;
     this.name         = product_name;
     this.imageUrl     = product_url;
     this.department   = product_dept;
     this.price        = product_price
   }

}


@Component({
  selector: 'inventory-app',
  templateUrl : 'partials/shell.html'
})
class InventoryApp{

  product: Product[];

  constructor() {

    let newProduct: Product[] = [

      new Product('avcf1243', 'Adiddas Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 220.00),
      new Product('avcf1sdsd3', 'Nike Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 250.00),
      new Product('avcf1243sdsds', 'Fila Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 260.00),
      new Product('avcf124sdsdsd3', 'Puma Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 280.00),

      ]

    this.product = newProduct;

  }

}
bootstrap(InventoryApp);