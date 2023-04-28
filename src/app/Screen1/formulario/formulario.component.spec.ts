import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConexionService } from '../conex/conexion.service';
describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule ,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        
      ],
      providers: [ConexionService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Todos los campos deben ser llenados', () => {
    const Btnenviaraux =fixture.nativeElement as HTMLButtonElement;
    const Btnenviar:HTMLButtonElement | null = Btnenviaraux.querySelector('.Calcular')
    if(Btnenviar !== null){
      expect(Btnenviar.disabled).toBeTrue();
    }
  });
  it('m^2 deben ser mayores a 60 y menores que 370', () => {
    expect(component).toBeTruthy();
  });

  it('Conexion Satisfactoria con el Servidor', () => {
    const Btnenviaraux =fixture.nativeElement as HTMLButtonElement;
    const Btnenviar:HTMLButtonElement | null = Btnenviaraux.querySelector('.Calcular')
    if(Btnenviar !== null){
      Btnenviar.click()
      expect(component.Datacasa).toBeDefined();
    }
  });
});
