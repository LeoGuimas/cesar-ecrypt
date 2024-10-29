import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CryptoService } from '../../services/crypto.service';
import { CipherText } from '../../models/cypher-text.model';

@Component({
  selector: 'app-decrypt',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss']
})
export class DecryptComponent {
  text = '';
  shift = 3;
  decryptedText: string | null = null;

  constructor(private cryptoService: CryptoService) {}

  onDecrypt() {
    const data: CipherText = { text: this.text, shift: this.shift };
    this.cryptoService.decrypt(data).subscribe({
      next: response => {
        this.decryptedText = response.decrypted_text;
      },
      error: error => {
        console.error('Erro ao descriptografar:', error);
      }
    });
  }
}
