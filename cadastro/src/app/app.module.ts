import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { DadosCadastraisComponent } from './dados-cadastrais/dados-cadastrais.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DadosCadastraisComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DadosCadastraisComponent]
})
export class AppModule { }
