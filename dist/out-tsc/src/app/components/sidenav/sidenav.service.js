import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SidenavService = /** @class */ (function () {
    function SidenavService() {
    }
    SidenavService.prototype.closeNav = function () {
        if (window.innerWidth <= 800) {
            this.appDrawer.close();
        }
    };
    SidenavService.prototype.openNav = function () {
        this.appDrawer.open();
    };
    SidenavService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SidenavService);
    return SidenavService;
}());
export { SidenavService };
//# sourceMappingURL=sidenav.service.js.map