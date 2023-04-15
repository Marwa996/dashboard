import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bodytabel',
  templateUrl: './bodytabel.component.html',
  styleUrls: ['./bodytabel.component.css']
})
export class BodytabelComponent {
  @Input() Datatebal: any;
  
  @Output() show_data_body: EventEmitter<string>;

constructor( ){
  this.show_data_body = new EventEmitter<string>()
}

show(){
  this.show_data_body.emit("Marwa")
}


 
}
