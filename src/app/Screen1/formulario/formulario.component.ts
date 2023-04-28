import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {Casa} from '../Casa'
import { ConexionService } from '../conex/conexion.service';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  constructor(public Conex: ConexionService,private _snackBar: MatSnackBar,private enrutador:Router){

  }
  Estratos = [2,3,4,5];
  Estados = ['Aceptable','Nuevo'];
  Banos = [1,2,3,4];
  Habitaciones = [1,2,3,4,5,6,7,8];
  
  Datacasa = new FormGroup<Casa | any>({
    m2: new FormControl('',Validators.required),
    Estrato: new FormControl('',Validators.required),
    Estado: new FormControl('',Validators.required),
    bhk: new FormControl('',Validators.required),
    Baños: new FormControl('',Validators.required),
  });

  Enviar(){
    if(this.Datacasa.value['m2'] >= 60 && this.Datacasa.value['m2'] <= 370){
      this._snackBar.ngOnDestroy()
      this.enrutador.navigate(['Enviardata'])
      this.Conex.Enviardatos(this.Datacasa.value).subscribe(
        (respuesta) => {
        console.log('hola')
        this.Conex.precio = respuesta['precio']
        setTimeout(() => 
        {
          this.enrutador.navigate(['Preciocasa'])
        },
        5000);
        
      })
      
    } else this._snackBar.open('Los m^2 deben ser Mayores a 60 y Menores a 370', 'Cerrar');
  }




 
  
}
