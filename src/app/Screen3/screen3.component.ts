import { Component } from '@angular/core';
import { ConexionService } from '../Screen1/conex/conexion.service';
@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component {
  Preciocasa: number = 0
  constructor(private Conex: ConexionService){
    this.Preciocasa = this.Conex.precio
  }

}
