import { Component, Input } from '@angular/core';
import { Side_interface } from 'src/app/shared/models/Side_interface';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length>0" class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
          <a  class="sublevel-nav-link"
          *ngIf="item.items && item.items.length>0"
          >
          <i class="sublevel-link-icon fa fa-circle">
            <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
            <i class="menu-collapse-icon" *ngIf="item.items &&collapsed"  [ngClass]="!item.expanded? 'fa fa-angle-right': 'fal sa-angle-down'"></i>
          </i>
        </a>
        <a  class="sublevel-nav-link"
        *ngIf="!item.items || (item.items && item.items.length ===0)"
        [routerLink]="[item.routelink]"
        routerLinkActive="active-sublevel"
        [routerLinkActiveOptions]="{exact:true}"]
        >
        <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>   
      </a>
  
      </li>
</ul>
  `,
  styleUrls: []
})
export class SublevelMenuComponent {
  @Input() data: Side_interface = {
    routelink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() expended: boolean | undefined;
  @Input() multiple: boolean = false;


}
