import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TempRefComponent } from './components/temp-ref/temp-ref.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { from } from 'rxjs';
import { DirectivesComponent } from './components/directives/directives.component';
import { CompInterComponent } from './components/comp-inter/comp-inter.component';
import { CompChildComponent } from './components/comp-child/comp-child.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DecoratorsComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TempRefComponent,
    TwoWayComponent,
    DirectivesComponent,
    CompInterComponent,
    CompChildComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
