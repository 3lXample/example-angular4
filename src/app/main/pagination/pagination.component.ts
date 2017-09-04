/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component, OnInit } from '@angular/core';

import { UserService }       from '../_services/user.service';

@Component({
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  title = 'Pagination Example';
  menus = ['Previous', 'Next'];
  info  = 'Page';
  users = [];
  page  = 1;

  constructor(private userService: UserService) {}

  // Get data users for current page from userService
  private updateTableUser(): void {
    this.userService.getByPage(this.page, userList => this.users = userList.users);
  }

  // Reset and update table user to page 1
  private reset(): void {
    this.page = 1;
    this.updateTableUser();
  }

  // Goto next page and update table user
  // max page is 100, if current page is 100 next page will be page 1
  private nextPage(): void {
    this.page++;
    if (this.page > 100) {
      this.page = 1;
    }
    this.updateTableUser();
  }

  // Goto prev page and update table user
  // max page is 100, if current page is 1 prev page will be page 100
  private prevPage(): void {
    this.page--;
    if (this.page < 1) {
      this.page = 100;
    }
    this.updateTableUser();
  }

  // function for bind to child component
  onClickMenu(menu: string): void {
    switch (menu) {
      case 'reset':
        this.reset();
        break;
      case 'Previous':
        this.prevPage();
        break;
      case 'Next':
        this.nextPage();
        break;
    }
  }

  // Initialize component
  ngOnInit() {
    this.reset();
  }

}
