import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SidenavComponent,
                ToolbarComponent,
                FooterComponent,
                SharedComponentComponent
            ],
            imports: [
                CommonModule,
                BrowserModule,
                BrowserAnimationsModule,
                MaterialModule
            ],
            exports: [
                SidenavComponent,
                ToolbarComponent,
                FooterComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map