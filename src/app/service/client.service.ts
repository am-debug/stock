import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = '/api/clients';
  choixmenu : string = 'A';
  public dataform : FormGroup;
  constructor(private http: HttpClient){}
  

  getData(id: number) :Observable<object>
  {
    return this.http.get('${this.baseUrl}/${id}');

  }
  createData(info: object) :Observable<object>
  {
    return this.http.post('${this.baseUrl}', info);

  }

  updateData(id: number, value: any) :Observable<object>{
    return this.http.put('${this.baseUrl}/${id}', value);
  }

  deleteData(id: number) :Observable<any>
  {
    return this.http.delete('${this.baseUrl}/${id}', { responseType  :"text"});
  }

  getAll() :Observable<any>
  {
    return this.http.get('${this.baseUrl}');

  }
      


}
