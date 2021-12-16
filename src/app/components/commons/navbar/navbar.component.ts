import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles!: string[]
  isLoggedIn = false;
  showChildBoard = false;
  showSantaBoard = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const currentUser = this.tokenStorageService.getUser();
      this.roles = currentUser.roles;

      this.showChildBoard = this.roles.includes('ROLE_CHILD');
      this.showSantaBoard = this.roles.includes('ROLE_SANTA');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = currentUser.username;
    }
  }

}
