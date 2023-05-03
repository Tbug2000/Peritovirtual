import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Screen1Component } from './Screen1/screen1.component';
import { CasaComponent } from './Screen1/casa/casa.component';
import { FormularioComponent } from './Screen1/formulario/formulario.component';

import { Screen2Component } from './Screen2/screen2.component';
import { CargaComponent } from './Screen2/carga/carga.component';

import { Screen3Component } from './Screen3/screen3.component';
import { DetallesComponent } from './Screen3/detalles/detalles.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    CasaComponent,
    FormularioComponent,
    CargaComponent,
    DetallesComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
