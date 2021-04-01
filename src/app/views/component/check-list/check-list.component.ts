import { Component, Input, OnInit } from '@angular/core';
import { CheckList } from 'src/app/model/check-list';


@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  getArrayType: any = [];
  @Input() model: CheckList[];



  constructor() { }

  ngOnInit() {
    console.log(this.model);
  }


  onChangeCategory(event, cat) {
    this.getArrayType = cat.filter((el) => {
      return el.isSelect !== false;
    });
    this.getArrayType = this.getArrayType.map((el) => {
      return { id: el.id, name: el.name };
    });
  }

  test() {
    console.log(this.getArrayType)
  }

}
