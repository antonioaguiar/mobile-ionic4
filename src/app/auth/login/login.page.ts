import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController, public navCtrl : NavController) { }

  ngOnInit() {
  }

  async presentModalLogin() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }

  login(form){
    //this.authService.login(form.value).subscribe((res)=>{
    //  this.router.navigateByUrl('home');
    //});
  }

 goBack(){
     this.navCtrl.back();
 }

}
