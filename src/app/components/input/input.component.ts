import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  myForm!: FormGroup;
  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.reactiveForm();
  }
  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
     
    });
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}
