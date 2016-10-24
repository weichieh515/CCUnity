import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CourseMaterial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-material',
  templateUrl: 'course-material.html'
})
export class CourseMaterial {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CourseMaterial Page');
  }

}
