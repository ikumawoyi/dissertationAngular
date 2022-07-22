import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventdeleteComponent } from './eventdelete/eventdelete.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventsComponent } from './events/events.component';
import { EventviewComponent } from './eventview/eventview.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { MemberdeleteComponent } from './memberdelete/memberdelete.component';
import { MembereditComponent } from './memberedit/memberedit.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MembersComponent } from './members/members.component';
import { MemberviewComponent } from './memberview/memberview.component';
import { OccasiondeleteComponent } from './occasiondelete/occasiondelete.component';
import { OccasioneditComponent } from './occasionedit/occasionedit.component';
import { OccasionlistComponent } from './occasionlist/occasionlist.component';
import { OccasionsComponent } from './occasions/occasions.component';
import { OccasionviewComponent } from './occasionview/occasionview.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { TasksComponent } from './tasks/tasks.component';



const routes: Routes = [
  //{ path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'members/:id', component: MemberviewComponent, canActivate: [AuthGuard] },
  { path: 'members/delete/:id', component: MemberdeleteComponent, canActivate: [AuthGuard] },
  { path: 'members/edit/:id', component: MembereditComponent, canActivate: [AuthGuard] },
  { path: 'memberlist', component: MemberlistComponent, canActivate: [AuthGuard] },

  { path: 'occasions', component: OccasionsComponent, canActivate: [AuthGuard] },
  { path: 'occasions/:id', component: OccasionviewComponent, canActivate: [AuthGuard] },
  { path: 'occasions/delete/:id', component: OccasiondeleteComponent, canActivate: [AuthGuard] },
  { path: 'occasions/edit/:id', component: OccasioneditComponent, canActivate: [AuthGuard] },
  { path: 'occasionlist', component: OccasionlistComponent, canActivate: [AuthGuard] },

  { path: 'tasks/alltasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'events/:id', component: EventviewComponent, canActivate: [AuthGuard] },
  { path: 'events/delete/:id', component: EventdeleteComponent, canActivate: [AuthGuard] },
  { path: 'events/edit/:id', component: EventeditComponent, canActivate: [AuthGuard] },
  { path: 'eventlist', component: EventlistComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }