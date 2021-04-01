import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { CheckList } from 'src/app/model/check-list';

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
  getArrayType: any = [];
  modelChecklist: CheckList[] = [];


  constructor(public router: Router,
    public loading: NgxSpinnerService,
    public translate: TranslateService) {
    super(router, loading, translate)
  }

  ngOnInit() {
    this.actionList();
  }

  actionList() {
    this.modelChecklist = [
      { name: 'test1', isSelect: false },
      { name: 'test2', isSelect: false },
      { name: 'test3', isSelect: false },
      { name: 'test4', isSelect: false },
    ];
  }

  onChangeCategory(event, cat) {
    this.getArrayType = cat.filter((el) => {
      return el.isSelect !== false;
    });
    this.getArrayType = this.getArrayType.map((el) => {
      return { name: el.name, isSelect: el.isSelect };
    });
    console.log(this.modelChecklist)
  }

  actionNew() {
    $('#modalNoteResume').modal('show');
  }

  test() {
    console.log(this.getArrayType)
  }


}
