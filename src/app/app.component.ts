import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentCollection: Array<object> = [];
  messages;
  printing = false;
  
  studentRecord;

  private checkPatterns(value:any, pattern: RegExp): boolean {
    if (pattern.test(value)) {
      return true;
    }
    else {
      return false;
    }
  }

  test(data, event) {
    console.log(event);
    if (event.mode === 'add') {
      this.studentRecord = data;
      console.log(this.studentRecord);
      this.studentCollection.push(this.studentRecord);
      //this.addStudentEntry(data);
    }
  }

  addStudentEntry(data) {
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;
    this.studentRecord = data;
    if (this.checkPatterns(this.studentRecord.studNo,studNumberPattern) && 
      this.checkPatterns(this.studentRecord.studFname,stringPattern) &&
      this.checkPatterns(this.studentRecord.studLname,stringPattern) &&
      this.checkPatterns(this.studentRecord.studProg,stringPattern) &&
      this.checkPatterns(this.studentRecord.studYr,studYearPattern)) {
        this.studentCollection.push(this.studentRecord);
        this.messages = null;
        this.clearValues();
        console.log("Hey");
      } else {
        this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
      }
  }

  listStudents() {
    this.printing = true;
    console.log('Showing Stored Students');
    return this.printing;
  }

  clearValues(): void {
    this.studentRecord.studNo = null;
    this.studentRecord.studFname = null;
    this.studentRecord.studLname = null;
    this.studentRecord.studProg = null;
    this.studentRecord.studYr = null;
  }

}
