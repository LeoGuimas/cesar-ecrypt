import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DecryptComponent } from "./components/decrypt/decrypt.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [DecryptComponent]
})
export class AppComponent { }

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
