import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';
import { IconIndexComponent } from '../icon-index/icon-index.component';

@Component({
  selector: 'app-button-index-card-search',
  standalone: true,
  imports: [CommonModule, IconIndexComponent],
  templateUrl: './button-index-card-search.component.html',
  styleUrl: './button-index-card-search.component.css',

})
export class ButtonIndexCardSearchComponent {
  @Input() buttonText:string='';
  @Input() iconClass: string = '';
  @Input() iconColor: string = '';
  @Input() iconSize: string = '';
  @Output() dateSelected = new EventEmitter<{ dataInicial: string, dataFinal: string }>();

  constructor(private modalService: NgbModal) {}

  onButtonClick() {
    console.log('Botão clicado!');
    const modalRef = this.modalService.open(DateRangePickerComponent, { size: 'sm', centered: true });
    modalRef.result.then((result) => {
      if (result) {
        console.log('Datas selecionadas:', result);
        this.dateSelected.emit(result);
      }
    }).catch(() => {});
  }
}
