import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from './user.model';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	myForm: FormGroup;
	constructor(private authService: AuthService, private router: Router) { }
	onSubmit(myForm: FormGroup){
		const user = new User( this.myForm.value.username, this.myForm.value.password, this.myForm.value.name, this.myForm.value.location );
		this.authService.signup(user)
			.subscribe(
				data => {console.log(data); this.router.navigateByUrl('/login'); localStorage.setItem('userId', data.userId); localStorage.setItem('token', data.token);},
				error => console.log(error)
			);
		this.myForm.reset();
	}
	ngOnInit() {
		this.myForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			username: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required),
			location: new FormControl(null, Validators.required)
		});
	}	

}
