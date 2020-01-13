import { Component, OnInit, ViewChild } from '@angular/core';
import { SourceViewChildComponent } from '../source-view-child/source-view-child.component';

@Component({
  selector: 'app-dest-view-child',
  templateUrl: './dest-view-child.component.html',
  styleUrls: ['./dest-view-child.component.css']
})
export class DestViewChildComponent implements OnInit {
  @ViewChild(SourceViewChildComponent, {static: true }) sourceComp;
  message = "test";
  constructor() { }

  ngOnInit() {
    console.log(this.sourceComp.message);
  }

  ngAfterViewInit() {
    console.log("aftervieinit called")
    console.log(this.message)
    console.log(this.sourceComp.message);
  }

}
