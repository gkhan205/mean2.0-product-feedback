import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

feeds: any = [];
users: any[];

name = localStorage.getItem('name');


  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.feedbackService.getAllPosts().subscribe(feeds => {
      this.feeds = feeds;
    });

    this.feedbackService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
