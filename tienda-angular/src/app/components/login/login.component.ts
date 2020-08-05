import { Component, OnInit } from '@angular/core';
import { YokoService } from 'src/app/Services/yoko.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form= {
    email:null,
    password:null

  };

  public error=null;
  constructor(
    private Service:YokoService,
    private Token:TokenService,
    private router: Router,
    private Auth: AuthService
    ) { }

  onSubmit(){
    this.Service.login(this.form).subscribe(
      datos=> this.handleResponse(datos),
      error=> this.handleError(error)
    );
  }

  handleResponse(datos){
    this.Token.handle(datos.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/');
  }

  handleError(error){
    this.error=error.error.error;
  }


  ngOnInit(): void {
  }



}
