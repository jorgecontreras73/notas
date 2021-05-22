import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {Notas} from '../../interfaces/notas'


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  listaNotas:Array<Notas>=[];

  listaAbierto:Array<Notas>=[];
  listaEnProceso:Array<Notas>=[];
  listaCerrado:Array<Notas>=[];

  constructor(private servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.Consultar().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.listaNotas.push(datos[i]);
        
      }
      for(let i=0;i<datos.length;i++){
        if(datos[i].estado == 'abierto'){
          this.listaAbierto.push(datos[i]);
        }
        else if(datos[i].estado == 'en proceso'){
          this.listaEnProceso.push(datos[i]);
        }
          
        else{
          this.listaCerrado.push(datos[i]);
        }
      }
      
    })
  }
  eliminar(){
    
  }
}
