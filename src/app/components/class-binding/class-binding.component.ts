import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<h3>{{name}}</h3>
            <h3 class="text-success">Class Binding 1</h3>
            <h3 [class]="styleSuccess">Class Binding 2</h3>
            <h3 [class]="text-success" class="text-italic">Class Binding 3</h3>
            <h3 [class.text-danger]="styleError">Class Binding 4</h3>
            <h3 [ngClass]="styleClasses">Class Binding 5</h3>
            <h3 [style.color]="'yellow'">Style Binding 1</h3>
            <h3 [style.color]="styleError ? 'yellow' : 'orange'">Style Binding 2</h3>
            <h3 [style.color]="blueColor"> Style Binding 3</h3>
            <h3 [ngStyle]="titleStyles"> Style Binding 4</h3>`,
  styles: [`
     .text-success {
       color: green;
     }
     .text-danger{
       color: red;
     }
     text-italic{
       font-style: italic;
     }
  `]
})
export class ClassBindingComponent implements OnInit {

  public name = "Class Binding";
  public styleSuccess = "text-success";
  public styleError = false;
  public isItalic = true;
  public styleClasses ={
    "text-success": !this.styleError,
    "text-danger": this.styleError,
    "text-italic": this.isItalic
  };
  public blueColor = "blue";
  public titleStyles ={
    color: "purple",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }



}
