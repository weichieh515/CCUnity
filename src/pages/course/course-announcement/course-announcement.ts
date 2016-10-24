import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseTabs } from '../course-tabs/course-tabs';
import { CourseList } from '../course-list/course-list';
/*
  Generated class for the CourseAnnouncement page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-announcement',
  templateUrl: 'course-announcement.html'
})
export class CourseAnnouncement {
  public courseTabs: CourseTabs;s
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CourseAnnouncement Page');
  }

 goBack() {
    console.log('back');
    this.courseTabs.goBack();
    //this.nav.setRoot(CourseList);
 }

}
