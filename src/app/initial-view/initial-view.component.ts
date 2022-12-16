import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.scss']
})
export class InitialViewComponent {
  public election:number
  public show:boolean
  public noElection:boolean;
  constructor(){
    this.election=0
    this.show=false
    this.noElection=false
  }
  //event of the buttons
  sendValue1(){
    this.election=1
  }
  sendValue2(){
    this.election=2
  }
  sendValue3(){
    this.election=3
  }
  sendValue4(){
    this.election=4
  }
  sendValue5(){
    this.election=5
  }
  showView(){
    if(this.election>0){
      this.show=true
    }else{
      this.noElection=true
    }
    
  }

}
