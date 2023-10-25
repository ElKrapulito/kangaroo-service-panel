import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public modelForm: FormGroup;
  public hide: boolean;
  constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({});
    this.hide = true;
  }
  ngOnInit(): void {
    this.modelForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
    });
  }
}
