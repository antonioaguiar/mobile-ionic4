import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  servicos = [{
    icon : "car",
    label: "Comunicar buracos",
    caption: "Abrir",
    path: "comunicar",
    content:"Serviço para comunicar ao orgão responsável o estado atual das vias, enviar fotos e cobrar ações."
  }];

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }


  cardClick(pagina:string){
    this.navCtrl.navigateForward(pagina);
  }


}
