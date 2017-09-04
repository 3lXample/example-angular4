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
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent implements OnInit {
  // private variable
  private userID = 100; // last user id used for addition
  private listID = 100; // last user used for addition

  title = 'Subtraction Example';
  menus = ['Sub First', 'Sub Last', 'Sub Random'];
  info  = 'Count';
  users = [];
  count = 0;

  constructor(private userService: UserService) {}

  // Reset and update table user to initial state
  private reset(): void {
    this.userID = 100;
    this.listID = 100;
    this.count  = 0;
    this.userService.getByPage(1, userList => {
      this.users = userList.users;
    });
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

  // Add user to table at last row
  private addUserAtLast(): void {
    this.getNextUser(user => {
      this.users.push(user);
    });
  }

  // Subtract first row from table user and add user to table at last row
  private subFirst(): void {
    this.count++;
    this.users.shift();
    this.addUserAtLast();
  }

  // Subtract last row from table user and add user to table at last row
  private subLast(): void {
    this.count++;
    this.users.pop();
    this.addUserAtLast();
  }

  // Subtract random row from table user and add user to table at last row
  private subRandom(): void {
    const index = Math.floor(Math.random() * 100);
    this.count++;
    this.users.splice(index, 1);
    this.addUserAtLast();
  }

  // function for bind to child component
  onClickMenu(menu: string): void {
    switch (menu) {
      case 'reset':
        this.reset();
        break;
      case 'Sub First':
        this.subFirst();
        break;
      case 'Sub Last':
        this.subLast();
        break;
      case 'Sub Random':
        this.subRandom();
        break;
    }
  }

  // Initialize component
  ngOnInit() {
    this.reset();
  }

}
