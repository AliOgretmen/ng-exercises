import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<h3>{{name}}</h3>
            <h3 class="text-success">Class Binding</h3>
            <h3 [class]="styleSuccess">Class Binding</h3>
            <h3 [class]="text-success" class="text-italic">Class Binding</h3>
            <h3 [class.text-danger]="styleError">Class Binding</h3>
            <h3 [ngClass]="styleClasses">Class Binding</h3>`,
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
  }

  constructor() { }

  ngOnInit() {
  }



}
