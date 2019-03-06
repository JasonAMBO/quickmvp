import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { customer } from '../models/customer';
import { userLogin } from '../models/userLogin';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppPage } from 'e2e/src/app.po';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  baseUrl: string = "http://localhost:5327/api/customer/";
  ServiceCust: customer[];
  currUser: userLogin;

  constructor(protected http: HttpClient) { }

  private handleError(operation: String) {
    return (err: any) => {
      let errMsg = `error in ${operation}() `;
      console.log(`${errMsg}:`, err)
      if (err instanceof HttpErrorResponse) {
        // you could extract more info about the error if you want, e.g.:
        console.log(`status: ${err.status}, ${err.statusText}`);
        alert(`status: ${err.status}, ${err.error.Message}`);
        // errMsg = ...
      }
      return Observable.throw(errMsg);
    }
  }

  getAllCustomers(): Observable<customer[]> {
    //Create headers component
    let headers: HttpHeaders = new HttpHeaders();
    //Get logged on user token
    this.currUser = JSON.parse(localStorage.getItem('currentUser'));
    headers = headers.append('Content-type', 'application/json');
    //add toket to header
    //if(this.currUser !== null)
    //{
      headers = headers.append('Authorization', 'Bearer ' + this.currUser.token);
    //}
 
    // debugger;
    return this.http.get<customer[]>(this.baseUrl + 'GetAllCustomer', { headers: headers }).pipe(
      catchError(this.handleError('getAllCustomers'))
    );
  }

  createCustomer(newCustomer: customer): Observable<string> {
    let headers: HttpHeaders = new HttpHeaders();

    this.currUser = JSON.parse(localStorage.getItem('currentUser'));

    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.currUser.token);
    //debugger;
    return this.http.post<string>(this.baseUrl + 'CreateCustomer', newCustomer, { headers: headers }).pipe(
      catchError(this.handleError('createCustomer'))
    );
  }

  deleteCustomer(deleteCustomer: customer): Observable<string> {
    let headers: HttpHeaders = new HttpHeaders();
    this.currUser = JSON.parse(localStorage.getItem('currentUser'));

    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.currUser.token);

    let httpParams = new HttpParams();

    Object.keys(customer).forEach(function (key) {
      httpParams = httpParams.append(key, customer[key]);
    });

    return this.http.delete<string>(this.baseUrl + 'DeleteCustomer', { params: httpParams, headers: headers }).pipe(
      catchError(this.handleError('DeleteCustomer'))
    );
  }

  getCustomerbyID(CustID: number): Observable<customer> {
    let headers: HttpHeaders = new HttpHeaders();
    this.currUser = JSON.parse(localStorage.getItem('currentUser'));

    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.currUser.token);

    let httpParams = new HttpParams();

    Object.keys(CustID).forEach(function (key) {
      httpParams = httpParams.append(key, customer[key]);
    });

    return this.http.get<customer>(this.baseUrl + 'GetCustomerbyID', { params: httpParams, headers: headers }).pipe(
      catchError(this.handleError('getCustomerbyID'))
    );
  }


}
