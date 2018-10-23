import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  GetData(artis: string) {
    // /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json

    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artis}&api_key=0782f662e9164b8a166e2538f2510fb0&format=json`)
   
 
  }
}
