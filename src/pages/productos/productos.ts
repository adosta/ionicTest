import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { Productos } from '../../providers/productos';

/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {

	listaProductos:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public _productos: Productos, public confirmar: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');

    this._productos.getProductos().subscribe(
    	(data:any)=>{
    		this.listaProductos = data;
    	},
    	(err)=>{
    		console.log(err);
    	}
    	)
  }

  showConfirmar(nombre:string,id:any) {
      let confirm = this.confirmar.create({
        title: 'Eliminar',
        message: '¿Quiere Eliminar el articulo? '+nombre,
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Si',
            handler: () => {
              console.log('Agree clicked');
                this._productos.deleteProducto(id).subscribe(
                  (data:any)=>{
                    var articulo = this.listaProductos.filter(art=>art.productoID==id)[0];
                    this.listaProductos.splice(this.listaProductos.indexOf(id), 1);
                        },
                  (err)=>{}
                  )

                this._productos.getProductos().subscribe(
                  (data:any)=>{
                    this.listaProductos = data;
                  },
                  (err)=>{
                    console.log(err);
                  }
                )
            }
          }
        ]
      });
      confirm.present();
    }

}
