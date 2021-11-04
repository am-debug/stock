import { Component, OnInit } from '@angular/core';
import {ClientService } from '../../service/client.service';
import {ToastrService } from 'ngx-toastr';
import { Client } from '../../model/client';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(public crudApi: ClientService , public fb : FormBuilder , public toastr: ToastrService) { }


  ngOnInit(): void {
    if(this.crudApi.choixmenu == "A"){
      this.infoForm()

    };
  }
  infoForm(){
    this.crudApi.dataform = this.fb.group({
      libelle:  ['', [Validators.required]],
      adresse: ['', [Validators.required, Validators.minLength(5)]],
      tel: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(10)]],
      fax: ['', [Validators.required, Validators.minLength(8)]],
      login: ['', [Validators.required, Validators.minLength(8)]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],


    });

  }
  ResetForm(){
    this.crudApi.dataform.reset();
  }
  onSubmit(){
    if(this.crudApi.choixmenu == "A"){
      this.addData();

    }
    else{
      this.updateData()

    }
    

  }
  addData(){
    this.crudApi.createData(this.crudApi.dataform.value).
    subscribe(data => {
      this.toastr.success('Validation faite avec succés');
    this.ResetForm();
   });
  }
  updateData(){
    this.crudApi.updateData(this.crudApi.dataform.value.id , this.crudApi.dataform).
    subscribe(data => {
      this.toastr.success('Validation faite avec succés');
    this.ResetForm();
   });
  }


}
