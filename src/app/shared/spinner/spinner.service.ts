import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading$ = new Subject<boolean>();
  //métodos para mostrar o ocultar el loading
  show(): void{
    this.isLoading$.next(true);
  }
  hide(): void{
    this.isLoading$.next(false);
  }
  constructor() { }
}
