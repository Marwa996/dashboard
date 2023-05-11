import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',

  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  FormGroup!: FormGroup;
  TotalRowe!: number;

  constructor(private _fd: FormBuilder) {

  }
  ngOnInit():void{
    this.FormGroup = this._fd.group({itemRows:this._fd.array([this.initItemRow()]),});
  }
  initItemRow(){
    return this._fd.group({
      Name:[''],
      RollNo:[''],
      Class:[''],
      mobileNo:['']
    })  }

  addRowe(){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.push(this.initItemRow());
  }
  // deleteRow(index:number){
  //   const control = <FormArray>this.FormGroup.controls['itemRows'];
  //   if (control!=null){
  //     this.TotalRowe=control.value.length;
  //   }
  //   if (this.TotalRowe>1) {
  //     control.removeAt(index);
  //   }else{
  //     alert('one record is mandatory');
  //     return false;
  //   }
  // }

 
// New form 2
  
  // nemform: string | FormGroup = "FormGroup" + this.counter
  nemform: FormGroup = this._fd.group({})
  arry: Array<number> = []
  counter: number = 0;
 
add(){
  
  this.arry.push(this.counter)
  this.counter++;
  this.nemform = this._fd.group({
    Name: '',
    RollNo: '',
    Class: '',
    mobileNo: this._fd.array([])
  })
  console.log(this.arry)
}
  arrvalue: Array<object>=[]
  send(form:object){
  this.arrvalue.push(this.nemform.value)
   console.log(this.nemform.value)
    console.log(this.arrvalue)
    console.log(form)
 }

 



// New form 3

  // nemform: string | FormGroup = "FormGroup" + this.counter
  nemform3: FormGroup = this._fd.group({})
  arry3: Array<number> = []
  counter3: number = 0;

  add3() {

    this.arry.push(this.counter)
    this.counter++;
    this.nemform = this._fd.group({
      Name3: '',
      mobileNo: this._fd.array([])
    })
    console.log(this.arry)
  }
  arrvalue3: Array<object> = []
  send3(form: object) {
    this.arrvalue.push(this.nemform.value)
    console.log(this.nemform.value)
    console.log(this.arrvalue)
    console.log(form)
  }






}
