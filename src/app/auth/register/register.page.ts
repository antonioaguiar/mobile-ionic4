import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  authService:  AuthService, public navCtrl: NavController) { }

  ngOnInit() {

  }

  register(form) {
   // this.authService.register(form.value).subscribe((res) => {
       //this.router.navigateByUrl('home');
   // });
  }

  goBack(){
    this.navCtrl.back();
}

}
