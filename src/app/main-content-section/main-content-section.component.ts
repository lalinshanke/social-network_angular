import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main-content-section',
  templateUrl: './main-content-section.component.html',
  styleUrls: ['./main-content-section.component.css']
})
export class MainContentSectionComponent implements OnInit, OnChanges {

  @Input() dataList: any;

  constructor() {
    console.log('data list', this.dataList);
  }

  ngOnInit() {}
  ngOnChanges(){
    console.log('data list', this.dataList);
  }
}
