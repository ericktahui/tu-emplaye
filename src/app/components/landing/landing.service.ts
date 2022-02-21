import { Injectable } from '@angular/core'
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing.component';

@Injectable({
    providedIn:'root'
})
export class LandingService{


    constructor(private modalService: NgbModal,config: NgbModalConfig) { 


        config.backdrop = 'static';
        config.keyboard = false;
    }


    public confirm(
        titulo: string,
        mensaje: string,
        btnOkText: string = 'Aceptar',
        dialogSize: 'sm'|'md'|'lg'|'xl' = 'sm'
    ) : Promise<boolean>{

    
        const modalRef = this.modalService.open(LandingComponent,{size: dialogSize, backdrop: 'static', keyboard: false});
        modalRef.componentInstance.titulo = titulo;
        modalRef.componentInstance.mensaje = mensaje;
        modalRef.componentInstance.btnOkText = btnOkText;

        return modalRef.result;
    }
  

}