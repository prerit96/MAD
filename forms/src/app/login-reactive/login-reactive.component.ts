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
  inputField: FormControl;
  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit() {
    this.inputField = new FormControl("standalone field")
    this.formC = new FormGroup({
      'firstName': new FormControl("abc", [Validators.required]),
      'password': new FormControl()
    });

    this.formB = this.fb.group({
      'firstName': ["Prerit", Validators.required],
      'password': "",
    })
  }

  onSubmit() {
    console.log(this.formC)
    console.log(this.formC.value)
    console.log(this.formC.value.firstName)
    this.formC.setValue({
      'firstName': 'Inderpal'
    })
    console.log(this.formC)
  }

  onSubmitBuilder() {
    console.log(this.formB)
    console.log(this.formB.value)
    console.log(this.formB.value.firstName)
  }

  changeDetected() {
    console.log(this.inputField)
    this.inputField.setValue('value changed')
  }

  ngOnDestroy() {
    console.log("destroy called of reactive")
  }

}
