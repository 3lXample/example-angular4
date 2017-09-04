/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../_services/user.service';

// type for callback function
type CallbackGetNextUser = (user: User) => void;

@Component({
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  // private variable
  private userID = 0; // last user id used for addition
  private listID = 0; // last user used for addition

  title = 'Addition Example';
  menus = ['Add Sequence', 'Add Random'];
  info  = 'Count';
  users = [];
  count = 0;

  constructor(private userService: UserService) {}

  // Reset and update table user to initial state
  private reset(): void {
    this.userID = 0;
    this.listID = 0;
    this.users  = [];
    this.count  = this.users.length;
  }

  // Get next user for subtraction
  private getNextUser(callback: CallbackGetNextUser): void {
    this.userID++;
    this.listID++;
    if (this.userID > 10000) {
      this.userID = 1;
    }
    this.userService.getById(this.userID, user => {
      user.id = this.listID;
      callback(user);
    });
  }

  // Add user to table user at last row
  private addUser(): void {
    this.getNextUser(user => {
      this.users.push(user);
      this.count = this.users.length;
    });
  }

  // Add user to table user at random row
  private addUserRandom(): void {
    const length = this.users.length;
    const index  = Math.floor(Math.random() * length);
    this.getNextUser(user => {
      this.users.splice(index, 0, user);
      this.count = this.users.length;
    });
  }

  // function for bind to child component
  onClickMenu(menu: string): void {
    switch (menu) {
      case 'reset':
        this.reset();
        break;
      case 'Add Sequence':
        this.addUser();
        break;
      case 'Add Random':
        this.addUserRandom();
        break;
    }
  }

  // Initialize component
  ngOnInit() {
    this.reset();
  }

}
