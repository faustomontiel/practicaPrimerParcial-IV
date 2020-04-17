import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-btn-borrar',
  templateUrl: './btn-borrar.component.html',
  styleUrls: ['./btn-borrar.component.css']
})
export class BtnBorrarComponent implements OnInit {

  constructor() { }
  @Input() productoABorrar: Producto ;
  @Input() productos: Producto [];

  ngOnInit(): void {
  }


  eliminarProducto(){

    const index = this.productos.indexOf(this.productoABorrar);
    if (index > -1) {
      this.productos.splice(index, 1);
    }
  }
}
