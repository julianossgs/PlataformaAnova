import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const numericValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (numericValue.length === 11) {
      // Formatar como CPF
      return numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (numericValue.length === 14) {
      // Formatar como CNPJ
      return numericValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    return value; // Retorna o valor original se não for CPF nem CNPJ
  }

}
