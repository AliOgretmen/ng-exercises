import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.scss']
})
export class CompChildComponent implements OnInit {

@Input() public haci;
@Input('leyla') public name;

@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.childEvent.emit("FROM Child Componet")
  }
}
