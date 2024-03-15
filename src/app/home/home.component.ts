import { Component, OnInit } from '@angular/core';
import { usersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  Users: any[] = [];
  userId:number = 5;
  constructor(private userService: usersService){}
  ngOnInit(): void {
    this.loadUsername(this.userId);
  }
  
  loadUsername(userId: number): void{
    this.userService.getUserById(userId).subscribe(() =>{
      (data) =>{
        console.log("Displaying username", data);
        this.Users = [data];
      }; 
      (error) =>{
        console.log("error displaying username", error);
      }
    });
  }
  
}
