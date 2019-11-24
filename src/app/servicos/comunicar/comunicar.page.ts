import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../../services/photo.service';


@Component({
  selector: 'app-comunicar',
  templateUrl: './comunicar.page.html',
  styleUrls: ['./comunicar.page.scss'],
})
export class ComunicarPage implements OnInit {


  public formComunicar: FormGroup;

  constructor(formBuilder: FormBuilder, public toastController: ToastController, public photoService: PhotoService) {
    this.formComunicar = formBuilder.group({
      email: [''],
      telefone: [''],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.compose([Validators.minLength(20), Validators.required])],
      fotos: ['']
    });
  }


  ngOnInit() {
    this.photoService.loadSaved();
  }

  submitFormComunicar() {
    let { email, telefone, assunto, mensagem, fotos } = this.formComunicar.controls;

    this.mostrarMensagem("Enviando formulário, aguarde!");


    if (!this.formComunicar.valid) {
      if (!email.valid) {
      } else {
      }

      if (!telefone.valid) {
      } else {
      }

      if (!assunto.valid) {
      } else {
      }

      if (!mensagem.valid) {
      } else {
      }

      if (!fotos.valid) {
      } else {
      }
    }
    else {
      alert("registro efetuado!");
    }
  }

  async mostrarMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
