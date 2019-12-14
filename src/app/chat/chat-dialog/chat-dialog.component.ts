import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

import { ChatService } from '../chat.service';
import { Message } from '../message';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .pipe(
          scan((acc, val) => 
              acc.concat(val) 
            )
         );

  }

  sendMessage() {
    if (this.formValue){
      this.chat.converse(this.formValue);
      this.formValue = '';
    }
  }
}
