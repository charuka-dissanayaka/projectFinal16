import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authservice: AuthService
  ) {  
    
  }

  helper = new JwtHelperService();

  username = null;

  ngOnInit() {
    let token = localStorage.getItem('token');
    if(token === null){
      return;
    }
    this.username = this.helper.decodeToken(token).email;
  }

  

  

}
