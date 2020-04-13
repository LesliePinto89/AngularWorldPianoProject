import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';
import { ContactComponent } from  './contact/contact.component';
import { JazzDetailsComponent } from './jazz-details/jazz-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{

  path: 'home', component: HomeComponent
},{
  path: 'about', component: AboutComponent
},{
  path: 'people', component: JazzDetailsComponent
},{
  path: 'contact', component: ContactComponent
},{
  path: 'signup', component: SignupComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
