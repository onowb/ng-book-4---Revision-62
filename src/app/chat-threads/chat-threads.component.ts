import {Component, Inject, OnInit} from '@angular/core';
import {Store} from 'redux';

import {Thread} from '../thread/thread.model';
import {AppStore} from '../app.store';
import {AppState} from '../app.reducer';
import {getAllThreads, getCurrentThread} from '../thread/threads.reducer';
import * as ThreadActions from '../thread/thread.action';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
  threads: Thread[];
  currentThreadId: string;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe( () => this.updateState());
    this.updateState();
  }

  updateState() {
    const state = this.store.getState();

    // Store the threads list
    this.threads = getAllThreads(state);

    // We want to mark the current thread as selected,
    // so we store the currentThreadId as a value
    this.currentThreadId = getCurrentThread(state).id;
  }

  handleThreadClicked(thread: Thread) {
    this.store.dispatch(ThreadActions.selectThread(thread));
  }

  ngOnInit() {
  }

}
