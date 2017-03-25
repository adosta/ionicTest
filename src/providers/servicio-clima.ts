import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicioClima provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicioClima {
	private direccionWeb = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=3991347&appid=dfb9632bd86e64831b1bc3814bde6a75&units=metric'
  
  constructor(public http: Http) {
    console.log('Hello ServicioClima Provider');
  }

  getPronosticos(){
  	return this.http.get(this.direccionWeb)
  	.map(res=>res.json());
  }

}
