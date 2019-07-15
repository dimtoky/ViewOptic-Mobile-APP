import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GlassMakerPage } from '../pages/glass-maker/glass-maker';
import { LensMakerPage } from '../pages/lens-maker/lens-maker';
import { ConfigurateurPage } from '../pages/configurateur/configurateur';
import { CatalogPage } from '../pages/catalog/catalog';
import { ProductPage } from '../pages/product/product';
import { OrderPage } from '../pages/order/order';

import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
OrderPage
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfigurateurPage,
    GlassMakerPage,
    LensMakerPage,
    CatalogPage,
    ProductPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfigurateurPage,
    GlassMakerPage,
    LensMakerPage,
    CatalogPage,
    ProductPage,
    OrderPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
