import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gift} from "../models/gift";

const GIFT_API = 'http://localhost:8080/api/gifts/';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }

  findAll(): Observable<Gift[]> {
    return this.http.get<Gift[]>(GIFT_API);
  }

  findById(id: number): Observable<Gift>{
    return this.http.get<Gift>(GIFT_API + `${id}`);
  }

  addGift(gift: Gift) {
    return this.http.post<Gift>(GIFT_API + `save`, gift, this.httpOptions);
  }





}
