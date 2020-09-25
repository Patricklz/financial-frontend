import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  show: Boolean;

  showMenu() {
    if (this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
