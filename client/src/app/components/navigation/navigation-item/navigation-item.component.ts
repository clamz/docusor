import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import 'prismjs';

import { ActivatedRoute } from '@angular/router';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: [ './navigation-item.component.scss' ],
})

export class NavigationItemComponent implements OnInit {
  @Input() item: any = {}
  @Input() depth: number = 0
  isFolder: boolean;
  isActive: boolean;
  constructor(private route: ActivatedRoute) {
  }
  public ngOnInit() {
    this.isFolder = this.item.children && this.item.children.length > 0
    this.route.queryParams.subscribe(params => {
      this.item.isOpen =  (params.path && this.isFolder && params.path.startsWith(this.item.path))
      this.isActive = (!this.isFolder && this.item.path === params.path)
    })
  }

  toggleFolder(item) {
    item.isOpen = !item.isOpen
  }
}
