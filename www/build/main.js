webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tables_tables__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, http, loading, loadingService, orderService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.loadingService = loadingService;
        this.orderService = orderService;
        this.login = '';
        this.password = '';
        this.status = 'admin';
        console.log('status:', this.status);
        this.orderService.addStatus(this.status);
    }
    HomePage.prototype.add = function () {
        var tempJson = {
            login: this.login,
            password: this.password
        };
        // if ((this.login.trim() !== '' || this.password.trim() !== '') && (this.login.trim() !== '' && this.password.trim() !== '')){
        this.loadingService.showLoading();
        // this.http.post('http://192.168.31.35:3000/login', tempJson).subscribe(data=>{
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tables_tables__["a" /* TablesPage */], { status: this.status }
        // {userToken:data.json().token}
        );
        // });
        this.loadingService.closeLoading();
        //   } else {
        //     alert('Incorrect email or password');
        //   }
        // }
    };
    HomePage.prototype.checkFieldValue = function (value) {
        this[value] = this[value].replace(/\s/gi, '');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/home/home.html"*/`<ion-content padding>\n  <div class="login-page">\n    <div class="form">\n      <img src ="https://www.easykeeper.com/wp-content/uploads/2014/08/Easy_Keeper-White.png">\n      <!--<button ion-button [disabled]="!(status==\'admin\')">admin can click</button>-->\n      <!--<button ion-button [disabled]="status==\'admin\'">Admin can\'t click</button>-->\n      <ion-grid>\n        <ion-row>\n          <ion-col class="form-input-first">\n            <ion-input type="text" placeholder="username" [(ngModel)]="login"  [ngModelOptions]="{standalone: true}" (keyup)="checkFieldValue(\'login\')"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="form-input">\n            <ion-input type="password" placeholder="password" [(ngModel)]="password"  [ngModelOptions]="{standalone: true}" (keyup)="checkFieldValue(\'password\')"></ion-input>\n          </ion-col>\n        </ion-row>\n        <div class="form-checkbox">\n          <ion-checkbox color="dark" checked="true" ></ion-checkbox>\n          Remember me\n        </div>\n      </ion-grid>\n        <button ion-button (click)="add()" full class="form-button" >login</button>\n    </div>\n  </div>\n</ion-content>\n\n<!--[disabled]="this.login.trim() === \'\' || this.password == null"-->\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.closeLoading = function () {
        this.loading.dismiss();
    };
    LoadingService.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeTableModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_table_change_table__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangeTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeTableModalPage = (function () {
    function ChangeTableModalPage(navCtrl, navParams, modalCtrl, orderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.orderService = orderService;
        this.tables = this.orderService.getTables();
        this.currentTable = this.navParams.get('currentTable');
        console.log('Tables:', this.tables);
    }
    ChangeTableModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeTableModalPage');
    };
    ChangeTableModalPage.prototype.changeTable = function (table) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__change_table_change_table__["a" /* ChangeTablePage */], { table: table, currentTable: this.currentTable });
    };
    ChangeTableModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-table-modal',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/change-table-modal/change-table-modal.html"*/`\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="waiter">\n        Зал\n      </ion-segment-button>\n      <ion-segment-button value="admin">\n        Администрация\n      </ion-segment-button>\n      <ion-segment-button value="hookah">\n        Кальян\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'waiter\'">\n      <ion-item *ngFor = \'let table of tables[0]\' (click)="changeTable(table)">\n        {{table.name}}\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'admin\'">\n      <ion-item *ngFor = \'let table of tables[2]\' (click)="changeTable(table)">\n        {{table.name}}\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'hookah\'">\n      <ion-item *ngFor = \'let table of tables[1]\' (click)="changeTable(table)">\n        {{table.name}}\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/change-table-modal/change-table-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
    ], ChangeTableModalPage);
    return ChangeTableModalPage;
}());

