import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class FraseService {

  constructor(private http: HttpClient) {}

  URL_BASE = environment.URL_BASE

  buscarFrases():Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/frases`)
  }

  buscarArtistaSelecionado(idArtista: number):Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/frases/artista/${idArtista}`)
  }

}
