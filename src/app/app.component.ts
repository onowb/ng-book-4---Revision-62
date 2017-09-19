import { Component } from '@angular/core';
import {MessagesService} from './message/messages.service';
import {ThreadService} from './thread/threads.service';
import {UserService} from './user/users.service';
import {ChatExampleData} from './data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadService,
              public usersService: UserService) {
    ChatExampleData.init(messagesService, this.threadsService, this.usersService);
  }
}
