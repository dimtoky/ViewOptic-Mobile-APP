import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlassMakerPage } from '../glass-maker/glass-maker';
import { LensMakerPage } from '../lens-maker/lens-maker';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfigurateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurateur',
  templateUrl: 'configurateur.html',
})
export class ConfigurateurPage {


  style = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,private screenOrientation: ScreenOrientation) {
    this.screenOrientation.onChange().subscribe(
      () => {
        if ((this.screenOrientation.type == "landscape")||(this.screenOrientation.type == "landscape-primary")||(this.screenOrientation.type == "landscape-secondary"))
        {
          this.style = false;
    
        }
        else
        {
          this.style = true;
        }
      }
   );
  }

  ionViewDidLoad(){
    if ((this.screenOrientation.type == "landscape")||(this.screenOrientation.type == "landscape-primary")||(this.screenOrientation.type == "landscape-secondary"))
        {
          this.style = false;
    
        }
        else
        {
          this.style = true;
        }
  }
  
  openGlassTab(){
    this.navCtrl.setRoot(GlassMakerPage);
   
  }

  openLensTab(){
    this.navCtrl.setRoot(LensMakerPage);
  }

  backMenu(){
    this.navCtrl.setRoot(HomePage);
  }

}
