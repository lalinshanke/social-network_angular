import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-content-section',
  templateUrl: './main-content-section.component.html',
  styleUrls: ['./main-content-section.component.css']
})
export class MainContentSectionComponent implements OnInit {

  @Input() dataList: any;


  teamName = [{
    name: 'Dhoni',
    address: 'chennai'
  },
  {
    name: 'Suresh',
    address: 'Delhi'
  },
  {
    name: 'raja',
    address: 'mumbai'
  }
]

  constructor() {}



  ngOnInit() {}
}
