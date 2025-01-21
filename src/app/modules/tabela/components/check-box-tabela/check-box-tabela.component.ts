import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-check-box-tabela',
  standalone: true,
  imports: [],
  templateUrl: './check-box-tabela.component.html',
  styleUrl: './check-box-tabela.component.css'
})
export class CheckBoxTabelaComponent {
  // O valor que será passado pelo componente pai
  @Input() checked: boolean = false;

  // Emite o evento quando o estado do checkbox muda
  @Output() checkedChange = new EventEmitter<boolean>();

  // Função para mudar o estado do checkbox
  toggleCheckbox() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked); // Emite o novo valor
  }
}
