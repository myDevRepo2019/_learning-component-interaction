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


@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
