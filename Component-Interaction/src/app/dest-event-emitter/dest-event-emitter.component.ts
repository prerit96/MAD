import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dest-event-emitter',
  templateUrl: './dest-event-emitter.component.html',
  styleUrls: ['./dest-event-emitter.component.css']
})
export class DestEventEmitterComponent implements OnInit {
  message: any;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    console.log("event received")
    this.message = $event
  }

}
