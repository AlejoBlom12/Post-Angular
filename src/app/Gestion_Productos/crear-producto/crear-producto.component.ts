import { Component } from '@angular/core';
import { PostService } from "../../Services/post.service";

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent {

  constructor(public productos: PostService){}


  product = {
    nameProduct : "titulo",
    price : 10,
    category : "65581bceeab55bb8995478e9",
    proveedor: "655e51702c07fa9425ebbd36",
    description :"Descripcion aqui"
  }

  almecenarProduct(){
    this.productos.guardarItem(this.product).subscribe(date =>{
      if (date){
        alert("Tu producto ha sido guardado")
      }else{
        alert("El producto no se ha guardado");
      }
    })  
  }
}


