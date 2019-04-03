import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
      <h3 *ngIf="true">Directives 1</h3>
      <h3 *ngIf="headerName">Directives 2</h3>
      <h3 *ngIf="headerName else condition">Directives 3</h3>
      <ng-template #condition>
       <h3>Name is hidden</h3>
      </ng-template>
      <div *ngIf="headerName; then thenBlock; else elseBlock"></div>
      <ng-template #thenBlock>
       <h3>Then Block</h3>
      </ng-template>
      <ng-template #elseBlock>
       <h3>Else Block</h3>
      </ng-template>
      <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Red Color</div>
      <div *ngSwitchCase="'green'">Green Color</div>
      <div *ngSwitchCase="'blue'">Blue Color</div>
      <div *ngSwitchDefault>Choose Again</div>
      </div>
      <div *ngFor="let item of colors; index as i"><h3>{{i}}  {{item}}</h3></div>
      <div *ngFor="let item of colors; first as f"><h3>{{f}}  {{item}}</h3></div>
      <div *ngFor="let item of colors; last as l"><h3>{{l}}  {{item}}</h3></div>
      <div *ngFor="let item of colors; odd as o"><h3>{{o}}  {{item}}</h3></div>
      <div *ngFor="let item of colors; even as e"><h3>{{e}}  {{item}}</h3></div>
      `,
  styles: []
})
export class DirectivesComponent implements OnInit {

  headerName = false;

  public color= "blue";

  public colors = ["blue", "yellow", "red", "green"]

  constructor() { }

  ngOnInit() {
  }

}
