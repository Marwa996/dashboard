import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm:FormGroup=new FormGroup({
   phone_number: new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
   Password: new FormControl (null, [Validators.required])
 });


  blocked_eye_btn = true;
  type_password ="password";
  Show_Password(){
    this.blocked_eye_btn = false  ;
    this.type_password = "text";
  }

  Hide_Password(){
    this.blocked_eye_btn = true;
    this.type_password = "password";
  }
}
