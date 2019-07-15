import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ConfigurateurPage } from '../configurateur/configurateur';


/**
 * Generated class for the LensMakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lens-maker',
  templateUrl: 'lens-maker.html',
})
export class LensMakerPage {
  @ViewChild(Slides) slides: Slides;

  devis = 0;
  /*gender = null;
  fname: string = null;
  lname: string = null;
  age: number = null;
  tel: number = null;
  adresse: string = null;*/
  gender = "Homme";
  fname: string = "Test";
  lname: string = "Test";
  age: number = 25;
  tel = "0555555555";
  adresse: string = "Test";
  //Intermediare
  sphered = 0;
  axed = 0;
  cylindred = 0;
  sphereg = 0;
  axeg = 0;
  cylindreg = 0;
  //Loin
  spheredL = 0;
  axedL = 0;
  cylindredL = 0;
  spheregL = 0;
  axegL = 0;
  cylindregL = 0;
  //Prés
  spheredP = 0;
  axedP = 0;
  cylindredP = 0;
  spheregP = 0;
  axegP = 0;
  cylindregP = 0;
  public recap: string[] = [null];
  slidemarque:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  backMenu(){
    this.navCtrl.setRoot(ConfigurateurPage);
  }

  backSlide()
  {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LensMakerPage');
    this.slides.lockSwipes(true);
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  choixMarque(choix){
    this.slidemarque = true ;
    switch(choix)
    {
      case 1:{
        this.recap[11] = "Lentilles Mensuelles";
      }break;
      case 2:{
        this.recap[11] = "Lentilles Journaliéres";
      }break
      default:{

      }break;
    } 
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);

    
  }

  devisCalc(choix) {
    if ((this.gender == null) || (this.fname == null) || (this.lname == null) || (this.age == null) || (this.tel == null) || (this.adresse == null)) {
      this.presentAlert(0);
    }
    else if ((this.sphered == null) || (this.cylindred == null) || (this.sphereg == null) || (this.cylindreg == null) || (this.axed == null) || (this.axeg == null)) {
      this.presentAlert(1);
    }
    else{
      this.recap[0] = this.gender.toString();
      this.recap[1] = this.fname;
      this.recap[2] = this.lname;
      this.recap[3] = this.age.toString();
      this.recap[4] = this.tel.toString();
      this.recap[5] = this.sphered.toString();
      this.recap[6] = this.axed.toString();
      this.recap[7] = this.cylindred.toString();
      this.recap[8] = this.sphereg.toString();
      this.recap[9] = this.axeg.toString();
      this.recap[10] = this.cylindreg.toString();
      this.recap[13] = this.adresse;

    switch(choix){
      case 1:{
        this.devis = 8000;
        this.recap[11] = "Lentille Annuelle";
        this.recap[12] = "Base";
        this.slidemarque = false;
      }
      break;
      case 2:{
        this.devis = 10000;
        this.recap[12] = "B2";
      }
      break;
      case 3:{
        this.devis = 11000;
        this.recap[12] = "fL";
      }
      break;
      case 4:{
        this.devis = 12000;
        this.recap[12] = "Mimican";
      }
      break;
      case 5:{
        this.devis = 7000;
        this.recap[12] = "o2o2";
      }
      break;
      default:{

      }
      break;
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  }

  restart(){
    this.devis = 0;
    this.recap = [null];

  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);

  }

  /*send(){
    
    let email = {
      to: 'dimension43@hotmail.fr',
      subject: 'Lentilles de contact : ' + this.fname + ' ' + this.lname + ' ',
      body: 
      'Informations personnelles\n\n'+
      'Nom : ' + this.recap[1] + '\n' +
      'Prénom : ' + this.recap[2] + '\n' +
      'Genre : ' + this.recap[0] + '\n' +
      'Age: ' + this.recap[3] + '\n' +
      'Tel : ' + this.recap[4] + '\n' +
      'Adresse : ' + this.recap[13] + '\n\n' +

      'Correction\n\n'+
      'Vue de prés\n'+
      'Oeil Droit\n' +
      'Sphére : ' + this.spheredP + '\n' +
      'Axe : ' + this.axedP + '\n' +
      'Cylindre : ' + this.cylindredP + '\n\n' +
      'Oeil Gauche\n' +
      'Sphére: ' + this.spheregP + '\n' +
      'Axe : ' + this.axegP + '\n' +
      'Cylindre : ' + this.cylindregP + '\n\n' +

      'Correction\n\n'+
      'Vue intermédiaire\n'+
      'Oeil Droit\n' +
      'Sphére : ' + this.sphered + '\n' +
      'Axe : ' + this.axed + '\n' +
      'Cylindre : ' + this.cylindred + '\n\n' +
      'Oeil Gauche\n' +
      'Sphére: ' + this.sphereg + '\n' +
      'Axe : ' + this.axeg + '\n' +
      'Cylindre : ' + this.cylindreg + '\n\n' +

      'Correction\n\n'+
      'Vue de loin\n'+
      'Oeil Droit\n' +
      'Sphére : ' + this.spheredL + '\n' +
      'Axe : ' + this.axedL + '\n' +
      'Cylindre : ' + this.cylindredL + '\n\n' +
      'Oeil Gauche\n' +
      'Sphére: ' + this.spheregL + '\n' +
      'Axe : ' + this.axegL + '\n' +
      'Cylindre : ' + this.cylindregL + '\n\n' +

      'Préference\n\n'+
      'Type de lentilles : ' + this.recap[11] + '\n' +
      'Marque : ' + this.recap[12] + '\n\n' +
      'Devis\n\n'+
      'Prix : ' + this.devis + '' 

      ,
      isHtml: false
    };

    this.emailComposer.open(email);
 
}*/

  presentAlert(index) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(index);
    this.slides.lockSwipes(true);
    let alert = this.alertCtrl.create({
      title: 'Champs non renseigné!',
      subTitle: 'Veuillez renseigner les champs manquants',
      buttons: ['OK']
    });
    alert.present();
  }

}
