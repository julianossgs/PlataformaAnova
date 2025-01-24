import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from "../form/form.component";
import { ButtonModalComponent } from '../button-modal/button-modal.component';

@Component({
    selector: 'app-modal',
    imports: [
        FormsModule,
        CommonModule,
        FormComponent, ButtonModalComponent
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isEditMode: boolean = false; // Determina se é edição ou cadastro
  @Output() save = new EventEmitter<any>(); // Evento para salvar
  @Output() close = new EventEmitter<void>(); // Evento para fechar o modal

   // Retorna o título dinamicamente
   get modalTitle(): string {
    return this.isEditMode ? 'Editar Cliente' : 'Cadastrar Cliente';
  }

  // Método chamado ao clicar em "Salvar"
  onSave(data: any): void {
    this.save.emit(data || null);
  }

  // Método chamado ao clicar em "Fechar"
  onClose(): void {
    this.close.emit();
  }
}

