import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
  FormControl
} from '@angular/forms';
import { city_data } from '../../rx/rx-search/address.data';
import { MatSelectChange } from '@angular/material/select';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

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
    // name: ['', [Validators.required, Validators.minLength(2)], nameValidator],
    name: ['', {
      validators: [Validators.required, Validators.minLength(2)],
      asyncValidators: nameValidator,
      updateOn: 'blur'
    }],
    phone: ['', Validators.compose([Validators.required, phoneValidator, Validators.minLength(11), Validators.maxLength(11)])],
    address: this.fb.group({
      province: [''],
      city: ['']
    }),
    aliases: this.fb.array([
      // this.fb.control('')
    ], aliasesValidator)
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
    for (const province in city_data) {
      this.provinces.push(province)
    }

    // this.profileForm.valueChanges.subscribe(v => console.log(`${JSON.stringify(v)}`))
    // this.profileForm.get('aliases.0').valueChanges.subscribe(v => console.log(`>>> ${JSON.stringify(v)}`))
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

  addAlias(ev: Event) {
    ev.preventDefault()
    this.aliases.push(this.fb.control('', Validators.required))
  }

  onSubmit(e: any) {
    console.log(`<> ${JSON.stringify(e)}`)
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

export const phoneValidator = (control: FormControl): ValidationErrors | null => {
  if (control.value.startsWith('139'))
    return { 'format': 'begin with 139' }
  return null
}

export const aliasesValidator = (control: FormArray): ValidationErrors | null => {
  if (control.length >= 2) {
    const value1 = control.controls[0].value
    const value2 = control.controls[1].value
    if (value1 && value2 && value1 === value2)
      return { 'name': 'duplicated' }
  }
  // return { 'length': 'more than 2' }
  return null
}

export const nameValidator = (control: FormControl): Observable<ValidationErrors | null> => {
  return of((control.value as string).toLowerCase().includes("zhang")).pipe(
    delay(500),
    map(v => v ? { 'name': "include 'zhang'" } : null)
  )
}