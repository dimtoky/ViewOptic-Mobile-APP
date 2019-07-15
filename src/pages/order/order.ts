import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const serverURL = 'http://viewoptic.servehttp.com:4380/';
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  productData;
  fname: string = null;
  lname: string = null;
  mail: string = null;
  tel: number = null;
  adresse: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public alertCtrl: AlertController) {
    this.productData = navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  order(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(serverURL + 'api/orders/create',
      {
        'idProduct': this.productData['id'],
        'nom': this.fname,
        'prenom': this.lname,
        'mail': this.mail,
        'adresse': this.adresse,
        'tel': this.tel,
        'isDone': 0
      }, httpOptions)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
          this.showAlert();
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Réservation',
      subTitle: 'Votre réservation a été enregistrée, nous vous contacterons dans les plus brefs délais pour confirmation',
      buttons: ['Merci']
    });
    alert.present();
  }
}
