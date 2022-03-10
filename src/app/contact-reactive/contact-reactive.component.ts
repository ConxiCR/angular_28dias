import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  //propiedad
  contactForm!: FormGroup;
  name!: string;
 
  constructor( private readonly fb: FormBuilder ,
                private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
    //igualamos la propiedad al método
    this.contactForm = this.initForm();
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