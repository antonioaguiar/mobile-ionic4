import { FaleConosco } from './../../models/fale-conosco';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.page.html',
  styleUrls: ['./resposta.page.scss'],
})
export class RespostaPage implements OnInit {
 
  public item:FaleConosco;
  public protocolo: any;

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.faleconosco;
      }
    });
  }

  ngOnInit() {
    //alert(this.item);
  }

}
