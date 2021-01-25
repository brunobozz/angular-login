import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-login';

  sidebarMini: boolean = false;

  constructor(private toastr: ToastrService) {}
  
  ngOnInit(): void {}

  onChangeSidebar(): void {
    this.sidebarMini = !this.sidebarMini;
  }

  @HostListener('window:resize')
  private onResize() {
    if (window.innerWidth < 800) {
      this.sidebarMini = true;
    } else {
      this.sidebarMini = false;
    }
  }

  public toasterBtn(){
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
