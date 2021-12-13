import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [// fundo escuro que fica atrás do modal
    trigger('overlay', [
      transition(':enter', [
        // Inicia com o opacity zerado
        style({ opacity: 0 }),

        // efetua a animação de 250ms para o
        // o opacity de 0 até 0.5
        animate('250ms', style({ opacity: .5 })),
      ]),
      transition(':leave', [
        // Quando for esconder o overlay, 
        // anima do opacity atual, 0.5, até
        // o valor 0
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),

    // animação na parte branca do modal
    trigger('modal', [
      transition(':enter', [
        // inicia com o modal "lá em cima"
        style({ top: -999 }),

        // e finaliza com o modal no meio da tela
        animate('500ms', style({ top: '50%' })),
      ]),
      transition(':leave', [

        // para esconder o modal, basta
        // "jogar ele lá para cima da tela"
        animate('250ms', style({ top: -999 }))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {

  public mostrar: boolean = false;
  public modalEnviouSenha: boolean = false;
  public modalInseriuCodigo: boolean = false;
  public cadastrar: boolean = false;
  public form!: FormGroup;
  public formCadastro!: FormGroup;
  public msgErro: string = '';
  public carregando: boolean = false;


  constructor(
    public fb: FormBuilder,
    private oRouter: Router
  ) {
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      login: [null, Validators.compose([Validators.required, Validators.email])],
      senha: [null, Validators.required]
    });

  }

  // acessar o painel
  async submit() {
    console.log(this.form.value)

    if (this.form.value.login === 'geyza.pierini@gpssa.com.br') {
      console.log('login efetuado!')
      await new Promise(loading => setTimeout(loading, 2000))
      this.carregando = true;
      this.msgErro = '';
      this.oRouter.navigateByUrl('/painel');
    } else {
      this.msgErro = 'Usuário Invalido!';
      this.carregando = false;
      console.log(this.form.invalid)
    }
  }

  // ativar modal
  toggle() {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar)
  }

  cadastro() {
    this.cadastrar = !this.cadastrar;
    console.log(this.cadastrar)
  }

  enviouSenha() {
    this.modalEnviouSenha = !this.modalEnviouSenha;
    console.log(this.modalEnviouSenha)
  }

  inseriuCodigo() {
    this.modalInseriuCodigo = !this.modalInseriuCodigo;
    console.log(this.modalInseriuCodigo)
  }
}

