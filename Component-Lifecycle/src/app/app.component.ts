import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = {};
  constructor() {
    console.log("App Constructor");
  }
  ngOnChanges() {
    console.log("App ngOnChanges called");
  }

  ngOnInit() {
    console.log("app ngOnInit Called");
  }

  ngDoCheck() {
    console.log("App ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("App ngAfterContentInit called")
  }

  ngAfterContentChecked() {
    console.log("App ngAfterContentChecked called")
  }
  ngAfterViewInit() {
    console.log("App ngAfterViewInit called")
  }

  ngAfterViewChecked() {
    console.log("App ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("App on destroy called")
  }
}
