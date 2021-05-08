import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  @Input() student: Student = { id: '', name: '', email: '' };
  @Output() updateStudent: EventEmitter<boolean> = new EventEmitter();
  validAge: boolean = true;
  subscriber: any;
  prevStudent: Student = { id: '', name: '', email: '' };

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.prevStudent = this.student;
  }

  editStudent(myForm: any) {
   
    console.log("s", this.student);
    console.log("p", this.prevStudent);
    if (myForm.valid) {
      this.subscriber = this.studentsService
        .editStudent(this.student)
        .subscribe({
          next: (student) => {
            this.subscriber.unsubscribe();
            this.updateStudent.emit(true);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
