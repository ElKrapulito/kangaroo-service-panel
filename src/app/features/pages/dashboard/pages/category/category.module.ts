import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/features/services/auth.service';
import { CategoryHttpService } from 'src/app/features/services/category.service';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
  providers: [AuthService, CategoryHttpService],
})
export class CategoryModule {}
