import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Student } from '../classes/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'students-list',
  imports: [],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})

export class StudentsListComponent implements OnInit{

  @Input()description?: string;
  @Output()endText = new EventEmitter<string>;
  students?: Student[];
  title?: string = ''

  constructor(private readonly studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudent();
    // this.volunteerService.updateTitle('volunteer-list');
    // this.title = this.volunteerService.title;
  }

  sendTextToParent() {
    this.endText.emit('this ia all student');
  }
}
