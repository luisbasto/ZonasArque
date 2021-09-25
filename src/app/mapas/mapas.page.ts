import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DatosSitiosService } from '../datos-sitios.service';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'mapas.page.html',
  styleUrls: ['mapas.page.scss']
})
export class MapasPage {
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  map: any;

  latitude: number;
  longitude: number;
  sitios: any = [];
  infoWindows: any = [];

  constructor(private datosSitiosService: DatosSitiosService) { }

  initializeMap() {

    const location = new google.maps.LatLng(20.96, -89.62); const options = {
      center: location,
      zoom: 7, disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  ionViewDidEnter() {
    this.initializeMap();
    this.addMarkersToMap(this.sitios);
  }

  ngOnInit() {
    this.datosSitiosService.getSitios().subscribe((res: any) => {
      this.sitios = res;
    });
  }

  addMarkersToMap(sitios) {
    for (let marker of sitios) {
      let position = new google.maps.LatLng(marker.lat, marker.long);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.name,
        state: marker.state,
        latitude: marker.lat,
        longitude: marker.long
      });
      mapMarker.setMap(this.map); 
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent =
      '<div id="content">' +
      '<h2>' + marker.title + '</h2>' +
      '<h5>' + marker.state + '</h5>' + 
      '<p>Latitude:' + marker.latitude + 
      '</p>' + '<p>Longitude:' + 
      marker.longitude + '</p>' + '<div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows(); infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for (let window of this.infoWindows){
      window.close(); 
    }
  }

}
