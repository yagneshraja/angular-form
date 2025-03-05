import { Component } from '@angular/core';
import { InputToggleComponent } from "./input-toggle/input-toggle.component";

@Component({
  selector: 'app-root',
  imports: [InputToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-form';
}
