import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TournamentComponent } from './components/tournament/tournament.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
