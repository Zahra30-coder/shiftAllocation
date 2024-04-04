import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShiftserService {

  public readonly url = 'http://localhost:3000/shift';

  public shiftInfo = '/';
  public deleteInfo = '/delShift';

    // Msg Functionality
    private successMessageSubject = new Subject<string>();
    successMessage$ = this.successMessageSubject.asObservable();
  
    setSuccessMessage(message: string) {
      this.successMessageSubject.next(message);
    }

  constructor(private http: HttpClient) {}

  public getEmp(): Observable<any> {
    return this.http.get(this.url + this.shiftInfo);
  } 
   
  public addEmp(blog: any): Observable<any> {
    return this.http.post(this.url + this.shiftInfo, blog);
  }

  public deleteEmp(Id: string): Observable<any> {
    return this.http.delete(this.url + this.shiftInfo + "/" + Id);
  }
  
  getEmployeeById(Id: any) {
    return this.http.get(this.url + this.shiftInfo + "/" + Id);
  }

  updateEmployeeData(Id: any, blog: any) {
    
    return this.http.put(this.url + this.shiftInfo + "/" + Id, blog);
  }

  
  private deletedShifts: any[] = [];

  getDeletedShifts(): any[] {
    return this.deletedShifts;
  }

  public addDelShift(blog: any): Observable<any> {
    return this.http.post(this.url + this.deleteInfo, blog);
  }
  
}
