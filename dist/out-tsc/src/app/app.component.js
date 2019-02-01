import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from './components/sidenav/sidenav.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(sidenavService, changeDetectorRef) {
        this.sidenavService = sidenavService;
        this.changeDetectorRef = changeDetectorRef;
        this.mode = 'over';
        this.opened = false;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sidenavService.appDrawer = this.appDrawer;
        this.onResizeDisplay();
        window.onresize = function () {
            _this.onResizeDisplay();
        };
    };
    AppComponent.prototype.onResizeDisplay = function () {
        if (window.innerWidth > 800) {
            this.mode = 'side';
            this.opened = true;
            this.changeDetectorRef.detectChanges();
        }
        else {
            this.mode = 'over';
            this.opened = false;
        }
    };
    tslib_1.__decorate([
        ViewChild('appDrawer'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AppComponent.prototype, "appDrawer", void 0);
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SidenavService,
            ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map