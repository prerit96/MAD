import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  user: any = {}; 
  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplateBased() {
    console.log(this.user)
  }

}
