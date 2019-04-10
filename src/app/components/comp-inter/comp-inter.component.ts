import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-inter',
  templateUrl: './comp-inter.component.html',
  styleUrls: ['./comp-inter.component.scss']
})
export class CompInterComponent implements OnInit {

  public name = "Component Interactions"

  public message= "";

  constructor() { }

  ngOnInit() {
  }

}
