import { Component, OnInit } from '@angular/core';
import { CheckList } from 'src/app/model/check-list';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  modelChecklist: CheckList[] = [];
  getArrayType: any = [];

  constructor() { }

  ngOnInit(): void {
    this.actionList();
  }

  actionList() {
    this.modelChecklist = [
      { name: 'test1', isSelect: false },
      { name: 'test2', isSelect: false },
      { name: 'test3', isSelect: false },
      { name: 'test4', isSelect: false },
    ];
    console.log(this.modelChecklist)
  }

  onChangeCategory(event, cat) {
    this.getArrayType = cat.filter((el) => {
      return el.isSelect !== false;
    });
    this.getArrayType = this.getArrayType.map((el) => {
      return {id: el.id, name: el.name};
    });
  }

  test(){
    console.log(this.getArrayType)
  }

}
