import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
@Input() className = 'btn-primary';
@Input() label!: string;
@Input() selection!: City;

@Output() newItemEvent = new EventEmitter<string>();
@Output() upDateItemEvent = new EventEmitter<City>();

  //método que no devuelve nada. Recibe item
  onAddNewItem(item: string): void{
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
    }
    this.upDateItemEvent.emit(city);
  }
  /*counterRender(): boolean{
    console.log('Render Form');
    return true;
  }*/
}
