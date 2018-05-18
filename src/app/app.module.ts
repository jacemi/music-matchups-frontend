import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './pages/post/post.component';
import { PostService } from './services/post.service';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    PostComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'post', component: PostComponent },
        { path: 'register', component: RegisterComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
    { enableTracing: true}
  )
  ],
  providers: [RegisterService, LoginService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
