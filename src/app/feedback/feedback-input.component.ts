import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { FeedbackService } from './feedback.service';
import{Feedback} from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-input.component.html'
})

export class FeedbackInputComponent implements OnInit {
	myForm: FormGroup;
	constructor(private feedbackService: FeedbackService) {}

	user = localStorage.getItem('userId');
	name = localStorage.getItem('name');

	onSubmit(myForm: FormGroup){
		const feedback = new Feedback(this.myForm.value.res1, this.myForm.value.res2, this.myForm.value.res3, this.myForm.value.res4, this.myForm.value.text, this.user);
		this.feedbackService.addNewPost(feedback)
			.subscribe(
				data => console.log(data),
				error => console.error(error)
			)
			this.myForm.reset();
	}

	ngOnInit(){
		this.myForm = new FormGroup({
			res1: new FormControl(null, Validators.required),
			res2: new FormControl(null, Validators.required),
			res3: new FormControl(null, Validators.required),
			res4: new FormControl(null, Validators.required),
			text: new FormControl(null, Validators.required)
		});
	}
}