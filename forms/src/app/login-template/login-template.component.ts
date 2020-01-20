import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  user: any = {};
  list: any = ['l1', 'l2', 'l3', 'l4'];
  constructor() { }

  ngOnInit() {
    console.log(this.list)
  }

  onSubmitTemplateBased(f) {
    console.log(f)
    console.log(this.user)
    console.log(this.user.name)
    this.list.push('l5');
    
  }

  submit() {
    // console.log(f)
    // console.log(f.controls.user)
    // console.log(f.value.user)
    // f.reset();
    console.log(this.list)
  }

  ngOnDestroy() {
    console.log("destroy called of template")
  }

}
