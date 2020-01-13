import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent {
  @Input() inputVar: any = {};

  constructor() { console.log("Comp One Constructor") }
  ngOnChanges() {
    console.log(this.inputVar);
    console.log("Comp One ngOnChanges called");
  }

  ngOnInit() {
    console.log("Comp One ngOnInit Called");
  }

  ngDoCheck() {
    console.log("Comp One ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("Comp One ngAfterContentInit called")
  }

  ngAfterContentChecked() {
    console.log("Comp One ngAfterContentChecked called")
  }
  ngAfterViewInit() {
    console.log("Comp One ngAfterViewInit called")
  }

  ngAfterViewChecked() {
    console.log("Comp One ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("Comp One on destroy called")
  }
}
