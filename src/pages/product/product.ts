import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OrderPage } from '../order/order';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const serverURL = 'http://viewoptic.servehttp.com:4380/';
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  @ViewChild(Slides) slides: Slides;

  productData;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.productData = navParams.get('product');
    
     
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.slides.pager = true;
    this.slides.loop = true;
    this.slides.autoplay = 3000;
    this.slides.paginationType = "bullets";
  }

  preorder(){
    this.navCtrl.push(OrderPage, {product : this.productData});
  }

}
