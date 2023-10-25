import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountHttpService } from '../../services/account.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  public accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private accountService: AccountHttpService,
    public dialogRef: MatDialogRef<AccountFormComponent>
  ) {
    this.accountForm = this.fb.group({});
  }
  ngOnInit(): void {
    this.accountForm = this.fb.group({
      name: ['', Validators.required],
      amount: [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.accountForm.invalid) {
      return;
    }
    const token = this.authService.getParseAccessToken();
    const data = { ...this.accountForm.value, user: token.id };
    this.accountService.create(data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
