import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CourseScore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-score',
  templateUrl: 'course-score.html'
})
export class CourseScore {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CourseScore Page');
  }

}
