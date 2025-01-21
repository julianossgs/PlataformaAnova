import { Component } from '@angular/core';
import { CheckBoxComponent } from "../check-box/check-box.component";
import { AccordionItemsComponent } from "../accordion-items/accordion-items.component";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CheckBoxComponent,
       AccordionItemsComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

}
