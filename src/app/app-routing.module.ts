import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { SearchComponent } from './components/shared/search/search.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [ 
{ path: 'home', component: HomeComponent},
{ path: 'student', component: StudentComponent},
{ path: 'instructor', component: InstructorComponent},
{ path: 'course', component: CourseComponent},
{ path: 'search/:nombre', component: SearchComponent},
{ path: '' , pathMatch: 'full', redirectTo: 'home'},
{ path: '**' , pathMatch: 'full', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
