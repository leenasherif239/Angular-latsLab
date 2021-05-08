import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: any;
  subscriber: any;
  @Input() students:any;

  constructor(
    private myActivatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {
  }

  ngOnInit(): void {
    // this.getStudent();
  }

  // getStudent() {
  //   this.subscriber = this.studentsService
  //     .getStudentById(this.studentId)
  //     .subscribe({
  //       next: (student) => {
  //         this.student = student;
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  // }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
  }
}
