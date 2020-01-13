import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-input',
  templateUrl: './source-input.component.html',
  styleUrls: ['./source-input.component.css']
})
export class SourceInputComponent implements OnInit {
  message: any = {
    "var1": "text1",
    "var2": "text2"
  };
  var1: any;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.var1)

  }

}
