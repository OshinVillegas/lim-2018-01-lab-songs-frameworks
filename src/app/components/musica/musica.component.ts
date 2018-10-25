import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  BuscarArtista : string
  toptracks : {}
  track : any[]
  imagen: string;

  constructor( private _apiservice: ApiService) { }

  ngOnInit() {
    // this._apiservice.GetData().subscribe( (data:any)=>{
    //   console.log(data)
  }
GetArtis(){
    this._apiservice.GetData(this.BuscarArtista).subscribe( (data:any)=>{
      this.track=data.toptracks.track;

       this.imagen = data.toptracks.track[1].image[2]['#text'] 
      console.log(data);     
      console.log(this.track); 
  
    })
  } 
Likes(){
  let contador = 0;
  addEventListener
console.log(contador)
};
  
}
