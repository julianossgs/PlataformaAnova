import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

  @Input() iconClass:string='';
  @Input() cor:string='';
  @Input() size:string='';

}
