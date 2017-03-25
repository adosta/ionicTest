import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioClima } from '../../providers/servicio-clima';

/*
  Generated class for the Clima page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clima',
  templateUrl: 'clima.html'
})
export class ClimaPage {

	pronosticos:any[];
  noticias:any[];
	informacionCiudad;
  nombre:any;
  viento:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public _servicioClima:ServicioClima) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClimaPage');

    this._servicioClima.getPronosticos().subscribe(
    	(data:any)=>{
    		this.pronosticos = data.list;
        
        let contador = 0;

        for(let dia of this.pronosticos){
          let fecha = new Date();
          dia.fecha = fecha;
          fecha.setDate(fecha.getDate()+contador);
          contador++;
        }

        this.nombre =data.city.name;
        this.viento = data.list.speed

    		this.informacionCiudad = data.city;
    		console.log('pronosticos:')
    		console.log(this.pronosticos);
    		console.log('ciudad:')
    		console.log(this.informacionCiudad);
    	},
    	(err)=>{
    		console.log(err);
    	}
    	)
  }

}
