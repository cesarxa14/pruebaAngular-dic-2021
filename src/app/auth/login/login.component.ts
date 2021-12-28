import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder : FormBuilder,
    private  router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._builderForm();
  }

  _builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
   /**Getters */
   get username() { return this.loginForm.controls['username']; }
   get password() { return this.loginForm.controls['password']; }

  login(){
    console.log('logged!')
    // this.router.navigateByUrl('/dashboard')
    
    this.router.navigate(['dashboard', {accessBy: 'login'}]);
  }

}
