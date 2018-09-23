import {
  Component,
  OnInit,
  Injectable,
} from '@angular/core';


import { HttpClient } from '@angular/common/http';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ],
})

@Injectable()
export class NavigationComponent implements OnInit {
  items: {};
  constructor(private http: HttpClient) {
    this.http.get('/api/navigation').subscribe((data) => {
      this.items = data
    })
  }

  public ngOnInit() {
  }

}
