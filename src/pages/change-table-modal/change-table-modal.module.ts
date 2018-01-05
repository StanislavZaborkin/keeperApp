import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeTableModalPage } from './change-table-modal';

@NgModule({
  declarations: [
    ChangeTableModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeTableModalPage),
  ],
})
export class ChangeTableModalPageModule {}
