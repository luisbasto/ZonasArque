import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosSitiosService {

  constructor(private http: HttpClient) { }

  getSitios(){
    return this.http.get("assets/data/data.json")
        .pipe( map(
          (res:any) => {  return res; }
        )
    )
  }

}
