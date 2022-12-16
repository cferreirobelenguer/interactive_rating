import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-final-view',
  templateUrl: './final-view.component.html',
  styleUrls: ['./final-view.component.scss']
})
export class FinalViewComponent implements OnChanges {
  //variables of initial-view component
  @Input() election:number=0
  @Input() show:boolean=false

  ngOnChanges(changes: SimpleChanges): void{
    // we can see the changes to the Input
    console.log(changes)
    console.log(this.election)
  }
}
