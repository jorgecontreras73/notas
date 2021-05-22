import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notas} from './interfaces/notas'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servidor="http://127.0.0.1:3001/";

  constructor(private servicio:HttpClient) { }
  
  Consultar():Observable<any>{
    return this.servicio.get(`${this.servidor}notas`);
  }
  Enviar(lista:Array<Notas>):Observable<any>{
    return this.servicio.post(`${this.servidor}notas`, lista);
  }
}
