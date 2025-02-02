import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formValues = {
    email:'',
    password: ''
  }
  formSubmitted = false;
  handleLoginSubmit(form : any){
  this.formSubmitted = true;
  if(form.invalid){
    return;
  } 
  }
}
