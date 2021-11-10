import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioRegistro = this.fb.group({
      'Nombre': new FormControl('',Validators.required),
      'Password': new FormControl('',Validators.required),
      'ConfirmacionPass': new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }

}
