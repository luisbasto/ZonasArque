import { Component } from '@angular/core';
import { DatosSitiosService } from '../datos-sitios.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'sitios.page.html',
  styleUrls: ['sitios.page.scss'],
})
export class SitiosPage  {
  sites: any;

  constructor(private myService: DatosSitiosService) {}

  ngOnInit() {
     this.myService.getSitios().subscribe(
      (res: any) => { this.sites = res; }
    );
  }

}
