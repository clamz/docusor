import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {
  @Input() items: any = []
  @Input () depth: number = 0
  constructor() { }

  ngOnInit() {
  }

}
