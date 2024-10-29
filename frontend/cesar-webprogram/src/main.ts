import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Certifique-se de que o caminho está correto
import { HttpClientModule } from '@angular/common/http';

// Habilitar o modo de produção se necessário
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)]
})
  .catch(err => console.error(err));
