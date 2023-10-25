import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IAccount } from '../../interfaces/account.interface';
import { ICategory } from '../../interfaces/category.interface';
import { AuthService } from '../../services/auth.service';
import { AccountHttpService } from '../../services/account.service';
import { CategoryHttpService } from '../../services/category.service';
import { TransactionHttpService } from '../../services/transaction.service';
import { TransactionType } from '../../enum/transaction-type.enum';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit {
  public transactionForm: FormGroup;

  public $accountsList: Observable<IAccount[]>;
  public $categoryList: Observable<ICategory[]>;
  public transactionType: string[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private accountService: AccountHttpService,
    private categoryService: CategoryHttpService,
    private transactionService: TransactionHttpService,
    public dialogRef: MatDialogRef<TransactionFormComponent>
  ) {
    this.transactionForm = this.fb.group({});
    this.$accountsList = of([]);
    this.$categoryList = of([]);
    this.transactionType = Object.values(TransactionType);
  }
  ngOnInit(): void {
    this.setUp();
    this.transactionForm = this.fb.group({
      amount: [0, Validators.required],
      account: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.transactionForm.invalid) {
      return;
    }
    const data = this.transactionForm.value;
    this.transactionService.create(data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  setUp() {
    const token = this.authService.getParseAccessToken();
    this.$accountsList = this.accountService.getByAccountByUserId(token.id);
    this.$categoryList = this.categoryService.getByCategoryByUserId(token.id);
  }
}
