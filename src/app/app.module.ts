import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/shared/search/search.component';
import { DataInfoComponent } from './components/shared/data-info/data-info.component';
import { FieldSorterPipePipe } from './pipes/field-sorter-pipe.pipe';
import { StudentModalComponent } from './components/student/modal/student-modal/student-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InstructorModalComponent } from './components/instructor/instructor-modal/instructor-modal.component';
import { CourseModalComponent } from './components/course/course-modal/course-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    InstructorComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DataInfoComponent,
    FieldSorterPipePipe,
    StudentModalComponent,
    InstructorModalComponent,
    CourseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
