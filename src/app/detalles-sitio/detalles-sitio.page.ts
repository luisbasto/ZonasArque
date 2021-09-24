import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosSitiosService } from '../datos-sitios.service';

@Component({
  selector: 'app-detalles-sitio',
  templateUrl: './detalles-sitio.page.html',
  styleUrls: ['./detalles-sitio.page.scss'],
})
export class DetallesSitioPage implements OnInit {
  sitios: any = [];
  sitioId: any;
  name: string;
  image: string;
  data: string;

  constructor(private datosSitiosService: DatosSitiosService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sitioId = this.activatedRoute.snapshot.paramMap.get('id');

    this.datosSitiosService.getSitios().subscribe((res: any) => {
      this.sitios = res;
      this.name = this.sitios[this.sitioId].name; 
      this.image = this.sitios[this.sitioId].image; 
      this.data = this.sitios[this.sitioId].data;
    });
  }



}
