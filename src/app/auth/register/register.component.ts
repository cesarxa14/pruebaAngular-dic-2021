import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
    private _appService : AppService,
    private  router: Router) { }

  ngOnInit(): void {
    this.registerForm = this._builderForm();
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
   get username() { return this.registerForm.controls['username']; }
   get password() { return this.registerForm.controls['password']; }


  register(){
    
    this._appService.getUserByUsername(this.username.value).subscribe((user:any)=>{
      console.log('user', user)
      if(user.length > 0){
        alert('Este nombre de usuario ya existe');
       
      } else{
        this._appService.register(this.registerForm.value).subscribe((res:any)=>{
          console.log(res);
          if(res) {
            
            alert('Registrado!');
            localStorage.setItem('metadata', JSON.stringify([res]));
            localStorage.setItem('accessBy', 'register');
            localStorage.setItem('newuser', 'true');
            this.router.navigateByUrl('/dashboard')
          }
          
        })
      }
    })
  }

}
