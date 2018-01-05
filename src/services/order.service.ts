export class OrderService{

  private data: any = [];

  getData(): any {

    return this.data;
  }

  addData(item){

    this.data.push(item);
  }

  private finishTotalScore: any = [];

  getfinishTotalScore(): any {

    return this.finishTotalScore;

  }

  addfinishTotalScore(item){

    this.finishTotalScore.push(item);
  }

  private status:any='';

  getStatus():any {

    return this.status;

  }

  addStatus(item){

    this.status = item;

  }

  private totalScoreService:object[]=[];

  getTotalScoreService():any {

    return this.totalScoreService;
  }

  addTotalScoreService(item){

    this.totalScoreService.push(item);

  }
  deleteTotalScoreService(){
    this.totalScoreService.length = 0;
  }

  private tables:any;

  getTables():any {

    return this.tables;
  }
  addTables(item){

    this.tables = item;

  }

}

