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
      
      `,
  styles: []
})
export class DirectivesComponent implements OnInit {

  headerName = false;

  constructor() { }

  ngOnInit() {
  }

}
