import { Component, OnInit } from '@angular/core';
import { YokoService } from 'src/app/Services/yoko.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form= {
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  public error={
    name:null,
    email:null,
    password:null
  };

  constructor(
    private Service:YokoService,
    private Token:TokenService,
    private router:Router
    ) { }

  onSubmit() {
    this.Service.signup(this.form).subscribe(
      datos=> this.handleResponse(datos),
      error=> this.handleError(error)
    );
  }

  handleResponse(datos){
    this.Token.handle(datos.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error=error.error.errors;
  }

  ngOnInit(): void {
  }

}
