import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
  AfterViewChecked,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HighlightService } from '../services/highlight.service';

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'documentation',
  templateUrl: './documentation.component.html',
})
@Injectable()
export class DocumentationComponent implements OnInit, OnDestroy, AfterViewChecked {
  public highlighted: boolean;
  public routeSub: any;
  public docContent: any;
  public highlightService: HighlightService;

  @ViewChild('tref', {read: ElementRef}) public tref: ElementRef;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.highlightService = new HighlightService();

  }
  public ngOnInit() {
    this.routeSub = this.route.queryParams.subscribe( (params) => {
      this.highlighted = false;
      this.docContent = null;
      this.http.get(`/api/doc/${params.path}`, {responseType: 'text'}).subscribe((data) => {

        this.docContent = data;
      }, (error) => {
        console.log(error);
      });
    });
  }

  public ngAfterViewChecked() {
    console.log('hoy : ', this.highlighted);
    if (this.docContent && !this.highlighted) {
      const preElts = this.tref.nativeElement.querySelectorAll('pre');
      preElts.forEach((preElt) => {
        preElt.className = `${preElt.className} line-numbers`;
      });
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
