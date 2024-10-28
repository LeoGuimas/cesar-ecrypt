import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CipherText } from '../models/cypher-text.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'http://127.0.0.1:8000'; // backend url

  constructor( private htpp: HttpClient) { }

  // cryptography methods
  encrypt(data:CipherText): Observable<any>{
    return this.htpp.post(`${this.apiUrl}/encrypt`, data);
  }

  decrypt(data:CipherText): Observable<any>{
    return this.htpp.post(`${this.apiUrl}/decrypt`, data);
  }

}
