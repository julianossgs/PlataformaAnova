import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.css'
})
export class DateRangePickerComponent {
  dataInicial: string = '';
  dataFinal: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  confirmar() {
    if (this.dataInicial && this.dataFinal) {
      this.activeModal.close({ dataInicial: this.dataInicial, dataFinal: this.dataFinal });
    }
  }
}

