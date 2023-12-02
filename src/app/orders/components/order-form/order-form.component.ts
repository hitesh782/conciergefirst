import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  resetForm() {
    this.myForm.reset();
  }

  onSubmit() {
    // Handle form submission logic
    console.log(this.myForm);
  }
}
