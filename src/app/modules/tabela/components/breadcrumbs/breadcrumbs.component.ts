import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { CheckBoxComponent } from '../check-box/check-box.component';

@Component({
    selector: 'app-breadcrumbs',
    imports: [LinkComponent],
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {

}
