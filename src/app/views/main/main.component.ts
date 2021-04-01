import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { CheckList } from 'src/app/model/check-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {


  constructor(public router: Router,
    public loading: NgxSpinnerService,
    public translate: TranslateService) {
    super(router, loading, translate)
  }

  ngOnInit() {
    
  }


}
