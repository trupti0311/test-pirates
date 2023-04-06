import { Component } from '@angular/core';
import { UserService } from 'src/app/userconfig/user.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe((response: any) => {
      console.log('TESTING');
      console.log(response);
    });
  }
}
