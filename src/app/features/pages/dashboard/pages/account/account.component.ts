import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAccount } from 'src/app/features/interfaces/account.interface';
import { AccountHttpService } from 'src/app/features/services/account.service';
import { AuthService } from 'src/app/features/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public tableAccountHeaders = ['name', 'amount', 'actions'];
  public accountsList = [];

  public $accountsList: Observable<IAccount[]>;

  constructor(
    private accountService: AccountHttpService,
    private authService: AuthService
  ) {
    this.$accountsList = of([]);
  }
  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    const token = this.authService.getParseAccessToken();
    this.$accountsList = this.accountService.getByAccountByUserId(token.id);
  }
}
