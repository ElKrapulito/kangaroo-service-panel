import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { IAccount } from 'src/app/features/interfaces/account.interface';
import { AccountHttpService } from 'src/app/features/services/account.service';
import { AuthService } from 'src/app/features/services/auth.service';
import { AccountFormComponent } from '../../../../components/account-form/account-form.component';

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
    private authService: AuthService,
    public dialog: MatDialog
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

  createAccount() {
    const dialog = this.dialog.open(AccountFormComponent);
    dialog.afterClosed().subscribe(() => {
      this.setUp();
    });
  }
}
