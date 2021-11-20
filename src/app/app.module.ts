import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Para los fieldsets
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el locale de la app para cambiar de idioma
import localEs from '@angular/common/locales/es-EC';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
import { LOCALE_ID, NgModule } from '@angular/core';
registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    //cambia el idioma del pipes manera global en todo el proyecto
    { provide: LOCALE_ID, useValue: 'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
