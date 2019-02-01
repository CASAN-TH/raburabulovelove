import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(sidenavService) {
        this.sidenavService = sidenavService;
        this.isMenuIcon = true;
        this.onResizeDisplay();
    }
    ToolbarComponent.prototype.onResize = function () {
        this.onResizeDisplay();
    };
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.onResizeDisplay = function () {
        if (window.innerWidth > 800) {
            this.isMenuIcon = false;
        }
        else {
            this.isMenuIcon = true;
        }
    };
    tslib_1.__decorate([
        HostListener('window:resize'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], ToolbarComponent.prototype, "onResize", null);
    ToolbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SidenavService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map