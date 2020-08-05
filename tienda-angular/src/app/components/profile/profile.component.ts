import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public loggedIn:boolean;
  constructor(
    private Auth:AuthService
  ) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value=> this.loggedIn = value);
  }

}
