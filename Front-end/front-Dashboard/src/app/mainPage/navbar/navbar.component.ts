import { Component } from '@angular/core';
interface Notifications {
  image: string;
  name: string;
  mission:string;
  time: string;
  }
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  Data_Notifications: Notifications[]=[
    {
      image:'/assets/images/Profile Pictures/avatar-1.jpg' ,
      name: '  نرمين الجبار',
      mission:'اضاف مهمة جديدة',
      time:'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-10.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-14.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-17.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-2.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-3.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-4.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }, {
      image: '/assets/images/Profile Pictures/avatar-5.jpg',
      name: '  نرمين الجبار',
      mission: 'اضاف مهمة جديدة',
      time: 'منذ 4 ثواني',
    }
  ]
  

}
