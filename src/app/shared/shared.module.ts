import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
