import {ActionSheetController, ModalController} from 'ionic-angular';
import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TablesPage} from "../tables/tables";
import {TablesComponent} from "../../components/tables-components/tables.components";
import {TotalModalPage} from "../total-modal/total-modal";
import {OrderService} from "../../services/order.service";
import {EditModalPage} from "../edit-modal/edit-modal";
import {ChangeTableModalPage} from "../change-table-modal/change-table-modal";


@Component({
  selector: 'page-edit-table',
  templateUrl: 'edit-table.html',
})
export class EditTablePage {

  xuila:boolean = true
  table: object[];
  totalCount:number;
  showBar: boolean = false;
  showHookah:boolean = false;
  showKitchen:boolean = false;
  showArray: object[] = [];
  alcohol: any = {};
  alcoholKeys: string[] = [];
  kitchen:any = {};
  kitchenKeys:string[]=[];
  hookah:any={};
  hookahKeys:string[] = [];
  note:string;
  totalScore: object[] = [];
  totalScoreService:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private orderService:OrderService, public modalCtrl: ModalController) {
    this.table = this.navParams.get('item');
    this.totalScoreService = this.orderService.getTotalScoreService();
    this.kitchen = {
      'Японская' : [
        {
          name: 'Рол',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Мидии',
          price: 65,
          count: 0,
          sum: 0
        },
        {
          name: 'Красная рыба',
          price: 60,
          count: 0,
          sum: 0
        }
      ],
      'Франция': [
        {
          name: 'Круасан',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Улитки',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Фондю',
          price: 45,
          count: 0,
          sum: 0
        }
      ],
      'Америка': [
        {
          name: 'Стейк медиум',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Стейк куриный',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Стейк из говядины',
          price: 45,
          count: 0,
          sum: 0
        }
      ]
    };
    this.kitchenKeys = Object.keys(this.kitchen);

    this.alcohol = {
      'Виски' : [
        {
          name: 'Jack Daneils',
          price: 70,
          count: 0,
          sum: 0

        },
        {
          name: 'Jim Beam',
          price: 65,
          count: 0,
          sum: 0
        },
        {
          name: 'Jameson',
          price: 60,
          count: 0,
          sum: 0
        }
      ],
      'Ромы': [
        {
          name: 'Okharte',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Bacardi',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Capitan Morgan',
          price: 45,
          count: 0,
          sum: 0
        }
      ],
      'Водка': [
        {
          name: 'Finland',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Green Day',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Zubrovka',
          price: 45,
          count: 0,
          sum: 0
        }
      ]
    };
    this.alcoholKeys = Object.keys(this.alcohol);

    this.hookah = {

      'Классика':[
        {
        name:'Шербет',
        price:140,
          count: 0,
          sum: 0
        },
        {
          name:'Adalia',
          price:180,
          count: 0,
          sum: 0
        },
        {
          name:'Nahla',
          price:180,
          count: 0,
          sum: 0

        },
      ],
      'Премиум':[
        {
        name:'Fumari',
        price:200,
          count: 0,
          sum: 0
        },
        {
          name:'Танж',
          price:200,
          count: 0,
          sum: 0
        },
        {
          name:'DakrSide',
          price:200,
          count: 0,
          sum: 0
        }
      ]
    };
    this.hookahKeys = Object.keys(this.hookah);
  }

  addToTotalScore(linkItem) {
    let item = JSON.parse(JSON.stringify(linkItem));
    let index = this.checkItem(item, this.totalScoreService);
    let totalScore = Object.assign({},this.totalScoreService);
    if (index !== -1) {
      if (this.totalScoreService[index]['status'] === undefined || this.table['status'] ==='admin') {
        this.totalScoreService[index]['count'] += 1;
        this.totalScoreService[index]['sum'] += item['price'];
      } else {
        this.totalScoreService.push(item);
      }
   } else {
      this.totalScoreService.push(item);
      this.totalScoreService[this.totalScoreService.indexOf(item)]['count'] = 1;
      this.totalScoreService[this.totalScoreService.indexOf(item)]['sum'] = item['price'];
    }
  }

    sendToTotalModal() {
      let table = Object.assign({}, this.table);
      let tableName = table['name'];
      let totalScore = Object.assign({}, this.totalScoreService);
      let getData = this.orderService.getData();
      let index = this.checkItemForTotalModal(table, getData);
      table['time'] = new Date();
      table['sum'] = this.getResultPrice();
      table['note'] = this.note;
      table['order'] = totalScore;
      console.log('TABLE:',table);
      console.log('GETDATA',getData);
      if(index !== -1){
        getData[index]['order'] = totalScore;
        getData[index]['sum'] = this.getResultPrice();
      } else {
        this.orderService.addData(table);
      }
      if(this.table['status'] ==='admin'){
      for(let key in this.totalScoreService) {
      }
    } else {
      for (let key in this.totalScoreService) {
        this.totalScoreService[key]['status'] = false;
      }
    }
    }

  sendNotes() {
    let profileModal = this.modalCtrl.create(EditModalPage,{totalSum:this.getResultPrice()});
    profileModal.present();
  }

  changeTable() {
      let modal = this.modalCtrl.create(ChangeTableModalPage, {currentTable:this.table});
      modal.present();
    }

  checkItem(item, array) {
    for(let i=0; i<array.length; i++){
      if (array[i].status === undefined && array[i].name === item.name){
        return i;
      }
    }
    return -1
  }

  checkItemForTotalModal(object, array) {
    for(let i=0; i<array.length; i++){
      console.log('length', array.length)
      console.log('i', i)
      if (array[i].name === object.name){
        return i;
      }
    }
    return -1;
  }

  checkItemTest(item, array) {
    console.log('check item');
    for(let i=0; i<array.length; i++){
      console.log('length', array.length)
      console.log('i', i)
      if (array[i].name === item.name){
        return i;
      }
    }
    return -1
  }

  getResultPrice() {
    return this.totalScoreService.reduce((prev, el) => {
      return prev + el['sum'];
    }, 0);
  }

  deleteItem(item) {
    let idx = this.totalScoreService.indexOf(item);
    console.log(item);
    if (idx != -1) {
        if (item['status'] !== false) {
          this.totalScoreService.splice(idx, 1);
        }
    }
  }

  addAlcohol(item: string) {
    this.showArray = this.alcohol[item];
  }

  addKitchen(item: string) {
    this.showArray = this.kitchen[item];
  }

  addHookah(item:string){
    this.showArray = this.hookah[item];
  }

  hideMenu(){
    if((this.showHookah === false) && (this.showBar === false) &&  (this.showKitchen === false)){
      this.showArray.length = 0;
    }
  }

  writingCount(item){
    // console.log(this.totalScoreService[this.totalScoreService.indexOf(item)]['count']);
    item.sum = this.totalScoreService[this.totalScoreService.indexOf(item)]['price'] * item.count;
  }
  writingNote(item){
    console.log(this.totalScoreService[this.totalScoreService.indexOf(item)]['note']);

    item.note = this.totalScoreService[this.totalScoreService.indexOf(item)]['note'];
  }
}
