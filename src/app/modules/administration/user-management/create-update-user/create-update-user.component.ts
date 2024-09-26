import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styles:[
    `
 
    `
  ]

})

export class CreateUpdateUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {

  }

  listStatus = [
    { value: 'active', name: 'Active' },
    { value: 'inactive', name: 'Inactive' }
  ];


  formData: FormGroup = this.fb.group({
    name: [null, Validators.required],
    phone: [null, [Validators.required]],
    email: [null, Validators.required],
    address: [null],
    status: [null, Validators.required],
  })

  @Input() isModalOpen: any;
  @Input() dialogData: any;
  @Output() dissmissModal = new EventEmitter<string>();

  onClose(){
    this.isModalOpen = false;
    this.dissmissModal.emit(this.isModalOpen);
  }

  onSubmitForm(e: any) {
    e.preventDefault();
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
  }

}