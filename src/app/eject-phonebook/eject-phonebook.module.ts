import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EjectPhonebookPage } from './eject-phonebook.page';

const routes: Routes = [
  {
    path: '',
    component: EjectPhonebookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EjectPhonebookPage],
  // entryComponents: [EjectPhonebookPage]
})
export class EjectPhonebookPageModule { }
