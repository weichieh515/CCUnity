import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserLogin } from '../pages/user/user-login/user-login';
import { CourseList } from '../pages/course/course-list/course-list';
import { CourseTabs } from '../pages/course/course-tabs/course-tabs';
import { CourseAnnouncement } from '../pages/course/course-announcement/course-announcement';
import { CourseAssignment } from '../pages/course/course-assignment/course-assignment';
import { CourseMaterial } from '../pages/course/course-material/course-material';
import { CourseScore } from '../pages/course/course-score/course-score';






@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserLogin,
    CourseList,
    CourseTabs,
    CourseAnnouncement,
    CourseAssignment,
    CourseMaterial,
    CourseScore
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserLogin,
    CourseTabs,
    CourseList,
    CourseAnnouncement,
    CourseAssignment,
    CourseMaterial,
    CourseScore
  ],
  providers: []
})
export class AppModule {}
