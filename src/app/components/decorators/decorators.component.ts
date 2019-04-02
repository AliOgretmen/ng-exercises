import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-decorators',
  template: `<h3>
    Thema: {{name}}
  </h3>
  <h3>{{siteUrl}}</h3>
  <h3>{{2+2}}</h3>
  <h3>{{"Thema: " + name}}</h3>
  <h3>{{name.toUpperCase()}}</h3>
  <h3>{{themaName()}}</h3>
  <input type="text" value="Name" [id]="newId">
  <input type="text" value="Name" id={{newId}} [disabled]="true">
  `,
  styles: []
})
export class DecoratorsComponent implements OnInit {

  public name = "Decorators exercise";

  public siteUrl= window.location.href;

  public newId = "input-area"

  constructor() { }

  ngOnInit() {
  }

  themaName(){
    return "Our Thema is " + this.name + " today."
  }

}
