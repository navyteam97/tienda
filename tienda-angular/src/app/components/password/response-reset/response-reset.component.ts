import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YokoService } from 'src/app/Services/yoko.service';
import { SnotifyService } from 'ng-snotify';


@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public form={
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  }

  public error={
    email:null,
    password:null,
    password_confirmation:null
  };
    
  constructor(
    private route:ActivatedRoute,
    private yoko:YokoService,
    private router:Router,
    private Notify:SnotifyService
    ) {
      route.queryParams.subscribe(params=>{
        this.form.resetToken=params['token']
      });
     }

  onSubmit(){
    this.yoko.changePassword(this.form).subscribe(
      datos=> this.handleResponse(datos),
      error=> this.handleError(error)
    )
  }

  handleResponse(datos){
    let _router=this.router;
    this.Notify.confirm('Bien hecho, Ingresa con la nueva Clave', {
      buttons:[
        {text: 'Okey', 
        action: toster => {
          _router.navigateByUrl('/login'),
        this.Notify.remove(toster.id)
      }
      },
      ]
    })
    
  }

  handleError(error){
    this.error= error.error.errors;
  }

  ngOnInit(): void {
  }

}
