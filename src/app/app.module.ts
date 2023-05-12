import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RandomIconGeneratorComponent } from './components/random-icon-generator/random-icon-generator.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomIconGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
