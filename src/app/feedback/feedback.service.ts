import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import{Feedback} from './feedback.model';

@Injectable()
export class FeedbackService {
	private feedback: Feedback[] = [];
  constructor(private http: Http) { }

  // Get all feeds from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  addNewPost(feedback: Feedback){
  	this.feedback.push(feedback);
  	const body = JSON.stringify(feedback);
  	const headers = new Headers({'Content-Type': 'application/json'});
  	return this.http.post('/api/posts', body, {headers: headers})
  		.map((response: Response) => response.json())
  		.catch((error: Response) => Observable.throw(error.json()));
  }

}
