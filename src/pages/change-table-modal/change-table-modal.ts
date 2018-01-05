import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {OrderService} from "../../services/order.service";
import {ChangeTablePage} from "../change-table/change-table";

/**
 * Generated class for the ChangeTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-table-modal',
  templateUrl: 'change-table-modal.html',
})
export class ChangeTableModalPage {

  tables:any;
  table:any;
  currentTable:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,  private orderService:OrderService) {
    this.tables = this.orderService.getTables();
    this.currentTable = this.navParams.get('currentTable');
    console.log('Tables:', this.tables);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeTableModalPage');
  }
  changeTable(table){
    this.navCtrl.push(ChangeTablePage, {table:table, currentTable:this.currentTable});
  }
}
