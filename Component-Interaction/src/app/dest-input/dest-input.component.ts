import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dest-input',
  templateUrl: './dest-input.component.html',
  styleUrls: ['./dest-input.component.css']
})
export class DestInputComponent implements OnInit {
  @Input() message: any;
  constructor() { }

  ngOnInit() {
    console.log(this.message)
  }

}
