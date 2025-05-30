import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.authService.login(this.email, this.password)
      .then(() => {
        alert('Inicio de sesión exitoso');
      })
      .catch(err => {
        alert('Error: ' + err.message);
      });
  }
}
