import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TransactionFormComponent],
  imports: [CommonModule, SharedModule],
})
export class ComponentsModule {}
