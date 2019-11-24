import { FaleConosco } from './../../models/fale-conosco';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../../services/photo.service';
import { HematitaService } from './../../services/hematita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicar',
  templateUrl: './comunicar.page.html',
  styleUrls: ['./comunicar.page.scss'],
})
export class ComunicarPage implements OnInit {


  public formComunicar: FormGroup;
  public faleConosco: FaleConosco;

  constructor(formBuilder: FormBuilder, public toastController: ToastController,
    public router: Router,
    public photoService: PhotoService, public hematita: HematitaService) {
    this.formComunicar = formBuilder.group({
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.compose([Validators.minLength(4), Validators.required])],
      fotos: ['']
    });
  }


  ngOnInit() {
    this.photoService.loadSaved();
  }

  /*
    submitForm() {
      this.hematita.createItem(this.).subscribe((response) => {
        this.router.navigate(['list']);
      });
  
    }
  */

  submitFormComunicar() {
    let { email, telefone, assunto, mensagem, fotos } = this.formComunicar.controls;

    // this.mostrarMensagem("Enviando formulário, aguarde!");
    let isFormOk = false;

    if (!this.formComunicar.valid) {
      if (!email.valid) {
        this.mostrarMensagem("Informe seu email");
      } else {
        isFormOk = true;
      }

      if (!telefone.valid) {
        isFormOk = false;
        this.mostrarMensagem("Informe seu telefone");
      } else {
        isFormOk = true;
      }

      if (!assunto.valid) {
        isFormOk = false;
        this.mostrarMensagem("Informe o assunto");
      } else {
        isFormOk = true;
      }

      if (!mensagem.valid) {
        isFormOk = false;
        this.mostrarMensagem("Digite uma mensagem min(20 caracteres)");
      } else {
        isFormOk = true;
      }
    }else{
      isFormOk = true;
    }
    //alert(isFormOk);

    if (isFormOk == true) {
      
      console.log("Registrando seu: " + assunto.value);
      this.faleConosco = new FaleConosco();
      
      this.faleConosco.assunto = assunto.value;
      this.faleConosco.telefone = telefone.value;
      this.faleConosco.email = email.value;
      this.faleConosco.mensagem = mensagem.value;
      this.faleConosco.protocolo = "";
      this.faleConosco.fotos = this.photoService.photos;

      this.registrar();
    }
  }

  registrar() {
    //console.log("registrando. 2..");
    this.hematita.createItem(this.faleConosco).subscribe((response) => {
      //this.router.navigate(['list']);
      //console.log(response);
      this.mostrarMensagem("Registro realizado com sucesso!");
    });

  }

  async mostrarMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
