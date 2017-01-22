import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from './user.model';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	myForm: FormGroup;
	constructor(private authService: AuthService, private router: Router) { }
	onSubmit(myForm: FormGroup){
		const user = new User(this.myForm.value.username, this.myForm.value.password );
		this.authService.signin(user)
			.subscribe(
				data => {
					this.router.navigateByUrl('/feedback'); localStorage.setItem('userId', data.userId); localStorage.setItem('token', data.token);
				},
				error => console.error(error)
			);
		this.myForm.reset();
	}
	ngOnInit() {
		this.myForm = new FormGroup({
			username: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});
	}	

}
