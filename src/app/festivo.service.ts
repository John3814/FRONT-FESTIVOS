import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from './entidades/festivo';

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
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log(year + "/" + month + "/" + day);
    return this.http.get(`${this.festivoUrl}/verificar/${year}/${month}/${day}`, {responseType: 'text'});
  }

  getFestivos(year: number): Observable<any> {
    return this.http.get<Festivo[]>(`${this.festivoUrl}/obtener/${year}`);
  }

}
