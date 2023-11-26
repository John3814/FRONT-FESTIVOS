import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private festivoUrl = 'http://127.0.0.1:8080/festivos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  verificarFecha(date: Date): Observable<string> {
    const año = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    console.log(año + "/" + mes +"/"+dia);
    return this.http.get(`${this.festivoUrl}/verificar/${año}/${mes}/${dia}`, {responseType: 'text'});
  }

}
