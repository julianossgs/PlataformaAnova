import { Component } from '@angular/core';
import {EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalItems: number = 0; // Total de itens
  @Input() itemsPerPage: number = 10; // Itens por página
  @Input() currentPage: number = 1; // Página atual
  @Output() pageChange = new EventEmitter<number>(); // Evento para mudança de página

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage); // Calcula o total de páginas
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      // this.currentPage = page;
      // this.pageChange.emit(this.currentPage);
      this.pageChange.emit(page); // Emite o número da nova página
    }
  }
}
