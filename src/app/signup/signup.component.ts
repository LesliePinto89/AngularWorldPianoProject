import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MustMatch } from '../customValidators/mustMatch';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  control: FormControl;
  confirmPassword = true;
  showConfirmError = false;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.control = this.fb.control('', Validators.required);

    this.signupForm =  this.fb.group({
      email: ['',  [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : new FormControl({value: '', disabled: this.confirmPassword},Validators.required)}, {
        validator: MustMatch('password', 'confirmPassword')
    });
}

get f() { return this.signupForm.controls; }

public toggleFormState(controlFormName: string, existingState: boolean, overwriteStatus: boolean) {

  existingState = overwriteStatus;
  const state = existingState ? 'enable' : 'disable';

  Object.keys(this.signupForm.controls).forEach((controlName) => {
    if(controlName === controlFormName) {
      this.signupForm.controls[controlFormName][state](); 
      // if(state === 'disable'){
      //   this.signupForm.controls[controlFormName].setValue('');
      // }
    }
     
  });
}

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirm_password').value) {
        return {invalid: true};
    }
}

}
