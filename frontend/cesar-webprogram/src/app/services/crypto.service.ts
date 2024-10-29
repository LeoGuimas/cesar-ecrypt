import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CipherText } from '../models/cypher-text.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'http://localhost:8000/api'; // URL base do backend

  constructor(private http: HttpClient) {}

  decrypt(data: CipherText): Observable<{ decrypted_text: string }> {
    return this.http.post<{ decrypted_text: string }>(`${this.apiUrl}/decrypt`, data);
  }

  encrypt(data: CipherText): Observable<{ encrypted_text: string }> {
    return this.http.post<{ encrypted_text: string }>(`${this.apiUrl}/encrypt`, data);
  }
}
