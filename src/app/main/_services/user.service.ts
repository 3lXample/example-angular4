/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// User Model
export class User {
  id:        number;
  firstName: string;
  lastName:  string;
  phone:     string;
  dob:       number;

  constructor(id: number, firstName: string, lastName: string, phone: string, dob: number) {
    this.id        = id;
    this.firstName = firstName;
    this.lastName  = lastName;
    this.phone     = phone;
    this.dob       = dob;
  }
}

// UserList Model
class UserList {
  users: User[];
  page:  number;

  constructor(users: User[], page: number) {
    this.users = users;
    this.page  = page;
  }
}

// Http response type
interface UserApiResponse {
  users: User[];
  total: number;
}

// type for callback function
type CallbackGetUsers  = (users: User[])      => void;
type CallbackGetById   = (user: User)         => void;
type CallbackGetByPage = (userList: UserList) => void;

@Injectable()
export class UserService {
  // User list cache
  users: User[];

  constructor(private http: HttpClient) {}

  // Function to get user list from api and cache it
  private getUsers(callback: CallbackGetUsers): void {
    // If cache is undefined then get data from api, otherwise use cache
    if (this.users === undefined) {
      // Beware: if not use absolute URL, it will be relative to current page url location.
      // So it will not relative to this file
      this.http.get<UserApiResponse>('_api/user.json').subscribe(
        // Successful responses call the first callback.
        data => {
          this.users = data.users;
          callback(this.users);
        },
        // Errors will call this callback instead:
        err => {
          this.users = [];
          callback(this.users);
        }
      );
    } else {
      callback(this.users);
    }
  }

  // Function for clone object user to new object, so we not expose our cache object to outside
  private cloneUser(source: User): User {
    return new User(source.id, source.firstName, source.lastName, source.phone, source.dob);
  }

  // function for get user by id
  // user id start from 1, while array index start from 0
  // because user list in json is sorted by id asc
  // so we can use id = index + 1
  getById(id: number, callback: CallbackGetById): void {
    const index = id - 1;
    this.getUsers(users => callback(this.cloneUser(this.users[index])));
  }

  // Function for get current page user list
  // total users per page is 100
  getByPage(page: number, callback: CallbackGetByPage): void {
    this.getUsers(users => {
      const result = [];
      const start  = (page - 1) * 100;
      let i = 0;
      while (i < 100) {
        result.push(this.cloneUser(this.users[start + i]));
        i++;
      }
      callback(new UserList(result, page));
    });
  }

}
