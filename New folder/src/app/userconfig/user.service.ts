import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private apiService: ApiService) { }

  // Get user details Based on the ID
  getUserList() {
    return this.apiService.postData();
  }
}