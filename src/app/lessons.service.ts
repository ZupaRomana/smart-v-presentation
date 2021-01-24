import { Injectable } from '@angular/core';
import {Lesson} from './models/lesson';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessons: Lesson[] = [{
    title: 'Angular components',
    description: 'components',
    duration: 60
  },
    {
      title: 'Angular modules',
      description: 'modules',
      duration: 60
    },
    {
      title: 'Angular pipes',
      description: 'pipes',
      duration: 30
    }];

  lessons$: Subject<Lesson[]> = new Subject<Lesson[]>();

  getLessons$(): Observable<Lesson[]> {
    return this.lessons$.asObservable();
  }

  loadLessons(): void {
    this.lessons$.next(this.lessons);
  }
}
