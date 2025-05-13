import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsManagerComponent } from '../students-manager/students-manager.component';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StudentsManagerComponent,StudentsListComponent],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson_1';

  endText?: string;

  updateTextFromChild(event: string) {
    this.endText = event
  }
}
