import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { CourseAnnouncement } from '../course-announcement/course-announcement';
import { CourseAssignment } from '../course-assignment/course-assignment';
import { CourseMaterial } from '../course-material/course-material';
import { CourseScore } from '../course-score/course-score';

import { CourseList } from '../course-list/course-list';

  
@Component({
  templateUrl: 'course-tabs.html'
})

export class CourseTabs {
  @ViewChild(Nav) nav: Nav;
  
  tab1Root: any = CourseAnnouncement;
  tab2Root: any = CourseAssignment;
  tab3Root: any = CourseMaterial;
  tab4Root: any = CourseScore;

  constructor(public navCtrl: NavController) {

  }

  goBack() {
    console.log('back');
    this.nav.setRoot(CourseList);
 }

}
