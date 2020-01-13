import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-source-event-emitter',
  templateUrl: './source-event-emitter.component.html',
  styleUrls: ['./source-event-emitter.component.css']
})
export class SourceEventEmitterComponent implements OnInit {
  message: any = "hello from Event Emitter Source";
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log("event emitted")
    this.messageEvent.emit(this.message)
  }

}
