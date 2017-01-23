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
					if(data.user.role == 1){
						this.router.navigateByUrl('/feedback'); 
					} else if (data.user.role == 2){
						this.router.navigateByUrl('/feeds'); 
					}
					localStorage.setItem('userId', data.user._id); 
					localStorage.setItem('userName', data.user.username); 
					localStorage.setItem('name', data.user.name); 
					localStorage.setItem('token', data.token);
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
