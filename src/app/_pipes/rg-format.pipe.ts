import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgFormat',
  standalone:true
})
export class RgFormatPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return ''; // Se não houver valor, retorna vazio

    // Remove caracteres não numéricos
    const rg = value.replace(/\D/g, '');

    // Verifica se o RG tem o tamanho correto (9 dígitos)
    if (rg.length !== 9) return value;

    // Formata no padrão 00.000.000-0
    return `${rg.substring(0, 2)}.${rg.substring(2, 5)}.${rg.substring(5, 8)}-${rg.substring(8, 9)}`;
  }

}
