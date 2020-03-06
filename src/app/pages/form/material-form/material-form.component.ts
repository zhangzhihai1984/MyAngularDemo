import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Subject, merge, of } from 'rxjs';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  appearances = ['legacy', 'standard', 'fill', 'outline']
  floatings = [{
    name: 'never',
    disabled: false
  }, {
    name: 'auto',
    disabled: false
  }, {
    name: 'always',
    disabled: false
  }]

  foodControl: FormControl

  appearanceControl: FormControl
  floatingControl: FormControl
  emailControl: FormControl

  appearanceSubject = new Subject<string>()

  constructor() { }

  ngOnInit(): void {
    this.foodControl = new FormControl('Suchi')
    this.foodControl.valueChanges.subscribe(v => console.log(`<> ${v}`)
    )

    this.appearanceControl = new FormControl('outline')
    this.floatingControl = new FormControl('auto')
    this.emailControl = new FormControl('13911112222@139.com', [Validators.required, Validators.email])

    merge(of(this.appearanceControl.value), this.appearanceSubject)
      .subscribe(v => {
        this.floatings.forEach(floating => {
          if (floating.name == 'never') {
            if (v == 'legacy') {
              floating.disabled = false
            } else {
              floating.disabled = true
              this.floatingControl.setValue('auto')
            }
          }
        })
      })
  }

  appearanceChanges(change: MatRadioChange) {
    this.appearanceSubject.next(change.value)
  }

  /*
  Note: only the legacy appearance supports the never option. 
  never was originally added as a way to make the floating label emulate the behavior of a standard input placeholder. 
  However the form field now supports both floating labels and placeholders. 
  Therefore in the non-legacy appearances the never option has been disabled in favor of just using the placeholder.
  */
}
