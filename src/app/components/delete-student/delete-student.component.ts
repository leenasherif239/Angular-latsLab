import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  @Input() student:any;
  subscriber: any;
  @Input() students: Student[] = [];

  constructor(
    private studentsService: StudentsService
  ) {  
}

  ngOnInit(): void {
  }

  deleteStudent(studentId:string) {
    this.subscriber = this.studentsService
      .deleteStudent(studentId)
      .subscribe({
        next: () => {
          let index = this.students.indexOf(this.student);  
          this.students.splice(index, 1);  
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

}
