import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LinkComponent } from '../../components/link/link.component';
import { ButtonNavbarComponent } from '../../components/button-navbar/button-navbar.component';
import { IconComponent } from '../../components/icon/icon.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CheckBoxComponent } from '../../components/check-box/check-box.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { TableComponent } from "../../components/table/table.component";
import { ModalmenutabelaComponent } from "../../components/modalmenutabela/modalmenutabela.component";
import { InputComponent } from "../../../tabela/components/input/input.component";
import { MenuLateralMainComponent } from '../../../main/menu-lateral-main/menu-lateral-main.component';
import { PaginationComponent } from '../../../main/pagination/pagination.component';
@Component({
    selector: 'app-home-tabela',
    imports: [ButtonComponent,
        ModalComponent,
        ButtonNavbarComponent,
        BreadcrumbsComponent,
        AccordionComponent,
        ModalComponent,
        TableComponent,
        ModalmenutabelaComponent,
        InputComponent,
        MenuLateralMainComponent],
    templateUrl: './home-tabela.component.html',
    styleUrl: './home-tabela.component.css'
})
export class HomeTabelaComponent {

  btnClicked(){
    alert('Teste botão');
  }

}




