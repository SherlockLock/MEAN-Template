import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const appRoutes: Routes = [
  //Default path always routes to home
  { path: '',             redirectTo: 'home',                       pathMatch: 'full'},
  //Main Paths
  { path: 'home',         component: HomeComponent},
  { path: 'login',         component: LoginComponent},
  { path: 'signup',         component: SignupComponent},
  { path: 'reset',         component: ResetPasswordComponent},
  // Authenticated Paths
  { path: 'admin',        component: AdminDashboardComponent},
  { path: 'user',         component: UserDashboardComponent},
  //Wildcard
  { path: '**',           component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //For Debugging
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
