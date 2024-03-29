import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';


@NgModule({
  declarations: [
    ChatDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ ChatDialogComponent ], 
  providers: [ChatService]
})
export class ChatModule { }
