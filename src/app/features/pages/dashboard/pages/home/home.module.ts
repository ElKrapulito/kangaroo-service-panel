import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { AccountHttpService } from 'src/app/features/services/account.service';
import { CategoryHttpService } from 'src/app/features/services/category.service';
import { TransactionHttpService } from 'src/app/features/services/transaction.service';
import { AuthService } from 'src/app/features/services/auth.service';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ComponentsModule],
  providers: [
    AccountHttpService,
    CategoryHttpService,
    TransactionHttpService,
    AuthService,
  ],
})
export class HomeModule {}
