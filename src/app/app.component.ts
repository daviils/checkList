import { Component, OnInit } from '@angular/core';
import * as svg4everybody from 'svg4everybody/dist/svg4everybody';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    svg4everybody();
  }
}
