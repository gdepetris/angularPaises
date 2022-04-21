import { compileComponentFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino: string = "";
  hayError: boolean= false;
  paises: Country[] = [];

  buscar(){

    this.hayError= false;

    if(this.termino){

    this.paisService.buscarPais(this.termino)
      .subscribe( resp => {
        this.paises = resp;
      }, err=> {
        console.log('Error');
        this.hayError= true;
        this.paises= [];
      })

    }
    this.termino= '';
    
  }

}
