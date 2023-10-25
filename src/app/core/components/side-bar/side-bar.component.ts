import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavLink } from '../../models/nav-link.interface';
import { LinkType } from '../../enum/link-type.enum';

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
      route: '/auth',
      text: 'Ingresar',
      icon: 'key',
      protection: LinkType.NOAUTH,
    },
    {
      route: '/users',
      text: 'Usuarios',
      icon: 'person',
      protection: LinkType.PROTECTED,
    },
    {
      route: '/vets',
      text: 'Veterinarios',
      icon: 'domain',
      protection: LinkType.PROTECTED,
    },
    {
      route: '/services',
      text: 'Servicios',
      icon: 'star',
      protection: LinkType.PROTECTED,
    },
    {
      route: '/appointments',
      text: 'Citas',
      icon: 'calendar_month',
      protection: LinkType.PROTECTED,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  diplayNavLink(protectionType: NavLink) {
    return true;
  }
}
