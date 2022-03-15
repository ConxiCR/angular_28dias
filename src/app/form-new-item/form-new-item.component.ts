import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements AfterViewInit {

@Input() className = 'btn-primary';
@Input() label!: string;
@Input() selection!: City;
@ViewChild('newItem') newItem!: ElementRef;

@Output() newItemEvent = new EventEmitter<string>();
@Output() upDateItemEvent = new EventEmitter<City>();

ngAfterViewInit(): void {
  //console.log('this.newItem', this.newItem);
  this.newItem.nativeElement.focus();
}

  //método que no devuelve nada. Recibe item
  /*onAddNewItem(item: string): void{
    //console.log('Item ->', item)
    this.newItemEvent.emit(item);
  }
  onUpDateItem(item: City, change: string): void{
    //console.log('Item ->', item)
    //console.log('item', item);
    //console.log('change', change)
    const city: City = {
      _id: item._id,
      name: change
    }*/

    //ViewChild
  onAddNewItem(): void{
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }
  onUpDateItem(): void{
    const city: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value
    };
    this.upDateItemEvent.emit(city);
    this.onClear();
  }

  private onClear(): void{
    this.newItem.nativeElement.value = '';
  }
  /*counterRender(): boolean{
    console.log('Render Form');
    return true;
  }*/
}
