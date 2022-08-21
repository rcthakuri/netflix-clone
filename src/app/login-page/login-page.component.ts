import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const inputfield = document.querySelector('.input-area input');
inputfield?.addEventListener('click',() => {
  inputfield.classList.add('active-field');
})
