import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navListClass: string = '';
  navToggleClass: string = '';

  onNavBtnClick() {
    this.navListClass = this.navListClass === 'nav--show' ? '' : 'nav--show';
    this.navToggleClass =
      this.navToggleClass === 'nav__toggle--close' ? '' : 'nav__toggle--close';
  }
}
