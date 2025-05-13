import { Injectable } from '@angular/core';
import { Student } from '../classes/student';

const students: Student[]=[
    {firstName: 'rachel', lastName: 'cc', id: 23},
  {firstName: 'tamar', lastName: 'ff', id: 60},
  {firstName: 'neomi', lastName: 'ss', id: 12}
]

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  title?: string;

  constructor() { }

  public getAllStudent():Student[]{
    return students;
  }

    updateTitle(title: string) {
    this.title = title;
  }
}


///import { Injectable } from '@angular/core';
// import { Volunteer } from '../../classes/volunteer';

// const volunteers: Volunteer[] = [
//   {firstName: 'rachel', lastName: 'cc', age: 23},
//   {firstName: 'tamar', lastName: 'ff', age: 60},
//   {firstName: 'neomi', lastName: 'ss', age: 12}
// ]

// @Injectable({
//   providedIn: 'root'
// })
// export class VolunteerService {

//   title?: string;

//   constructor() { }

//   public getAllVolunteer(): Volunteer[] {
//     return volunteers;
//   }

//   updateTitle(title: string) {
//     this.title = title;
//   }
// }
