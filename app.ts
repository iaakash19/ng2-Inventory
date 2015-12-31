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

/**
 * Provides a `Product` object
 */
class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  }
}

/**
 * @ProductImage: A component to show a single Product's image 
 */
@Component({
  selector: 'product-image',
  host: { class: 'ui small image' },
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
class ProductImage {
  product: Product;
}

/**
 * @ProductDepartment: A component to show the breadcrumbs to a 
 * Product's department
 */
@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
  <div class="product-department">
    <span *ngFor="#name of product.department; #i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
class ProductDepartment {
  product: Product;
}

/**
 * @PriceDisplay: A component to show the price of a 
 * Product
 */
@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
class PriceDisplay {
  price: number;
}

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: { 'class': 'item' },
  templateUrl: 'partials/product-row.html',
  directives: [ProductImage, ProductDepartment, PriceDisplay],
})
class ProductRow{
  product: Product;
}



/**
 * @ProductsList: A component for rendering all ProductRows and 
 * storing the currently selected Product
 */
@Component({
  selector: 'products-list',
  inputs: ['productList'],
  templateUrl: 'partials/product-list.html',
  directives: [ProductRow]
})
class ProductsList{

  productList: Product;  // productList is of Product Type
  
}


/**
 * @InventoryApp: the top-level component for our application
 */
 @Component({
   selector : 'inventory-app',
   templateUrl: 'partials/inventory-app.html',
   directives: [ProductsList]
 })
 class InventoryApp{
   products: Product[];
   constructor(){
     this.products = [
       new Product(
         'MYSHOES', 'Black Running Shoes',
         '/resources/images/products/black-shoes.jpg',
         ['Men', 'Shoes', 'Running Shoes'],
         109.99),
       new Product(
       'NEATOJACKET', 'Blue Jacket',
       '/resources/images/products/blue-jacket.jpg',
       ['Women', 'Apparel', 'Jackets & Vests'],
       238.99),
     new Product(
       'NICEHAT', 'A Nice Black Hat',
       '/resources/images/products/black-hat.jpg',
       ['Men', 'Accessories', 'Hats'],
       29.99)
     ]
   }
   productWasSelected(product: Product): void {
     console.log('Details of the product Clicked', product);
   }
 }
 bootstrap(InventoryApp);