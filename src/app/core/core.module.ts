import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthService } from '../features/services/auth.service';

@NgModule({
  declarations: [LayoutComponent, SideBarComponent, NavBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
  providers: [AuthService],
})
export class CoreModule {}
