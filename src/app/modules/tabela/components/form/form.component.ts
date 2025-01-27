import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, PatternValidator, Validators } from '@angular/forms';
import { InputMonetaryComponent } from '../input-monetary/input-monetary.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskDirective,provideNgxMask} from 'ngx-mask'
import { ButtonModalComponent } from '../button-modal/button-modal.component';
// import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors,ValidatorFn } from '@angular/forms';
import { RgFormatPipe } from '../../../../_pipes/rg-format.pipe';




@Component({
    selector: 'app-form',
    imports: [
        InputMonetaryComponent,
        FormsModule,
        InputMonetaryComponent,
        CommonModule,
        ReactiveFormsModule,
        NgxMaskDirective,

    ],
    providers: [provideNgxMask()],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
  @Input() isEditMode: boolean = false; // Modo do formulário
  @Input() initialData: any = null; // Dados iniciais para edição
  @Output() formSubmit = new EventEmitter<any>(); // Evento para enviar o formulário

   form:FormGroup = new FormGroup({});

   //Máscara inicial para CPF
   cpfCnpjMask: string = '000.000.000-00';

   //injeção de dependência
   constructor(private fb:FormBuilder){

   };

   //inicializando o formulário
   ngOnInit():void{
    this.initilizeForm();
   }

   //validador cpf/cnpj
   cpfCnpjValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cpfCnpj = control.value ? control.value.replace(/\D/g, '') : ''; // Remove caracteres não numéricos

      const cpfRegex = /^\d{11}$/; // CPF: 11 dígitos numéricos
      const cnpjRegex = /^\d{14}$/; // CNPJ: 14 dígitos numéricos

      if (!cpfCnpj || cpfRegex.test(cpfCnpj) || cnpjRegex.test(cpfCnpj)) {
        return null; // Válido
      }
      return { cpfCnpjInvalid: true }; // Inválido
    };
  }

  onCpfCnpjChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const previousMask = this.cpfCnpjMask;

    // Atualiza a máscara com base no comprimento do valor digitado
    this.cpfCnpjMask = input.length > 11 ? '00.000.000/0000-00' : '000.000.000-00';

    // Força a atualização se a máscara mudou
    if (previousMask !== this.cpfCnpjMask) {
      this.form.get('cpfcnpj')?.updateValueAndValidity({ onlySelf: true });
    }
  }

  //fim validador cpf/cnpj

  //Validador telefone
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const mobileRegex = /^\(\d{2}\)\d{5}-\d{4}$/; // Formato para celular
      const landlineRegex = /^\(\d{2}\)\d{4}-\d{4}$/; // Formato para telefone fixo

      if (!value || mobileRegex.test(value) || landlineRegex.test(value)) {
        return null; // Válido
      }

      return { invalidPhone: true }; // Inválido
    };
  }
  //fim validador telefone


  //Validador PL para verificar se o valor é maior que zero
   plGreaterThanZeroValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null; // Permite o campo vazio para o Validators.required tratar

    // Remove máscaras ou formatações monetárias, se existirem
    const rawValue = control.value.replace(/[^\d,-]/g, '').replace(',', '.');
    const numericValue = parseFloat(rawValue);

    // Valida se o número é maior que zero
    return numericValue > 0 ? null : { mustBeGreaterThanZero: true };
  };
}

  //Fim Validador PL


   initilizeForm(){
    this.form = this.fb.group({

      cep: ['', [
        Validators.required,
        Validators.pattern(/^\d{5}-\d{3}$/) // Valida o formato 00000-000
      ]],

      conta:['',[Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6),
                Validators.pattern('^\\d{6}$')
      ]],

      nome:['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),

      ]],

       cpfcnpj:['',[Validators.required,
        this.cpfCnpjValidator()]
       ],

      hub:['',[Validators.required]],

      carteira:['',[Validators.required]],

      corretora:['',[Validators.required]],

      email:['',[Validators.required,
        Validators.email,
        Validators.
        pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
      ]],

      phone: ['', [Validators.required, this.phoneValidator()]],

      end:['',[Validators.required]],

      pl: ['', [Validators.required, this.plGreaterThanZeroValidator()]],

      rg:['', Validators.pattern(/^\d{2}\.\d{3}\.\d{3}-\d{1}$/)],

      emissor: ['', [

        Validators.pattern('[A-Z]{3}'),
        Validators.minLength(3),
        Validators.maxLength(3),

      ]]

    });



  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }



}
