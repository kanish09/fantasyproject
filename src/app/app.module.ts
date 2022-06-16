import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContestComponent } from './components/contest/contest.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/admin/user/user.component';
import { TournamentsComponent } from './components/admin/tournaments/tournaments.component';
import { AddTournamentComponent } from './components/admin/tournaments/add-tournament/add-tournament.component';
import { HomepagetournamentComponent } from './components/homepage/homepagetournament/homepagetournament.component';
import { ContestsComponent } from './components/admin/contests/contests.component';
import { AddcontestComponent } from './components/admin/contests/addcontest/addcontest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    TournamentComponent,
    FaqComponent,
    ContestComponent,
    AdminComponent,
    UserComponent,
    TournamentsComponent,
    AddTournamentComponent,
    HomepagetournamentComponent,
    ContestsComponent,
    AddcontestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
