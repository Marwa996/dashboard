import { Component, Input } from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent {
  isSideNavCollapsed = false;
  screenWidth=0;
  onToggleSideNav(data: SideNavToggle): void {
this.screenWidth=data.screenWidth;
this.isSideNavCollapsed=data.collapsed;
  }

 
}
