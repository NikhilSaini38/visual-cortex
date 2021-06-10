import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('void', style({ left: '0%', opacity: '0%' })),
      state('*', style({ left: '0%', opacity: '100%' })),
      state('right', style({ left: '50%' })),
      transition('*=>*', animate(300)),
    ]),
    trigger('fadeInOut', [
      state('void', style({ opacity: '0%' })),
      transition('void<=>*', [animate(300)]),
    ]),
  ],
})
export class AppComponent {
  title = 'visualcortex';
  resultScreen = false;
  backgroundPosition = 'left';
  unMountleft: boolean = false;
  showResults() {
    this.resultScreen = true;
    this.backgroundPosition = 'right';
  }
  reset() {
    this.resultScreen = false;
    this.backgroundPosition = 'left';
  }
}
