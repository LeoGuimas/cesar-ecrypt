import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DecryptComponent } from "./components/decrypt/decrypt.component";
import { EncryptComponent } from "./components/encrypt/encrypt.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, DecryptComponent, EncryptComponent]
})
export class AppComponent { 
  title = 'cesar-webprogram';
  showEncrypt = true;

  toggleComponent(){
    this.showEncrypt = !this.showEncrypt;
  }
}

