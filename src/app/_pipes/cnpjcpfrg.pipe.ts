import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjcpfrg',
  standalone: true
})
export class CnpjcpfrgPipe implements PipeTransform {

  transform(value: string,type:'cpf' | 'cnpj' | 'rg' | 'oe'): string {
    if (!value) return value;

    value = value.replace(/\D/g, '');  // Remove qualquer caractere que não seja número

     // Formatação para CPF
     if(type === 'cpf'){
      if (value.length === 11) {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
     }

    }

    // Formatação para CNPJ
    if(type === 'cnpj'){
      if (value.length === 14) {
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }

    }

    // Formatação para RG (geralmente 9 ou 10 caracteres)
    if(type === 'rg'){
      if (value.length >= 8 && value.length <= 10) {
        return value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
      }
    }


    // Caso seja um órgão emissor, vamos apenas formatar de forma simples
    if(type === 'oe'){
      if (value.length > 0) {
        return value.toUpperCase();  // Transformando órgão emissor em letras maiúsculas
      }
    }


    return value;
  }

}
