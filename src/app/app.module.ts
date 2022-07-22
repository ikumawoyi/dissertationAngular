import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './members/members.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberviewComponent } from './memberview/memberview.component';
import { MembereditComponent } from './memberedit/memberedit.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MemberdeleteComponent } from './memberdelete/memberdelete.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventsComponent } from './events/events.component';
import { EventviewComponent } from './eventview/eventview.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdeleteComponent } from './eventdelete/eventdelete.component';
import { MatSelectModule } from '@angular/material/select';
import { OccasionviewComponent } from './occasionview/occasionview.component';
import { OccasionsComponent } from './occasions/occasions.component';
import { OccasionlistComponent } from './occasionlist/occasionlist.component';
import { OccasioneditComponent } from './occasionedit/occasionedit.component';
import { OccasiondeleteComponent } from './occasiondelete/occasiondelete.component';
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TasksComponent,
    ProfileComponent,
    MembersComponent,
    MemberlistComponent,
    MemberviewComponent,
    MembereditComponent,
    MemberdeleteComponent,
    EventsComponent,
    EventviewComponent,
    EventeditComponent,
    EventlistComponent,
    EventdeleteComponent,
    OccasionviewComponent,
    OccasionsComponent,
    OccasionlistComponent,
    OccasioneditComponent,
    OccasiondeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSelectInfiniteScrollModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
