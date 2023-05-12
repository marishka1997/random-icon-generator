import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RandomIconGeneratorComponent } from './components/random-icon-generator/random-icon-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomIconGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
