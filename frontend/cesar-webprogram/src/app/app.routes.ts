import { Route } from '@angular/router';
import { EncryptComponent } from './components/encrypt/encrypt.component'; // Ajuste o caminho conforme necessário
import { DecryptComponent } from './components/decrypt/decrypt.component'; // Ajuste o caminho conforme necessário

export const routes: Route[] = [
  { path: 'encrypt', component: EncryptComponent },
  { path: 'decrypt', component: DecryptComponent },
  { path: '', redirectTo: '/encrypt', pathMatch: 'full' }, // Redireciona para 'encrypt' por padrão
];
