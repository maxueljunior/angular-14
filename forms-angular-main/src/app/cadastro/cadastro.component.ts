import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service: ConsultaCepService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid){
      // this.router.navigate(["/sucesso"])
    }else{
      alert('Formulario invalido...');
    }
    console.log(form.controls);
  }

  public consultaCep(ev: any, f: NgForm){
    const cep = ev.target.value;
    if(cep !== ''){
      this.service.getConsultaCep(cep).subscribe(resultado => {
        this.populandoEndereco(resultado, f);
      });
    }
  }

  public populandoEndereco(resultado: any, f: NgForm){
    f.form.patchValue({
      endereco: resultado.logradouro,
      complemento: resultado.complemento,
      bairro: resultado.bairro,
      cidade: resultado.localidade,
      estado: resultado.uf
    })
  }
}
