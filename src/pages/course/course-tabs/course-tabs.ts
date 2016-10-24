import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseAnnouncement } from '../course-announcement/course-announcement'
import { CourseAssignment } from '../course-assignment/course-assignment'
import { CourseMaterial } from '../course-material/course-material'
import { CourseScore } from '../course-score/course-score'

/*
  Generated class for the CourseTabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  templateUrl: 'course-tabs.html'
})
export class CourseTabs {

  tab1Root: any = CourseAnnouncement;
  tab2Root: any = CourseAssignment;
  tab3Root: any = CourseMaterial;
  tab4Root: any = CourseScore;

  constructor(public navCtrl: NavController) {

  }

  goBack() {
    console.log('back');
   this.navCtrl.pop();
 }

}
