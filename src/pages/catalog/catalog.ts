import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';
import { HttpClient } from '@angular/common/http';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the CatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const serverURL = 'http://viewoptic.servehttp.com:4380/';
@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {


  brands;
  productData;
  productsData;
  statue;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public menuCtrl: MenuController) {
    this.http.get(serverURL + 'api/products').subscribe(data => {
      this.productsData = data['products'];
      console.log(this.productsData);
      this.statue = true;
      this.productData = this.productsData;
     },
     error => {
      this.statue = false;
     }
     );

     this.http.get(serverURL + 'api/brands').subscribe(data => {
      this.brands = data['brands'];
      console.log(this.brands);
      this.statue = true;
     },
     error => {
      this.statue = false;
     }
     );
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogPage');
    
  }

  backMenu(){
    this.navCtrl.setRoot(HomePage);
  }

  pushProduct(item){
    
    console.log("l'id: " + item);
    this.navCtrl.push(ProductPage, {product : item});
  }

  filterGender(gender) {
    this.productData = this.productsData.filter((item) => {
      if (item.gender.indexOf(gender) >= 0) {
        return true
      }
      return false
    })
    console.log(this.productData.length);
    this.menuCtrl.close();
  }

  filterForme(forme) {
    this.productData = this.productsData.filter((item) => {
      if (item.forme.indexOf(forme) >= 0) {
        return true
      }
      return false
    })
    this.menuCtrl.close();
  }

  filterBrand(brand) {
    this.productData = this.productsData.filter((item) => {
      if (item.Brand.bname.indexOf(brand) >= 0) {
        return true
      }
      return false
    })
    this.menuCtrl.close();
  }

  filterColor() {
    this.productData = this.productData.filter((item) => {
      if (item.gender.indexOf("Femmes") >= 0) {
        return true
      }
      return false
    })
    this.menuCtrl.close();
  }

  filterSize(size) {
    this.productData = this.productsData.filter((item) => {
      if (item.size.indexOf(size) >= 0) {
        return true
      }
      return false
    })
    this.menuCtrl.close();
  }

}
