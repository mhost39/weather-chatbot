import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Message } from './message'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
   token = environment.dialogflow.angularBot;
   client = new ApiAiClient({ accessToken: this.token });
   conversation = new BehaviorSubject<Message[]>([]);

   constructor(private http: HttpClient) { }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
          .then(res => {
            if (res.result.parameters){
              this.getWeatherTemp(res.result.parameters["geo-city"])
                .subscribe(
                  response => {
                    //convert temp from F to C
                    let tem = Math.floor((response.main.temp - 32) * 5 / 9)
                    const speech = `The Weather For ${res.result.parameters["geo-city"]} is ${tem} C`;
                    const botMessage = new Message(speech, 'bot');
                    this.update(botMessage);
                  }
                )
            }
            else {
              const speech = res.result.fulfillment.speech;
              const botMessage = new Message(speech, 'bot');
              this.update(botMessage);
            }
          });
               
  }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

 // get temp from openweathermap by city
  getWeatherTemp(cityName: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
      'weather?q=' + cityName +
      '&appid=' + environment.API_KEY +
      '&units=' + environment.units
    )
  }
}
