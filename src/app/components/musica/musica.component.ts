import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  BuscarArtista : string

  constructor( private _apiservice: ApiService) { }

  ngOnInit() {
    // this._apiservice.GetData().subscribe( (data:any)=>{
    //   console.log(data)
  }
GetArtis(){
    this._apiservice.GetData(this.BuscarArtista).subscribe( (data:any)=>{
      console.log(data)
    })
  } 
}
