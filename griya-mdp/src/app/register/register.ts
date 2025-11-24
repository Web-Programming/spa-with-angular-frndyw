import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Formgroup, ReactiveFormModule, validators, FormBuilder } from '@angular/form';
import { Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBUilder)
  this.registerForm = this.fb.group({
    name: [ '', [ Validators,Required, Validators.minLength(2)]]
  })
}
