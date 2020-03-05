import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  foodControl: FormControl
  emailControl: FormControl

  constructor() { }

  ngOnInit(): void {
    this.foodControl = new FormControl('Suchi')
    this.foodControl.valueChanges.subscribe(v => console.log(`<> ${v}`)
    )

    this.emailControl = new FormControl('', [Validators.required, Validators.email])
  }

}
