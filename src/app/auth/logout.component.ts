import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-logout',
  template: `<div class="row spacing">
  				<button class="btn btn-danger" (click)="onLogout()">Logout</button>
  			</div>`
})

export class LogoutComponent implements OnInit{
	constructor(private authService: AuthService, private router: Router) { }

	onLogout(){
		this.authService.logout();
		this.router.navigateByUrl('/login');
	}

	ngOnInit(){}
}