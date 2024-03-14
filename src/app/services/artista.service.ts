import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  constructor(private http: HttpClient) {}

  URL_BASE = environment.URL_BASE

  buscarArtistas(): Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/artistas`)
  }
}
