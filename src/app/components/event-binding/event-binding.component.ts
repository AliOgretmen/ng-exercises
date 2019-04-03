import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
      <h2>{{name}}</h2>
      <button (click)="greet()">Greet</button>
      <button (click)="greetEvent($event)">Greet2</button>
      <button (click)="greetTitle='Good Morning'">Greet 3</button>
      <div>{{greetTitle}}</div>

  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  public name = "Event Binding";
  public greetTitle = "";
  
  constructor() { }

  ngOnInit() {
  }
  greet(){
    console.log("Hi Everyone")
    this.greetTitle = "Event Binding" 
  }
  greetEvent(event){
    console.log(event)
    this.greetTitle = event.type;
  }
}
