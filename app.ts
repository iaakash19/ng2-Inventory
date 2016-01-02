import {
Component,
EventEmitter
} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';

/**
 * Components List
     Inventory App
       - ProductsList
         - ProductRow
            - productimage
            - productdept
            - pricedisplay
 */

class Product {
  public name: string;
  public imageUrl: string;
  public sku: string;
  public department: string[];
  public price: number;

  constructor(product_name: string, product_imageurl: string, product_sku: string, product_dept: string[], product_price: number  ) {
     this.name = product_name;
     this.imageUrl = product_imageurl;
     this.sku = product_sku;
     this.department = product_dept;
     this.price = product_price;
  }

}

@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})
class PriceDisplay{
  price: number;
}

@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
    <div class="product-department">
      <span *ngFor="#name of product.department">
        <a href="">{{name}}</a>
      </span>
    </div>`

})
class ProductDepartment{
   product: Product;
  }
@Component({
  selector: 'product-image',
  host :{
    class: 'ui small image'
  },
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl" />
  `
})
class ProductImage{
   product: Product;
}

@Component({
  selector: 'product-row',
  inputs: ['newProduct'],
  host: { 'class': 'item' },
  templateUrl:'partials/product-row.html',
  directives: [ProductImage, ProductDepartment, PriceDisplay]
})
class ProductRow{
   newProduct: Product;
}

@Component({ 
  selector: 'product-list',
  inputs: ['productList'],
  templateUrl: 'partials/product-list.html',
  directives: [ProductRow]
})
class ProductList {
  productList: Product;
}

@Component({
  selector: 'inventory-app',
  templateUrl: 'partials/inventory-app.html',
  directives: [ProductList]
})
class InventoryApp {
  
  products: Product[];

  constructor(){
    this.products = [
      new Product('Black Running Shoes', '/resources/images/products/black-shoes.jpg', 'BRSD45262', ['Men', 'Shoes', 'Running Shoes'], 45),
      new Product('Blue Jacket Addidas', '/resources/images/products/blue-jacket.jpg', 'AD3435521', ['Women', 'Apparel', 'Jackets & Vests'], 90)
    ]
  }
}
bootstrap(InventoryApp);