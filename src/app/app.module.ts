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

import { CountdownLocalVarParentComponent } from './countdown/countdown-parent.component';
import { CountdownTimerComponent } from './countdown/countdown-timer.component';

import { CountdownViewChildParentComponent} from './countdown-viewchild/countdown-parent-vc.component';
import { CountdownViewChildTimerComponent } from './countdown-viewchild/countdown-timer-vc.component';

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
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    CountdownViewChildTimerComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
