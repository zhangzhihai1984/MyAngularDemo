import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { city_data } from '../../rx/rx-search/address.data';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }
  ]
})
export class ReactiveFormComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     province: new FormControl(''),
  //     city: new FormControl('')
  //   })
  // })

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      province: [''],
      city: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  provinces: string[] = []
  cities: string[] = []

  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(v => console.log(`${JSON.stringify(v)}`))

    for (const province in city_data) {
      this.provinces.push(province)
    }

    this.profileForm.get('aliases.0').valueChanges.subscribe(v => console.log(`>>> ${JSON.stringify(v)}`))
  }

  onProvinceChanges(selection: MatSelectChange) {
    this.cities = []
    const province = selection.value
    for (const city in city_data[province]) {
      this.cities.push(city)
    }
  }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }

  onSubmit() {
    console.log(`<> ${this.profileForm.valid}`)
  }

  patchValue(ev: Event) {
    //https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault
    ev.preventDefault()
    // ev.stopPropagation()
    this.profileForm.patchValue({
      firstName: 'John',
      address: {
        province: '辽宁省',
        city: '沈阳市'
      }
    })
  }
}
