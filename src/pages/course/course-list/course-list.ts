import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseTabs } from '../course-tabs/course-tabs';


/*
  Generated class for the CourseList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-list',
  templateUrl: 'course-list.html'
})
export class CourseList {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello CourseList Page');
  }

  OpenPage(event, item) {
    this.navCtrl.push(CourseTabs, {
      item: item
    })
  };

}
