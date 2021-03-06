import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductComponent } from './pages/product/product.component';
import { FacebookModule } from 'ngx-facebook';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from "angularx-social-login";

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
};

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("391466811398230", fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ProductComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ComponentsModule, 
    FacebookModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Add custom icon
    this.matIconRegistry.addSvgIcon(
      'settings-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/outline-settings-24px.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'home-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/outline-home-24px.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'lock-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/outline-lock-24px.svg')
    );
  }
}
