import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: [ './navigation-list.component.scss'],
})

export class NavigationListComponent implements OnInit {
  @Input() items: any = []
  @Input () depth: number = 0
  constructor() {
  }
  public ngOnInit() {
  }

}
