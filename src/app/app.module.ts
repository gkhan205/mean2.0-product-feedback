import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Import all components here
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackSingleComponent } from './feedback/feedback-single.component';
import { FeedbackInputComponent } from './feedback/feedback-input.component';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { RegisterComponent } from './auth/register.component';

// Import all services here
import { FeedbackService } from './feedback/feedback.service';
import { AuthService } from './auth/auth.service';

// Define the routes
const ROUTES = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'feedback', component: FeedbackInputComponent},
  {path: 'feeds', component: FeedbackComponent},
  {path: 'feeds/:id', component: FeedbackSingleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    LoginComponent,
    FeedbackSingleComponent,
    RegisterComponent,
    LogoutComponent,
    FeedbackInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FeedbackService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
