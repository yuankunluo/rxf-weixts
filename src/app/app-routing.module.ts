import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WeixintuisongPage } from './weixintuisong/weixintuisong.page';
import { WeixintuisongPageModule } from './weixintuisong/weixintuisong.module';

const routes: Routes = [

  { path: 'weixintuisong', loadChildren: './weixintuisong/weixintuisong.module#WeixintuisongPageModule' },
  { path: 'eject-phonebook', loadChildren: './eject-phonebook/eject-phonebook.module#EjectPhonebookPageModule' },
  { path: '', redirectTo: 'weixintuisong', pathMatch: 'full' },
  { path: '**', loadChildren: './weixintuisong/weixintuisong.module#WeixintuisongPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { useHash: true },
      { preloadingStrategy: PreloadAllModules },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
