import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }
  ]
})
export class ReactiveFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      province: new FormControl(''),
      city: new FormControl('')
    })
  })

  constructor() { }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(v => console.log(`${JSON.stringify(v)}`))
  }

  onSubmit() {
    console.log(`<> ${this.profileForm.valid}`)
  }
}
