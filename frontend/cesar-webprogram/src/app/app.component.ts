import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DecryptComponent } from "./components/decrypt/decrypt.component";
import { EncryptComponent } from "./components/encrypt/encrypt.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [DecryptComponent, EncryptComponent]
})
export class AppComponent { }

