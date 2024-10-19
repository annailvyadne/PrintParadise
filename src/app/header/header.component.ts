import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false; // Add this property

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Function to toggle the menu
  }
}
