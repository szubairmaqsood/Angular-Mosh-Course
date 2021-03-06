import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`
    <h2>{{"Title: " + title}}</h2>
    <ul>
       <li>{{courses[0]}}</li>
       <li>{{courses[1]}}</li>
       <li>{{courses[2]}}</li>
    </ul>
    <ol>
        <li *ngFor="let course of courses">{{course}}</li>
    </ol>
    `
})
export class CoursesComponent{
    title:string ="List of courses";
    courses:string[];

    constructor(service:CoursesService){
        //let service = new CoursesService();
        this.courses = service.getCourses();
        //this.courses= ["course1","course2","course3"];
    }

}