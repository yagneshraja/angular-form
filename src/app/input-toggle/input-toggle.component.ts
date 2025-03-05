import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip'; // ✅ Import MatTooltipModule

@Component({
  selector: 'app-input-toggle',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule // ✅ Add this
  ],
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./input-toggle.component.scss']
})
export class InputToggleComponent {
  dateValue: Date | null = null;
  textValue: string | null = null;
  minDate: Date = new Date(); // Restrict to today and future dates

  onDateChange(event: Date | null) {
    this.dateValue = event;
    if (!this.dateValue) this.textValue = null;
  }

  onTextChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.textValue = inputElement.value || null;
    if (!this.textValue) this.dateValue = null;
  }
}
