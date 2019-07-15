import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LensMakerPage } from './lens-maker';

@NgModule({
  declarations: [
    LensMakerPage,
  ],
  imports: [
    IonicPageModule.forChild(LensMakerPage),
  ],
})
export class LensMakerPageModule {}
