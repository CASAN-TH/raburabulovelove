import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var SharedComponentComponent = /** @class */ (function () {
    function SharedComponentComponent(fb) {
        this.fb = fb;
        var initParams = {
            appId: '2134431583284588',
            version: 'v3.2'
        };
        fb.init(initParams);
    }
    SharedComponentComponent.prototype.ngOnInit = function () {
    };
    var _a;
    SharedComponentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shared-component',
            templateUrl: './shared-component.component.html',
            styleUrls: ['./shared-component.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof FacebookService !== "undefined" && FacebookService) === "function" ? _a : Object])
    ], SharedComponentComponent);
    return SharedComponentComponent;
}());
export { SharedComponentComponent };
//# sourceMappingURL=shared-component.component.js.map