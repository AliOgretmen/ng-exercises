import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  template: `<input #myInput type="text">
              <button (click)="message(myInput.value)">Message</button>`,
  styles: []
})
export class TempRefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message(value){
    console.log(value);
  }

}
