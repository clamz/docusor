import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items: any;

  constructor(private http: HttpClient) {
    this.http.get('/api/navigation').subscribe((data) => {
      this.items = data
    })
  }

  ngOnInit() {
  }

}
