import { Component } from '@angular/core';
import { ConexionService } from '../Screen1/conex/conexion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Casa } from '../Screen1/Casa';
@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component {
  Preciocasa: string = ''  
  Preciohtml: string = ''
  Casa!: Casa;
  banos: number;
  constructor(private Conex: ConexionService, private router: Router){
    
    this.Preciocasa = this.Conex.precio.toString()
    this.Preciohtml = this.Preciocasa + ' ' + 'SMLV';
    this.Casa = this.Conex.Casa;
    this.banos = this.Casa.Baños;
  }
  regresar(){
    this.router.navigate(['Inicio'])
  }

}
