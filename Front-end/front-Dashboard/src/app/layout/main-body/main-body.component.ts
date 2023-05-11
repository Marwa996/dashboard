import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;


  getBodyClass(): string {
    let styleCalass = '';
    
    if (this.collapsed && this.screenWidth > 768) {
      styleCalass = 'body-trimmed'
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleCalass = 'body-md-screen'
    }
    return styleCalass;
  }



}
