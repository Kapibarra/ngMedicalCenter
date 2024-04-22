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
            label: 'Телефон: 8(925) 741-00-03',
            command: () => {
              this.callNumber('+79257410003');
            },
          },
          {
            label: 'Телефон: 8(495) 542-60-17',
            command: () => {
              this.callNumber('+74955426017');
            },
          },
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
        label: 'Анализы',
        icon: 'pi pi-fw pi-check-circle',
        routerLink: '/medical-tests',
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

  callNumber(phoneNumber: string) {
    window.location.href = 'tel:' + phoneNumber;
  }
}
