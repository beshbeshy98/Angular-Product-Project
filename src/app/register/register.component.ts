import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      name: ['', Validators.required], 
      username: ['', [Validators.required, Validators.pattern('^[^\\s]+$')]], 
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@%$#]).*$') 
      ]],
      confirmPassword: ['', [Validators.required, this.matchPasswordValidator]] 
  })
}

get formControls(){
  return this.registerForm.controls;
}
matchPasswordValidator(control: any) {
  const password = control.parent?.get('password')?.value;
  if (password && control.value !== password) {
    return { 'passwordMismatch': true };
  }
  return null;
}

onSubmit() {
  if (this.registerForm.valid) {
    console.log(this.registerForm.value);
  } else {
    console.log("Form is invalid");
  }
}
formSubmitted = false;
handleFormSubmit(){
  this.formSubmitted = true;
  if(this.registerForm.invalid){
    return;
  }
}

}
