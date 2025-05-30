import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANTE

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // ✅ Agrega esto

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // ✅ Declara el componente
  ],
  imports: [
    BrowserModule,
    FormsModule, // ✅ Importa FormsModule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
