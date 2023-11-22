import { Component } from '@angular/core';
import { ListadoService } from './listado.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tableta';
  constructor(private listadoService :ListadoService){

  }
  public listado:any[]=[]
  buscarMunicipio = ""
  ngOnInit(){
    this.listadoService.obtenerInfo().subscribe( lista => {
      this.listado = lista
    })
  }

}
