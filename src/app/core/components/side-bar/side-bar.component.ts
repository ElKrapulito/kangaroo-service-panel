import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavLink } from '../../models/nav-link.interface';
import { LinkType } from '../../enum/link-type.enum';
import { AuthService } from 'src/app/features/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  showFiller = false;
  @ViewChild('drawer') public drawer!: MatDrawer;
  linksList: NavLink[] = [
    {
      route: '/dashboard/home',
      text: 'Home',
      icon: 'house',
      protection: LinkType.NOAUTH,
    },
    {
      route: '/dashboard/account',
      text: 'Accounts',
      icon: 'person',
      protection: LinkType.PROTECTED,
    },
    {
      route: '/dashboard/category',
      text: 'Categories',
      icon: 'star',
      protection: LinkType.PROTECTED,
    },
    // {
    //   route: '/transaction',
    //   text: 'Transactions',
    //   icon: 'calendar_month',
    //   protection: LinkType.PROTECTED,
    // },
  ];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  diplayNavLink(protectionType: NavLink) {
    return true;
  }

  logOut() {
    this.authService.logOut();
  }
}
