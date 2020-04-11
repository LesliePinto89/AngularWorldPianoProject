import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ReactiveFormsModule } from '@angular/forms';
import { JazzDetailsComponent } from './jazz-details/jazz-details.component'
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormSubmitDirective } from './form-submit.directive';
import { ControlErrorsDirective } from './control-errors.directive';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { ControlErrorComponent } from './control-error/control-error.component';

var config = {
  apiKey: "AIzaSyBULM4xkl_AUtS3zy3Ick43ex2OeU6pa3M",
  projectId: "angular-portfolio-c244f",
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    JazzDetailsComponent,
    FormSubmitDirective,
    ControlErrorsDirective,
    ControlErrorContainerDirective,
    ControlErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ControlErrorComponent],
})
export class AppModule { }
