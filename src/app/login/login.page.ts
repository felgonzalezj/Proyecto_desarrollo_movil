import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogion: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.formularioLogion = this.fb.group({
      'Nombre': new FormControl('',Validators.required),
      'Password': new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }

}
