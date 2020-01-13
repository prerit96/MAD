import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-view-child',
  templateUrl: './source-view-child.component.html',
  styleUrls: ['./source-view-child.component.css']
})
export class SourceViewChildComponent implements OnInit {
  message = "message from source";
  constructor() { }

  ngOnInit() {
  }

}
