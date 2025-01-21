import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-index-table',
  standalone: true,
  imports: [],
  templateUrl: './button-index-table.component.html',
  styleUrl: './button-index-table.component.css'
})
export class ButtonIndexTableComponent {
  @Input({required:true})
    buttonText:string = '';

    @Input({required:true})
    buttonStyle:'bg-action-table'|'bg-action-table-not'='bg-action-table';

    @Output() buttonClicked = new EventEmitter<void>();
    onButtonClick(){
      this.buttonClicked.emit();
    }

    @Input() iconClass:string='';
    @Input() iconColor:string='';
    @Input() iconSize:string='';

    ButtonClick(){
      alert('teste botão')
    }
}
