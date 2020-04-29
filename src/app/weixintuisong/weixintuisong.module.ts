import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeixintuisongPage } from './weixintuisong.page';

const routes: Routes = [
  {
    path: '',
    component: WeixintuisongPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeixintuisongPage],
  // entryComponents: [WeixintuisongPage]
})
export class WeixintuisongPageModule { }
