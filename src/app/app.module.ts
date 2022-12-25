import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { HorseCardComponent } from './horse-card/horse-card.component';
import { HorseModalComponent } from './horse-modal/horse-modal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    HomeComponent,
    NavigationComponent,
    AdminComponent,
    HorseCardComponent,
    HorseModalComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
