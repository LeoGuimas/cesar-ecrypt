import { CryptoService } from '../../services/crypto.service';
import { Component } from '@angular/core';
import { CipherText } from '../../models/cypher-text.model';
import { FormsModule } from '@angular/forms'; // Importação necessária

@Component({
  selector: 'app-encrypt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encrypt.component.html',
  styleUrl: './encrypt.component.scss'
})
export class EncryptComponent {
  text = '';             // Texto a ser criptografado
  shift = 3;             // Valor do deslocamento
  encryptedText = '';    // Resultado do texto criptografado

  constructor(private cryptoService: CryptoService) {}

  onEncrypt() {
    const data: CipherText = { text: this.text, shift: this.shift };
    this.cryptoService.encrypt(data).subscribe(
      response => {
        this.encryptedText = response.encrypted_text; // Atualiza o resultado com o texto criptografado
      },
      error => {
        console.error('Erro ao criptografar:', error);
      }
    );
  }
}
