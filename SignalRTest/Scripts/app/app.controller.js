var app;
(function (app) {
    var ProductController = (function () {
        function ProductController(productDataService) {
            var _this = this;
            this.productDataService = productDataService;
            this.products = [];
            this.productDataService.getAll()
                .then(function (products) {
                _this.products = products;
            });
        }
        return ProductController;
    }());
    app.ProductController = ProductController;
    productController.$inject = [];
    function productController(productDataService) {
        return new ProductController(productDataService);
    }
    ;
    angular.module('app.product')
        .controller('app.product.ProductController', productController);
})(app || (app = {}));
