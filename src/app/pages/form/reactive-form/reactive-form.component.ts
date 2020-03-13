import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
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

  profileForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    phone: ['', Validators.compose([Validators.required, phoneValidator, Validators.minLength(11), Validators.maxLength(11)])],
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

  get name() {
    return this.profileForm.get('name')
  }

  get phone() {
    return this.profileForm.get('phone')
  }

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

  isControlValid(control: AbstractControl): boolean {
    return !control.errors
  }

  needShowError(control: AbstractControl): boolean {
    return control.errors && (control.dirty || control.touched)
  }

  clearPhone(ev: Event) {
    ev.preventDefault()
    this.phone.setValue("")
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
      name: 'John Zhang',
      address: {
        province: '辽宁省',
        city: '沈阳市'
      }
    })
  }
}

export const phoneValidator = (control: AbstractControl): ValidationErrors | null => {
  if (control.value.startsWith('139'))
    return { 'format': 'begin with 139' }
  return null
}