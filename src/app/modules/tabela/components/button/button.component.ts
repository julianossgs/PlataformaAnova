import { Component,EventEmitter,Input,Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required:true})
  buttonText:string = '';

  @Input({required:true})
  buttonStyle:'bg-black'|'bg-white'|
  'bg-cadastro'|'bg-action-table'|
  'bg-menu-table'|
  'bg-01-menu-modal-table' |
  'bg-02-menu-modal-table' |
  'bg-03-menu-modal-table'='bg-black';

  @Output() buttonClicked = new EventEmitter<void>();
  onButtonClick(){
    this.buttonClicked.emit();
  }

  @Input() iconClass:string='';
  @Input() iconColor:string='';
  @Input() iconSize:string='';

  modalTitle: string = 'Cadastro de Cliente';

  toggleTitle() {
    this.modalTitle =
      this.modalTitle === 'Cadastro de Cliente' ? 'Alterar Cliente' : 'Cadastro de Cliente';
  }


}
