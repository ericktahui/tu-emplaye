import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing/landing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LandingService]
})
export class HomeComponent implements OnInit {

  constructor(private _landingService: LandingService) { }

  ngOnInit() {
  }


  
  abrirlanding(){

    console.log('abrirlanding');


    this._landingService.confirm('que tal','un mensaje','OK','lg')
      .then( (confirmed) =>{

        //Hacer la lógica cuando el usuario inserta su correo electronico
        console.log('Ya introdujo su correo');
        

      }).catch( (err) => console.log('El usuario descartó el modal') );
      
      


  }


}
