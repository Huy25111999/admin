import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styles:[
    `
 
    `
  ]

})

export class UserManagementComponent implements OnInit {
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
    email: [null, Validators.required],
    status: [null, Validators.required],
  })


  form: FormGroup = this.fb.group({
    name: [null, Validators.required],
    phone: [null, [Validators.required]],
    email: [null, Validators.required],
    address: [null],
    status: [null, Validators.required],
  })

  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '4',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '8',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '9',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '10',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '11',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '12',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  isModalOpen = false;
  dialogData: any;
  
  openModalCreateUpdateUser(id?: number){
    const title = id ? 'Update User' : 'Add New User';
    this.dialogData = {
      title: title,
      id: id
    }
    console.log("thissdss--", this.isModalOpen);
    this.isModalOpen = true;
    
  }

  onDissmissModal(event){
    this.isModalOpen = event;
    console.log("evcent----", event);
    
  }
}