//# sourceMappingURL=change-table-modal.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChangeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeTablePage = (function () {
    function ChangeTablePage(navCtrl, navParams, orderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.tableWithOrder = [];
        this.changedTable = [];
        this.table = this.navParams.get('table');
        this.currentTable = this.navParams.get('currentTable');
        this.orderFrom = this.orderService.getData();
        this.tableWithOrder = this.orderService.getTotalScoreService();
        console.log('order:', this.orderFrom);
        console.log('table:', this.table);
        console.log('currentTable', this.currentTable);
    }
    ChangeTablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeTablePage');
    };
    ChangeTablePage.prototype.shiftOrder = function (linkItem) {
        var order = JSON.parse(JSON.stringify(linkItem));
        var index = this.checkItemForTotalModal(order, this.changedTable);
        if (index !== -1) {
            if (this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] !== 0) {
                this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['sum'] -= order['price'];
                this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] -= 1;
                console.log('this.tableWithOrder.indexOf(linkItem)[\'count\']', this.tableWithOrder.indexOf(linkItem));
                console.log('this.tableWithOrder,', this.tableWithOrder);
                if (this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] === 0) {
                    this.tableWithOrder.splice(this.tableWithOrder.indexOf(linkItem), 1);
                }
                this.changedTable[index]['count'] += 1;
                this.changedTable[index]['sum'] += order['price'];
            }
        }
        else {
            this.changedTable.push(order);
            this.changedTable[this.changedTable.indexOf(order)]['count'] = 2;
            this.changedTable[this.changedTable.indexOf(order)]['sum'] = 2 * this.changedTable[this.changedTable.indexOf(order)]['price'];
            this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['sum'] -= order['price'];
            this.tableWithOrder[this.tableWithOrder.indexOf(linkItem)]['count'] -= 1;
        }
        if (order.count !== 0) {
            order['count'] -= 1;
            order.sum -= order.price;
        }
        else {
            return;
        }
    };
    ChangeTablePage.prototype.checkItemForTotalModal = function (object, array) {
        for (var i = 0; i < array.length; i++) {
            console.log('length', array.length);
            console.log('i', i);
            if (array[i].name === object.name) {
                return i;
            }
        }
        return -1;
    };
    ChangeTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-table',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/change-table/change-table.html"*/`<!--\n  Generated template for the ChangeTablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>change-table-page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <div>\n          <h1>  {{currentTable.name}} </h1>\n          <ion-card *ngFor="let tables of tableWithOrder">\n            <ion-card-header>\n              {{tables.name}}\n            </ion-card-header>\n            <ion-card-content>\n              Cумма: {{tables.sum}} Количество:{{tables.count}}\n              <ion-icon name="arrow-round-forward" (click)="shiftOrder(tables)"></ion-icon>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n      </ion-col>\n      <ion-col col-6>\n        <h1>{{table.name}}</h1>\n        <ion-card *ngFor="let order of changedTable">\n          <ion-card-header>\n              {{order.name}}\n          </ion-card-header>\n          <ion-card-content>\n            Сумма: {{order.sum}} Количество:{{order.count}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/change-table/change-table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
    ], ChangeTablePage);
    return ChangeTablePage;
}());

//# sourceMappingURL=change-table.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditModalPage = (function () {
    function EditModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showPay = false;
        this.totalSum = this.navParams.get('totalSum');
    }
    EditModalPage.prototype.discountButton = function () {
        this.totalSum -= this.totalSum * 0.1;
    };
    EditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditModalPage');
    };
    EditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-modal',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/edit-modal/edit-modal.html"*/`<!--\n  Generated template for the EditModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Функции чека</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-card>\n          <ion-card-content class="size1">\n            <button ion-button block (click)="discountButton()">Скикда</button>\n            <button ion-button color="secondary" block (click)="showPay = !showPay">Оплата</button>\n            <button ion-button color="danger" block>Отмена чека</button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-9>\n        <ion-card>\n          сумма:\n          {{totalSum}}\n        </ion-card>\n        <ion-col col-3>\n          <div *ngIf="showPay">\n            <button ion-button>Наличные</button>\n            <button ion-button>Терминал</button>\n          </div>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/edit-modal/edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditModalPage);
    return EditModalPage;
}());

