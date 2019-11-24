import { NavController } from '@ionic/angular';
import { FaleConosco } from './../../models/fale-conosco';
import { HematitaService } from './../../services/hematita.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista-comunicados',
  templateUrl: './lista-comunicados.page.html',
  styleUrls: ['./lista-comunicados.page.scss'],
})
export class ListaComunicadosPage implements OnInit {

  public listaFaleConosco : any;
  public data: FaleConosco;

  private selectedItem: any;
  private icons = [
    'thumbs-up',    //elogio
    'thumbs-down',  //reclamação
    'medkit',       //servico
    'megaphone',     //denuncia
    'mail-unread',   //consulta
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
 

  constructor(public hematita: HematitaService, private router: Router) {
    this.listaFaleConosco = [];
  }
 

  ngOnInit() {
    this.getListaComunicados();
  }

  getListaComunicados() {
    //Get saved list
    this.hematita.getList().subscribe(response => {
      
      for(let item in response){
        if (response[item].assunto =="elogio"){
          response[item].icone = 'thumbs-up';
        }
        if (response[item].assunto =="reclamacao"){
          response[item].icone = 'thumbs-down';
        }
        if (response[item].assunto =="servico"){
          response[item].icone = 'medkit';
        }
        if (response[item].assunto =="denuncia"){
          response[item].icone = 'megaphone';
        }
        if (response[item].assunto =="consulta"){
          response[item].icone = 'mail-unread';
        }
      }
      console.log('Async operation has ended');
      this.listaFaleConosco = response;
    })
  }

  delete(item) {
    //Delete item in Student data
    this.hematita.deleteItem(item.id).subscribe(response => {
      //Update list after delete is successful
      this.getListaComunicados();
    });
  }

  lerResposta(item){
    //buscar resposta
    this.hematita.getItem(item.protocolo).subscribe(response => {
      this.listaFaleConosco = response;
    })
  }

  abrirFaleConosco(item){
    let navigationExtras: NavigationExtras = {
      state: {
        faleconosco: item 
      }
    };
    this.router.navigate(['resposta'], navigationExtras);
  }

  doRefresh(event) {
    //console.log('Begin async operation');
    this.getListaComunicados();
    event.target.complete();
   // setTimeout(() => {
      //console.log('Async operation has ended');
   //   event.target.complete();
   // }, 2000);
    
  }

}
