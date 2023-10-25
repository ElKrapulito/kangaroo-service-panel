import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IAccount } from '../../interfaces/account.interface';
import { ICategory } from '../../interfaces/category.interface';
import { AuthService } from '../../services/auth.service';
import { AccountHttpService } from '../../services/account.service';
import { CategoryHttpService } from '../../services/category.service';
import { TransactionHttpService } from '../../services/transaction.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionType } from '../../enum/transaction-type.enum';
import { TransferHttpService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent {
  public transferForm: FormGroup;

  public $accountsList: Observable<IAccount[]>;
  public $categoryList: Observable<ICategory[]>;
  public transactionType: string[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private accountService: AccountHttpService,
    private categoryService: CategoryHttpService,
    private transferService: TransferHttpService,
    public dialogRef: MatDialogRef<TransferFormComponent>
  ) {
    this.transferForm = this.fb.group({});
    this.$accountsList = of([]);
    this.$categoryList = of([]);
    this.transactionType = Object.values(TransactionType);
  }
  ngOnInit(): void {
    this.setUp();
    this.transferForm = this.fb.group({
      accountWithdrown: ['', Validators.required],
      accountBenefited: ['', Validators.required],
      amount: [0, Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  setUp() {
    const token = this.authService.getParseAccessToken();
    this.$accountsList = this.accountService.getByAccountByUserId(token.id);
    this.$categoryList = this.categoryService.getByCategoryByUserId(token.id);
  }

  onSubmit() {
    if (this.transferForm.invalid) {
      return;
    }
    const data = this.transferForm.value;
    this.transferService.create(data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
