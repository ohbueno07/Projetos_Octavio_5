import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { FiliaisModel } from '../model/filiais-model';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.template.html',
  styleUrls: ['home.css']
})
export class HomeComponent {

  // filiais
  private filiaisModel: FiliaisModel;

  constructor(private homeService: HomeService){
    this.initValues();
  }

 /** 
  * Iniciar valores
  */
  private initValues(){

    // buscar filiais
    this.homeService.buscarFiliais()
        .subscribe(filiaisModel => {
            this.filiaisModel = filiaisModel;
        }, 
        erro => console.log(erro));
  }
  
}
