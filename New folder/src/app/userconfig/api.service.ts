import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY, of, throwError } from 'rxjs';

// Get Url
const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': API_URL
  }) 
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  // Post Method
  public postData() {
    return this.httpClient.post('http://localhost:8080/testapi', httpOptions)
    .pipe(catchError((error: HttpErrorResponse) => {
      const status = error.status;
      // console.log(status);
      // switch(status) {
      //   case 0: 
      //         console.log();
      //         break;
      //   case 404:
      //         console.log('not found');
      //         break;
      //   case 403:
      //         console.log('Access denied');
      //         break;;
      //   case 500:
      //         console.log('error 500');
      //         break;
      //   default:
      //         console.log('unknown error');
      // }
      return of([]);
    }));
  }
}
