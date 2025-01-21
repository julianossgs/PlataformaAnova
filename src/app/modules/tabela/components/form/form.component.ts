import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, PatternValidator, Validators } from '@angular/forms';
import { InputMonetaryComponent } from '../input-monetary/input-monetary.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskDirective,provideNgxMask} from 'ngx-mask'
import { ButtonModalComponent } from '../button-modal/button-modal.component';
// import { BrowserModule } from '@angular/platform-browser';



@Component({
    selector: 'app-form',
    imports: [
        InputMonetaryComponent,
        FormsModule,
        InputMonetaryComponent,
        CommonModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
    providers: [provideNgxMask()],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{

   form:FormGroup = new FormGroup({});

   //injeção de dependência
   constructor(private fb:FormBuilder){

   };

   //inicializando o formulário
   ngOnInit():void{
    this.initilizeForm();
   }

   cpfCnpjValidator(){
    return(control:any)=>{
    const cpfCnpj = control.value;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

    if(cpfRegex.test(cpfCnpj) || cnpjRegex.test(cpfCnpj)){
       return null; //válido
    }
    else{
      return { cpfCnpjInvalid: true }; // inválido
    }
  };
 }


   initilizeForm(){
    this.form = this.fb.group({

      cep:['',[Validators.required,
        Validators.maxLength(9),
        Validators.pattern('^\\d{5}-\d{3}$')
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

      phone:['',[Validators.required,

      ]],

      end:['',[Validators.required]],

      pl:['',[Validators.required]],

      emissor: ['', [

        Validators.pattern('[A-Z]{3}'),
        Validators.minLength(3),
        Validators.maxLength(3),

      ]]

    });



  }

  submitForm(){
    if(this.form.valid){
      console.log(this.form.value);
      this.form.reset

    }

   }

}
