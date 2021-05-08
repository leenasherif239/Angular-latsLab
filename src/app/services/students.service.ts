import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  readonly baseURL: string =
    'https://jsonplaceholder.typicode.com/users';

  constructor(private client: HttpClient) {}

  getStudents() {
    let response = this.client.get(this.baseURL, { observe: 'response' });

    return response;
  }

  getStudentById(studentId: string) {
    return this.client.get(`${this.baseURL}/${studentId}`);
  }

  addStudent(newStudent: Student) {
    let response = this.client.post(this.baseURL, JSON.stringify({
      name: newStudent.name,
      email: newStudent.email,
      id:newStudent.id
    }));
    console.log(response);
    return response;
  }

  editStudent(student: Student) {
    return this.client.patch(`${this.baseURL}/${student.id}`, student);
  }

  deleteStudent(studentId: string) {
    return this.client.delete(`${this.baseURL}/${studentId}`);
  }
}
