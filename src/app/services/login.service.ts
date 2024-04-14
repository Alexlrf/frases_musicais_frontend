import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_AUTH = environment.URL_AUTH

  constructor(private http: HttpClient) { }

  logar(usuario: any) {
    return this.http.post<any>(this.URL_AUTH, usuario)
  }
}
