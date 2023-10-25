import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountFormComponent } from './account-form/account-form.component';

@NgModule({
  declarations: [TransactionFormComponent, AccountFormComponent],
  imports: [CommonModule, SharedModule],
})
export class ComponentsModule {}
