/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menus = [
    { href: '/',            icon: '_assets/3lXample_icon-20x20.png', iconAlt: 'home' },
    { href: '/pagination',  text: 'Pagination' },
    { href: '/addition',    text: 'Addition' },
    { href: '/subtraction', text: 'Subtraction' }
  ];
}
