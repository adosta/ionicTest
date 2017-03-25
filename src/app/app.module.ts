import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { ClimaPage } from '../pages/clima/clima';
import { ProductosPage } from '../pages/productos/productos';

import { ServicioClima } from '../providers/servicio-clima';
import { Productos } from '../providers/productos';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ClimaPage,
    ProductosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ClimaPage,
    ProductosPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ServicioClima,Productos]
})
export class AppModule {}
