import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sou-novo',
  templateUrl: './sou-novo.component.html',
  styleUrl: './sou-novo.component.css'
})
export class SouNovoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Apenas números
      endereco: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado:', this.form.value);
      // Aqui você pode processar o envio do formulário
    } else {
      console.log('Formulário inválido');
    }
  }
}
