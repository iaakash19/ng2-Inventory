System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Product, InventoryApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Product = (function () {
                function Product(product_sku, product_name, product_url, product_dept, product_price) {
                    this.sku = product_sku;
                    this.name = product_name;
                    this.imageUrl = product_url;
                    this.department = product_dept;
                    this.price = product_price;
                }
                return Product;
            })();
            InventoryApp = (function () {
                function InventoryApp() {
                    var newProduct = [
                        new Product('avcf1243', 'Adiddas Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 220.00),
                        new Product('avcf1sdsd3', 'Nike Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 250.00),
                        new Product('avcf1243sdsds', 'Fila Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 260.00),
                        new Product('avcf124sdsdsd3', 'Puma Air', 'http://lorempixel/200/300', ['Men', 'Accessories', 'Shoes'], 280.00),
                    ];
                    this.product = newProduct;
                }
                InventoryApp = __decorate([
                    core_1.Component({
                        selector: 'inventory-app',
                        templateUrl: 'partials/shell.html'
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