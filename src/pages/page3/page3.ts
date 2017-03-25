import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Keyboard, Slides } from 'ionic-angular';

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(public keyboard: Keyboard, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
 
  mostrarAlerta() {
  let alert = this.alertCtrl.create({
    title: 'Muestra Alerta',
    subTitle: 'Ejemplo de una alerta en Ionic',
    buttons: ['Entendido']
  });
  alert.present();
}




}
