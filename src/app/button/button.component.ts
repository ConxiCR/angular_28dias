import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>
            <p>Counter: {{counterRender()}}</p>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy {
@Input() color!: string;
@Input() label!: string;
@Input() selection!: string;

  constructor() { }
  ngOnChanges(changes:SimpleChanges): void{
    console.log('changes ->', changes);
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  counterRender(): boolean{
    console.log('Render Button');
    return true;
  }


}