//# sourceMappingURL=edit-modal.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TotalModalPage = (function () {
    function TotalModalPage(navCtrl, navParams, orderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.showTotal = false;
        this.orderArray = [];
        this.sum = '';
        this.finishTotalScoreForOrderService = [];
        this.finishTotalScore = [];
        this.dataArr = this.orderService.getData();
        this.finishTotalScore = this.orderService.getfinishTotalScore();
        this.xui();
    }
    TotalModalPage.prototype.showInfoAboutOrder = function (data) {
        this.orderArray.length = 0;
        for (var key in data['order']) {
            this.orderArray.push(data['order'][key]);
        }
        this.sum = data['sum'];
    };
    TotalModalPage.prototype.ionViewDidLoad = function () {
        // console.log(this.orderService.getData());
    };
    ;
    TotalModalPage.prototype.xui = function () {
        console.log('FINISHTOTAL SCORE', this.finishTotalScore);
        console.log('DataARR', this.dataArr);
        for (var key in this.dataArr) {
            console.log(this.finishTotalScore, 'finishTotalScoreBEFORE');
            if (this.finishTotalScore.length === 0) {
                this.finishTotalScoreForOrderService.push(this.dataArr[key]);
                this.orderService.addfinishTotalScore(this.finishTotalScoreForOrderService[key]);
            }
            else {
                for (var key_1 in this.dataArr) {
                    this.finishTotalScoreForOrderService.push(this.dataArr[key_1]);
                    this.orderService.addfinishTotalScore(this.finishTotalScoreForOrderService[key_1]);
                    // console.log('ELSE XUI');
                }
            }
        }
    };
    TotalModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total-modal',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/total-modal/total-modal.html"*/`<!--\n  Generated template for the TotalModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Итоги</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n          <ion-card-content class="size">\n            <button ion-button color="danger" block>X отчет</button>\n            <button ion-button color="danger" block>Z отчет</button>\n            <button ion-button block (click)="showTotal = !showTotal">Чеки за смену</button>\n            <button ion-button block>Итоги</button>\n            <button ion-button color="dark" block>Закрыть смену</button>\n          </ion-card-content>\n      </ion-col>\n      <ion-col col-9>\n        <ion-col col-3>\n          <div *ngIf="showTotal">\n            <button ion-button>Открытые</button>\n            <button ion-button color="secondary">Востановить</button>\n            <button ion-button color="danger">Повторная печать</button>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div *ngIf="showTotal">\n\n              <table style="width:100%;border:1px">\n                <tr>\n                  <th>Имя</th>\n                  <th>№ Заказа</th>\n                  <th>№ Стола</th>\n                  <th>Время</th>\n                  <th>Сумма</th>\n                </tr>\n                    <tr *ngFor="let data of dataArr;let i = index" (click)="showInfoAboutOrder(data)">\n                    <td>Jill</td>\n                    <td>{{i+1}}</td>\n                    <td>{{data?.name}}</td>\n                    <td>{{data?.time | date:\'short\'}}</td>\n                    <td>{{data?.sum}} грн</td>\n                  </tr>\n              </table>\n          </div>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 >\n        <table style="width:100%;border:1px">\n          <tr>\n            <th>Название</th>\n            <th>Цена</th>\n            <th>Сумма</th>\n            <th>Количество</th>\n          </tr>\n          <tr *ngFor="let item of orderArray">\n            <td>{{item?.name}}</td>\n            <td>{{item?.price}}</td>\n            <td>{{item?.sum}}</td>\n            <td>{{item?.count}}</td>\n          </tr>\n        </table>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8>\n      </ion-col>\n      <ion-col col-4>\n        <h1> Cумма: {{sum}} </h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/total-modal/total-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
    ], TotalModalPage);
    return TotalModalPage;
}());

