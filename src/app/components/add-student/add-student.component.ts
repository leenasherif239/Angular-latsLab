import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  newStudent: Student = { id: '', name: '', email: '' };
  addSubscriber: any;
  @Input() students: Student[] = [];

  @Output() addedStudent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {}

  addStudent(myForm: any) {
    if (myForm.valid) {
      this.addSubscriber = this.studentsService
        .addStudent(this.newStudent)
        .subscribe((response:any) => {
          this.newStudent['id'] = response.id;
          this.students.splice(0, 0, this.newStudent);
          this.newStudent = { id: '', name: '', email: '' };
        });
    }
  }
}
