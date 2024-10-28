import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Certifique-se de que o caminho está correto

// Habilitar o modo de produção se necessário
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
