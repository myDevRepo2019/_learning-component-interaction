import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroParentComponent} from './hero/hero-parent.component';
import { HeroChildComponent } from './hero/hero-child.component';

import { NameParentComponent} from './name/name-parent.component';
import { NameChildComponent } from './name/name-child.component';

import { VersionParentComponent} from './version/version-parent.component';
import { VersionChildComponent } from './version/version-child.component';

import { VoterComponent } from './voting/voter.component';
import { VoteTakerComponent} from './voting/votetaker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoterComponent,
    VoteTakerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
