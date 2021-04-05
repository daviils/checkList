import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {BaseComponent} from 'src/app/base/base.component';
import {CheckList} from 'src/app/model/check-list';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
  modelChecklistAll: CheckList[] = [];
  pushCheck: CheckList = new CheckList();
  activeAll = false;


  constructor(public router: Router,
              public loading: NgxSpinnerService,
              public translate: TranslateService) {
    super(router, loading, translate);
  }

  ngOnInit() {
    this.actionList();
  }

  actionList() {
    this.modelChecklistAll = [
      {name: 'test1', isSelect: false},
      {name: 'test2', isSelect: false},
      {name: 'test3', isSelect: false},
      {name: 'test4', isSelect: false},
    ];
  }

  onChangeCategory(event, cat) {
    console.log(this.modelChecklistAll);
  }

  actionNew() {
    console.log(this.pushCheck.name);
    this.modelChecklistAll.push({name: this.pushCheck.name, isSelect: false});
    $('#modalNoteResume').modal('hide');
    this.pushCheck = new CheckList();

  }

  test() {
    this.activeAll = !this.activeAll;
  }


  actionModal() {
    $('#modalNoteResume').modal('show');
  }
}
