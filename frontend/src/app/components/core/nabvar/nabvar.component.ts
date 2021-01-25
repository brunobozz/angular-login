import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss'],
})
export class NabvarComponent implements OnInit {
  @Output() eventChangeSidebar = new EventEmitter();

  @Input() sidebarMini: boolean

  constructor() {}

  ngOnInit(): void {}
}
