import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
      margin-bottom: 5px;
    }
  `
  ]
})
export class PorRegionComponent {


  regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu', 'al', 'asean', 'cais', 'cefta', 'nafta', 'saarc'];
  regionActiva: string = ''

  activarRegion( region: string ){
    this.regionActiva = region;
    console.log(this.regionActiva);
    
    this.buscar(region);
  }

  paises  : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    

    this.paisService.buscarRegion( termino )
      .subscribe( (paises) => {
        this.paises = paises;
        console.log(this.paises);
      })

  }


}
