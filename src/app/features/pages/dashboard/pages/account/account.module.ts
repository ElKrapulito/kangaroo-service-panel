import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { AuthService } from 'src/app/features/services/auth.service';
import { AccountHttpService } from 'src/app/features/services/account.service';
import { CategoryHttpService } from 'src/app/features/services/category.service';
import { TransferHttpService } from 'src/app/features/services/transfer.service';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
  providers: [
    AuthService,
    AccountHttpService,
    CategoryHttpService,
    TransferHttpService,
  ],
})
export class AccountModule {}
