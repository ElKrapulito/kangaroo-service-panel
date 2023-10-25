import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() onHamClick = new EventEmitter<boolean>();

  constructor() {}

  async ngOnInit(): Promise<void> {}

  hamburgerClick() {
    this.onHamClick.emit(true);
  }
}
