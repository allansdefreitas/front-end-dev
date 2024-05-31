import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';


interface Contato {
  id: number
  nome: string
  telefone: string
}

import contatosFromJSON from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = contatosFromJSON;

  textoBusca: string = '';


  getTextoBusca(){
    return this.textoBusca;
  }

  filtrarContatosPorTexto(): Contato[]{

    // this.text

    // or if(!this.textoBusca)
    if(this.textoBusca.length ===0){
      return this.contatos;
    }else{
      return this.contatos.filter(contato => {
        let ithContatoNome = contato.nome;
        let ithContatoNomeLower: string = ithContatoNome.toLowerCase();

        return ithContatoNomeLower.includes(this.textoBusca);

      })
    }



  }

  filtrarContatosPorLetraInicial(letra: string): Contato[]{

    let contatosPorTextoReturned: Contato[] = this.filtrarContatosPorTexto();
    
    // or return this.filtrarContatosPorTexto.filter(...
    return this.filtrarContatosPorTexto().filter ( contato => {
      let letraInicialNome: string = contato.nome.toLowerCase();
      return letraInicialNome.startsWith(letra);
    })    

    return this.contatos;

  }
  

}
