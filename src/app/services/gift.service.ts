import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Gift} from "../models/gift";

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http : HttpClient) { }

  findAll(): Observable<Gift[]> {
    return this.http.get<Gift[]>(`${environment.apiUrl}/gifts`);
  }

  findById(id: number): Observable<Gift>{
    return this.http.get<Gift>(`${environment.apiUrl}/gifts/${id}`)
  }

}
