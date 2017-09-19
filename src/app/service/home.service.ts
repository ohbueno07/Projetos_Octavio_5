import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiliaisModel } from '../model/filiais-model';
import 'rxjs/add/operator/map'

@Injectable()
export class HomeService {

    private urlBuscarFiliais = "./assets/filiais.json";

    constructor(private http: Http) {
    }

   /**
    * Busca filiais
    * @returns {Observable<FiliaisModel>}
    */
    public buscarFiliais(): Observable<FiliaisModel> {
        return this.http.get(this.urlBuscarFiliais)
            .map(res => res.json());
    }

}
