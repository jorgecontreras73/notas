import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ServicioService} from '../../servicio.service';
import {Notas} from '../../interfaces/notas'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;

  lista:Array<Notas>=[];

  constructor(private fb:FormBuilder,private servicio:ServicioService) {

    this.home=this.fb.group({
      titulo:["",[Validators.required]],
      estado:["",[Validators.required]],
      descripcion:["",[Validators.required]]
    });
    this.titulo=this.home.controls["titulo"];
    this.estado=this.home.controls["estado"];
    this.descripcion=this.home.controls["descripcion"];

  }

  ngOnInit(): void {
    
    this.titulo=this.home.get('titulo') as FormGroup;
    this.estado=this.home.get('estado') as FormGroup;
    this.descripcion=this.home.get('descripcion') as FormGroup;

    this.servicio.Consultar().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
        
      }
      
      console.log(datos);
    });
    
  }
  EnviarDatos(){
    let nuevaNota: Notas = {
      titulo:this.titulo.value,
      estado:this.estado.value,
      descripcion:this.descripcion.value

    }
    this.lista.push(nuevaNota);

    this.servicio.Enviar(this.lista).subscribe(datos=>{
      
    })

  }
  
}
