import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [
      {
        label: 'Главная',
        routerLink: '/',
      },
      {
        label: 'Профосмотры',
        icon: 'pi pi-fw pi-user',
        routerLink: '/prof-osmotr',
      },
      {
        label: 'Медкнижки',
        icon: 'pi pi-fw pi-book',
        routerLink: '/medical-books',
      },
      {
        label: 'Организациям',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Профилактический медицинский осмотр',
            routerLink: '/medical-checkup',
          },
          {
            label: 'Психиатрическое освидетельствование',
            routerLink: '/psychology',
          },
          {
            label: 'Личные медицинские книжки',
            routerLink: '/medical-books',
          },
          {
            label: 'Организация медицинского пункта на предприятии',
            routerLink: '/medical-clinic',
          },
        ],
      },
      {
        label: 'Справки',
        routerLink: '/certificates',
      },
      {
        label: 'О нас',
        routerLink: '/about',
      },
      {
        label: 'Контакты',
        routerLink: '/contacts',
        icon: 'pi pi-fw pi-at',
      },
    ];
  }

  ngOnInit(): void {}
}
