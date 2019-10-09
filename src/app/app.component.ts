import { Component,  } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loanApp';
  activeTab$: Subject<string> = new Subject();
  switchTab(tab) {
    this.activeTab$.next(tab);
  }
}
