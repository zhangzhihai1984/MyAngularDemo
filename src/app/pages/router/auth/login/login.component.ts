import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.makeDefaultMessage()
  }

  makeDefaultMessage() {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }

  login() {
    this.message = 'Trying to log in ...'
    this.authService.login().subscribe(_ => {
      this.makeDefaultMessage()

      let url = this.authService.redirectUrl
      if (url)
        this.router.navigateByUrl(url)
    })
  }

  logout() {
    this.authService.logout()
    this.makeDefaultMessage()
  }
}
