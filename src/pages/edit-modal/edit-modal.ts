import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-modal',
  templateUrl: 'edit-modal.html',
})
export class EditModalPage {
  showPay: boolean = false;
  totalSum:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalSum = this.navParams.get('totalSum');
  }

  discountButton(){
    this.totalSum -=this.totalSum*0.1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditModalPage');
  }

}
