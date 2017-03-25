import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Productos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Productos {

	private direccionWeb = 'http://localhost:51486/producto/'

  constructor(public http: Http) {
    console.log('Hello Productos Provider');
  }

	getProductos(){
			return this.http
			.get(this.direccionWeb+'getJsonList')
			.map(res=>res.json())
		}

	deleteProducto(id){
		return this.http
		.post(this.direccionWeb+'eraseProducto/'+id,null)
		.map(res=>res.json())
	}
}
