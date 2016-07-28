/// <reference path="../typings/signalr/signalr-1.0.d.ts" />
var app;
(function (app) {
    var HubController = (function () {
        function HubController() {
            var _this = this;
            this.show = 0;
            this.input = 0;
            this.hub = jQuery.connection.testHub;
            this.hub.on('show', function (result) {
                _this.show = result;
            });
            jQuery.connection.hub.start();
        }
        HubController.prototype.divideByTwo = function () {
            this.hub.invoke('DivideByTwo', this.input);
        };
        return HubController;
    }());
    app.HubController = HubController;
    hubController.$inject = [];
    function hubController(productDataService) {
        return new HubController();
    }
    ;
    angular.module('app')
        .controller('app.HubController', hubController);
})(app || (app = {}));
//# sourceMappingURL=hub.controller.js.map