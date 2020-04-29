import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from '../services/api/api.service';
import { Api } from '../services/api/api';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EjectPhonebookPageModule } from './eject-phonebook/eject-phonebook.module';

import { WeixintuisongPage } from './weixintuisong/weixintuisong.page';




@NgModule({
  declarations: [
    AppComponent,
    // WeixintuisongPage
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    EjectPhonebookPageModule,
    IonicModule.forRoot({
      mode: 'ios',  // 配置android ios用统一的样式
      backButtonText: ''  // 修改默认返回文字
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // modal 组件
    EjectPhonebookPageModule,
  ],
  providers: [
    ApiService,
    Api,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
