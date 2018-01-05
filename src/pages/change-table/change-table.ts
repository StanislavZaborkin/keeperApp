import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderService} from "../../services/order.service";

/**
 * Generated class for the ChangeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-table',
  templateUrl: 'change-table.html',
})
export class ChangeTablePage {

  table:any;
  orderFrom:any;
  tableWithOrder:object[]=[];
  currentTable:any;
  changedTable:object[]=[];


    constructor(public navCtrl: NavController, public navParams: NavParams, private orderService:OrderService) {
    this.table = this.navParams.get('table');
    this.currentTable = this.navParams.get('currentTable');
    this.orderFrom = this.orderService.getData();
    this.tableWithOrder = this.orderService.getTotalScoreService();
      console.log('order:', this.orderFrom);
      console.log('table:', this.table);
      console.log('currentTable',this.currentTable);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeTablePage');
  }
  shiftOrder(linkItem){
    let order = JSON.parse(JSON.stringify(linkItem));
    let index = this.checkItemForTotalModal(order, this.changedTable);
    if(index !== -1){
      if(this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] !== 0) {
        this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['sum'] -= order['price'];
        this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] -= 1;
        console.log('this.tableWithOrder.indexOf(linkItem)[\'count\']',this.tableWithOrder.indexOf(linkItem));
        console.log('this.tableWithOrder,',this.tableWithOrder);
        if(this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] === 0) {
          this.tableWithOrder.splice(this.tableWithOrder.indexOf(linkItem), 1);
        }
        this.changedTable[index]['count'] += 1;
        this.changedTable[index]['sum'] += order['price'];
      }
    } else {
      this.changedTable.push(order);
      this.changedTable[this.changedTable.indexOf(order)]['count'] = 2;
      this.changedTable[this.changedTable.indexOf(order)]['sum'] = 2 * this.changedTable[this.changedTable.indexOf(order)]['price'];
      this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['sum'] -= order['price'];
      this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] -= 1;
    }
    if(order.count !== 0) {
      order['count'] -=1;
      order.sum -=order.price;
    } else {
      return;
    }
  }

  checkItemForTotalModal(object, array) {
    for(let i=0; i<array.length; i++){
      console.log('length', array.length);
      console.log('i', i);
      if (array[i].name === object.name){
        return i;
      }
    }
    return -1;
  }
}
