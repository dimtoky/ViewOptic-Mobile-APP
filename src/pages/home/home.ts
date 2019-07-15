import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigurateurPage } from '../configurateur/configurateur';
import { CatalogPage } from '../catalog/catalog';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  style = true;
 

  constructor(public navCtrl: NavController,private screenOrientation: ScreenOrientation) {

    
  
    this.screenOrientation.onChange().subscribe(
      () => {
        if ((this.screenOrientation.type == "landscape")||(this.screenOrientation.type == "landscape-primary")||(this.screenOrientation.type == "landscape-secondary"))
        {
          this.style = false;
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
        }
        else
        {
          this.style = true;
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
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

        
        this.slides.startAutoplay();
        this.slides.autoplay = 3000;
        this.slides.loop = true;
  }


  configButton(){

    this.navCtrl.setRoot(ConfigurateurPage);
  }

  catalogButton(){

    this.navCtrl.setRoot(CatalogPage);
  }

  contactButton(){

    this.navCtrl.setRoot(ConfigurateurPage);
  }
}
