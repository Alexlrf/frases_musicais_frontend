import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Frase } from '../models/Frase';

@Injectable({
  providedIn: 'root'
})

export class FraseService {

  constructor(private http: HttpClient) {}

  TOKEN_JWT = sessionStorage.getItem('token')
  URL_BASE = environment.URL_BASE + '/frases'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: this.TOKEN_JWT!!
    })
  };


  buscarFrases():Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}`)
  }

  buscarArtistaSelecionado(idArtista: number):Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/artista/${idArtista}`, this.httpOptions)
  }

  buscarFrasePorFragmento(fragmento: string): Observable<any> {
    return this.http.get<any>(`${this.URL_BASE}/fragmento/${fragmento}`, this.httpOptions)
  }

  cadastrarFrase(frase: any) {
    return this.http.post<any>(`${this.URL_BASE}`, frase, this.httpOptions)
  }

  excluirFrase(idFrase: number) {
    return this.http.delete<any>(`${this.URL_BASE}/${idFrase}`, this.httpOptions)
  }

  alterarFrase(fraseSelecionada: Frase) {
    return this.http.put<any>(this.URL_BASE, fraseSelecionada, this.httpOptions);
  }

}
