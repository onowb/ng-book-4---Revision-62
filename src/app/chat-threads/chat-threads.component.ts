import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ThreadService} from '../thread/threads.service';


@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;

  constructor(public threadsService: ThreadService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {}

}
