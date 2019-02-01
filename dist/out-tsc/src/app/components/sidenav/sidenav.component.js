import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from './sidenav.service';
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(route, sidenavService) {
        this.route = route;
        this.sidenavService = sidenavService;
        this.activeRoute = '';
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.openPage = function (url) {
        this.activeRoute = url;
        this.route.navigateByUrl(url);
        this.sidenavService.closeNav();
    };
    SidenavComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['./sidenav.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            SidenavService])
    ], SidenavComponent);
    return SidenavComponent;
}());
export { SidenavComponent };
//# sourceMappingURL=sidenav.component.js.map