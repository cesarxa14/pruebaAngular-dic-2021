import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
    private  router: Router) { }

  ngOnInit(): void {
    this.registerForm = this._builderForm();
  }
  _builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
   /**Getters */
   get correo() { return this.registerForm.controls['correo']; }
   get password() { return this.registerForm.controls['correo']; }


  register(){
    console.log('registered!')
    this.router.navigate(['dashboard', {accessBy: 'register'}]);
  }

}
