
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OshinSong';

  constructor(private http: HttpClient){

  }

  ngOnInit():void{
    this.http.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=0782f662e9164b8a166e2538f2510fb0&format=json').subscribe(data =>{
      console.log(data);
    })
  
  }
}
