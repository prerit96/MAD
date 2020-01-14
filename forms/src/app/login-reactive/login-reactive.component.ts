import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  formC: FormGroup;
  formB: FormGroup;
  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit() {
    this.formC = new FormGroup({
      'firstName': new FormControl("abc", Validators.required),
      'password': new FormControl(),
    });

    this.formB = this.fb.group({
      'firstName': ["Prerit", Validators.required],
      'password': "",
    })
  }

  onSubmit() {
    console.log(this.formC)
  }

  onSubmitBuilder() {
    console.log(this.formB)
  }

}
