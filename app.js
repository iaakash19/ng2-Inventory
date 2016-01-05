System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var Product, PriceDisplay, ProductDepartment, ProductImage, ProductRow, ProductList, InventoryApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            /**
             * Components List
                 Inventory App
                   - ProductsList
                     - ProductRow
                        - productimage
                        - productdept
                        - pricedisplay
             */
            Product = (function () {
                function Product(product_sku, product_name, product_imageurl, product_dept, product_price) {
                    this.name = product_name;
                    this.imageUrl = product_imageurl;
                    this.sku = product_sku;
                    this.department = product_dept;
                    this.price = product_price;
                }
                return Product;
            })();
            PriceDisplay = (function () {
                function PriceDisplay() {
                }
                PriceDisplay = __decorate([
                    core_1.Component({
                        selector: 'price-display',
                        inputs: ['price'],
                        template: "\n    <div class=\"price-display\">${{ price }}</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PriceDisplay);
                return PriceDisplay;
            })();
            ProductDepartment = (function () {
                function ProductDepartment() {
                }
                ProductDepartment = __decorate([
                    core_1.Component({
                        selector: 'product-department',
                        inputs: ['product'],
                        template: "\n    <div class=\"product-department\">\n      <span *ngFor=\"#name of product.department\">\n        <a href=\"\">{{name}}</a>\n      </span>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductDepartment);
                return ProductDepartment;
            })();
            ProductImage = (function () {
                function ProductImage() {
                }
                ProductImage = __decorate([
                    core_1.Component({
                        selector: 'product-image',
                        host: {
                            class: 'ui small image'
                        },
                        inputs: ['product'],
                        template: "\n  <img class=\"product-image\" [src]=\"product.imageUrl\" />\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductImage);
                return ProductImage;
            })();
            ProductRow = (function () {
                function ProductRow() {
                }
                ProductRow = __decorate([
                    core_1.Component({
                        selector: 'product-row',
                        inputs: ['newProduct'],
                        host: { 'class': 'item' },
                        templateUrl: 'partials/product-row.html',
                        directives: [ProductImage, ProductDepartment, PriceDisplay]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductRow);
                return ProductRow;
            })();
            ProductList = (function () {
                function ProductList() {
                    this.selectProduct = new core_1.EventEmitter();
                }
                ProductList.prototype.clicked = function (product) {
                    this.currentProduct = product;
                    this.selectProduct.emit(product);
                };
                ProductList.prototype.isSelected = function (product) {
                    if (!product || !this.currentProduct) {
                        return false;
                    }
                    return product.sku === this.currentProduct.sku;
                };
                ProductList = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        inputs: ['productList'],
                        outputs: ['selectProduct'],
                        templateUrl: 'partials/product-list.html',
                        directives: [ProductRow]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductList);
                return ProductList;
            })();
            InventoryApp = (function () {
                function InventoryApp() {
                    this.products = [
                        new Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
                        new Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
                        new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
                    ];
                }
                InventoryApp.prototype.onProductSelected = function (product) {
                    console.log('Product clicked:', product);
                };
                InventoryApp = __decorate([
                    core_1.Component({
                        selector: 'inventory-app',
                        templateUrl: 'partials/inventory-app.html',
                        directives: [ProductList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InventoryApp);
                return InventoryApp;
            })();
            browser_1.bootstrap(InventoryApp);
        }
    }
});
//# sourceMappingURL=app.js.map