import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-accordion-items',
  standalone: true,
  imports: [],
  templateUrl: './accordion-items.component.html',
  styleUrl: './accordion-items.component.css'
})
export class AccordionItemsComponent {
  @Input({required:true})
  accordionText:string='';

  @Input({required:true})
  accordionTitle:string='';
}
