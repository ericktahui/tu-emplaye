import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'edtl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input() titulo: string ='';
  @Input() mensaje: string ='';
  @Input() btnOkText: string ='';



  constructor(public activeModal: NgbActiveModal) { 

    this.titulo ='Quieres quedarte en la UNAM ?';
    this.mensaje = 'Realiza entrenamientos diarios grátis'
  }

  ngOnInit() {
  }


  public close() {
    this.activeModal.close(true);
  }

  accept(correo:string){
    console.log('Aceptar: ', correo);
    this.activeModal.close(true);
    
  }




}
