import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Books} from'../app/books';


@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private httpClient: HttpClient) { }
  getresult(){
    return this.httpClient.get<Array<Books>>("http://localhost:8001/books/getall");
  }
}
