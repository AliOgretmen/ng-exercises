import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TempRefComponent } from './components/temp-ref/temp-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DecoratorsComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TempRefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