//# sourceMappingURL=total-modal.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-table-modal/change-table-modal.module": [
		282,
		3
	],
	"../pages/change-table/change-table.module": [
		283,
		2
	],
	"../pages/edit-modal/edit-modal.module": [
		284,
		1
	],
	"../pages/total-modal/total-modal.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__total_modal_total_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TablesPage = (function () {
    function TablesPage(navCtrl, navParams, loading, loadingService, modalCtrl, orderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.loadingService = loadingService;
        this.modalCtrl = modalCtrl;
        this.orderService = orderService;
        this.showFree = false;
        this.showAdmin = false;
        this.showHookah = false;
        this.allTables = [];
        this.showTableForAdmins = false;
        this.showTableForHookah = false;
        this.showTableForWaiters = false;
        this.status = this.navParams.get('status');
        this.showingStuff();
        this.tablesFree = [
            {
                name: 'зал 1'
            },
            {
                name: 'зал 2'
            },
            {
                name: 'зал 3'
            },
            {
                name: 'зал 4'
            },
            {
                name: 'зал 5'
            },
            {
                name: 'зал 6'
            },
            {
                name: 'зал 7'
            },
            {
                name: 'зал 8'
            },
            {
                name: 'зал 9'
            },
            {
                name: 'зал 10'
            },
            {
                name: 'зал 11'
            },
            {
                name: 'зал 12'
            },
            {
                name: 'зал 13'
            },
            {
                name: 'зал 14'
            },
            {
                name: 'зал 15'
            },
            {
                name: 'зал 16'
            },
            {
                name: 'зал 17'
            },
            {
                name: 'зал 18'
            }
        ];
        this.tablesHookah = [
            {
                name: 'кальян 1'
            },
            {
                name: 'кальян 2'
            },
            {
                name: 'кальян 3'
            },
            {
                name: 'кальян 4'
            },
            {
                name: 'кальян 5'
            },
            {
                name: 'кальян 6'
            },
            {
                name: 'кальян 7'
            },
            {
                name: 'кальян 8'
            },
            {
                name: 'кальян 9'
            },
            {
                name: 'кальян 10'
            },
            {
                name: 'кальян 11'
            },
            {
                name: 'кальян 12'
            },
            {
                name: 'кальян 13'
            },
            {
                name: 'кальян 14'
            },
            {
                name: 'кальян 15'
            },
            {
                name: 'кальян 16'
            },
            {
                name: 'кальян 17'
            },
            {
                name: 'кальян 18'
            }
        ];
        this.tablesAdmin = [
            {
                name: 'Admin 1'
            },
            {
                name: 'Admin 2'
            },
            {
                name: 'Admin 3'
            },
            {
                name: 'Admin 4'
            },
            {
                name: 'Admin 5'
            }
        ];
        this.allTables = [this.tablesFree, this.tablesHookah, this.tablesAdmin];
        this.orderService.addTables(this.allTables);
        console.log('ALLTABLES', this.allTables);
    }
    TablesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TablesPage');
    };
    TablesPage.prototype.exit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    TablesPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__total_modal_total_modal__["a" /* TotalModalPage */]);
        profileModal.present();
    };
    TablesPage.prototype.showingStuff = function () {
        if (this.status === 'admin') {
            this.showTableForAdmins = true;
            this.showTableForWaiters = true;
            this.showTableForHookah = true;
        }
        else if (this.status === 'hookah') {
            this.showTableForHookah = true;
        }
        else if (this.status === 'waiier') {
            this.showTableForWaiters = true;
        }
    };
    TablesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tables',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/tables/tables.html"*/`<ion-content padding >\n  <button ion-button><ion-icon name="home" (click)="exit()"></ion-icon></button>\n  <button ion-button><ion-icon name="information-circle" (click)="presentProfileModal()"> </ion-icon></button>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <ion-card class="active" *ngIf="showTableForWaiters">\n          <ion-card-content  (click)="showFree = !showFree; showAdmin=false; showHookah=false" [ngClass]="(showFree === true)?\'backgroundShow\':\'\'">\n            Зал\n          </ion-card-content>\n        </ion-card>\n        <ion-card class="active" *ngIf="showTableForAdmins" >\n          <ion-card-content (click)="showAdmin = !showAdmin; showFree=false; showHookah=false" [ngClass]="(showAdmin === true)?\'backgroundShow\':\'\'">\n            Администрация\n          </ion-card-content>\n        </ion-card>\n        <ion-card class="active" *ngIf="showTableForHookah">\n          <ion-card-content  (click)="showHookah = !showHookah; showAdmin=false; showFree=false" [ngClass]="(showHookah === true)?\'backgroundShow\':\'\'">\n            Кальяны\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-10>\n          <div *ngIf="showFree">\n            <tables-component [tableFree]="tablesFree"></tables-component>\n          </div>\n          <div *ngIf="showAdmin">\n            <tables-component [tableAdmin]="tablesAdmin"></tables-component>\n          </div>\n          <div *ngIf="showHookah">\n            <tables-component [tableHookah]="tablesHookah"></tables-component>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/tables/tables.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]])
    ], TablesPage);
    return TablesPage;
}());

