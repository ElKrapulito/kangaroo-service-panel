import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionType } from 'src/app/features/enum/transaction-type.enum';
import { IAccount } from 'src/app/features/interfaces/account.interface';
import { ICategory } from 'src/app/features/interfaces/category.interface';
import { ITransaction } from 'src/app/features/interfaces/transaction.interface';
import { AccountHttpService } from '../../../../services/account.service';
import { CategoryHttpService } from 'src/app/features/services/category.service';
import { TransactionHttpService } from 'src/app/features/services/transaction.service';
import { AuthService } from 'src/app/features/services/auth.service';
import { Observable, Subscriber, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TransactionFormComponent } from 'src/app/features/components/transaction-form/transaction-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tableTransactionHeaders: string[] = [
    'account',
    'category',
    'amount',
    'type',
  ];
  public accountsList: IAccount[];
  public categoryList: ICategory[];
  public transactionType: string[];
  public transactions: ITransaction[];

  public $accountsList: Observable<IAccount[]>;
  public $categoryList: Observable<ICategory[]>;
  public $transactionList: Observable<ITransaction[]>;

  public filterForm: FormGroup;
  public range: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountHttpService,
    private categoryService: CategoryHttpService,
    private transactionService: TransactionHttpService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    this.transactions = [];
    this.accountsList = [];
    this.categoryList = [];
    this.transactionType = Object.values(TransactionType);
    this.filterForm = this.fb.group({});
    this.range = this.fb.group({});
    this.$accountsList = of([]);
    this.$categoryList = of([]);
    this.$transactionList = of([]);
  }
  ngOnInit(): void {
    this.filterForm = this.fb.group({
      accountIds: [],
      categoryId: [],
      transactionType: [],
    });
    this.range = this.fb.group({ startDate: [''], endDate: [''] });
    this.setUp();
  }

  setUp() {
    const token = this.authService.getParseAccessToken();
    this.$accountsList = this.accountService.getByAccountByUserId(token.id);
    this.$categoryList = this.categoryService.getByCategoryByUserId(token.id);
    this.$transactionList = this.transactionService.getTransactionsFiltered({
      userId: token.id,
    });
  }

  onSubmit() {
    const filter = this.filterForm.value;
    const dates = this.range.value;
    const token = this.authService.getParseAccessToken();
    const data = { ...filter, ...dates, userId: token.id };

    this.$transactionList =
      this.transactionService.getTransactionsFiltered(data);
  }

  createTransaction() {
    const dialog = this.dialog.open(TransactionFormComponent);
    dialog.afterClosed().subscribe(() => {
      const filter = this.filterForm.value;
      const dates = this.range.value;
      const token = this.authService.getParseAccessToken();
      const data = { ...filter, ...dates, userId: token.id };
      this.$transactionList =
        this.transactionService.getTransactionsFiltered(data);
    });
  }
}
