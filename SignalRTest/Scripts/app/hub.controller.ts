/// <reference path="../typings/signalr/signalr-1.0.d.ts" />
module app {
    export class HubController {
        public hub: HubProxy;
        public show: number = 0;
        public input: number = 0;

        constructor() {
            this.hub = (<any>jQuery.connection).testHub;
            this.hub.on('show', (result: number) => { 
                this.show = result;
            });

            jQuery.connection.hub.start();
        }

        divideByTwo(): void {
            this.hub.invoke('DivideByTwo', this.input);
        }
    }

    hubController.$inject = [];

    function hubController(productDataService): HubController {
        return new HubController();
    };

    angular.module('app')
        .controller('app.HubController', hubController);
}