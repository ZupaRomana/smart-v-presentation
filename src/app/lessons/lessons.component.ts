import { Component, OnInit } from '@angular/core';
import {Lesson} from '../models/lesson';
import {LessonsService} from '../lessons.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  lessons: Lesson[];
  shortLessons: Lesson[];
  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    // this.lessons$ = this.lessonsService.getLessons$();
    this.lessonsService.getLessons$().subscribe(lessons => this.lessons = lessons);
    this.lessonsService.getLessons$().pipe(
      map((lessons: Lesson[]) => lessons.filter(lesson => lesson.duration <= 30))
    ).subscribe(lessons => this.shortLessons = lessons);
    this.lessonsService.loadLessons();
  }

  onLessonClick(lesson: Lesson): void {
    //...
  }
}
