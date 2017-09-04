/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User }                                   from '../_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() title: string;
  @Input() menus: string[];
  @Input() info:  string;
  @Input() users: User[];
  @Input() value: number;

  @Output() onClickMenu = new EventEmitter<string>();

  trackById(index: number, user: User): number {
    return user.id;
  }

  clickMenu($event, menu: string) {
    $event.preventDefault();
    this.onClickMenu.emit(menu);
  }
}
