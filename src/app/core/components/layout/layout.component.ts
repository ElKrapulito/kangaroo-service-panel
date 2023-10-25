import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showFiller = false;
  @ViewChild('side') side!: SideBarComponent;
  constructor() {}

  ngOnInit(): void {}

  toggleSide(wasClicked: boolean) {
    this.side.drawer.toggle();
  }
}
