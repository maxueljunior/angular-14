import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { Cadastro } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router){}

  cadastrar(): void{
    const form = this.formService.getCadastro();
    if(form?.valid){
      const novoCadastro = form.getRawValue() as Cadastro;
      console.log(novoCadastro);
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso!', value)
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      });
    }
  }
}