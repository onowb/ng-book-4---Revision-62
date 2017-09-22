import {Component, Inject, OnInit} from '@angular/core';
import * as Redux from 'redux';

import {AppStore} from '../app.store';
import {AppState} from '../app.reducer';
import {getUnreadMessagesCount} from '../thread/threads.reducer';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe( () => this.updateState());
    this.updateState();
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }

  ngOnInit() {
  }

}
