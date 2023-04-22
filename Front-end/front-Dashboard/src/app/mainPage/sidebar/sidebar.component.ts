import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from '../../test/nav2/nav-data';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  // collapsed = true;
  screenWidth = 0;
  navData = navbarData

  togglecollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed, screenWidth: this.screenWidth
    })
  }
 

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed, screenWidth: this.screenWidth
    })
  }
}
