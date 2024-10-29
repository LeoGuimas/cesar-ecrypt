import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CryptoService } from '../../services/crypto.service';
import { CipherText } from '../../models/cypher-text.model';

@Component({
  selector: 'app-encrypt',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent {
  text = '';
  shift = 3;
  encryptedText: string | null = null;

  constructor(private cryptoService: CryptoService) {}

  onEncrypt() {
    const data: CipherText = { text: this.text, shift: this.shift };
    this.cryptoService.encrypt(data).subscribe({
      next: response => {
        this.encryptedText = response.encrypted_text;
      },
      error: error => {
        console.error('Erro ao criptografar:', error);
      }
    });
  }
}
