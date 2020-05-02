import { LukeComponent } from './starwars/luke';
import { DarthComponent} from './starwars/darth';
import { HeroesService } from './heroes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CoursesComponent } from './courses/courses.component';
import { SlicePipe } from './slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CoursesComponent,
    SlicePipe,
    DarthComponent,
    LukeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent, TestComponent]
})
export class AppModule { }
