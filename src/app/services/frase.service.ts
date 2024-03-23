import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Frase } from '../models/Frase';

@Injectable({
  providedIn: 'root'
})

export class FraseService {

  constructor(private http: HttpClient) {}

  URL_BASE = environment.URL_BASE + '/frases'

  buscarFrases():Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}`)
  }

  buscarArtistaSelecionado(idArtista: number):Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/artista/${idArtista}`)
  }

  buscarFrasePorFragmento(fragmento: string): Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/fragmento/${fragmento}`)
  }

  cadastrarFrase(frase: any) {
    return this.http.post<any>(`${this.URL_BASE}`, frase)
  }

  excluirFrase(idFrase: number) {
    return this.http.delete<any>(`${this.URL_BASE}/${idFrase}`)
  }

}
