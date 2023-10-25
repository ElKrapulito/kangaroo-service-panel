import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { AuthService } from 'src/app/features/services/auth.service';
import { AccountHttpService } from 'src/app/features/services/account.service';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
  providers: [AuthService, AccountHttpService],
})
export class AccountModule {}
