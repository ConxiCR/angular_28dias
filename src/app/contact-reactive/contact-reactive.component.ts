import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  //propiedad
  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];
  selectedCity$ = this.dataSvc.selectedCity$;



  constructor( private readonly fb: FormBuilder ,
                private readonly route: ActivatedRoute,
                private readonly dataSvc: DataService) { }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments']
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
    //igualamos la propiedad al método
    this.contactForm = this.initForm();
      //this.onPathValue();
      //this.onSetValue();
  }
  onPathValue(){
    this.contactForm.patchValue({name: 'Hola'});
  }
  //método
  onSubmit(): void {
    console.log('Form-> ', this.contactForm.value)
  }
  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    })
  }
}