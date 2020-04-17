import { Component, OnInit, Input  } from '@angular/core';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  constructor() {
    this.productos = [
      { id: 10 ,descripcion:"producto test 1",tipo: "nac",fechaDeVencimiento: "10/10/2020",precio: 100,rutaDeFoto: "url1" },
      { id: 20 ,descripcion:"producto test 2",tipo: "imp",fechaDeVencimiento: "24/12/2020",precio: 170,rutaDeFoto: "url1" },
      { id: 30 ,descripcion:"producto test 3",tipo: "imp",fechaDeVencimiento: "07/09/2022",precio: 215,rutaDeFoto: "url1" },
    ];
   }
  
  
  /*
  this.productos = [
    { apellido: 'Aguas' ,nombre:"rogelio",legajo: 999 },
    { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 999 }
  ];*/

  ngOnInit(): void {
  }

}
