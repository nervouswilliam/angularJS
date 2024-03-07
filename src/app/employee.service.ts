import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<string[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  createEmployees(employeeData: any[]): Observable<string[]>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any[]>(this.apiUrl, employeeData, {headers});
  }

  deleteEmployees(employeeId: number): Observable<any[]>{
    const deleteUrl = `${this.apiUrl}/${employeeId}`;
    return this.http.delete<any[]>(deleteUrl);
  }

  updateEmployees(employeeId: number, updatedData: any): Observable<any[]>{
    const updateUrl = `${this.apiUrl}/${employeeId}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<any[]>(updateUrl, updatedData, {headers});
  }

}
