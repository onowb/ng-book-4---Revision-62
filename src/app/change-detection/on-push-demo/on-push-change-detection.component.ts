import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushChangeDetectionComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }

}
