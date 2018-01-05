import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderService} from "../../services/order.service";
import {objectAssign} from "@ionic/app-scripts";


@IonicPage()
@Component({
  selector: 'page-total-modal',
  templateUrl: 'total-modal.html',
})
export class TotalModalPage {
  dataArr: any;
  showTotal: boolean = false;
  orderArray:object[]=[];
  sum:string='';
  finishTotalScoreForOrderService:object[]=[];
  finishTotalScore:object[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private orderService: OrderService) {
    this.dataArr =  this.orderService.getData();
    this.finishTotalScore = this.orderService.getfinishTotalScore();
    this.xui();
  }

  showInfoAboutOrder(data){
    this.orderArray.length = 0;
    for(let key in data['order']){
      this.orderArray.push(data['order'][key]);
    }
    this.sum = data['sum'];
  }

  ionViewDidLoad() {
    // console.log(this.orderService.getData());
  };
  xui() {
    console.log('FINISHTOTAL SCORE', this.finishTotalScore);
    console.log('DataARR', this.dataArr);
    for (let key in this.dataArr) {
      console.log(this.finishTotalScore, 'finishTotalScoreBEFORE');

      if (this.finishTotalScore.length === 0) {


        this.finishTotalScoreForOrderService.push(this.dataArr[key]);
        this.orderService.addfinishTotalScore(this.finishTotalScoreForOrderService[key]);
      }
      // else if(this.finishTotalScore[key]['name'] === this.dataArr[key]['name']) {
      // console.log(this.finishTotalScore[key]['name'], this.dataArr[key]['name'],'qweertytrewq');
      else {
        for (let key in this.dataArr) {
          this.finishTotalScoreForOrderService.push(this.dataArr[key]);
          this.orderService.addfinishTotalScore(this.finishTotalScoreForOrderService[key]);
          // console.log('ELSE XUI');
        }
      }
    }
  }
}

