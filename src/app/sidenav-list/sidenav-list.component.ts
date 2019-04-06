import { Component, OnInit } from '@angular/core';

import { Menu } from '../models/menu';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {


  MENU_TREE: Menu[] = [{
    name: "Masters",
    childrens: [
      {
        name: "Ward"
      },
      {
        name: "Area"
      },
      {
        name: "Building"
      },
      {
        name: "Flat"
      },
      {
        name: "Building Member"
      },
      {
        name: "Upload Excel"
      }      
    ]
  }]

  constructor() { }

  ngOnInit() {
  }

}
