import { Component } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CipherText } from '../../models/cypher-text.model';
import { FormsModule } from '@angular/forms'; // Importação necessária
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decrypt',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './decrypt.component.html',
  styleUrl: './decrypt.component.scss'
})
export class DecryptComponent {
  text = '';             // Texto criptografado que será inserido pelo usuário
  shift = 3;             // Valor do deslocamento (shift)
  decryptedText: string | null = null;   // Resultado do texto descriptografado

  constructor(private cryptoService: CryptoService) {}

  onDecrypt() {
    const data: CipherText = { text: this.text, shift: this.shift };
    this.cryptoService.decrypt(data).subscribe(
      response => {
        this.decryptedText = response.decrypted_text;
      },
      error => {
        console.error('Erro ao descriptografar:', error);
      }
    );
  }
}
