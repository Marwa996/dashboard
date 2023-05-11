import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
 
  // @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  
  // collapsed = false;
  // collapsed = true;
  // screenWidth=0;
  // navData = navbarData


 
//   togglecollapse(): void {
// this.collapsed = !this.collapsed;
//     this.onToggleSideNav.emit({
//       collapsed: this.collapsed, screenWidth: this.screenWidth
//     })
//   }

  // closeSidenav(): void {
  //   this.collapsed = false;
  //   this.onToggleSideNav.emit({
  //     collapsed: this.collapsed, screenWidth: this.screenWidth
  //   })
  // }

// 

  collapsed = false;
  // collapsed = true;
  screenWidth = 0;
  navData = navbarData

  togglecollapse(): void {
    this.collapsed = !this.collapsed;
    
  }


  closeSidenav(): void {
    this.collapsed = false;
    
  }
}