//# sourceMappingURL=tables.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_modal_edit_modal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_table_modal_change_table_modal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditTablePage = (function () {
    function EditTablePage(navCtrl, navParams, orderService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.modalCtrl = modalCtrl;
        this.xuila = true;
        this.showBar = false;
        this.showHookah = false;
        this.showKitchen = false;
        this.showArray = [];
        this.alcohol = {};
        this.alcoholKeys = [];
        this.kitchen = {};
        this.kitchenKeys = [];
        this.hookah = {};
        this.hookahKeys = [];
        this.totalScore = [];
        this.table = this.navParams.get('item');
        this.totalScoreService = this.orderService.getTotalScoreService();
        this.kitchen = {
            'Японская': [
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
            'Виски': [
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
            'Классика': [
                {
                    name: 'Шербет',
                    price: 140,
                    count: 0,
                    sum: 0
                },
                {
                    name: 'Adalia',
                    price: 180,
                    count: 0,
                    sum: 0
                },
                {
                    name: 'Nahla',
                    price: 180,
                    count: 0,
                    sum: 0
                },
            ],
            'Премиум': [
                {
                    name: 'Fumari',
                    price: 200,
                    count: 0,
                    sum: 0
                },
                {
                    name: 'Танж',
                    price: 200,
                    count: 0,
                    sum: 0
                },
                {
                    name: 'DakrSide',
                    price: 200,
                    count: 0,
                    sum: 0
                }
            ]
        };
        this.hookahKeys = Object.keys(this.hookah);
    }
    EditTablePage.prototype.addToTotalScore = function (linkItem) {
        var item = JSON.parse(JSON.stringify(linkItem));
        var index = this.checkItem(item, this.totalScoreService);
        var totalScore = Object.assign({}, this.totalScoreService);
        if (index !== -1) {
            if (this.totalScoreService[index]['status'] === undefined || this.table['status'] === 'admin') {
                this.totalScoreService[index]['count'] += 1;
                this.totalScoreService[index]['sum'] += item['price'];
            }
            else {
                this.totalScoreService.push(item);
            }
        }
        else {
            this.totalScoreService.push(item);
            this.totalScoreService[this.totalScoreService.indexOf(item)]['count'] = 1;
            this.totalScoreService[this.totalScoreService.indexOf(item)]['sum'] = item['price'];
        }
    };
    EditTablePage.prototype.sendToTotalModal = function () {
        var table = Object.assign({}, this.table);
        var tableName = table['name'];
        var totalScore = Object.assign({}, this.totalScoreService);
        var getData = this.orderService.getData();
        var index = this.checkItemForTotalModal(table, getData);
        table['time'] = new Date();
        table['sum'] = this.getResultPrice();
        table['note'] = this.note;
        table['order'] = totalScore;
        console.log('TABLE:', table);
        console.log('GETDATA', getData);
        if (index !== -1) {
            getData[index]['order'] = totalScore;
            getData[index]['sum'] = this.getResultPrice();
        }
        else {
            this.orderService.addData(table);
        }
        if (this.table['status'] === 'admin') {
            for (var key in this.totalScoreService) {
            }
        }
        else {
            for (var key in this.totalScoreService) {
                this.totalScoreService[key]['status'] = false;
            }
        }
    };
    EditTablePage.prototype.sendNotes = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_modal_edit_modal__["a" /* EditModalPage */], { totalSum: this.getResultPrice() });
        profileModal.present();
    };
    EditTablePage.prototype.changeTable = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__change_table_modal_change_table_modal__["a" /* ChangeTableModalPage */], { currentTable: this.table });
        modal.present();
    };
    EditTablePage.prototype.checkItem = function (item, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].status === undefined && array[i].name === item.name) {
                return i;
            }
        }
        return -1;
    };
    EditTablePage.prototype.checkItemForTotalModal = function (object, array) {
        for (var i = 0; i < array.length; i++) {
            console.log('length', array.length);
            console.log('i', i);
            if (array[i].name === object.name) {
                return i;
            }
        }
        return -1;
    };
    EditTablePage.prototype.checkItemTest = function (item, array) {
        console.log('check item');
        for (var i = 0; i < array.length; i++) {
            console.log('length', array.length);
            console.log('i', i);
            if (array[i].name === item.name) {
                return i;
            }
        }
        return -1;
    };
    EditTablePage.prototype.getResultPrice = function () {
        return this.totalScoreService.reduce(function (prev, el) {
            return prev + el['sum'];
        }, 0);
    };
    EditTablePage.prototype.deleteItem = function (item) {
        var idx = this.totalScoreService.indexOf(item);
        console.log(item);
        if (idx != -1) {
            if (item['status'] !== false) {
                this.totalScoreService.splice(idx, 1);
            }
        }
    };
    EditTablePage.prototype.addAlcohol = function (item) {
        this.showArray = this.alcohol[item];
    };
    EditTablePage.prototype.addKitchen = function (item) {
        this.showArray = this.kitchen[item];
    };
    EditTablePage.prototype.addHookah = function (item) {
        this.showArray = this.hookah[item];
    };
    EditTablePage.prototype.hideMenu = function () {
        if ((this.showHookah === false) && (this.showBar === false) && (this.showKitchen === false)) {
            this.showArray.length = 0;
        }
    };
    EditTablePage.prototype.writingCount = function (item) {
        // console.log(this.totalScoreService[this.totalScoreService.indexOf(item)]['count']);
        item.sum = this.totalScoreService[this.totalScoreService.indexOf(item)]['price'] * item.count;
    };
    EditTablePage.prototype.writingNote = function (item) {
        console.log(this.totalScoreService[this.totalScoreService.indexOf(item)]['note']);
        item.note = this.totalScoreService[this.totalScoreService.indexOf(item)]['note'];
    };
    EditTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-table',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/pages/edit-table/edit-table.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{table.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-card>\n          <ion-card-content (click)="(showKitchen = !showKitchen); showBar = false; showHookah = false" (click)="hideMenu()"  [ngClass]="(showKitchen === true)?\'backgroundShow\':\'\'">\n            Кухня\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n          <ion-card-content  (click)="showBar = !showBar; showKitchen = false; showHookah = false" (click)="hideMenu()" [ngClass]="(showBar === true)?\'backgroundShow\':\'\'">\n            Бар\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n          <ion-card-content (click)="showHookah = !showHookah ; showBar = false; showKitchen = false" (click)="hideMenu()" [ngClass]="(showHookah === true)?\'backgroundShow\':\'\'">\n            Кальяны\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n          <ion-card-content>\n            Порча имущества\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n        <ion-col col-3 >\n          <div *ngIf="showKitchen">\n            <h1>Кухня </h1>\n            <ion-card *ngFor="let kitchenKey of kitchenKeys">\n              <ion-card-content (click)="addKitchen(kitchenKey)">\n                {{kitchenKey}}\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n          <div *ngIf="showBar">\n            <h1>Бар</h1>\n            <ion-card *ngFor="let alcoholKey of alcoholKeys">\n              <ion-card-content (click)="addAlcohol(alcoholKey)">\n                {{alcoholKey}}\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n          <div *ngIf="showHookah">\n            <h1>Кальяны </h1>\n            <ion-card *ngFor="let hookahKey of hookahKeys">\n              <ion-card-content (click)="addHookah(hookahKey)">\n                {{hookahKey}}\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-col>\n\n        <ion-col col-3>\n          <div>\n            <ion-card *ngFor="let show of showArray" (click)="addToTotalScore(show)">\n              <ion-card-header>\n                {{show.name}}\n              </ion-card-header>\n              <ion-card-content>\n                цена: {{show.price}}грн\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div>\n            <button ion-button color="light" (click)="sendToTotalModal()">Пречек</button>\n            <button ion-button color="light">Выбить чек</button>\n            <button ion-button (click)="changeTable()">Перенести</button>\n            <button ion-button (click)="sendNotes()">Функции чека</button>\n\n            <ion-card *ngFor="let total of totalScoreService">\n              <ion-card-header >\n                {{total.name}}\n                <input [(ngModel)]="total.note" (keyup)="writingNote(total)" type="text">\n                <ion-icon name="md-close-circle" (click)="deleteItem(total)"></ion-icon>\n              </ion-card-header>\n              <ion-card-content>\n                Количество:\n                <input [(ngModel)]="total.count" (keyup)="writingCount(total)" type="number" [disabled]="total[\'status\']===false">\n                цена: {{total.price}}грн\n                сумма: {{total.sum}} грн\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10>\n      </ion-col>\n      <ion-col col-2>\n        <h1> Cумма: {{getResultPrice()}} </h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/pages/edit-table/edit-table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* ModalController */]])
    ], EditTablePage);
    return EditTablePage;
}());

