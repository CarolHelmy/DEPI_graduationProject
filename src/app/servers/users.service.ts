import { Injectable } from '@angular/core';

export interface User {
  userId: number;
  userName: string;
  profilePictureUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      userId: 1,
      userName: "John Doe",
      profilePictureUrl: "https://i.pinimg.com/control/474x/3b/a8/9b/3ba89b3065a1afec8f126aa32ef5a1c0.jpg"
    },
    {
      userId: 2,
      userName: "Jane Smith",
      profilePictureUrl: "https://i.pinimg.com/control/236x/48/df/7b/48df7b68d6561655d4ddbc8da90fc9d7.jpg"
    },
    {
      userId: 3,
      userName: "Alice Johnson",
      profilePictureUrl: "https://i.pinimg.com/control/236x/e2/96/97/e29697f9bc4c829850f6c4e778b5174b.jpg"
    },
    {
      userId: 4,
      userName: "Bob Brown",
      profilePictureUrl: "https://i.pinimg.com/control/236x/f8/8a/a7/f88aa7341555224998b4473ea9892410.jpg"
    }
  ];

  constructor() {}

  // Method to get the list of users
  getUsers(): User[] {
    return this.users;
  }
}
