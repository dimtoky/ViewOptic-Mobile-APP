import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ConfigurateurPage } from '../configurateur/configurateur';

/**
 * Generated class for the GlassMakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-glass-maker',
  templateUrl: 'glass-maker.html',
})

export class GlassMakerPage {
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

  simple:boolean = true;
  focalite = null;
  matiere = null;
  indice = null;
  hc = false;
  hmc = false;
  bb = false;
  trans = false;
  marque = null;
  couleur = 0;
  color = "white";
  style = true;
  public recap: string[] = [null];

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public keyb: Keyboard,private screenOrientation: ScreenOrientation) {
    this.screenOrientation.onChange().subscribe(
      () => {
        if ((this.screenOrientation.type == "landscape")||(this.screenOrientation.type == "landscape-primary")||(this.screenOrientation.type == "landscape-secondary")){
          this.style = false;}
        else{
          this.style = true;}
      }
   );
  }

  ionViewDidLoad() {
    if ((this.screenOrientation.type == "landscape")||(this.screenOrientation.type == "landscape-primary")||(this.screenOrientation.type == "landscape-secondary")){
          this.style = false;}
    else{
          this.style = true;}
    console.log('ionViewDidLoad GlassMakerPage');
    this.slides.lockSwipes(true);
    
  }

 

  keyboardhandler() {
    this.keyb.hide
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
  

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log(this.devis);
    this.devisCalc();
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
    console.log(this.devis);
    
  }

  end(){
    this.devisCalc();
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    
    
  }

  choixCouleur(i){
    switch(i){
      case 1:{
        this.couleur = 0 ;
        this.color = "white" ;
      }break;
      case 2:{
        this.couleur = 1 ;
        this.color = "#452F2D" ;
      }break;
      case 3:{
        this.couleur = 1 ;
        this.color = "#474749" ;
      }break;
      case 4:{
        this.couleur = 1 ;
        this.color = "#1C3A34" ;
      }break;
      case 5:{
        this.couleur = 1;
        this.color = "#A99115" ;
      }break;
      case 6:{
        this.couleur = 1 ;
        this.color = "#9F5A4A" ;
      }break;
      case 7:{
        this.couleur = 1 ;
        this.color = "#852B43" ;
      }break;
      case 8:{
        this.couleur = 1 ;
        this.color = "#07548E" ;
      }break;
      case 9:{
        this.couleur = 1;
        this.color = "#412D50" ;
      }break;
      default:{
        this.couleur = 0 ;
        this.color = "white" ;
      }break;
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.devisCalc();
  }

  choixFocal(i){
    switch(i){
      case 1:{
        this.simple = true ;
        this.focalite = 1 ;
      }break;
      case 2:{
        this.focalite = 2 ;
        this.simple = false ;
      }break;
      default:{
        this.focalite = 1 ;
      }break;
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log(this.devis);
    this.devisCalc();
  }

  choixMatiere(i){
    switch(i){
      case 1:{
        this.matiere = 1 ;
      }break;
      case 2:{
        this.matiere = 2 ;
      }break;
      default:{
        this.matiere = 1 ;
      }break;
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log(this.devis);
    this.devisCalc();
  }

  choixMarque(i){
    switch(i){
      case 1:{
        this.marque = 1 ;
      }break;
      case 2:{
        this.marque = 2 ;
      }break;
      case 3:{
        this.marque = 3 ;
      }break;
      default:{
        this.marque = 1 ;
      }break;
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log(this.devis);
    this.devisCalc();
  }

  choixIndice(i){
    switch(i){
      case 1:{
        this.indice = 1 ;
      }break;
      case 2:{
        this.indice = 2 ;
      }break;
      case 3:{
        this.indice = 3 ;
      }break;
      case 4:{
        this.indice = 4 ;
      }break;
      default:{
        this.indice = 1 ;
      }break;
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
      console.log(this.devis);
      this.devisCalc();
  }

  choixTraitement(i){
    switch(i){
      case 1:{
        if(this.hc){
        this.hc = false ;}
        else{
        this.hc = true ;}
      }break;
      case 2:{
        if(this.hmc){
          this.hmc = false ;}
          else{
          this.hmc = true ;}
      }break;
      case 3:{
        if(this.bb){
          this.bb = false ;}
          else{
          this.bb = true ;}
      }break;
      case 4:{
        if(this.trans){
          this.trans = false ;}
          else{
          this.trans = true ;}
      }break;
      default:{
        
      }break;
    }
      console.log(this.devis);
      this.devisCalc();
  }

  check(){
    this.devisCalc();
  }

  

  devisCalc() {
    this.devis = 0;
    console.log(this.gender + " " + this.fname + " " + this.lname + " " + this.age + this.tel + " " + this.adresse + "\n" +
      this.sphered + " " + this.axed + " " + this.cylindred + " " + this.sphereg + " " + this.axeg + " " + this.cylindreg + "\n" +
      this.focalite + " " + this.matiere + " " + this.marque + " " + this.indice + "\n" +
      this.hc + " " + this.hmc + " " + this.bb + " " + this.trans);


      this.recap[10] = "Non";
      this.recap[11] = "Non";
      this.recap[12] = "Non";
      this.recap[13] = "Non";


    if ((this.gender == null) || (this.fname == null) || (this.lname == null) || (this.age == null) || (this.tel == null) || (this.adresse == null)) {
      this.presentAlert(0);
    }
    else if ((this.sphered == null) || (this.cylindred == null) || (this.sphereg == null) || (this.cylindreg == null) || (this.axed == null) || (this.axeg == null)) {
      this.presentAlert(1);
    }
    else {
      this.recap[0] = this.gender.toString();
      this.recap[1] = this.fname;
      this.recap[2] = this.lname;
      this.recap[3] = this.age.toString();
      this.recap[4] = this.tel.toString();
      this.recap[5] = this.adresse;
  
      if (this.focalite == 1)//simple foyer
      {
        this.recap[6] = "Simple foyer";
        //Cylindre et Sphére
        //OD
        if ((Math.abs(this.sphered) <= 2) && (Math.abs(this.cylindred) <= 2))
          this.devis += 700;
        else {
          if ((Math.abs(this.sphered) <= 4) && (Math.abs(this.cylindred) <= 4))
            this.devis += 1000;
          else
            this.devis += 1500;
        }
        //OG
        if ((Math.abs(this.sphereg) <= 2) && (Math.abs(this.cylindreg) <= 2))
          this.devis += 700;
        else {
          if ((Math.abs(this.sphereg) <= 4) && (Math.abs(this.cylindreg) <= 4))
            this.devis += 1000;
          else
            this.devis += 1500;
        }


        //Marque
        if (this.marque == 1){
          this.devis += 0;
          this.recap[8] = "Novatis";}
        if (this.marque == 2){
          this.devis += 4300 * 2;
          this.recap[8] = "Essilor";}
        if (this.marque == 3){
          this.devis += 4300 * 2;
          this.recap[8] = "Zeiss";}

        //Matiére
        if (this.matiere == 1){
        this.recap[7] = "Organique";
          this.devis += 1000 * 2;}
        if (this.matiere == 2){
        this.recap[7] = "Polycarbonate";
          this.devis += 1300 * 2;}

        //Indice
        if (this.indice == 1){
          this.devis += 0;
          this.recap[9] = "1,5 (Standarts)";}
        if (this.indice == 2){
          this.devis += 5300 * 2;
          this.recap[9] = "1,6 (Minces)";}
        if (this.indice == 3){
          this.devis += 8300 * 2;
          this.recap[9] = "1,67 (Trés Minces)";}
        if (this.indice == 4){
          this.devis += 15300 * 2;
          this.recap[9] = "1,74 (Ultra Minces)" ;}
        //Options
        if (this.hc == true){
          this.devis += 0;
          this.recap[10] = "Oui";}
        if (this.hmc == true){
          this.devis += 300 * 2;
          this.recap[11] = "Oui";}
        if (this.bb == true){
          this.devis += 3300 * 2;
          this.recap[12] = "Oui";}
        if (this.trans == true){
          this.devis += 3300 * 2;
          this.recap[13] = "Oui";}

          if (this.hc == false){
            this.recap[10] = "Non";}
          if (this.hmc == false){ 
            this.recap[11] = "Non";}
          if (this.bb == false){ 
            this.recap[12] = "Non";}
          if (this.trans == false){
            this.recap[13] = "Non";}

          if (this.couleur == 1){
            this.devis += 2000;
          }
  

        //fin
      }
      if (this.focalite == 2) //progressif
      {
        this.recap[6] = "Progressive";
        //Cylindre et Sphére
        //OD
        if (((Math.abs(this.spheredL) <= 2) && (Math.abs(this.cylindredL) <= 2))&&((Math.abs(this.spheredP) <= 2) && (Math.abs(this.cylindredP) <= 2)))
        this.devis += 7000;
      else {
        if (((Math.abs(this.spheredL) <= 4) && (Math.abs(this.cylindredL) <= 4))&&((Math.abs(this.spheredP) <= 4) && (Math.abs(this.cylindredP) <= 4)))
          this.devis += 8000;
        else
          this.devis += 12000;
      }
        //OG
        if (((Math.abs(this.spheregL) <= 2) && (Math.abs(this.cylindregL) <= 2))&&((Math.abs(this.spheregP) <= 2) && (Math.abs(this.cylindregP) <= 2)))
        this.devis += 7000;
      else {
        if (((Math.abs(this.spheregL) <= 4) && (Math.abs(this.cylindregL) <= 4))&&((Math.abs(this.spheregP) <= 4) && (Math.abs(this.cylindregP) <= 4)))
          this.devis += 8000;
        else
          this.devis += 12000;
      }
        //Marque
        if (this.marque == 1){
          this.devis += 0;
          this.recap[8] = "Novatis";}
        if (this.marque == 2){
          this.devis += 10000 * 2;
          this.recap[8] = "Essilor";}
        if (this.marque == 3){
          this.devis += 10000 * 2;
          this.recap[8] = "Zeiss";}
        //Matiére
        if (this.matiere == 1){
        this.recap[7] = "Organique";
          this.devis += 0;}
        if (this.matiere == 2){
        this.recap[7] = "Polycarbonate";
          this.devis += 2000 * 2;}
        //Indice
        if (this.indice == 1){ 
          this.devis += 0;
          this.recap[9] = "1,5";}
        if (this.indice == 2){
          this.devis += 6000 * 2;
          this.recap[9] = "1,6";}
        if (this.indice == 3){
          this.devis += 10000 * 2;
          this.recap[9] = "1,67";}
        if (this.indice == 4){
          this.devis += 18000 * 2;
          this.recap[9] = "1,74";}
        //Options
        if (this.hc == true){
          this.devis += 0;
          this.recap[10] = "Oui";}
        if (this.hmc == true){
          this.devis += 2000 * 2;
          this.recap[11] = "Oui";}
        if (this.bb == true){
          this.devis += 4000 * 2;
          this.recap[12] = "Oui";}
        if (this.trans == true){
          this.devis += 4000 * 2;
          this.recap[13] = "Oui";}

          if (this.hc == false){
            this.recap[10] = "Non";}
          if (this.hmc == false){ 
            this.recap[11] = "Non";}
          if (this.bb == false){ 
            this.recap[12] = "Non";}
          if (this.trans == false){
            this.recap[13] = "Non";}

          if (this.couleur == 1){
            this.devis += 2000;
          }
      }
      
      console.log(this.devis);
    
    }

  }

  restart(){
    this.devis = 0;
 
  this.focalite = null;
  this.matiere = null;
  this.indice = null;
  this.hc = false;
  this.hmc = false;
  this.bb = false;
  this.trans = false;
  this.marque = null;
  this.recap = [null];

  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);

  }

  /*send(){
    if (this.focalite == 1){
        let email = {
          to: 'dimension43@hotmail.fr',
          subject: 'Verres correcteurs : ' + this.fname + ' ' + this.lname + ' ',
          body: 
          'Informations personnelles\n\n'+
          'Nom : ' + this.recap[1] + '\n' +
          'Prénom : ' + this.recap[2] + '\n' +
          'Genre : ' + this.recap[0] + '\n' +
          'Age: ' + this.recap[3] + '\n' +
          'Tel : ' + this.recap[4] + '\n' +
          'Adresse : ' + this.recap[5] + '\n\n' +
         
          'Correction\n\n'+
          'Oeil Droit\n' +
          'Sphére : ' + this.sphered + '\n' +
          'Axe : ' + this.axed + '\n' +
          'Cylindre : ' + this.cylindred + '\n\n' +
          'Oeil Gauche\n' +
          'Sphére: ' + this.sphereg + '\n' +
          'Axe : ' + this.axeg + '\n' +
          'Cylindre : ' + this.cylindreg + '\n\n' +
          'Préference\n\n'+
          'Focalité : ' + this.recap[6] + '\n' +
          'Matiére : ' + this.recap[7] + '\n' +
          'Marque : ' + this.recap[8] + '\n' +
          'Indice: ' + this.recap[9] + '\n' +
          'HC : ' + this.recap[10] + '\n' +
          'HMC : ' + this.recap[11] + '\n' +
          'BB : ' + this.recap[12] + '\n' +
          'Transition : ' + this.recap[13] + '\n\n' +
          'Devis\n\n'+
          'Prix : ' + this.devis + '' 

          ,
          isHtml: false
        };
        this.emailComposer.open(email);
      }
      else{
        let email = {
          to: 'dimension43@hotmail.fr',
          subject: 'Verres correcteurs : ' + this.fname + ' ' + this.lname + ' ',
          body: 
          'Informations personnelles\n\n'+
          'Nom : ' + this.recap[1] + '\n' +
          'Prénom : ' + this.recap[2] + '\n' +
          'Genre : ' + this.recap[0] + '\n' +
          'Age: ' + this.recap[3] + '\n' +
          'Tel : ' + this.recap[4] + '\n' +
          'Adresse : ' + this.recap[5] + '\n\n' +
         
          'Correction\n\n'+
          'Vue de Loin\n\n'+
          'Oeil Droit\n' +
          'Sphére : ' + this.spheredL + '\n' +
          'Axe : ' + this.axedL + '\n' +
          'Cylindre : ' + this.cylindredL + '\n\n' +
          'Oeil Gauche\n' +
          'Sphére: ' + this.spheregL + '\n' +
          'Axe : ' + this.axegL + '\n' +
          'Cylindre : ' + this.cylindregL + '\n\n' +
          'Vue de Prés\n\n'+
          'Oeil Droit\n' +
          'Sphére : ' + this.spheredP + '\n' +
          'Axe : ' + this.axedP + '\n' +
          'Cylindre : ' + this.cylindredP + '\n\n' +
          'Oeil Gauche\n' +
          'Sphére: ' + this.spheregP + '\n' +
          'Axe : ' + this.axegP + '\n' +
          'Cylindre : ' + this.cylindregP + '\n\n' +

          'Préference\n\n'+
          'Focalité : ' + this.recap[6] + '\n' +
          'Matiére : ' + this.recap[7] + '\n' +
          'Marque : ' + this.recap[8] + '\n' +
          'Indice: ' + this.recap[9] + '\n' +
          'HC : ' + this.recap[10] + '\n' +
          'HMC : ' + this.recap[11] + '\n' +
          'BB : ' + this.recap[12] + '\n' +
          'Transition : ' + this.recap[13] + '\n\n' +
          'Devis\n\n'+
          'Prix : ' + this.devis + '' 

          ,
          isHtml: false
        };
        this.emailComposer.open(email);
      }

      
     
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

  info(index) {
    switch (index) {
      case 1:
        {
          let alert = this.alertCtrl.create({
            title: 'HC',
            subTitle: 'Traitement qui durcit le verre.',
            buttons: ['OK']
          });
          alert.present();
        }
        break;
      case 2:
        {
          let alert = this.alertCtrl.create({
            title: 'HMC',
            subTitle: 'Traitement multi-couches(Anti-Reflets/Anti-Rayures/Incassable)',
            buttons: ['OK']
          });
          alert.present();
        }
        break;
      case 3:
        {
          let alert = this.alertCtrl.create({
            title: 'BB',
            subTitle: 'Traitement anti lumiére bleu.',
            buttons: ['OK']
          });
          alert.present();
        }
        break;
      case 4:
        {
          let alert = this.alertCtrl.create({
            title: 'Transition',
            subTitle: 'Verres photochromiques qui s\'adaptent à la luminosité.',
            buttons: ['OK']
          });
          alert.present();
        }
        break;
      default: { }
        break;
    }

  }

}