//# sourceMappingURL=edit-table.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loading_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tables_tables__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_table_edit_table__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_total_modal_total_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_order_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_modal_edit_modal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_change_table_modal_change_table_modal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_change_table_change_table__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tables_tables__["a" /* TablesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_table_edit_table__["a" /* EditTablePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_total_modal_total_modal__["a" /* TotalModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_modal_edit_modal__["a" /* EditModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_table_modal_change_table_modal__["a" /* ChangeTableModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_change_table_change_table__["a" /* ChangeTablePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/change-table-modal/change-table-modal.module#ChangeTableModalPageModule', name: 'ChangeTableModalPage', segment: 'change-table-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-table/change-table.module#ChangeTablePageModule', name: 'ChangeTablePage', segment: 'change-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-modal/edit-modal.module#EditModalPageModule', name: 'EditModalPage', segment: 'edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/total-modal/total-modal.module#TotalModalPageModule', name: 'TotalModalPage', segment: 'total-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tables_tables__["a" /* TablesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_table_edit_table__["a" /* EditTablePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_total_modal_total_modal__["a" /* TotalModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_modal_edit_modal__["a" /* EditModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_table_modal_change_table_modal__["a" /* ChangeTableModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_change_table_change_table__["a" /* ChangeTablePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_order_service__["a" /* OrderService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var OrderService = (function () {
    function OrderService() {
        this.data = [];
        this.finishTotalScore = [];
        this.status = '';
        this.totalScoreService = [];
    }
    OrderService.prototype.getData = function () {
        return this.data;
    };
    OrderService.prototype.addData = function (item) {
        this.data.push(item);
    };
    OrderService.prototype.getfinishTotalScore = function () {
        return this.finishTotalScore;
    };
    OrderService.prototype.addfinishTotalScore = function (item) {
        this.finishTotalScore.push(item);
    };
    OrderService.prototype.getStatus = function () {
        return this.status;
    };
    OrderService.prototype.addStatus = function (item) {
        this.status = item;
    };
    OrderService.prototype.getTotalScoreService = function () {
        return this.totalScoreService;
    };
    OrderService.prototype.addTotalScoreService = function (item) {
        this.totalScoreService.push(item);
    };
    OrderService.prototype.deleteTotalScoreService = function () {
        this.totalScoreService.length = 0;
    };
    OrderService.prototype.getTables = function () {
        return this.tables;
    };
    OrderService.prototype.addTables = function (item) {
        this.tables = item;
    };
    return OrderService;
}());

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tables_components_tables_components__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__tables_components_tables_components__["a" /* TablesComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__tables_components_tables_components__["a" /* TablesComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_edit_table_edit_table__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TablesComponent = (function () {
    function TablesComponent(navCtrl, orderService) {
        this.navCtrl = navCtrl;
        this.orderService = orderService;
    }
    TablesComponent.prototype.editTable = function (item) {
        console.log('ITEMOITEMITEM:', item);
        var getData = this.orderService.getData();
        var index = this.checkItem(item, getData);
        var totalScoreService = this.orderService.getTotalScoreService();
        console.log('totalScorservice', totalScoreService);
        if (index !== -1) {
            this.orderService.deleteTotalScoreService();
            for (var key in getData[index]['order']) {
                this.orderService.addTotalScoreService(getData[index]['order'][key]);
            }
            console.log('GetData[index]', getData[index]['order']);
            console.log('GetData[xui]', this.orderService.getTotalScoreService());
        }
        else {
            totalScoreService.length = 0;
        }
        item['status'] = this.orderService.getStatus();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_edit_table_edit_table__["a" /* EditTablePage */], { item: item });
        console.log(item);
    };
    TablesComponent.prototype.checkItem = function (object, array) {
        for (var i = 0; i < array.length; i++) {
            console.log('length', array.length);
            console.log('i', i);
            if (array[i].name === object.name) {
                return i;
            }
        }
        return -1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('tableFree'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "tablesFree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('tableAdmin'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "tablesAdmin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('tableHookah'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "tablesHookah", void 0);
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tables-component',template:/*ion-inline-start:"/home/geeksters/Projects/keeper/src/components/tables-components/tables.components.html"*/`<div class="tables-tables" *ngFor="let item of tablesFree" (click)="editTable(item)">\n  <p class="shadowtext">{{item.name}}</p>\n</div>\n<div class="tables-tables" *ngFor="let item of tablesAdmin" (click)="editTable(item)">\n  <p class="shadowtext">{{item.name}}</p>\n</div>\n<div class="tables-tables" *ngFor="let item of tablesHookah" (click)="editTable(item)">\n  <p class="shadowtext">{{item.name}}</p>\n</div>\n\n`/*ion-inline-end:"/home/geeksters/Projects/keeper/src/components/tables-components/tables.components.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]])
    ], TablesComponent);
    return TablesComponent;
}());

//# sourceMappingURL=tables.components.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map