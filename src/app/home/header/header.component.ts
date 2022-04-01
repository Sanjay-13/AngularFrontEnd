import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template:`
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    <button (click)="auth.logout({returnTo: document.location.origin })">
      Logout
    </button>
  </ng-container>

  <ng-template #loggedOut>
    <button (click)="auth.loginWithRedirect()">Login/Register</button>
  </ng-template>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
}
