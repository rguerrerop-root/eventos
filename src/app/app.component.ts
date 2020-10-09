import { Component } from '@angular/core'
import { JsonService } from './json.services'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'correlacioneventos'
  mensaje = ''
  nombre = ''
  fecha = ''
  arma = ''
  tipoDelito = ''
  ubicacion = ''
  // Test
  //  jsonstr = "https://api.github.com/users/ibuioli"

  constructor(public json: JsonService){
    this.json.getJson("assets/data.json").subscribe((respuesta: any) => {
      console.log(respuesta)
      this.mensaje = respuesta.EVE_NOMBRE_EVENTO
      this.nombre = respuesta.EVE_DESCRIPCION_EVENTO
      this.fecha = respuesta.EVE_FECHA_EVENTO
      this.arma = respuesta.EVE_USO_ARMA_FUEGO
      this.tipoDelito = respuesta.EVE_TIPO_DELITO
      this.ubicacion = respuesta.EVE_UBICACION_DELITO
    })
  }


}
