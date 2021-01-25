import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  activatedMenu: string = 'home'

  @Input() sidebarMini: boolean

  ngOnInit(): void {}

  public activeMenu(name:string){
    this.activatedMenu = name
  }

}
