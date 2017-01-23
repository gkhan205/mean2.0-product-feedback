import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mean Feedback Application';

	isLoggedIn(){
	    return localStorage.getItem('token') !== null;
	}

}
