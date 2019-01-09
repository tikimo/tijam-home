import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MglTimelineModule} from 'angular-mgl-timeline';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGooglePlay, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TimelineComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faGithub, faTwitter, faGooglePlay, faLinkedin);
  }
}
